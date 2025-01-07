import React from 'react';

const Loader = () => {
    return (
        <div className='w-full min-h-[80vh] flex justify-center items-center bg-[rgb(0,0,31)]'>
            <div className="flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
                <p className='text-white text-lg'>Loading...</p>
            </div>
        </div>
    );
};

export default Loader;