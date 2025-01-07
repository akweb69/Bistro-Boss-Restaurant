import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../assets/home/01.jpg"
import slide2 from "../assets/home/02.jpg"
import slide3 from "../assets/home/03.png"
import slide4 from "../assets/home/04.jpg"
import slide5 from "../assets/home/05.png"
import slide6 from "../assets/home/06.png"
const Banner = () => {
    return (
        <div className='w-full text-center'>
            <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
                <div className=''>
                    <img className='w-full max-h-[700px]' src={slide1} />
                </div>
                <div>
                    <img className='w-full max-h-[700px]' src={slide2} />
                </div>
                <div>
                    <img className='w-full max-h-[700px]' src={slide3} />
                </div>
                <div>
                    <img className='w-full max-h-[700px]' src={slide4} />
                </div>
                <div>
                    <img className='w-full max-h-[700px]' src={slide5} />
                </div>
                <div>
                    <img className='w-full max-h-[700px]' src={slide6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;