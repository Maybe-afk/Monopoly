import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
            <AppBar title="Gracz" />
            <TextField
              placeholder="Podaj nazwe pola"
              label="Nazwa pola"
              onChange={handleChange('name')}
              defaultValue={values.name}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Podaj kolor"
              label="Podaj kolor"
              onChange={handleChange('colour')}
              defaultValue={values.colour}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Podaj cene"
              label="Podaj cene"
              onChange={handleChange('price')}
              defaultValue={values.price}
              margin="normal"
              fullWidth
            />
            <br />
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

export default FormUserDetails;
