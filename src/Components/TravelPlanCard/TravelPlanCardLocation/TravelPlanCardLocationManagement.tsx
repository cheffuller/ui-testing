import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import TravelPlanCardLocation from './TravelPlanCardLocation';

import { TravelPlanProps } from '../TravelPlanCardManagement';
import TravelPlanCardDateManagement from '../TravelPlanCardDate/TravelPlanCardDateManagement';

interface TravelPlanLocation {
  id: number;
  city: string;
  country: string;
  endDate: Date;
  startDate: Date;
  travelPlanId: number;
}

export type TravelPlanLocationProps = {
  travelPlanLocation: TravelPlanLocation;
}

const TravelPlanCardLocationManagement = ({ travelPlan }: TravelPlanProps) => {
    const [travelPlanLocation, setTravelPlanLocation] = useState<TravelPlanLocation>();

    // TODO: modify useEffect for api call

    useEffect(() => {
        const endDate: Date = new Date("2018-12-31");
        const startDate: Date = new Date("2018-12-01");

        const testTravelPlanLocation: TravelPlanLocation = {
            id: 1,
            city: 'Sydney',
            country: 'Australia',
            endDate: endDate,
            startDate: startDate,
            travelPlanId: travelPlan.id
        }

        setTravelPlanLocation(testTravelPlanLocation);
    }, [travelPlan.id]);

  return (
    <>
      {travelPlanLocation && <Card.Title><TravelPlanCardLocation travelPlanLocation={travelPlanLocation}/></Card.Title>}
      {travelPlanLocation && <Card.Text><TravelPlanCardDateManagement travelPlanLocation={travelPlanLocation}/></Card.Text>}
    </>
  );
};

export default TravelPlanCardLocationManagement;
