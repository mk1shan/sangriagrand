from PIL import Image
import os

image_path = r"src\images\happy-brides-2026-01-06-08-45-52-utc.jpg"
output_path = r"src\images\hero-optimized.webp"

try:
    if not os.path.exists(os.path.dirname(output_path)):
        os.makedirs(os.path.dirname(output_path))
        
    with Image.open(image_path) as img:
        # Resize to max width 1920, maintaining aspect ratio
        base_width = 1920
        if img.size[0] > base_width:
            w_percent = (base_width / float(img.size[0]))
            h_size = int((float(img.size[1]) * float(w_percent)))
            img = img.resize((base_width, h_size), Image.Resampling.LANCZOS)
            print(f"Resized image to {base_width}x{h_size}")
        else:
            print("Image width is already less than or equal to 1920px")
        
        # Save as WebP with 80 quality
        img.save(output_path, "WEBP", quality=80)
        print(f"Successfully optimized image and saved to {output_path}")
        
        original_size = os.path.getsize(image_path)
        new_size = os.path.getsize(output_path)
        print(f"Original size: {original_size / (1024*1024):.2f} MB")
        print(f"New size: {new_size / (1024*1024):.2f} MB")
        print(f"Reduction: {(1 - new_size/original_size)*100:.1f}%")

except Exception as e:
    print(f"Error optimizing image: {e}")
