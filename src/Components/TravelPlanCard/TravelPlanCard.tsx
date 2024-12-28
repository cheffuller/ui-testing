import React from 'react';
import { Card, Col } from 'react-bootstrap';
import TravelPlanCardLikeButtonManagement from './TravelPlanCardButtons/TravelPlanCardLikeButtonManagement';
import TravelPlanCardCommentButtonManagement from './TravelPlanCardButtons/TravelPlanCardCommentButtonManagement';
import TravelPlanCardUsernameManagement from './TravelPlanCardUsername/TravelPlanCardUsernameManagement';
import TravelPlanCardLocationManagement from './TravelPlanCardLocation/TravelPlanCardLocationManagement';

import { TravelPlanProps } from './TravelPlanCardManagement';

const TravelPlanCard = ({ travelPlan }: TravelPlanProps) => {
  return (
    <>
      <Col className='d-flex align-items-stretch'>
        <Card className='travel-card'>
          <Card.Img variant='top' src='https://picsum.photos/200' />
          <Card.Body className='d-flex flex-column'>
            {/* location and date */}
            <TravelPlanCardLocationManagement travelPlan={travelPlan}/>
            {/* username */}
            <Card.Subtitle>
              <TravelPlanCardUsernameManagement accountId={travelPlan.accountId}/>
            </Card.Subtitle>
            <br />
            <Card.Footer className='travel-card-footer'>
              {/* buttons */}
              <TravelPlanCardLikeButtonManagement travelPlanId={travelPlan.id}/>
              <TravelPlanCardCommentButtonManagement travelPlanId={travelPlan.id}/>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default TravelPlanCard;
