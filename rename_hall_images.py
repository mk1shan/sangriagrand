import os

folder_path = r"src\images\hall"
files = sorted(os.listdir(folder_path))

for i, filename in enumerate(files):
    if filename.endswith(".jpg"):
        new_name = f"hall-{i+1}.jpg"
        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_name)
        try:
            os.rename(old_file, new_file)
            print(f"Renamed {filename} to {new_name}")
        except Exception as e:
            print(f"Error: {e}")
