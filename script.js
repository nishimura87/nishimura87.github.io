$(document).ready(function() {
    var $portfolio = $('#portfolio');
    var $modal = $('#modal');
    var $modalImage = $('#modalImage');
    var $overlay = $('#overlay');
    var $closeModalBtn = $('#closeModalBtn');

    $portfolio.on('click', function() {
        $modal.removeClass('hidden');
        $modalImage.attr('src', $portfolio.css('backgroundImage').replace(/url\(['"]?(.*?)['"]?\)/, '$1'));
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