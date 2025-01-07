import React, { useEffect, useState } from 'react';
import TitleBox from '../Utiliities/TitleBox';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Tesstimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("reviews.json").then(res => res.json()).then(data => setReviews(data))

    }, [])
    console.log(reviews)
    return (
        <div className='w-10/12 mx-auto py-10 md:py-16'>
            <TitleBox one={"--- What Our Client Say ---"} two={"TESTIMONIALS"}></TitleBox>

            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10 md:my-20">
                    {
                        reviews.map((rev, idx) => <SwiperSlide key={idx} className='' >
                            <div className="mx-10 md:mx-20 text-center">
                                <div className="w-fit  mx-auto">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={rev.rating}
                                        readOnly
                                    />
                                </div>
                                <div className="text-7xl md:text-9xl font-bold text-gray-800">
                                    <i class="fa-solid fa-quote-left"></i>
                                </div>
                                <p className="text-center">
                                    {rev.details}
                                </p>
                                <h1 className="text-orange-400 text-xl md:text-2xl md:pb-10 font-semibold">  {rev.name}</h1>

                            </div>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Tesstimonials;