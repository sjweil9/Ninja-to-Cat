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
    $('img').click(function() {
        $(this).attr('src', randomImage());
        if ($('img:first-of-type').attr('src') == "images/ninja0.png" && $('img:nth-of-type(2)').attr('src') == "images/ninja1.png" && $('img:nth-of-type(3)').attr('src') == "images/ninja2.png" && $('img:nth-of-type(4)').attr('src') == "images/ninja3.png" && $('img:last-of-type').attr('src') == "images/ninja4.png") {
            alert("Congratulations! You won!");
        }
        else if ($('img:first-of-type').attr('src') == "images/cat0.png" && $('img:nth-of-type(2)').attr('src') == "images/cat1.png" && $('img:nth-of-type(3)').attr('src') == "images/cat2.png" && $('img:nth-of-type(4)').attr('src') == "images/cat3.png" && $('img:last-of-type').attr('src') == "images/cat4.png") {
            alert("Congratulations! You won!");
        }
    });
});