import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CardMedia from '@material-ui/core/CardMedia';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Buttons extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          View
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          aria-dateby="alert-dialog-slide-date"
          aria-dateby="alert-dialog-slide-image"

        >
          <DialogTitle id="alert-dialog-slide-title">
          {this.props.dataID !== undefined ? this.props.titleID : ""}
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-date">
              {this.props.dataID !== undefined ? this.props.dateID : ""}
            </DialogContentText>
          </DialogContent>
          <DialogContent>
          <DialogContentText id="alert-dialog-slide-image">
        <img src={this.props.dataID !== undefined ? this.props.imageID : ""} height = "100%" width = "100%"/>

          </DialogContentText>
          </DialogContent>

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {this.props.dataID !== undefined ? this.props.dataID : ""}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Buttons;
