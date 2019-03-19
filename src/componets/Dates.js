import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
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

class SimpleSelect extends React.Component {
  state = {
  };

  handleChange = event => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const dateoptions = [];
      for (let i = 1920; i <= 2019; i++) {
        dateoptions.push(<MenuItem value={i}>{i}</MenuItem>);
      }
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl} >
          <InputLabel ></InputLabel>
          <Select
            value={this.state.name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
