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
    });
});