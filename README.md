Microplastic Detection using Machine Learning
Project Overview

This project presents a machine learning-based system for predicting water contamination levels using physicochemical parameters. The system is designed to simulate detection of microplastic-related contamination using indirect indicators such as pH, turbidity, dissolved solids, and organic content.

The goal is to provide a scalable, low-cost, and fast alternative to traditional laboratory-based water testing methods.

Problem Statement

Microplastics are a growing environmental concern. They are:

Not visible to the naked eye
Difficult to detect without specialized equipment
Harmful to ecosystems and human health

Traditional detection methods:

Require laboratory analysis
Are expensive and time-consuming
Not suitable for real-time monitoring
Proposed Solution

This project uses machine learning to predict contamination levels based on measurable water quality parameters.

Input:

pH
Hardness
Total dissolved solids
Chloramines
Sulfate
Conductivity
Organic carbon
Trihalomethanes
Turbidity

Output:

Water contamination classification (Potability / Microplastic indicator)


Methodology
Data Collection

Raw dataset is stored in:
data/raw/water_potability.xlsx

Data Preprocessing
Handling missing values
Feature cleaning and normalization
Stored in:
data/preprocessed/final_data.xlsx
Feature Selection

Relevant chemical and physical parameters are selected as input features.

Model Selection

K-Nearest Neighbors (KNN) is used for training.

Reason:

Works well with structured tabular data
Distance-based learning suits normalized chemical parameters
Simple and interpretable
Model Training
Dataset split into training and testing sets
StandardScaler applied for normalization
KNN model trained using optimized neighbors
Model Evaluation
Accuracy score
Confusion matrix
Classification report
Model Output
Binary classification:
0 → Safe water
1 → Contaminated water
System Workflow
Load dataset from raw folder
Preprocess and clean data
Select features and target
Apply scaling
Train KNN model
Evaluate performance
Save trained model for deployment
Use model in backend/frontend for prediction
Technologies Used
Python
Pandas
NumPy
Scikit-learn
Matplotlib
Seaborn
Pickle / Joblib
Installation Requirements

Install the following packages:

pip install pandas
pip install numpy
pip install scikit-learn
pip install matplotlib
pip install seaborn
pip install openpyxl
pip install joblib

How to Run the Project
Step 1: Navigate to Project Directory

cd C:\BasicML_Microplastic

Step 2: Open Jupyter Notebook

cd Model_code
jupyter notebook

Open:
MODEL.ipynb

Step 3: Execute Notebook

Run all cells sequentially to:

Load data
Train KNN model
Evaluate results
Generate model file
Step 4: Model Output

After execution:

Trained model is saved as .pkl file
Scaler is saved for prediction pipeline
Step 5: Integration

Backend:

Load model using pickle
Accept input parameters
Scale input
Predict output

Frontend:

Collect user input
Send to backend
Display prediction result
How It Works (Technical Explanation)

The system uses a distance-based learning algorithm:

Each new input is compared with training samples
Nearest neighbors are identified using Euclidean distance
Majority class among neighbors determines prediction

Scaling ensures:

Equal importance to all features
Accurate distance computation
Key Advantages
Low-cost solution
Fast prediction
No need for lab testing
Scalable for real-time applications
Limitations
Indirect prediction (not actual microplastic measurement)
Accuracy depends on dataset quality
Sensitive to feature scaling
Future Enhancements
Multi-class classification (Low / Medium / High contamination)
Integration with IoT sensors
Real-time monitoring system
Advanced models (Random Forest, XGBoost)
Deployment using web APIs
Conclusion

This project demonstrates how machine learning can be used to approximate environmental risks such as microplastic contamination using easily measurable parameters. It provides a practical and scalable approach for early detection and monitoring.
