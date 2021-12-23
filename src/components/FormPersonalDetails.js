import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Budynki" />
            <TextField
              placeholder="Podaj ilość domów"
              label="Podaj ilość domów"
              onChange={handleChange('housecount')}
              defaultValue={values.housecount}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Podaj cene za dom"
              label="Podaj cene za dom"
              onChange={handleChange('house_price')}
              defaultValue={values.house_price}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Podaj cene za hotel"
              label="Podaj cene za hotel"
              onChange={handleChange('hotel_price')}
              defaultValue={values.hotel_price}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Powrót</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Dalej</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
