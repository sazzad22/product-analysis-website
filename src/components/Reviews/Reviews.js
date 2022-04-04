import React from 'react';
import useReview from '../../Hooks/useReview';
import ReviewC from '../ReviewC/ReviewC';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='mx-10'>
            <h1 className="text-5xl font-semibold my-8 text-gray-700">Customer <span className="text-blue-400 ">Reviews</span></h1>
            {
                reviews.map(review=><ReviewC key={review.id} review={review} ></ReviewC>)
            }
        </div>
    );
};

export default Reviews;