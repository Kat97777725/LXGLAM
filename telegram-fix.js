// Telegram integration function using serverless function
async function sendToTelegram(formData) {
    try {
        const response = await fetch("/.netlify/functions/send-booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const result = await response.json();
            return { success: true, message: result.message };
        } else {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to send to Telegram");
        }
    } catch (error) {
        console.error("Telegram error:", error);
        throw error;
    }
}
