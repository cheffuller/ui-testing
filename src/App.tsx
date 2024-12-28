import React from 'react';
import './App.css';
import CarouselContainer from './components/CarouselContainer';
import TravelPlanCardManagement from './components/TravelPlanCard/TravelPlanCardManagement';
import NavBarNew from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBarNew />
      <CarouselContainer />
      <TravelPlanCardManagement />
    </div>
  );
}

export default App;
