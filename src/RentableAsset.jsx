import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import defaultImage from './default_image.jpg'
import RentButton from './RentButton'

const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    maxHeight: 325,
  },
});

export default function RentableAsset(props) {
  const classes = useStyles();

  let deviceDescription = props.device.meta.lang.en.description
  let defaultDeviceDescription = `Lizards are a widespread group of squamate reptiles,
  with over 6,000 species, ranging across all continents except Antarctica`

  deviceDescription = deviceDescription ? deviceDescription : defaultDeviceDescription

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Slock"
          height="140"
          image={defaultImage}
          title="Slock"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.device.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {deviceDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <RentButton size="small" device={props.device} />
      </CardActions>
    </Card>
  );
}