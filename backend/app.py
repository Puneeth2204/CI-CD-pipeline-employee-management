from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

employees = [
    {
        "id": 1,
        "name": "Alice",
        "department": "HR"
    },
    {
        "id": 2,
        "name": "Bob",
        "department": "Engineering"
    },
    {
        "id": 3,
        "name": "Charlie",
        "department": "Finance"
    }
]

@app.route("/")
def home():
    return jsonify({
        "application": "Employee Management API",
        "version": "1.0",
        "status": "Running"
    })

@app.route("/employees")
def get_employees():
    return jsonify(employees)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
