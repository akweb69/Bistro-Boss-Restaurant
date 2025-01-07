import React from 'react';
import { Helmet } from 'react-helmet';
import SubBanner from '../Utiliities/SubBanner';
import img from "../assets/menu/banner3.jpg"
import TitleBox from '../Utiliities/TitleBox';
import MenuCard from '../Utiliities/MenuCard';
import useMenuData from '../Hooks/useMenuData';
import imgdessert from "../assets/menu/dessert-bg.jpeg"
import imgpizza from "../assets/menu/pizza-bg.jpg"
import imgsoup from "../assets/menu/soup-bg.jpg"
import imgsalad from "../assets/menu/salad-bg.jpg"

const OurMenu = () => {
    const menu = useMenuData()
    const offer = menu.filter(items => items.category === "offered")
    const dessert = menu.filter(items => items.category === "dessert")
    const pizza = menu.filter(items => items.category === "pizza")
    const soup = menu.filter(items => items.category === "soup")
    const salad = menu.filter(items => items.category === "salad")
    return (
        <div>
            <Helmet>
                <title>Our Menu | Salman Food & Resturaunt</title>
            </Helmet>

            <div className="">
                <SubBanner title={"Our Menu"} img={img} details={"Would You Like To Try A Dish? "}></SubBanner>
            </div>
            <div className="py-10">
                <TitleBox two={"Todays Offer"} one={"--- Don't Miss ---"}></TitleBox>
            </div>
            {/* offers */}
            <div className="w-10/12 mx-auto mb-10">
                <div className="my-10 lg:grid grid-cols-2 gap-10 items-center space-y-4 md:space-y-0">
                    {
                        offer.map((item, idx) => <MenuCard key={idx} item={item}></MenuCard>)
                    }
                </div>
                {/* button */}
                <div className="text-center ">
                    <span className="btn btn-outline border-0 border-b-4 border-b-orange-600  text-white  w-fit mx-auto"> Order Your Favourite Food</span>
                </div>
            </div>
            {/* dessert  */}
            <SubBanner title={"Dessert"} img={imgdessert} details={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, saepe consectetur deleniti eos mollitia inventore unde non minima id provident."}></SubBanner>

            <div className="w-10/12 mx-auto mb-10">
                <div className="my-10 lg:grid grid-cols-2 gap-10 items-center space-y-4 md:space-y-0">
                    {
                        dessert.map((item, idx) => <MenuCard key={idx} item={item}></MenuCard>)
                    }
                </div>
                {/* button */}
                <div className="text-center ">
                    <span className="btn btn-outline border-0 border-b-4 border-b-orange-600  text-white  w-fit mx-auto"> Order Your Favourite Food</span>
                </div>
            </div>
            {/* pizza */}
            <div className="">
                {/* dessert  */}
                <SubBanner title={"Pizza"} img={imgpizza} details={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, saepe consectetur deleniti eos mollitia inventore unde non minima id provident."}></SubBanner>

                <div className="w-10/12 mx-auto mb-10">
                    <div className="my-10 lg:grid grid-cols-2 gap-10 items-center space-y-4 md:space-y-0">
                        {
                            pizza.map((item, idx) => <MenuCard key={idx} item={item}></MenuCard>)
                        }
                    </div>
                    {/* button */}
                    <div className="text-center ">
                        <span className="btn btn-outline border-0 border-b-4 border-b-orange-600  text-white  w-fit mx-auto"> Order Your Favourite Food</span>
                    </div>
                </div>
            </div>
            {/* soup */}
            <div className="">
                {/* dessert  */}
                <SubBanner title={"Soup"} img={imgsoup} details={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, saepe consectetur deleniti eos mollitia inventore unde non minima id provident."}></SubBanner>

                <div className="w-10/12 mx-auto mb-10">
                    <div className="my-10 lg:grid grid-cols-2 gap-10 items-center space-y-4 md:space-y-0">
                        {
                            soup.map((item, idx) => <MenuCard key={idx} item={item}></MenuCard>)
                        }
                    </div>
                    {/* button */}
                    <div className="text-center ">
                        <span className="btn btn-outline border-0 border-b-4 border-b-orange-600  text-white  w-fit mx-auto"> Order Your Favourite Food</span>
                    </div>
                </div>
            </div>
            {/* salad */}
            <div className="">
                {/* dessert  */}
                <SubBanner title={"salad"} img={imgsalad} details={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, saepe consectetur deleniti eos mollitia inventore unde non minima id provident."}></SubBanner>

                <div className="w-10/12 mx-auto mb-10">
                    <div className="my-10 lg:grid grid-cols-2 gap-10 items-center space-y-4 md:space-y-0">
                        {
                            salad.map((item, idx) => <MenuCard key={idx} item={item}></MenuCard>)
                        }
                    </div>
                    {/* button */}
                    <div className="text-center ">
                        <span className="btn btn-outline border-0 border-b-4 border-b-orange-600  text-white  w-fit mx-auto"> Order Your Favourite Food</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;