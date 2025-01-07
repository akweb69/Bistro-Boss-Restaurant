import { useState } from "react";
import SubBanner from "../Utiliities/SubBanner";
import img from "../assets/shop/banner2.jpg"
import FoodCard from "../Utiliities/FoodCard";
import useMenuData from "../Hooks/useMenuData";
import axios from "axios";

const OrderPage = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const menu = useMenuData()
    const drinks = menu.filter(items => items.category === "drinks")
    const dessert = menu.filter(items => items.category === "dessert")
    const pizza = menu.filter(items => items.category === "pizza")
    const soup = menu.filter(items => items.category === "soup")
    const salad = menu.filter(items => items.category === "salad")

    // axios.post("http://localhost:5000/menu", { hi: "hi" })

    return (
        <div>
            <div className="">
                <SubBanner title={"Our Shop"} details={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, in vel quibusdam iure amet ex suscipit sit explicabo delectus quas?"} img={img}></SubBanner>

            </div>
            {/* tab section */}
            <div className="my-10 md:my-16 w-10/12 mx-auto">
                <div
                    className=" py-2 flex flex-wrap justify-center items-center gap-5">
                    {/* tab item 1 */}
                    <div
                        onClick={() => setTabIndex(0)}
                        className={`${tabIndex === 0 ? "text-orange-500 border-0 border-b-4 border-b-orange-400 px-2 text-xl cursor-pointer" : "text-white px-2 text- cursor-pointer text-xl"}`}>
                        Salad
                    </div>
                    {/* tab item 2 */}
                    <div
                        onClick={() => setTabIndex(1)}
                        className={`${tabIndex === 1 ? "text-orange-500 border-0 border-b-4 border-b-orange-400 px-2 text-xl cursor-pointer " : "text-white px-2 text-xl  cursor-pointer "}`}>
                        Pizza
                    </div>
                    {/* tab item 3 */}
                    <div
                        onClick={() => setTabIndex(2)}
                        className={`${tabIndex === 2 ? "text-orange-500 border-0 border-b-4 border-b-orange-400 px-2 text-xl cursor-pointer " : "text-white px-2 text-xl  cursor-pointer "}`}>
                        Soups
                    </div>
                    {/* tab item 4 */}
                    <div
                        onClick={() => setTabIndex(3)}
                        className={`${tabIndex === 3 ? "text-orange-500 border-0 border-b-4 border-b-orange-400 px-2 text-xl cursor-pointer " : "text-white px-2 text-xl  cursor-pointer "}`}>
                        Desserts
                    </div>
                    {/* tab item 5 */}
                    <div
                        onClick={() => setTabIndex(4)}
                        className={`${tabIndex === 4 ? "text-orange-500 border-0 border-b-4 border-b-orange-400 px-2 text-xl cursor-pointer " : "text-white px-2 text-xl  cursor-pointer "}`}>
                        Drinks
                    </div>
                </div>
            </div>
            {/* tab data sections */}
            <div className="w-10/12 mx-auto pb-10 md:pb-16">
                {/* salad */}
                <div className="">
                    {
                        tabIndex === 0 && <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-5 sm:space-y-0">
                            {
                                salad?.map((item, idx) => <FoodCard key={idx} item={item}></FoodCard>)
                            }
                        </div>
                    }
                    {
                        tabIndex === 1 && <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-5 sm:space-y-0">
                            {
                                pizza?.map((item, idx) => <FoodCard key={idx} item={item}></FoodCard>)
                            }
                        </div>
                    }
                    {
                        tabIndex === 2 && <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-5 sm:space-y-0">
                            {
                                soup?.map((item, idx) => <FoodCard key={idx} item={item}></FoodCard>)
                            }
                        </div>
                    }
                    {
                        tabIndex === 3 && <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-5 sm:space-y-0">
                            {
                                dessert?.map((item, idx) => <FoodCard key={idx} item={item}></FoodCard>)
                            }
                        </div>
                    }
                    {
                        tabIndex === 4 && <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-5 sm:space-y-0">
                            {
                                drinks?.map((item, idx) => <FoodCard key={idx} item={item}></FoodCard>)
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderPage;