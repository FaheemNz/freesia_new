from PIL import Image
import os

def optimize_images(folder_path, output_folder):
    # Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Loop through all files in the input folder
    for filename in os.listdir(folder_path):
        input_path = os.path.join(folder_path, filename)
        
        # Check if the file is an image
        if os.path.isfile(input_path) and filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            # Open the image
            with Image.open(input_path) as img:
                # Optimize and resize the image
                img.thumbnail(img.size)  # Resize without changing aspect ratio
                img.save(os.path.join(output_folder, filename), optimize=True)  # Optimize and save
                
                print(f"Optimized and saved {filename}")

# Provide the path to the folder containing images
input_folder = "public/images"
# Provide the path to the folder where you want to save optimized images
output_folder = "public/images_optimized"

# Call the function to optimize images
optimize_images(input_folder, output_folder)
