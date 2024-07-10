import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage, LandingPagePath } from 'components/containers/LandingPage/LandingPage';


import './App.css';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={LandingPagePath} element={<LandingPage/>}/>
        {/* <Route exact path={ErrorPagePath} component={ErrorPage}/> */}
        {/* <Route path="/*" render={() => <Navigate to={ErrorPagePath}/>} />*/}
      </Routes>
    </Router>
  );
}
