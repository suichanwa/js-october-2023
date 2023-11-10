$.getScript("singleClickPlugin.js", function () {
    console.log("singleClickPlugin.js loaded");
});

$(() => {
    const chatInput = $("#chat_input");
    const sendButton = $("#send");
    const chatMessages = $("#chat_messages");

    sendButton.on('singleclick', () => {
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
            const newMessage = otherMessage.html(message);
            chatMessages.append(newMessage);
            chatInput.val("");
            newMessage.hide().fadeIn(500);
    });
});
