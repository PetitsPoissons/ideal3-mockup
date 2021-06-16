import React from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item sm={4} style={{ border: '1px solid #fff' }}></Grid>
          <Grid item sm={8} style={{ border: '1px solid #000' }}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
