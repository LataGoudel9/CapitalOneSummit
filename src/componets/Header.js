import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Album from './Album';
import Tempdrawer from './Tempdrawer';
import colors from '@material-ui/core/colors';
import Historytab from './Historytab';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Dates from './Dates'
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = theme => ({
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  root: {
    width: '100%',
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
class Header extends React.Component {

  constructor(props){
   super(props);
   this.state = {
   anchorEl: null,
   mobileMoreAnchorEl: null,
   startInput:null,
   value: 0,
   jsonData: [],
   startYear : "1920",
   endYear: "2019`"

 };
 }
 state = {

 };
 handleChange1 = event => {
   this.setState({ [event.target.name]: event.target.value });
   //console.log(event.target.value)
   var num = event.target.value
   var n = num.toString();
  // this.setState({ startYear: event.target.value });
  // console.log("start" + this.state.startYear)
  this.setState({ startYear: n }, () => {
  console.log(this.state.startYear, 'startYear');
});

 };
 handleChange2 = event => {
   this.setState({ [event.target.name]: event.target.value });
   var num = event.target.value
   var n = num.toString();
   console.log(typeof n)
   console.log(n)
   this.setState({ endYear: n });
   console.log("end" + this.state.endYear)
 };

updateSearch = event =>{
  this.setState({startInput:event.target.value })
}

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };
  //function to sort based off most recent
  MostRecent = ()=> {
      var array = []
    //console.log(this.state.jsonData)
    if(this.state.jsonData != ""){
      var sortedJSON = []
      for (var key in this.state.jsonData) {
          array.push({key:key,date:this.state.jsonData[key].data[0].date_created});
      }
      array.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
      });
      for (var item in array){
          sortedJSON.push(this.state.jsonData[array[item].key])
      }
      this.setState({jsonData:sortedJSON})
      }
      else{
      }
  }
//function to sort into Alphabetical Order
  Alpha = ()=> {
    //console.log(this.state.jsonData)
    if(this.state.jsonData != ""){
      var array = []
      var sortedJSON = []
      for (var key in this.state.jsonData) {
          array.push({key:key,title:this.state.jsonData[key].data[0].title});
          console.log()
      }
      array.sort(function(a,b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
      });
      for (var item in array){
          sortedJSON.push(this.state.jsonData[array[item].key])
      }
      this.setState({jsonData:sortedJSON})
      }
      else{
      }
  }


  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  search=()=> {
   alert("THIS FUNCTION IS BEING CALLED!");
   var searchString = "https://images-api.nasa.gov/search?q="+this.state.startInput+ "&media_type=image&year_start=" + this.state.startYear + "&year_end=" + this.state.endYear ;
   axios.get(searchString)
   .catch((error) =>{
     console.log("Try Another Search")
   })
   .then((res => {
   var data = res.data.collection.items;
   this.setState({jsonData:data})
   console.log("THIS RAN SUCCESSFULLY");
   console.log("json" +this.state.jsonData );
   }))
 }

 handleChange = (event, value) => {
   this.setState({ value });
 };
  //seacrh functionyellow
//  var input;


  render() {
    //console.log(this.state.startInput)
    //var input;
    //document.write({input});
    //var input;
    const dateoptions = [];
      for (let i = 1920; i <= 2019; i++) {
        dateoptions.push(<MenuItem value={i}>{i}</MenuItem>);
      }

    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >

        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <p>Favorites</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
          </IconButton>
          <p>History</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              NASA
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>

              </div>
              <InputBase
                type = 'text'
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                id = "str"
                value = {this.state.startInput}
                onChange={this.updateSearch.bind(this)}
              />
            </div>

            {/*this is date seacrh*/}
            <form className={classes.root2} autoComplete="off">
              <FormControl className={classes.formControl} >
                <InputLabel ></InputLabel>
                <Select
                  value={this.state.name}
                  onChange={this.handleChange1}
                  input={<Input name= "name"/>}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {dateoptions}
                </Select>
                <FormHelperText>Start Date</FormHelperText>

              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel ></InputLabel>
                <Select
                  value={this.state.name2}
                  onChange={this.handleChange2}
                  input={<Input name="name2" />}
                  autoWidth>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {dateoptions}
                </Select>
                <FormHelperText>End Date</FormHelperText>

              </FormControl>

            </form>
            <Button size="small" color="secondary" htmlType="submit" onClick = {e => this.search(e)}>
              <SearchIcon color= "blue"/>
            </Button>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <Tempdrawer/>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit"
              >
              <Historytab/>
                <HistoryIcon/>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {/*THIS IS THE SEARCHOPTIONS*/}
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Recent First" onClick={this.MostRecent} />
            <Tab label="Alphabetical" onClick={this.Alpha} />
            <Tab label="By center" onClick={this.Centerize}/>
          </Tabs>
        </Paper>
        <Album said ={this.state.startInput} jdata = {this.state.jsonData} />
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
