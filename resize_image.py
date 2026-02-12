from PIL import Image
import os

image_path = r"src\images\about-venue-2.jpg"
output_path = r"src\images\about-venue-2-optimized.jpg"

try:
    with Image.open(image_path) as img:
        # Resize to max width 1920, maintaining aspect ratio
        base_width = 1920
        w_percent = (base_width / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        img = img.resize((base_width, h_size), Image.Resampling.LANCZOS)
        
        # Save as JPEG with 85 quality
        img.save(output_path, "JPEG", quality=85)
        print(f"Successfully resized image to {base_width}x{h_size}")
except Exception as e:
    print(f"Error resizing image: {e}")
