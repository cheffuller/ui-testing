import React from 'react';

import { TravelPlanLocationProps } from './TravelPlanCardLocationManagement';

const TravelPlanCardLocation = ({
  travelPlanLocation,
}: TravelPlanLocationProps) => {
  return (
    <>
      {travelPlanLocation.city}
    </>
  );
};

export default TravelPlanCardLocation;
