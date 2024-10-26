import json
import random

# Define sample data ranges
regions = ["North", "South", "East", "West"]
preferences = ["Electronics", "Clothing", "Groceries", "Books", "Furniture", "Sports", "Beauty", "Toys"]
num_records = 1500  # Number of records to generate

# Generate data
data = [
    {
        "user_id": i,
        "region_id": random.choice(regions),
        "preferences": random.choice(preferences),
        "age": random.randint(18, 60),
        "spending_score": random.randint(1, 100)
    }
    for i in range(1, num_records + 1)
]

# Save to JSON file
with open('user_data.json', 'w') as f:
    json.dump(data, f, indent=4)

print("JSON file created successfully!")
