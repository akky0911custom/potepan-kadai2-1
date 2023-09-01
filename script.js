/* global $*/
 $(document).ready(function(){
  let msec = 0;
  let sec = 0;
  let min = 0;
  let hour = 0;

  let timer;

  let msec_number;
  let sec_number;
  let min_number;
  let hour_number;

  // スタート
  $('#start').click(function() {

    timer = setInterval(countup, 10);

    $(this).prop('disabled', true);
    $('#stop,#reset').prop('disabled', false);
  });

  // ストップ
  $('#stop').click(function() {
    // 一時停止
    clearInterval(timer);

    $(this).prop('disabled', true);
    $('#start,#reset').prop('disabled', false);
  });

  // リセット
  $('#reset').click(function() {
    // 初期状態
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;

    $('#time').html('000:00:00:00');
    clearInterval(timer);

    $('#stop,#reset').prop('disabled', true);
    $('#start').prop('disabled', false);
  });

  // カウントアップ
  function countup()
  {
    msec += 1;

    if (msec > 99) {
      msec = 0;
      sec += 1;
    }

    if (sec > 59) {
      sec = 0;
      min += 1;
    }

    if (min > 59) {
      min = 0;
      hour += 1;
    }

    // 0埋め
    msec_number = ('0' + msec).slice(-2);
    sec_number = ('0' + sec).slice(-2);
    min_number = ('0' + min).slice(-2);
    hour_number = ('00' + hour).slice(-3);
    $('#time').html(hour_number + ':' +  min_number + ':' + sec_number + ':' + msec_number);
  }
});
