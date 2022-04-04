import React from 'react';
import useReview from '../../Hooks/useReview';
import ReviewC from '../ReviewC/ReviewC';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            {
                reviews.map(review=><ReviewC key={review.id} review={review} ></ReviewC>)
            }
        </div>
    );
};

export default Reviews;