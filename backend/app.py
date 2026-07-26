from flask import Flask, jsonify, request
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
 
@app.route("/employees", methods=["POST"])
def add_employee():

    data = request.get_json()

    name = data["name"]
    department = data["department"]

    conn = sqlite3.connect("../database/employees.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO employees (name, department) VALUES (?, ?)",
        (name, department)
    )

    conn.commit()

    conn.close()

    return jsonify({
        "message": "Employee added successfully!"
    }), 201

@app.route("/employees/<int:id>", methods=["DELETE"])
def delete_employee(id):

    conn = sqlite3.connect("../database/employees.db")

    cursor = conn.cursor()

    cursor.execute("DELETE FROM employees WHERE id = ?", (id,))

    conn.commit()

    conn.close()

    return jsonify({
        "message": "Employee deleted successfully!"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
