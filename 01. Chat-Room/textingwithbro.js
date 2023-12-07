$(() => {
    const chatInput = $("#chat_input");
    const sendButton = $("#send");
    const chatMessages = $("#chat_messages");
    
    sendButton.click(() => {
        const message = chatInput.val();
        const newMessage = $("<div></div>").addClass("my-message message").html(message);
        chatMessages.append(newMessage);
        chatInput.val("");
        newMessage.hide().fadeIn(500);
    });

    chatInput.keypress((e) => {
        if (e.which == 13) {
            const message = chatInput.val();
            const otherMessage = $(".other-message.message").last().clone();
            const newMessage = otherMessage.html(message);
            chatMessages.append(newMessage);
            chatInput.val("");
            newMessage.hide().fadeIn(500);
        }
    });
});