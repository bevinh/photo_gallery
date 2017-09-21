(function () {
    'use strict';
    
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
}());
