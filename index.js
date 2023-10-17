// Import the Twilio package
const twilio = require('twilio');

// Import the 'dotenv' package to load environment variables from a .env file
require('dotenv').config();

// Define an asynchronous function to send an SMS message
async function sendSMS(message, to) {
    try {
        // Create a Twilio client using environment variables
        const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

        // Send the SMS message and store the message info in 'messageInfo'
        const messageInfo = await client.messages.create({
            body: message,         // The message content
            from: process.env.FROM, // Your Twilio phone number (sender)
            to                   // The recipient's phone number
        });

        // Return the message info
        return messageInfo;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error:', error);
    }
}

// An immediately invoked function expression (IIFE) to send an SMS and log the result
(async () => {
    // Call the 'sendSMS' function to send an SMS message
    const messageInfo = await sendSMS('Coding with ado', '+19548608396');

    // Log the message info (this will include the message SID, etc.)
    console.log(messageInfo);
})();
