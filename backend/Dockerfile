FROM python:3.12-slim

WORKDIR /app

COPY backend/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .

COPY database/ ./database/

EXPOSE 5000

CMD ["python", "app.py"]
