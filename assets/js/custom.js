(function ($) {
  $(document).ready(function () {
    $("body").scrollspy({
      target: ".navbar-custom",
      offset: 50,
    });

    $(document).on("click", ".navbar-collapse.in", function (e) {
      if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
        $(this).collapse("hide");
      }
    });

    $("a[href*=#]").bind("click", function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top,
          },
          1000,
        );
      e.preventDefault();
    });

    /* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

    var navbar = $(".navbar");
    var navHeight = navbar.height();

    $(window).scroll(function () {
      if ($(this).scrollTop() >= navHeight) {
        navbar.addClass("navbar-color");
      } else {
        navbar.removeClass("navbar-color");
      }
    });

    if ($(window).width() <= 767) {
      navbar.addClass("custom-collapse");
    }

    $(window).resize(function () {
      if ($(this).width() <= 767) {
        navbar.addClass("custom-collapse");
      } else {
        navbar.removeClass("custom-collapse");
      }
    });

    /* ---------------------------------------------- /*
		 * Count to
		/* ---------------------------------------------- */

    $("#stats").waypoint(
      function () {
        $(".timer").each(function () {
          ((counter = $(this).attr("data-count")),
            $(this).delay(6000).countTo({
              from: 0,
              to: counter,
              speed: 3000, // Stats Counter Speed
              refreshInterval: 50,
            }));
        });
      },
      { offset: "70%", triggerOnce: true },
    );
  });
})(jQuery);
