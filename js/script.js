var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000, // 2 seconds delay between slides
      disableOnInteraction: false, // keeps autoplay working even after user interaction
    },
  });
  