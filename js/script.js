$(document).ready(function() {
    var $portfolio = $('#portfolio');
    var $modal = $('#modal');
    var $overlay = $('#overlay');
    var $closeModalBtn = $('#closeModalBtn');

    $portfolio.on('click', function() {
        $modal.removeClass('hidden');
        $overlay.removeClass('hidden');
    });

    $modal.on('click', function(e) {
        if (e.target === $modal[0]) {
            $modal.addClass('hidden');
            $overlay.addClass('hidden');
        }
    });

    $overlay.on('click', function() {
        $modal.addClass('hidden');
        $overlay.addClass('hidden');
    });

    $closeModalBtn.on('click', function() {
        $modal.addClass('hidden');
        $overlay.addClass('hidden');
    });
});

function changeImage(src) {
        document.getElementById("mainImage").src = src;
    }