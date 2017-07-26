/*global $*/
$(document).ready(function () {
    
    'use strict';
    var text   = $("#quote-text"),
        author = $("#author");
    getQuote(text, author);


    $("#getquote").click(function (e) {
        getQuote(text, author);
        $("#tweet").removeClass("disabled");
        $("#tweet").html("Tweet Out");
    });

    var tweetText = "";
    $("#tweet").click(function(){
        if(tweetText.length > 140) {
            tweetText = "";
            $(this).addClass("disabled");
            $(this).html("Sorry, the quote must not exceed 140 character !");
        } else {
            $(this).attr("href", "https://twitter.com/intent/tweet?text=" + tweetText);
        }
    })

    function getQuote(text, author) {
        
        var forismaticURL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        $.getJSON(forismaticURL, function (data) {
            text.html(data.quoteText);
            if (data.quoteAuthor) {
                author.html(data.quoteAuthor);
            } else {
                author.html("<strong>Anonymous</strong>");
            }
            tweetText = data.quoteText + "By -" + data.quoteAuthor;
        });
    }
    function color() {
        
    }
});