import useCart from "../Hooks/useCart";
import TitleBox from "../Utiliities/TitleBox";

const MyCart = () => {
    const [data] = useCart()
    return (
        <div className="bg-orange-100 w-full h-full text-black">
            <div className="w-11/12 mx-auto py-10">
                <TitleBox one="--- My Cart ---" two="Wanna Add More"></TitleBox>
                <div className="p-10 border rounded-xl bg-white mt-14">
                    <div className="flex justify-between items-center">

                        <div className="text-xl font-bold">Total Orders: <span className="badge  text-white badge-info">{data?.length < 10 ? "0" + data?.length : data?.length}</span> </div>
                        <div className="text-xl font-bold">Total Prices: </div>
                        <div className="btn bg-orange-600 text-white">Pay </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;