(function () {
    'use strict';
    
    //hide all the figcaptions when the page loads
    var figcaptions = $('figcaption');
    $.each(figcaptions, function () {
        $(this).hide();
    });
    $('.close').hide();
    //function for finding the text in the figures
    function searchString(cap) {
        //Hide all the figures
        $('figure').hide();

        //set the cap to lower case 
        cap = cap.toLowerCase();

        //Get the figcaptions and the images
        var items = "figcaption:contains('" + cap + "')",
            imagealts = $("img");

        //Iterate through the items and show any that match the cap
        $(items).each(function (index) {
            $(this).parent().show();
        });

        //Iterate through the images and find all images with the attr specified
        $(imagealts).each(function (index) {
            var alttext = $(this).attr("alt").toLowerCase();
            if (alttext === cap) {
                $(this).parent().show();
            }
        });
    }
    
    //check the input field for input, and search the alt and images to see if it's there
    $("input").keyup(function () {
        var inputText = $('input').val();
        searchString(inputText);
    });
    
    //lightbox show/hide
    $('figure').on('click', function () {
        //hide all the figures
        $('figure').hide();
        //show just the one you clicked
        $(this).show();
        $(this).children().show();
        //toggle the class on or off
        $(this).parent().addClass('lightbox');
        $('.lightbox').children().show();
        //show all the rest of the figures if you click off
        if (!$(this).parent().hasClass('lightbox')) {
            $('figure').show();
            $('figcaption').hide();
        }
       
    });
    $('.close').on('click', function () {
        $(this).parent().removeClass('lightbox');
        $('figure').show();
        $('figcaption').hide();
        $('.close').hide();
        var inputText = $('input').val();
        searchString(inputText);
    });
}());
