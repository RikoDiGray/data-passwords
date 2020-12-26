function ffmdfmdjdsajsdjdjs() {
  $(function() {
    $.getJSON('data/base.json', function(connect) {
      $.each(connect.data, function(i, f) {
           create(f.date, f.type, f.title, f.login, f.password, f.site, f.content);
      });
    });
 });
}
