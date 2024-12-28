import React from 'react';
import { Button } from 'react-bootstrap';

type TravelPlanCardCommentButtonProps = {
  commentLikes: number;
}

const TravelPlanCardCommentButton = ({ commentLikes }: TravelPlanCardCommentButtonProps ) => {
  return (
    <>
      <Button className='comment-button'>
        <i className='fa'>&#xf0e6;</i>
        <br />
        {commentLikes}
      </Button>
    </>
  );
};

export default TravelPlanCardCommentButton;
