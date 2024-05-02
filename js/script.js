$(function() {
    var $portfolio = $('#portfolio');
    var $motopaddock = $('#motopaddock');
    var $modal = $('#modal');
    var $overlay = $('#overlay');

    // モーダルの表示と非表示を管理する関数
    function toggleModal(modalId) {
        $('body').toggleClass('overflow-hidden'); 
        $('.contents').addClass('hidden'); // すべてのモーダルを非表示にする
        $('#' + modalId + '_modal').removeClass('hidden'); // 対応するモーダルを表示する
        $modal.toggleClass('hidden');
        $overlay.toggleClass('hidden');
    }

    // ポートフォリオをクリックしたときの処理
    $('#portfolio').on('click', function () {
        toggleModal('portfolio');
    });

    // モトパドックをクリックしたときの処理
    $('#motopaddock').on('click', function () {
        toggleModal('motopaddock');
    });

    $modal.on('click', function(e) {
        if (e.target === $modal[0]) {
            $('body').removeClass('overflow-hidden');
            $modal.addClass('hidden');
            $overlay.addClass('hidden');
        }
    });

    $overlay.on('click', function () {
        $('body').removeClass('overflow-hidden');
        $modal.addClass('hidden');
        $overlay.addClass('hidden');
    });
});

function changeImage(src) {
    document.getElementById("mainImage").src = src;
}

// モトパドック用の画像を変更する関数
function changeMotopaddockImage(src) {
    document.getElementById("motopaddock_mainImage").src = src;
}
function closeModal() {
    console.log('test');
    $('body').removeClass('overflow-hidden');
    $('#modal').addClass('hidden');
    $('#overlay').addClass('hidden');
}