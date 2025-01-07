
const SubBanner = ({ title, details, img }) => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className="w-full min-h-[500px] bg-no-repeat bg-cover bg-center py-20 md:py-32 flex justify-center items-center">
            <div className="p-4 md:w-7/12 mx-auto md:p-10 backdrop-blur-[1px] bg-[rgb(0,0,31)] bg-opacity-40 text-center">
                <h1 className="text-3xl uppercase md:text-5xl font-bold text-orange-600">{title}</h1>
                <p className="text-gray-400 py-4">{details}</p>
            </div>
        </div>
    );
};

export default SubBanner;