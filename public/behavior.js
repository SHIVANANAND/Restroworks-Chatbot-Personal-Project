//chatbot toggle button functionality
const audio = new Audio("./assets/audio/chatbotButtonSound.mp3");
$(".chatbot-toggler").click(function() {
    $(".chatbot").toggle();
    audio.play();
})

//text area send message on click send button functionality
$(".chat-input span").click(function() {
    let userMessage = $(".chat-input textarea").val().trim();
    if(!userMessage) return;

    //add user <li> to chatbox
    $(".chatbox").append("<li class='chat outgoing'><p>" + userMessage +"</p></li>");

    //connect with backend and getting response without refreshing
    $.ajax({
        url: '/',
        type: 'POST',
        data: { userInput: userMessage },
        success: function(res) {

            let content = res.botResponse
            content = content.replace(/^### (.*)$/gm, "<b>$1</b>");
            content = content.replace(/^## (.*)$/gm, "<b>$1</b>");
            content = content.replace(/^# (.*)$/gm, "<b>$1</b>");
            content = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            content = content.replace(/\n/g, "<br>");
            
            //add bot <li> to chatbox
            $(".chatbox").append("<li class='chat ingoing'><p>" + content +"</p></li>");

            //prepend restroworks logo
            $(".chatbox .chat.ingoing:last-child").prepend("<span><img src='/assets/images/restroworks-icon.png' alt='Restroworks icon' height='40px'></span>");


            //clearing textarea text
            $(".chat-input textarea").val("");
        }
    });
       
})