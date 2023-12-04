const button = document.getElementById('Register button');
const messagesEl = document.getElementById('messages');

button.addEventListener('click', () => {
    // Define your messages and time to disappear (in milliseconds)
    const messages = [
        { message: 'Submitted.', duration: 900 }
    ];

    // Clear existing messages and create new ones
    messagesEl.innerHTML = '';
    messages.forEach(message => {
        const messageEl = document.createElement('p');
        messageEl.textContent = message.message;
        messagesEl.appendChild(messageEl);

        // Set a timer to hide the message after its duration
        setTimeout(() => messageEl.style.display = 'none', message.duration);
    });
});