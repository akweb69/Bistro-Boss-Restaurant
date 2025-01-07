import React from 'react';
import TitleBox from '../Utiliities/TitleBox';
import imgg from "../assets/home/featured.jpg"

const CheckItOut = () => {
    return (
        <div className='py-14 md:py-24  w-10/12 mx-auto checkit bg-cover bg-no-repeat  bg-center bg-fixed bg-[rgba(0,0,0,0.3)] bg-blend-overlay'>
            <div className="">
                <TitleBox one={"--- Check it out ---"} two={"From Our Menu"}></TitleBox>

                <div className="lg:grid grid-cols-12 items-center gap-12 py-10 px-5 ">
                    <div className="col-span-2"></div>
                    <div className="w-full h-full col-span-4">
                        <img className='w-full h-full' src={imgg} alt="" />
                    </div>
                    <div className="col-span-4">
                        <h1 className="text-xl md:text-3xl font-semibold">March 20 , 2025</h1>
                        <p className="text-xl md:text-3xl font-semibold">WHERE CAN I GET SOME</p>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque possimus et consequatur assumenda omnis sint fuga ut facilis perferendis placeat. Expedita velit accusamus recusandae, obcaecati quos in rerum nihil, quisquam molestias ut exercitationem deserunt. Iusto, accusamus dolores illum ratione veritatis accusantium corrupti in quae. Culpa itaque saepe pariatur a facere?</p>
                        <div className="btn btn-outline text-white mt-4">Read More</div>
                    </div>
                    <div className="col-span-2"></div>
                </div>
            </div>
        </div>
    );
};

export default CheckItOut;