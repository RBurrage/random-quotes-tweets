$(document).ready(function(){ 
    changeQuote();
    
    //generate random quote
    function changeQuote(){
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];         
        $('#quote').text(randomQuote.quote);
        $('#author').text(randomQuote.author); 
    }

    //show random quote on button click
    $('button').click(function(){      
        changeQuote(); 
    });
    
});

        
    //tweet random quote
    $('.share-on-twitter').click(function(){
        $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + randomQuote);
    });   