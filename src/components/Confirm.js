import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText  } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EuroIcon from '@material-ui/icons/Euro';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import DehazeIcon from '@material-ui/icons/Dehaze';
import HomeIcon from '@material-ui/icons/Home';
import HouseIcon from '@material-ui/icons/House';


export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, colour, price, housecount, house_price, hotel_price }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
            
              <ListItem >
              <ListItemAvatar>
          <Avatar>
            <AssignmentIcon />
          </Avatar>
        </ListItemAvatar>
                <ListItemText primary="Nazwa pola" secondary={name} />
              </ListItem>
              <ListItem>
              <ListItemAvatar>
          <Avatar>
            <InvertColorsIcon />
          </Avatar>
        </ListItemAvatar>
                <ListItemText primary="Kolor" secondary={colour} />
              </ListItem >
              <ListItem>
              <ListItemAvatar>
          <Avatar>
            <EuroIcon />
          </Avatar>
        </ListItemAvatar>
                <ListItemText primary="Cena" secondary={price} />
              </ListItem >
              <ListItem>
              <ListItemAvatar>
          <Avatar>
            <DehazeIcon />
          </Avatar>
        </ListItemAvatar>
                <ListItemText primary="Ilosc domów" secondary={housecount} />
              </ListItem >
              <ListItem>
              <ListItemAvatar>
          <Avatar>
            <HomeIcon />
          </Avatar>
        </ListItemAvatar>
                <ListItemText primary="Cena za dom" secondary={house_price} />
              </ListItem >
              <ListItem>
              <ListItemAvatar>
          <Avatar>
            <HouseIcon />
          </Avatar>
        </ListItemAvatar>
                <ListItemText primary="Cena za hotel" secondary={hotel_price} />
              </ListItem >
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Powrót</Button>

           
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
