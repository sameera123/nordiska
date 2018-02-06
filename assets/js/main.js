$(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
        $('.navbar-default .navbar-nav>li>a').addClass('opque-text');
        $('.nav-text').addClass('opque-text');
    } else {
        $('.opaque-navbar').removeClass('opaque');
        $('.navbar-default .navbar-nav>li>a').removeClass('opque-text');
        $('.nav-text').removeClass('opque-text');
    }
});

