'use client'

import React, { useState } from 'react';
import Dashboard from './dashboard';
import Nav from './nav';
import Time from './time';


export interface IAdminNavigation {
  name: string,
  current: boolean,
}

const navigationData: IAdminNavigation[] = [
  { name: 'Dashboard', current: true },
  { name: 'Time', current: false },
];

const Page = () => {
  const [navigation, setNavigation] = useState<IAdminNavigation[]>(navigationData);


  const setActiveTab = (tabName: string) => {
    setNavigation(navigation.map(nav => ({
      ...nav,
      current: nav.name === tabName,
    })));
  };

  const getActiveComponent = () => {
    const activeTab = navigation.find(nav => nav.current)?.name;
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Time':
        return <Time />
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className='relative bg-black'>
      <Nav navigation={navigation} setActiveTab={setActiveTab} />
      {getActiveComponent()}
    </div>
  );
};

export default Page;
