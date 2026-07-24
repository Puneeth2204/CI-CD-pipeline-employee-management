from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "application": "Employee Management API",
        "version": "1.0",
        "status": "Running"
    })

@app.route("/employees")
def get_employees():

    conn = sqlite3.connect("../database/employees.db")

    conn.row_factory = sqlite3.Row

    cursor = conn.cursor()

    cursor.execute("SELECT * FROM employees")

    employees = cursor.fetchall()

    conn.close()

    return jsonify([dict(employee) for employee in employees])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
