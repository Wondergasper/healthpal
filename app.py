# app.py
from flask import Flask, request
import requests

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'your-secret-key-here'

# WhatsApp API credentials (replace with your own)
WHATSAPP_TOKEN = 'your_access_token_here'
PHONE_NUMBER_ID = 'your_phone_number_id_here'

@app.route('/')
def home():
    return "Healthcare WhatsApp Chatbot is running!"

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.get_json()
    # Extract message details (adjust based on WhatsApp payload)
    if data and 'messages' in data['entry'][0]['changes'][0]['value']:
        message = data['entry'][0]['changes'][0]['value']['messages'][0]['text']['body']
        phone_number = data['entry'][0]['changes'][0]['value']['messages'][0]['from']
        print(f"Received message from {phone_number}: {message}")
        # Temporary response
        response = "Hello! I’m your healthcare assistant. How can I help?"
        send_whatsapp_message(phone_number, response)
    return 'OK', 200

def send_whatsapp_message(phone_number, message):
    url = f"https://graph.facebook.com/v13.0/{PHONE_NUMBER_ID}/messages"
    headers = {
        'Authorization': f'Bearer {WHATSAPP_TOKEN}',
        'Content-Type': 'application/json'
    }
    payload = {
        'messaging_product': 'whatsapp',
        'to': phone_number,
        'type': 'text',
        'text': {'body': message}
    }
    response = requests.post(url, headers=headers, json=payload)
    print(f"Sent response: {response.json()}")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)