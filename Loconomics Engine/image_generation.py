import openai

# Ensure you replace 'your_api_key' with your actual OpenAI API key
openai.api_key = 'sk-h4oDd_94PtC_X75741kp02R5i3-RI8COLgqr_vn690T3BlbkFJuUKQ3Fzdvik2PAjIG6DvoxBNTJld5RhTyCZVTmzAYA'

try:
    response = openai.Image.create(
        model="dall-e-3",
        prompt="a white siamese cat",
        size="1024x1024",
        n=1,  # Number of images to generate
        response_format="url"  # Return URL of the generated image
    )

    # Fetch the generated image URL
    image_url = response['data'][0]['url']
    print("Generated Image URL:", image_url)

except Exception as e:
    print("An error occurred:", e)
