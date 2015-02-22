(function(){

/* @todo
 TweenLite
 TweenMax
 TimelineLite
 TimelineMax
*/

  TweenMax.to("#js-square" , 1 , {
    top : "100px" , // CSSのプロパティ(+=とかも使えます)
    delay : 0.5 , // 実行までの待ち時間です
    ease : "Linear" , // イージングです。後述しますがTweenMax独自のイージングもあります。
    onComplete : function(){
      console.log('aaaa');

    } , // 処理完了後に呼ばれる関数を指定できます。
    onStart  : function() {} , // 処理開始前に呼ばれる関数を指定できます。
    onUpdate : function() {} // 処理実行中に呼ばれる関数を指定できます。動作しつつ
  });


})();
