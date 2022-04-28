// Shop link on click
$('.shop_tab').on('click', function(){
    $('.mega_menu').toggleClass('show');
    $('.shop_tab svg').toggleClass('rotation');

    if($('.profile_dropdown.show')){
        $('.profile_dropdown').removeClass('show');
    }
})

// Profile on click
$('.profile_icon').on('click', function(){
    $('.profile_dropdown').toggleClass('show');

    if($('.mega_menu.show')){
        $('.mega_menu').removeClass('show');
        $('.shop_tab svg').removeClass('rotation');
    }
})

// Mobile Menu Toggle
$('.menu_open').on('click', function(){
    $('.mobile_mega_menu').addClass('show');
    $(this).css('display','none');
    $('.menu_close').css('display','block');
})

$('.menu_close').on('click', function(){
    $('.mobile_mega_menu').removeClass('show');
    $(this).css('display','none');
    $('.menu_open').css('display','block');
})

//Search Overlay popup
$('.search_icon').on('click', function(){
    $('.overlay').addClass('showOverlay');
    $('.search_box').addClass('popUp');
    $('.close_search').addClass('show');
})

$('.close_search').on('click', function(){
    $('.overlay').removeClass('showOverlay');
    $('.search_box').removeClass('popUp');
    $('.close_search').removeClass('show');
})

//Filter Toggle

$('.filter_toggle').on('click', function(){
    $('.inner_product_grid .filter_left_sidebar').addClass('slidein');
})

$('.close_filer_slider').on('click', function(){
    $('.inner_product_grid .filter_left_sidebar').removeClass('slidein');
})

