   
   $(document).ready(function()
   {
      $("a[href*='#kriptolar']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#kriptolar').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#hakkimizda']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#hakkimizda').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#iletisim']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#iletisim').offset().top }, 600, 'easeOutSine');
      });
   });
   