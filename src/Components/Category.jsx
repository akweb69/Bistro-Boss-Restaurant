import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/home/slide1.jpg"
import slide2 from "../assets/home/slide2.jpg"
import slide3 from "../assets/home/slide3.jpg"
import slide4 from "../assets/home/slide4.jpg"
import slide5 from "../assets/home/slide5.jpg"
import TitleBox from "../Utiliities/TitleBox";
const Category = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

        ]
    };
    return (
        <div className="w-10/12 mx-auto  py-10 ">
            <div className="mb-6">
                <TitleBox one={"--- From 11:00 am To 10:00 pm ---"} two={"Order Online"}></TitleBox>
            </div>
            <div className="slider-container">
                <Slider {...settings} className="">
                    <div className="px-2 md:px-4 relative">
                        <img className="w-full" src={slide1} alt="" />
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-xl md:text-4xl font-bold text-gray-100  -translate-y-1/2 text-center">Salads</p>
                    </div>
                    <div className="px-2 md:px-4 relative">
                        <img className="w-full" src={slide2} alt="" />
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2  text-xl md:text-4xl font-bold text-gray-100 -translate-y-1/2 text-center">Pizzas</p>
                    </div>
                    <div className="px-2 md:px-4 relative">
                        <img className="w-full" src={slide3} alt="" />
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-xl md:text-4xl font-bold text-gray-100  -translate-y-1/2 text-center">Soup</p>
                    </div>
                    <div className="px-2 md:px-4 relative">
                        <img className="w-full" src={slide4} alt="" />
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-xl md:text-4xl font-bold text-gray-100  -translate-y-1/2 text-center">Desserts</p>
                    </div>
                    <div className="px-2 md:px-4 relative">
                        <img className="w-full" src={slide5} alt="" />
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-xl md:text-4xl font-bold text-gray-100 ">Salads</p>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Category;