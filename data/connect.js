function ffmdfmdjdsajsdjdjs() {
  $(function() {
    $.getJSON('data/backup.json', function(connect) {
      $.each(connect.data, function(i, f) {
           create(f.date, f.type, f.title, f.login, f.password, f.site, f.content);
      });
    });
 });
}