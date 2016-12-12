$(document).ready(function(){    
    var quote = $('.quote').text();
    var author = $('.author').text();
    
    $('.tweet').click(function(){        
        alert("Tweet it!");        
    });    

    $('button').click(function(){      
        var changeQuote = function () { 
            var randomQuote = quotes[Math.floor(Math.random() * 5)];               
            //quoteContainer.innerHTML = randomQuote.quote;             
            //authorContainer.innerHTML = randomQuote.author; 
            $('#quote').text(randomQuote.quote);
            $('#author').text(randomQuote.author);
        };        
        changeQuote();   
    });    
});