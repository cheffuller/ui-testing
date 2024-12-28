import React, { useEffect, useState } from 'react';
import TravelPlanCardLikeButton from './TravelPlanCardLikeButton';

export type TravelPlanCardLikeButtonManagementProps = {
  travelPlanId: number;
};

const TravelPlanCardLikeButtonManagement = ({
  travelPlanId,
}: TravelPlanCardLikeButtonManagementProps) => {
  const [postLikes, setPostLikes] = useState<number>();

  // TODO: modify useEffect for API call

  useEffect(() => {
    const postLikesTest: number = 1;

    setPostLikes(postLikesTest);
  }, [postLikes]);

  return <>{postLikes && <TravelPlanCardLikeButton postLikes={postLikes} />}</>;
};

export default TravelPlanCardLikeButtonManagement;
