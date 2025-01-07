
const TitleBox = ({ one, two }) => {
    return (
        <div className="10/12 mx-auto text-center">
            <p className="text-xs pb-2 md:text-sm text-orange-300 text-center">{one}</p>
            <p className="text-2xl md:text-4xl pb-3 font-bold w-fit mx-auto px-7 py-1 border-t-gray-700 border-t-2 border-b-2 border-b-gray-700 text-center">{two}</p>
        </div>
    );
};

export default TitleBox;