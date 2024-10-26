import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import json

# Sample Data for regional_data (constant data)
regional_data = pd.DataFrame({
    'region_id': ['North', 'South', 'East', 'West'],
    'regional_preference': ['Books', 'Clothing', 'Groceries', 'Electronics']
})

# Step 1: Load consumer_data from JSON and preprocess
def load_consumer_data(json_path):
    try:
        # Load JSON data into DataFrame
        with open(json_path, 'r') as f:
            data = json.load(f)
        consumer_data = pd.DataFrame(data)
        # Verify that required columns are present
        required_columns = {'user_id', 'region_id', 'preferences', 'age', 'spending_score'}
        if not required_columns.issubset(consumer_data.columns):
            raise ValueError(f"JSON file must contain columns: {required_columns}")
        return consumer_data
    except Exception as e:
        print(f"Error loading consumer data: {e}")
        return None

# Step 2: Data Preprocessing and Label Encoding
def preprocess_data(consumer_data, regional_data):
    # Merging consumer data with regional data based on region_id
    combined_data = pd.merge(consumer_data, regional_data, on='region_id')
    
    # Encode categorical features for model training
    le_region = LabelEncoder()
    combined_data['region_id_encoded'] = le_region.fit_transform(combined_data['region_id'])
    
    le_preferences = LabelEncoder()
    combined_data['preferences_encoded'] = le_preferences.fit_transform(combined_data['preferences'])
    
    return combined_data, le_region, le_preferences

# Step 3: Build a Recommendation System Model
class RecommendationEngine:
    def __init__(self, data):
        self.data = data
        self.model = None

    def train_model(self):
        # Prepare features and labels for training
        X = self.data[['region_id_encoded', 'age', 'spending_score']]
        y = self.data['preferences_encoded']
        
        # Split data into train and test
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        # Train the model
        self.model = RandomForestClassifier()
        self.model.fit(X_train, y_train)

    def recommend(self, region_id_encoded):
        # Filter data for recommendations by encoded region ID
        recommendations = self.data[self.data['region_id_encoded'] == region_id_encoded]
        
        # Randomly select up to 2 recommendations with the encoded preferences
        recommendations = recommendations.sample(n=min(2, len(recommendations)))[['user_id', 'preferences_encoded']]
        
        return recommendations

# Step 4: Run the Recommendation Engine with User Input
def run_recommendation_engine():
    # Prompt user for JSON file path
    json_path = input("Enter the path to the consumer data JSON file: ").strip()
    consumer_data = load_consumer_data(json_path)
    
    if consumer_data is None:
        return  # Exit if loading consumer data failed
    
    # Preprocess data
    processed_data, le_region, le_preferences = preprocess_data(consumer_data, regional_data)
    
    rec_engine = RecommendationEngine(processed_data)
    rec_engine.train_model()
    
    # Get user input for region
    user_region = input("Enter the region (North, South, East, West): ").strip()
    
    # Check if the region is valid
    if user_region not in le_region.classes_:
        print("Invalid region. Please enter one of the following: North, South, East, West.")
        return None
    
    # Encode the input region to match model requirements
    region_id_encoded = le_region.transform([user_region])[0]
    recommendations = rec_engine.recommend(region_id_encoded)
    
    # Decode `preferences_encoded` back to original preference names
    recommendations['preferences'] = recommendations['preferences_encoded'].apply(lambda x: le_preferences.inverse_transform([x])[0])
    recommendations = recommendations[['user_id', 'preferences']]
    
    return recommendations

# Running the engine and printing recommendations based on user input
if __name__ == "__main__":
    recommendations = run_recommendation_engine()
    if recommendations is not None:
        print("Recommendations:\n", recommendations)
