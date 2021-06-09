const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2.6,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.25,
                slidesToScroll: 1,
            }
        },
        {
          breakpoint: 410,
          settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,
          }
      }
    ]
};

export default settings