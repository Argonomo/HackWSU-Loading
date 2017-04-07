// Generated by CoffeeScript 1.12.4
(function() {
  var loading;

  $('#loading').data('step', 1);

  loading = function() {
    return window.setTimeout(function() {
      var loading_text, loading_text_step;
      loading_text = $('#loading');
      loading_text_step = loading_text.data('step');
      loading_text.html('Coming Soon' + ('.'.repeat(loading_text_step - 1)) + ("&nbsp;".repeat(4 - loading_text_step)));
      if (loading_text_step % 4 === 0) {
        loading_text_step = 1;
      } else {
        loading_text_step += 1;
      }
      loading_text.data('step', loading_text_step);
      return loading();
    }, 500);
  };

  loading();

}).call(this);
