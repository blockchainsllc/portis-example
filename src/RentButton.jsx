import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { contracts, Device } from "usn-lib";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

async function handleOnClickRent(device) {
  const deviceContract = contracts.types.SingleOwnerObjectsFeatured

}

async function updateRentingState(deviceConfig, setValue) {
  const device = new Device(deviceConfig.contract, deviceConfig.deviceId, deviceConfig.owner, "0x0000000000000000000000000000000000000000");
  device.renting.getRentingState().then((state) => {

    if (state.free) {
      setValue({
        freeToRent: true
      });
    } else {
      setValue({
        freeToRent: false
      });
    }
  });
}

export default function RentButton(props) {

  const [value, setValue] = useState(0);

  updateRentingState(props.device, setValue)

  const classes = useStyles();
  const buttonColor = value.freeToRent ? 'primary' : 'default'
  return (
    <div className={classes.root}>
      <Button variant="contained" color={buttonColor}>
        Rent at {props.device.pricePerHour} wei/hr
      </Button>
    </div>
  );
}