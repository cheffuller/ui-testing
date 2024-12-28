import React from 'react'

import { TravelPlanLocationProps } from '../TravelPlanCardLocation/TravelPlanCardLocationManagement'
import TravelPlanCardDate from './TravelPlanCardDate';

const TravelPlanCardDateManagement = ({ travelPlanLocation, }: TravelPlanLocationProps) => {

    const startDate = travelPlanLocation.startDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
    
      const endDate = travelPlanLocation.endDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });

  return (
    <>
    {travelPlanLocation && <TravelPlanCardDate startDate={startDate} endDate={endDate} />}
    </>
  )
}

export default TravelPlanCardDateManagement