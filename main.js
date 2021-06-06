$('.main-slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
document.querySelector('.button_mobile').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.nav-menu').classList.toggle('active');
}
