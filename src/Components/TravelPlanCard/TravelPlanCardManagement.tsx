import React, { useEffect, useState } from 'react';
import TravelPlanCard from './TravelPlanCard';

export interface TravelPlan {
  id: number;
  accountId: number;
  isFavorited: boolean;
  isPublished: boolean;
}

const TravelPlanCardManagement = () => {
  const [travelPlans, setTravelPlans] = useState<TravelPlan[]>([]);

  // TODO: modify useEffect for api call

  useEffect(() => {
    const testTravelPlan: TravelPlan[] = [
      {
        id: 1,
        accountId: 1,
        isFavorited: false,
        isPublished: false,
      },
      {
        id: 2,
        accountId: 2,
        isFavorited: false,
        isPublished: true,
      },
      {
        id: 3,
        accountId: 3,
        isFavorited: false,
        isPublished: true,
      },
      {
        id: 4,
        accountId: 4,
        isFavorited: false,
        isPublished: true,
      },
      {
        id: 5,
        accountId: 5,
        isFavorited: false,
        isPublished: true,
      },
      {
        id: 6,
        accountId: 6,
        isFavorited: false,
        isPublished: true,
      },
    ];

    setTravelPlans(testTravelPlan);
  }, []);

  return (
    <div className='container mt-5 row row-cols-lg-4 row-cols-md-3 m-auto'>
      {travelPlans.map((travelPlan, index) => (
        <TravelPlanCard key={travelPlan.id} travelPlan={travelPlan} index={index} />
      ))}
    </div>
  );
};

export default TravelPlanCardManagement;
