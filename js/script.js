//--------------------------------------------------------------
// 要素のフェードイン
//--------------------------------------------------------------
   $(window).on('load scroll', function() {
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + (winHeight * 0.8);

    $(".show").each(function() {
       if($(this).offset().top < scrollPos) {
          $(this).css({opacity: 1, transform: 'translate(0, 0)'});
       }
    });
 });

//--------------------------------------------------------------
// スムーススクロール
//-------------------------------------------------------------- 

  $("a[href*=#]:not([href=#])").click(function(){
    // 移動先のコンテンツの位置を取得
    var target = $($(this).attr("href")).offset().top;

    //ヘッダーの分の高さ調整
    target -= 70;

    // コンテンツへスクロール
    $("html, body").animate({scrollTop : target}, 500);

    return false;

});


//--------------------------------------------------------------
// よくある質問 アコーディオンパネル
//--------------------------------------------------------------
$(function () {
    $('.ac-parent').on('click', function () {
    $(this).next().slideToggle();
  });
});

//--------------------------------------------------------------
// WORKS スライダー
//--------------------------------------------------------------
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 55,
    loop: true,
    breakpoints: {
      // 350px以上の場合
      350: {
        slidesPerView: 2,
        centeredSlides: true,
      },
      // 768px以上の場合
      768: {
        slidesPerView: 2.7,
        centeredSlides: true,
      },
      // 980px以上の場合
      980: {
        slidesPerView: 3.5,
        centeredSlides: true,
      },
      // 1200px以上の場合
      1200: {
        slidesPerView: 5,
        centeredSlides: true,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    centeredSlides: true,
  
  });

//--------------------------------------------------------------
// ▼メールフォーム アラート
//--------------------------------------------------------------
$(function() {
  // 全てのアラート文を非表示にする
  $(".alert").hide();

  // 送信ボタンをクリック
  $(".contact-btn").click(function(){
    // チェック用の変数sendFlag
    var sendFlag = true;

    // 一行入力フィールドのチェック お名前
    if(!$("#name").val()){
      // 入力がない：アラート文を表示
      $(".textSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $(".textSection .alert").hide();
    }

    // 一行入力フィールドのチェック メールアドレス
    if(!$("#mail").val()){
      // 入力がない：アラート文を表示
      $(".mailSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $(".mailSection .alert").hide();
    }

    // 複数行入力フィールドのチェック お問い合わせ内容
    if(!$("#inquiry").val()){
      // 入力がない：アラート文を表示
      $(".textareaSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $(".textareaSection .alert").hide();
    }

    // チェックボックスのチェック
    var chkboxChk = $('input[name = "agree"]:checked').length;

    // 選択されたチェックボックスの数を調べる
    if(chkboxChk < 1){
      // 選択が1つ未満：アラート文を表示
      $(".checkboxSection .alert").show();
      sendFlag = false; // 選択が1つ未満ならfalseに
    }else{
      // 選択が1つ以上：アラート文を非表示
      $(".checkboxSection .alert").hide();
    }

    // 変数sendFlagの値をチェック
    if(sendFlag == false){
      return false; // falseであれば送信を許可しない（そうでなければ送信）
    }
  });
});

//--------------------------------------------------------------
// ▼メールフォーム チェックを入れたら送信ボタンを押せるようにする
//--------------------------------------------------------------
// 送信ボタンにdisabledプロパティを設定
$('.submit').prop('disabled', true);

$('#privacyCheck').click(function() {
  // チェックボックスにcheckedプロパティが入っていなければ
if ( $(this).prop('checked') == false ) {
  // 送信ボタンにdisabledプロパティを設定
  $('.submit').prop('disabled', true);
} else {
  // 送信ボタンのdisabledプロパティを外す
  $('.submit').prop('disabled', false);
}
});

//--------------------------------------------------------------
// ▼メールフォーム 入力確認＋送信完了・失敗の通知
//--------------------------------------------------------------
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfC5ZY-JEyUGJ7lJteTZFuFXTl0Sf9y9-KqpHti7nVfrxtbdQ/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").fadeIn();
          $(".submit").hide();
          $(".agree").hide()
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });
});

//--------------------------------------------------------------
// ハンバーガーメニュー挙動
//--------------------------------------------------------------
$(function () {
  $(".burger-btn").click(function(){
    // crossクラスが無ければ追加、あれば削除
    $(this).toggleClass("cross");
  });
});

$('.burger-btn').click(function(){
  $(".header-nav-sp").toggleClass('open');
});
