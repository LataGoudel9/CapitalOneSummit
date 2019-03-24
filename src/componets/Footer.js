import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Footer extends Component {
  render() {
    return (
      <div className="App" backgroundcolor= "secondary">
      <Typography variant="h6" align="center" gutterBottom>
          © 2019 NASA
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Designed using Matierial UI
        </Typography>

      </div>
    );
  }
}

export default Footer;
