import React from 'react';

const ReviewC = ({ review }) => {
    const { name, img, rating, comment } = review;
    return (
        <div className='w-3/5 hover:border-blue-200  grid sm:grid-cols-3 gap-1 border border-4 border-transparent rounded-xl mt-5 shadow-xl p-2 mx-auto  '>
            <div className='p-2 '  >
                <img className='rounded-full mx-auto my-auto border border-8 border-blue-400 hover:border-transparent'  src={img} alt="" />
            </div>
            <div className='col-span-2 text-left'>
                <h4 className='font-bold'>{name}</h4>
                <p className='text-sm'>{comment}</p>
                <p>Ratings:<span className='font-semibold font-mono'>{rating}/5</span></p>

            </div>
        </div>
    );
};

export default ReviewC;