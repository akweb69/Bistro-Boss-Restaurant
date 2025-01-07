import TitleBox from "../Utiliities/TitleBox";
import MenuCard from "../Utiliities/MenuCard";
import ContactUs from "../Utiliities/ContactUs";
import useMenuData from "../Hooks/useMenuData";

const PopularMenu = () => {

    const allData = useMenuData()
    const menu = allData.filter(item => item.category === "popular")

    return (
        <div className="w-10/12 mx-auto py-10 md:py-16">
            <div className="">
                <TitleBox one={"--- Check it out ---"} two={"From Our Menu"}></TitleBox>
            </div>
            <div className="my-10 lg:grid grid-cols-2 gap-10 items-center space-y-4 md:space-y-0">
                {
                    menu.map((item, idx) => <MenuCard key={idx} item={item}></MenuCard>)
                }
            </div>
            <div className="text-center ">
                <span className="btn btn-outline border-0 border-b-4 border-b-orange-600  text-white  w-fit mx-auto"> View Full Menu</span>
            </div>
            <div className="">
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default PopularMenu;