
const MenuCard = ({ item }) => {
    return (
        <div className="w-full flex items-center gap-4">
            {/* images */}
            <div className="p-1 w-[100px] h-[100px] border rounded-br-full rounded-tr-full rounded-bl-full border-orange-500">
                <img className="w-full h-full rounded-br-full rounded-tr-full rounded-bl-full" src={item?.image} alt="" />
            </div>
            {/* details */}
            <div className="flex-1">
                <div className="flex justify-between items-center gap-1">
                    <h1 className="text-xl md:text-2xl font-semibold">{item?.name}</h1>
                    <p className="text-orange-500 font-semibold text-xl">${item?.price}</p>
                </div>
                <div className="text-gray-400 ">
                    {item?.recipe}
                </div>
            </div>
        </div>
    );
};

export default MenuCard;