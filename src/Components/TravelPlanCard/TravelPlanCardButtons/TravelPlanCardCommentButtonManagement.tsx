import React, { useEffect, useState } from 'react';
import TravelPlanCardCommentButton from './TravelPlanCardCommentButton';

export type TravelPlanCardCommentButtonManagementProps = {
  travelPlanId: number;
};

const TravelPlanCardCommentButtonManagement = ({
  travelPlanId,
}: TravelPlanCardCommentButtonManagementProps) => {
  const [commentLikes, setCommentLikes] = useState<number>();

  // TODO: modify useEffect for API call

  useEffect(() => {
    const commentLikesTest: number = 1;

    setCommentLikes(commentLikesTest);
  }, [commentLikes]);

  return (
    <>
      {commentLikes && <TravelPlanCardCommentButton commentLikes={commentLikes}/>}
    </>
  );
};

export default TravelPlanCardCommentButtonManagement;
