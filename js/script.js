$('.slider').slick({
  fade:false,//切り替えをフェードで行う。初期値はfalse。
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
  speed:1000,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  pauseOnFocus: false,//フォーカスで一時停止を無効
  pauseOnHover: false,//マウスホバーで一時停止を無効
  pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  draggable: true,
  swipe: true,
});


// ================================
// 活動紹介ギャラリー（Splide版：横流れスライダー）
// ================================
document.addEventListener('DOMContentLoaded', function () {
  const activitiesSlider = document.querySelector('.activities-slider');
  
  if (activitiesSlider) {
    new Splide(activitiesSlider, {
      type   : 'loop',       // 無限ループさせる
      drag   : 'free',       // スワイプした分だけ自由に動かす
      perPage: 4,            // PCでの表示枚数
      gap    : '20px',       // 写真と写真の間の隙間（PC）
      arrows : false,        // 矢印非表示
      pagination: false,     // 下のドット非表示
      breakpoints: {
        769: { 
          perPage: 2, 
          gap: '15px'        // タブレットでの隙間
        },
        426: { 
          perPage: 1.5, 
          gap: '10px'        // スマホでの隙間
        },
      },
      autoScroll: {
        speed: 1,              // 流れる速度（数値を上げると速くなります）
        pauseOnHover: true,    // マウスホバーで一時停止
        pauseOnFocus: true,    // タップで一時停止
      },
    }).mount( window.splide.Extensions );

    // ★追加：画像の拡大表示（モーダル）用のJavaScript
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');

    // スライダー内の各画像に対してクリックイベントを設定
    const images = activitiesSlider.querySelectorAll('.splide__slide img');
    images.forEach(img => {
      img.addEventListener('click', function () {
        modal.style.display = 'block'; // モーダルを表示
        modalImg.src = this.src;      // クリックされた画像のsrcを設定
        modalImg.alt = this.alt;      // altも設定
      });
    });

    // 閉じるボタン（×）をクリックしたとき、モーダルを閉じる
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // モーダルの背景（オーバーレイ）をクリックしたとき、モーダルを閉じる
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target === modal.querySelector('.modal-content')) {
        modal.style.display = 'none';
      }
    });

    // エスケープキーを押したとき、モーダルを閉じる
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
      }
    });
  }
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