// Telegram integration for LXGLAM booking form
async function sendToTelegram(formData) {
    try {
        const message = `🎯 *New LXGLAM Booking Request*

👤 *Client:* ${formData.name}
📞 *Phone:* ${formData.phone}
👨‍💼 *Master:* ${formData.master}
💅 *Service:* ${formData.serviceRequested || "Not specified"}
📅 *Date & Time:* ${formData.dateTime ? new Date(formData.dateTime).toLocaleString() : "Flexible"}
📝 *Notes:* ${formData.additionalNotes || "None"}

Please contact the client to confirm the appointment.`;

        const response = await fetch("https://api.telegram.org/bot8466676132:AAHi1-a_KbTrk1KRP90I1iT6Ip4UBLRxUmg/sendMessage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: "5268028095",
                text: message,
                parse_mode: "Markdown"
            })
        });

        if (response.ok) {
            return { success: true, message: "Booking request sent to Telegram!" };
        } else {
            throw new Error("Failed to send to Telegram");
        }
    } catch (error) {
        console.error("Telegram error:", error);
        throw error;
    }
}
