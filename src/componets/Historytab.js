import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HistoryIcon from '@material-ui/icons/History';
import Fab from '@material-ui/core/Fab';
import Firebase from "./Firebase"



const styles = theme => ({
  fab: {
   margin: "50px",
   textAlign: "center",

 },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

class TemporaryDrawer extends React.Component {
  constructor(props){
   super(props);
   this.state = {
     top: false,
     left: false,
     bottom: false,
     right: false,
     history: [],

 }
 }
 static getDerivedStateFromProps(nextProps) {
  return {
    history: nextProps.histID,
  }
}
//the method to slide out history tab
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
//clears history by clearing data from firebase
    clearHistory = () => {
    console.log("here")
    var adaRef = Firebase.database().ref('searches');
    adaRef.remove()
    };

  render() {
    var array0 = this.state.history
    //function to remove duplicates from history
    function remove_duplicates(array0) {
    var obj = {};
    var array1 = [];
    if(array0.length !== undefined){
    for (var i = 0; i < array0.length; i++) {
        obj[array0[i]] = true;
    }
    for (var key in obj) {
        array1.push(key);
    }
    return array1 ;}
    else{}}
    var array1 = remove_duplicates(array0)
    //makes an array of ListItems to be displayed later in the return
    const searcheslog = [];
      for (let i = 0; i < array1.length; i++) {
        searcheslog.push(  <ListItem button>
            <ListItemText inset primary={array1[i]} />
          </ListItem>);
      }
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
      <List component="nav" className={classes.root}>
  {searcheslog}
 </List>
      </div>
    );


    return (
      <div>
        <Button onClick={this.toggleDrawer('right', true)} color="inherit"> <HistoryIcon />
        </Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
            <Fab variant="extended" aria-label="Delete" className={classes.fab} style={{justifyContent: 'center'}} onClick={this.clearHistory}>
        Clear History
      </Fab>
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
