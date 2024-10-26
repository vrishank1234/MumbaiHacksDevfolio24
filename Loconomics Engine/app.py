from flask import Flask, request, jsonify, render_template
import pandas as pd
from recommendation_engine import load_consumer_data, preprocess_data, RecommendationEngine

app = Flask(__name__)

# Sample Data for regional_data (constant data)
regional_data = pd.DataFrame({
    'region_id': ['North', 'South', 'East', 'West'],
    'regional_preference': ['Books', 'Clothing', 'Groceries', 'Electronics']
})

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    # Check if the request contains the necessary files and form data
    if 'json_file' not in request.files or 'region' not in request.form:
        return jsonify({"error": "Missing 'json_file' or 'region' in the request."}), 400

    # Get JSON file path and region from the POST request
    json_file = request.files['json_file']
    region = request.form['region']
    
    # Load and preprocess consumer data
    consumer_data = load_consumer_data(json_file)
    if consumer_data is None:
        return jsonify({"error": "Failed to load consumer data."}), 400

    processed_data, le_region, le_preferences = preprocess_data(consumer_data, regional_data)
    
    # Initialize and train the recommendation engine
    rec_engine = RecommendationEngine(processed_data)
    rec_engine.train_model()
    
    # Check if region is valid
    if region not in le_region.classes_:
        return jsonify({"error": "Invalid region provided."}), 400
    
    # Get recommendations
    region_id_encoded = le_region.transform([region])[0]
    recommendations = rec_engine.recommend(region_id_encoded)
    
    # Decode preferences
    recommendations['preferences'] = recommendations['preferences_encoded'].apply(lambda x: le_preferences.inverse_transform([x])[0])
    recommendations = recommendations[['user_id', 'preferences']].to_dict(orient='records')
    
    return jsonify(recommendations)



if __name__ == '__main__':
    # Run in debug mode only during development
    app.run(debug=True)
