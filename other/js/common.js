$(document).ready(function() {

    $(".sp-menu-item, .menu-overlay a").click(function() {
        $(".menu-overlay, .sp-menu-item, body").toggleClass("change");
    });


    $(".collapsible").click(function() {
        // acodian click
        $(this).toggleClass("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px ";
        }
    });

});