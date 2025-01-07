import React from 'react';
import TitleBox from '../Utiliities/TitleBox';
import img1 from "../assets/menu/pizza-bg.jpg"
import img2 from "../assets/menu/salad-bg.jpg"
import img3 from "../assets/menu/soup-bg.jpg"
const ShouldTry = () => {
    return (
        <div className='w-10/12 mx-auto py-10 pb-20'>
            <TitleBox one={"--- Should Try ---"} two={"CHEF RECOMENDED"}></TitleBox>
            <div className="md:grid mt-10 md:mt-20 md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5 md:space-y-5 lg:space-y-0">

                <div className="bg-orange-600 bg-opacity-30">
                    <img className='w-full' src={img1} alt="" />
                    {/* details */}
                    <div className="p-4 text-center space-y-1">
                        <h1 className="text-xl md:text-2xl font-semibold">Hot Spicy Pizza</h1>
                        <p className="pb-4 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, minus?</p>
                        <div className="btn btn-outline bg-orange-600 bg-opacity-5 text-white w-fit mx-auto border-0 border-b-4">Add To Cart</div>
                    </div>
                </div>
                <div className="bg-orange-600 bg-opacity-30">
                    <img className='w-full' src={img2} alt="" />
                    {/* details */}
                    <div className="p-4 text-center space-y-1">
                        <h1 className="text-xl md:text-2xl font-semibold">Sweety Salad</h1>
                        <p className="pb-4 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, minus?</p>
                        <div className="btn btn-outline bg-orange-600 bg-opacity-50 text-white w-fit mx-auto border-0 border-b-4">Add To Cart</div>
                    </div>
                </div>
                <div className="bg-orange-600 bg-opacity-30">
                    <img className='w-full' src={img3} alt="" />
                    {/* details */}
                    <div className="p-4 text-center space-y-1">
                        <h1 className="text-xl md:text-2xl font-semibold">Korean Soup</h1>
                        <p className="pb-4 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, minus?</p>
                        <div className="btn btn-outline bg-orange-600 bg-opacity-5 text-white w-fit mx-auto border-0 border-b-4">Add To Cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShouldTry;