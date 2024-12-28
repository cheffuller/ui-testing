import React, { useEffect, useState } from 'react'
import TravelPlanCardUsername from './TravelPlanCardUsername'

type TravelPlanCardUsernameManagementProps = {
  accountId: number;
}

interface UserAccount {
  id: number;
  address: string;
  city: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
}

export type UserAccountProps = {
  userAccount: UserAccount;
}

const TravelPlanCardUsernameManagement = ({ accountId }: TravelPlanCardUsernameManagementProps) => {
  const [userAccount, setUserAccount] = useState<UserAccount>();

  // TODO: modify useEffect for api call

  useEffect(() => {
    const userAccountTest: UserAccount = {
      id: accountId,
      address: '',
      city: '',
      country: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      username:'testuser'};

      setUserAccount(userAccountTest);
  }, [accountId]);

  return (
    <>
        {userAccount && <TravelPlanCardUsername username={userAccount.username} />}
    </>
  )
}

export default TravelPlanCardUsernameManagement