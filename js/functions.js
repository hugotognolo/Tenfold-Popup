/* Popup Functions */

$(document).ready(function () {
    $(".icon-popup").hide();
    $(".icon-button").click(function () {
        $(".icon-popup").show('fast');
        $(".icon-button").hide();
    });
    $(".close-button").click(function () {
        $(".icon-popup").hide('fast');
        $(".icon-button").show();
    });
});