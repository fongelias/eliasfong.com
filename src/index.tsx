import React from 'react';
import ReactDOM from 'react-dom';
import { LandingPage } from 'components/containers/LandingPage';
import { PageContainer } from 'components/containers/PageContainer';
import reportWebVitals from './reportWebVitals';

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <PageContainer>
      <LandingPage />
    </PageContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
