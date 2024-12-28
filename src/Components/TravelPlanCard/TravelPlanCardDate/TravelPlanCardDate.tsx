import React from 'react';

type TravelPlanCardDateProps = {
  startDate: string;
  endDate: string;
}

const TravelPlanCardDate = ({
  startDate, endDate,
}: TravelPlanCardDateProps) => {

  return (
    <>
      {startDate}
      {' - '}
      {endDate}
    </>
  );
};

export default TravelPlanCardDate;
