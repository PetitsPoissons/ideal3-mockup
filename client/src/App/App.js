import React, { Fragment } from 'react';

// components
// import SideMenu from '../components/SideMenu';
import Header from '../components/Header';

// styles
import { CssBaseline } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <CssBaseline />
    </Fragment>
  );
}

export default App;
