jQuery(document).click(function() {

});

jQuery('.navbar').click(function(event) {
    jQuery(".navbar-collapse").collapse('hide');
    event.stopPropagation();
});