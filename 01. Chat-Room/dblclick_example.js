 sendButton.dblclick(() => {
        const message = chatInput.val();
        const myMessage = $(".my-message.message").first();
        const newMessage = myMessage.text(message);
        chatMessages.append(newMessage);
        chatInput.val("");
        newMessage.hide().fadeIn(500);
    });

    chatInput.keypress((event) => {
        if (event.which === 13) { 
            event.preventDefault();
        }
    });