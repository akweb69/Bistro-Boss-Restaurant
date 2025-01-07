import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useCart from '../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    const handleCartBtn = (id) => {

        const data = { menuId: id, email: user?.email }
        axiosSecure.post("/cartItem", data)
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success(`${item?.name} is added to cart`)
                    refetch()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="bg-orange-600 bg-opacity-30 h-full flex flex-col relative">
                <div className=''>
                    <img className="w-full  sm:max-h-[220px]" src={item?.image} alt="" />
                </div>
                <div className="pb-3 text-2xl text-white bg-orange-500 bg-opacity-40 w-fit p-1 px-3 rounded-xl absolute right-2 top-2 ">${item?.price}</div>
                {/* details */}
                <div className="p-4 text-center flex flex-col justify-between flex-1">
                    <div>
                        <h1 className="text-xl md:text-2xl font-semibold">{item?.name}</h1>
                        <p className="pb-4 text-gray-300">{item?.recipe.slice(0, 70)}</p>

                    </div>
                    <div
                        onClick={() => handleCartBtn(item?._id)}
                        className="btn btn-outline bg-orange-600 bg-opacity-5 text-white w-fit mx-auto border-0 border-b-4">
                        Add To Cart
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;