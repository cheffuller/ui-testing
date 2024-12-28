import React, { useEffect, useState } from 'react';
import TravelPlanCard from './TravelPlanCard';

interface TravelPlan {
  id: number;
  accountId: number;
  isFavorited: boolean;
  isPublished: boolean;
}

export type TravelPlanProps = {
  travelPlan: TravelPlan;
}

const TravelPlanCardManagement = () => {
    const [travelPlans, setTravelPlans] = useState<TravelPlan[]>([]);

    // TODO: modify useEffect for api call

    useEffect(() => {
      const testTravelPlan: TravelPlan = {
        id: 1,
        accountId: 1,
        isFavorited: false,
        isPublished: false,
      };
      setTravelPlans([testTravelPlan]);
    }, []);

  return (
    <div className="container my-5">
      {travelPlans.map((travelPlan) => <TravelPlanCard key={travelPlan.id} travelPlan={travelPlan}/>)}
    </div>
  );
};

export default TravelPlanCardManagement;
