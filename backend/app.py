from flask import Flask, request, jsonify
from flask_cors import CORS   # ✅ ADD THIS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # ✅ ENABLE CORS

model = pickle.load(open("knn_model.pkl", "rb"))

@app.route("/")
def home():
    return "🚀 Microplastic API Running!"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    features = [
        data["ph"],
        data["Hardness"],
        data["Solids"],
        data["Chloramines"],
        data["Sulfate"],
        data["Conductivity"],
        data["Organic_carbon"],
        data["Trihalomethanes"],
        data["Turbidity"]
    ]

    features = np.array(features).reshape(1, -1)

    prediction = model.predict(features)[0]

    labels = ["LOW", "MEDIUM", "HIGH"]

    return jsonify({"prediction": labels[prediction]})

if __name__ == "__main__":
    app.run(debug=True)