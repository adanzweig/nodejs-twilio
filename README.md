# SMS Messaging with Twilio and Node.js

This is a simple Node.js application that demonstrates how to send SMS messages using Twilio.

## Prerequisites

Before running this application, make sure you have the following:

- Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).
- A Twilio account. You can sign up for free at [twilio.com/try-twilio](https://www.twilio.com/try-twilio).
- Twilio Account SID, Auth Token, and a Twilio phone number.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/adanzweig/nodejs-twilio.git
   ```

2. Change into the project directory:

   ```bash
   cd nodejs-twilio
   ```

3. Install the required dependencies using npm:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and set the following environment variables:

   ```
   ACCOUNT_SID=YOUR_TWILIO_ACCOUNT_SID
   AUTH_TOKEN=YOUR_TWILIO_AUTH_TOKEN
   FROM=YOUR_TWILIO_PHONE_NUMBER
   ```

   Replace `YOUR_TWILIO_ACCOUNT_SID`, `YOUR_TWILIO_AUTH_TOKEN`, and `YOUR_TWILIO_PHONE_NUMBER` with your actual Twilio credentials.

## Usage

You can use the provided `index.js` script to send an SMS message. Customize the message and recipient's phone number as needed.

```bash
node index.js
```

## Acknowledgments

- [Twilio](https://www.twilio.com/) for their excellent API and documentation.