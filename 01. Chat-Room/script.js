

$(() => {
    const chatInput = $("#chat_input");
    const sendButton = $("#send");
    const chatMessages = $("#chat_messages");

    sendButton.click(() => {
        const message = chatInput.val();
        const myMessage = $(".my-message.message").first();
        const newMessage = myMessage.text(message);
        chatMessages.append(newMessage);
        chatInput.val("");
        newMessage.hide().fadeIn(500);
    });

    sendButton.dblclick(() => {
        const message = chatInput.val();
        const otherMessage = $(".other-message.message").first();

        if (otherMessage.length > 0) {
            const newMessage = otherMessage.clone().html(message);
            chatMessages.append(newMessage);
            chatInput.val("");

            setTimeout(() => {
                newMessage.hide().fadeIn(500);
            }, 500);
        }
    });
});
