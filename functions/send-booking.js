exports.handler = async (event, context) => {
    console.log('Function called with method:', event.httpMethod);
    console.log('Event body:', event.body);
    
    // Handle CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };
    
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }
    
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
    }
    
    try {
        const data = JSON.parse(event.body);
        console.log('Parsed data:', data);
        
        const botToken = '8466676132:AAHi1-a_KbTrk1KRP90I1iT6Ip4UBLRxUmg';
        const chatId = '5268028095';
        
        const message = `🎯 *New LXGLAM Booking Request*

👤 *Client:* ${data.name}
📞 *Phone:* ${data.phone}
👨‍💼 *Master:* ${data.master}
💅 *Service:* ${data.serviceRequested || 'Not specified'}
📅 *Date & Time:* ${data.dateTime ? new Date(data.dateTime).toLocaleString() : 'Flexible'}
📝 *Notes:* ${data.additionalNotes || 'None'}

Please contact the client to confirm the appointment.`;

        console.log('Sending message to Telegram...');
        
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown'
            })
        });
        
        console.log('Telegram response status:', response.status);
        
        if (response.ok) {
            console.log('Message sent successfully');
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: true, message: 'Booking request sent to admin!' })
            };
        } else {
            const errorData = await response.json();
            console.error('Telegram API error:', errorData);
            throw new Error(errorData.description || 'Failed to send message to Telegram');
        }
    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message, success: false })
        };
    }
};
