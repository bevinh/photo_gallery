(function () {
    'use strict';
    
    var images = [
        {
            "url": "/images/01.jpg", 
            "alttext": "Hay Bales",
            "figcaptiontext": "I love hay bales. Took this snap on a drive through the countryside past some straw fields"
        },
        {
            "url": "/images/02.jpg",
            "alttext": "Lake",
            "figcaptiontext": "The lake was so calm today. We had a great view of the snow on the mountains from here."
        },
        {
            "url": "/images/03.jpg",
            "alttext": "Canyon",
            "figcaptiontext": "I hided to the top of the mountain and got this picture of the canyon and trees below."
        },
        {
            "url": "/images/04.jpg",
            "alttext": "Iceberg",
            "figcaptiontext": "It was amazing to see an iceberg up close, it was so cold but didn't snow today."
        },
        {
            "url": "/images/05.jpg",
            "alttext": "Desert",
            "figcaptiontext": "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
        },
        {
            "url": "/images/06.jpg",
            "alttext": "Fall",
            "figcaptiontext": "Fall is coming, I love when the leaves on the trees start to change color."
        },
        {
            "url": "/images/07.jpg",
            "alttext": "Plantation",
            "figcaptiontext": "I drove past this plantation yesterday, everything is so green!"
        },
        {
            "url": "/images/08.jpg",
            "alttext": "Dunes",
            "figcaptiontext": "My summer vacation to the Oregon Coast. I love the sandy dunes!"
        },
        {
            "url": "/images/09.jpg",
            "alttext": "Countryside Lane",
            "figcaptiontext": "We enjoyed a quiet stroll down this countryside lane."
        },
        {
            "url" : "/images/10.jpg",
            "alttext": "Sunset",
            "figcaptiontext": "Sunset at the coast! The sky turned a lovely shade of orange."
        },
        {
            "url" : "/images/11.jpg",
            "alttext": "Cave",
            "figcaptiontext": "I did a tour of a cave today and the view of hte landscape below was breathtaking."
        },
        {
            "url": "/images/12.jpg",
            "alttext": "Bluebells",
            "figcaptiontext": "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
        }
        
    ];
        
   

    function populatePage() {
        //iterate over the json object
        for (var key in images) {
            //write the html
            $('#photos').append(
                "<figure id='" +
                key +
                "'><img src='" + 
               images[key].url + 
                "' alt='" + 
               images[key].alttext + 
                "'/><figcaption>" +
                images[key].figcaptiontext + 
                "</figcaption></figure>")
        };
    }
    populatePage();
    //keep the figcaptions but hide them so that they don't add extra space in the display
    $('figcaption').hide();
    
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
    
     //open the lightbox       
    function openLightbox(index){
        //append the lightbox, with the appropriate images
         $('#photos').append(
                    '<div id="lightbox" class="lightbox">' +
                    '<span class="close cursor">&times;</span>' +
                    '<div class="lightbox-content">' +
                    '<div class="slides">' + 
                    '<img src="' +
                    images[index].url +
                    '" alt="' +
                    images[index].alttext +
                    '"style="width:100%">' +
                    '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>' +
                    '<a class="next" onclick="plusSlides(1)">&#10095;</a>' +
                    '<div class="caption-container"><p id="caption">' +
                    images[index].figcaptiontext +
                    '</p></div></div>'
            );
        
        $('.close').on("click", function(){
         $("#lightbox").remove();
        });
    }
    
    //click action to open the lightbox
    $('figure').on("click", function(){
        var index = $(this).attr('id')
        openLightbox(index);
    })
    
}());
