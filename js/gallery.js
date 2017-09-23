(function () {
    'use strict';
    var slides = [],
        newImages = [],
        images = [
        {
            "id" : "01",
            "url": "/images/01.jpg", 
            "alttext": "Hay Bales",
            "figcaptiontext": "I love hay bales. Took this snap on a drive through the countryside past some straw fields"
        },
        {
            "id" : "02",
            "url": "/images/02.jpg",
            "alttext": "Lake",
            "figcaptiontext": "The lake was so calm today. We had a great view of the snow on the mountains from here."
        },
        {
            "id" : "03",
            "url": "/images/03.jpg",
            "alttext": "Canyon",
            "figcaptiontext": "I hided to the top of the mountain and got this picture of the canyon and trees below."
        },
        {
            "id" : "04",
            "url": "/images/04.jpg",
            "alttext": "Iceberg",
            "figcaptiontext": "It was amazing to see an iceberg up close, it was so cold but didn't snow today."
        },
        {
            "id" : "05",
            "url": "/images/05.jpg",
            "alttext": "Desert",
            "figcaptiontext": "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
        },
        {
            "id" : "06",
            "url": "/images/06.jpg",
            "alttext": "Fall",
            "figcaptiontext": "Fall is coming, I love when the leaves on the trees start to change color."
        },
        {
            "id" : "07",
            "url": "/images/07.jpg",
            "alttext": "Plantation",
            "figcaptiontext": "I drove past this plantation yesterday, everything is so green!"
        },
        {
            "id" : "08",
            "url": "/images/08.jpg",
            "alttext": "Dunes",
            "figcaptiontext": "My summer vacation to the Oregon Coast. I love the sandy dunes!"
        },
        {
            "id" : "09",
            "url": "/images/09.jpg",
            "alttext": "Countryside Lane",
            "figcaptiontext": "We enjoyed a quiet stroll down this countryside lane."
        },
        {
            "id" : "10",
            "url" : "/images/10.jpg",
            "alttext": "Sunset",
            "figcaptiontext": "Sunset at the coast! The sky turned a lovely shade of orange."
        },
        {
            "id" : "11",
            "url" : "/images/11.jpg",
            "alttext": "Cave",
            "figcaptiontext": "I did a tour of a cave today and the view of hte landscape below was breathtaking."
        },
        {
            "id" : "12",
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
                images[key].id +
                "'><img src='" + 
               images[key].url + 
                "' alt='" + 
               images[key].alttext + 
                "'/><figcaption>" +
                images[key].figcaptiontext + 
                "</figcaption></figure>")
        };
    }
    populatePage(images);
    //keep the figcaptions but hide them so that they don't add extra space in the display
    $('figcaption').hide();
     
    function filterImages(){
        slides = $.unique(slides);
        
        function findImages(item, index){
             for(var i in images) { 
                  var image = images[i];
                  if (image.id === item){
                   newImages.push({
                        "id" : image.id,
                        "url" : image.url,
                        "alttext"  : image.alttext,
                        "figcaptiontext"  : image.figcaptiontext
                    }); 
                    }
             }
           
                   
            }
                slides.forEach(findImages) 
                var unique = newImages.filter(function(itm, i, a) {
                return i == a.indexOf(itm);
                });

                console.log(unique);
                
    }
    
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
            slides.push($(this).parent().attr('id'))
        });

        //Iterate through the images and find all images with the attr specified
        $(imagealts).each(function (index) {
            var alttext = $(this).attr("alt").toLowerCase();
            if (alttext === cap) {
                $(this).parent().show();
                slides.push($(this).parent().attr('id'))
            }
        });
        filterImages()
    }
     
   
     //check the input field for input, and search the alt and images to see if it's there
    $("input").keyup(function () {
        var inputText = $('input').val();
        searchString(inputText);
    });
    
     //open the lightbox       
    function openLightbox(index){
        //find the image that matches the index
        var image = images.find(image => image.id === index);
        //append the lightbox, with the appropriate images
         $('#photos').append(
                    '<div id="lightbox" class="lightbox">' +
                    '<span class="close cursor">&times;</span>' +
                    '<div class="lightbox-content">' +
                    '<div class="slides">' + 
                    '<img src="' +
                    image.url +
                    '" alt="' +
                    image.alttext +
                    '"style="width:100%">' +
                    '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>' +
                    '<a class="next" onclick="plusSlides(1)">&#10095;</a>' +
                    '<div class="caption-container"><p id="caption">' +
                    image.figcaptiontext +
                    '</p></div></div>'
            );
        //close action to remove the lightbox once it is opened
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
