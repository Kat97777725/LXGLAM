// Update the form submission function to send to Telegram bot
const fs = require('fs');

// Read the booking.html file
let content = fs.readFileSync('netlify-deploy/booking.html', 'utf8');

// Replace the form submission function
const newFormFunction = `        // Setup booking form
        function setupBookingForm() {
            document.getElementById('bookingForm').addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const formData = {
                     master: window.selectedMaster || 'LXGLAM Beauty Master',
                    name: document.getElementById('clientName').value,
                     dateTime: document.getElementById('bookingDateTime').value,
                     phone: document.getElementById('clientPhone').value,
                     serviceRequested: document.getElementById('serviceRequested').value,
                     additionalNotes: document.getElementById('additionalNotes').value
                 };

                 // Validate required fields
                 if (!formData.name || !formData.phone) {
                     alert('Please fill in all required fields (Name and Phone Number).');
                     return;
                 }

                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                try {
                    // Send to Telegram bot via serverless function
                    const response = await fetch('/.netlify/functions/send-booking', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData)
                    });

                    const result = await response.json();

                    if (response.ok) {
                        alert(\`✅ Booking request sent successfully!\n\nMaster: \${formData.master}\nClient: \${formData.name}\n\nWe'll contact you soon to confirm your appointment.\`);
                    } else {
                        throw new Error(result.error || 'Failed to send booking request');
                    }
                } catch (error) {
                    console.error('Error sending booking request:', error);
                    alert(\`❌ Error sending booking request. Please try again or contact us directly.\n\nError: \${error.message}\`);
                } finally {
                    // Reset button state
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
                
                // Close modal and reset form
                closeModal();
                this.reset();
            });

             // Set minimum datetime to now
             const now = new Date();
             now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
             document.getElementById('bookingDateTime').min = now.toISOString().slice(0, 16);
        }`;

// Replace the old function with the new one
content = content.replace(/        \/\/ Setup booking form[\s\S]*?        }/, newFormFunction);

// Write the updated content back
fs.writeFileSync('netlify-deploy/booking.html', content);

console.log('Form submission function updated successfully!');
