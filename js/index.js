$('#main .slide2 .bean').on('mouseover mouseout', function(){
    $(this).toggleClass('on')
})

$('#main .middle3 .mbottom .book img').on('mouseover mouseout', function(){
    $(this).toggleClass('on')
})

$('.slideInner').slick({
    autoplay:true,
    autoplaySpeed:2000,
    speed:2000,
    dots:true,
    prevArrow:'<button class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>',
    fade:false,
    vertical:true, /* 방향을 세로로 주기 */
    slidesToShow:1,
    slidesToScroll:1,
})


