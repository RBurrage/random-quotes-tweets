$(document).ready(function(){      
    getRandomQuote();        
    
    function getRandomQuote(){
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
        var quote = $('.quote').text();
        var author = $('.author').text();
        $('#quote').text(randomQuote.quote);
        $('#author').text(randomQuote.author);

        $('button').click(function(){      
            getRandomQuote(); 
        }); 

        $('.tweet').click(function(){
            $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + randomQuote);
        });
    }
    
});