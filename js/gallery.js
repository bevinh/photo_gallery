(function () {
    'use strict';
    //get all the currently visible figures & figcaptions
    var visiblefigures = $('figure:visible'),
    figcaptions = $('figcaption');
   
    //hide all the figcaptions when the page loads
    $.each(figcaptions, function () {
        $(this).hide();
    });
    //hide all the close/previous/next buttons
    $('.close').hide();
    $('.prev').hide();
    $('.next').hide();
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
    function showLightBox(index) {
         //hide all the figures
        $('figure').hide();
        //show just the one you clicked
        console.log(index);
        $(index).show();
        $(index).children().show();
        //toggle the class on or off
        $(index).parent().toggleClass('lightbox');
        $('.lightbox').children().show();
        //show all the rest of the figures if you click off
        if (!$(index).parent().hasClass('lightbox')) {
            $('figure').show();
            $('figcaption').hide();
        }
        //hide the next and previous arrows if you only have one image filtered
       if (visiblefigures.length === 1) {
            $('.prev').hide();
            $('.next').hide();
       }
    }
    //check the input field for input, and search the alt and images to see if it's there
    $("input").keyup(function () {
        var inputText = $('input').val();
        searchString(inputText);
        //change the array of visible figures to return only the filtered results
        visiblefigures = $('figure:visible');
        
        visiblefigures.each(function(index) {
            $(this).on('click', function() {
                showLightBox(index)
            })
        })     
    });
    
    
    
    //lightbox show/hide
    $('figure').on('click', function () {
        var index = $(this);
        showLightBox(index); 
    });
    
    //Close function goes on div to remove lightbox if you click anywhere in it
    $('.close').on('click', function () {
        $(this).parent().removeClass('lightbox');
        $('figure').show();
        $('figcaption').hide();
        $('.close').hide();
        var inputText = $('input').val();
        searchString(inputText);
    });
    
}());
