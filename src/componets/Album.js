import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

//button worker
//import Buttons from '.Buttons';
//entire button class
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
//ads extra information Button
import Buttons from './Buttons';
//import Header from './Header';


class FavButton extends React.Component{
  state = {
    favorited: false,
  };
}

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  //the style for the blurb at front
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1300,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    raised: true,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '65.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});
//make an array based off how many cards there needs to be
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


class Album extends React.Component {
 render(){
   const {classes} = this.props;
   let searched = this.props.said
 //document.write(this.props.said);
  console.log(this.props.jdata);


  return (

    <React.Fragment>
    <p> {searched}</p>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              NASA Image Gallary
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Enjoy Searching a rich, vivid library of images stright from NASA's control center and the Opportunity rover's Martian photos to Hubble Space Telescope images of distant galaxies, these galleries show our universe with depth and clarity beyond what previous generations could imagine.
            </Typography>
            <div className={classes.heroButtons}>

            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  //this is a button which will have more infor
                    <Buttons/>
                    <Button size="small" color="primary" onClick={FavoriteIcon}>
                    <FavoriteBorderIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
