$(document).ready(function(){
    function randomImage() {
        var num = String(Math.floor(Math.random()*5));
        if (Math.random() >= 0.5) {
            var type = "ninja";
        }
        else {
            var type = "cat";
        }
        return "images/" + type + num + ".png";
    };
    function nextImage(imgsrc) {
        if (imgsrc[7] == "n") {
            var imgnum = parseInt(imgsrc[12]);
            if (imgnum != 4) {
                imgnum++;
                return "images/ninja" + String(imgnum) + ".png";
            }
            else {
                return "images/cat0.png";
            }
        }
        else {
            var imgnum = parseInt(imgsrc[10]);
            if (imgnum != 4) {
                imgnum++;
                return "images/cat" + String(imgnum) + ".png";
            }
            else {
                return "images/ninja0.png";
            }
        }
    };
    var wincount = 0;
    $('img').click(function() {
        if ($('input:checked').val() == "Random") {
            $(this).fadeOut(200, function(){
                $(this).attr('src', randomImage());                
            });
        }
        else if ($('input:checked').val() == "Order") {
            $(this).fadeOut(200, function(){
            $(this).attr('src', nextImage($(this).attr('src')));     
            });    
        }
        else {
            alert("You need to select a game mode!");
        }
        $(this).fadeIn(200);
        if ($('img:first-of-type').attr('src') == "images/ninja0.png" && $('img:nth-of-type(2)').attr('src') == "images/ninja1.png" && $('img:nth-of-type(3)').attr('src') == "images/ninja2.png" && $('img:nth-of-type(4)').attr('src') == "images/ninja3.png" && $('img:last-of-type').attr('src') == "images/ninja4.png") {
            wincount++;
            $('p').text("Congratulations! You've won " + String(wincount) + " time(s) now!");
        }
        else if ($('img:first-of-type').attr('src') == "images/cat0.png" && $('img:nth-of-type(2)').attr('src') == "images/cat1.png" && $('img:nth-of-type(3)').attr('src') == "images/cat2.png" && $('img:nth-of-type(4)').attr('src') == "images/cat3.png" && $('img:last-of-type').attr('src') == "images/cat4.png") {
            wincount++;
            $('p').text("Congratulations! You've won " + String(wincount) + " time(s) now!");
        }
    });
});