
// 線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime() {
  $('.timeline li').each(function () { // それぞれの li 要素
    var elemPos = $(this).offset().top;      // 要素の位置
    var scroll = $(window).scrollTop();      // スクロール量
    var windowHeight = $(window).height();   // 画面の高さ
    var startPoint = 200;                    // 少し手前からスタート

    if (scroll >= elemPos - windowHeight - startPoint) {
      var H = $(this).outerHeight(true); // li の高さ＋余白
      var percent = (scroll + startPoint - elemPos) / (H / 2) * 100;

      // 100% を超えないように
      if (percent > 100) {
        percent = 100;
      }

      // ボーダーの長さをセット（％で指定）
      $(this).children('.border-line').css({
        height: percent + '%'
      });
    }
  });
}

// スクロールしたら動かす
$(window).on('scroll', function () {
  ScrollTimelineAnime();
});

// ページ読み込み時にも一度チェック
$(window).on('load', function () {
  ScrollTimelineAnime();
});




// トップへ戻るボタン
$(function () {
  const $pageTop = $('.pagetop');

  // スクロールしたら表示・非表示
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $pageTop.addClass('is-show');
    } else {
      $pageTop.removeClass('is-show');
    }
  });

  // クリックでページ最上部へスクロール
  $pageTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  });
});