import sys
import os

try:
    from PIL import Image
except ImportError:
    import subprocess
    print("Installing Pillow...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow", "--quiet"])
    from PIL import Image

def make_transparent(input_path, output_path, tolerance=30):
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return
        
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    # Get color of top-left pixel assuming it's the background
    bg_color = data[0]
    
    new_data = []
    for item in data:
        # Check if pixel is close to bg_color
        if abs(item[0] - bg_color[0]) < tolerance and \
           abs(item[1] - bg_color[1]) < tolerance and \
           abs(item[2] - bg_color[2]) < tolerance:
            # Replace with transparent pixel
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Successfully saved transparent logo to {output_path}")

if __name__ == "__main__":
    make_transparent("src/assets/logo.png", "src/assets/logo_transparent.png", tolerance=50)
