import requests
from bs4 import BeautifulSoup
from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import logging

app = Flask(__name__)
CORS(app)
model = load_model("tumor_model.keras")
class_names = ['Glioma', 'Meningioma', 'no tumor', 'Pituitary']

# Configure logging
logging.basicConfig(level=logging.DEBUG)

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        logging.error("No file part in the request")
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]
    if file.filename == "":
        logging.error("No selected file")
        return jsonify({"error": "No selected file"}), 400

    try:
        logging.info("Reading the image file")
        image = Image.open(file).convert('RGB')  # Ensure image is in RGB format
        image = image.resize((256, 256))
        image = np.array(image)
        logging.debug(f"Image shape after conversion: {image.shape}")
        
        if image.shape != (256, 256, 3):
            logging.error(f"Unexpected image shape: {image.shape}")
            return jsonify({"error": "Unexpected image shape"}), 400
        
        image = image / 255.0  # Normalize the image
        
        # Add a batch dimension and make prediction
        logging.info("Making prediction")
        prediction = model.predict(image[np.newaxis, ...])
        predicted_class = class_names[np.argmax(prediction)]

        logging.info(f"Predicted class: {predicted_class}")
        return jsonify({"prediction": predicted_class})
    
    except Exception as e:
        logging.exception("Error processing the image")
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
