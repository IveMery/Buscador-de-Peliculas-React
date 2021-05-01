
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const Cards = ({ title, poster_path }) => {


  const useStyles = makeStyles({
    root: {
      maxWidth: 200,
      margin: 10,
      width: 200


    },
    media: {
      height: 340,
    },
  });


  const classes = useStyles();

  poster_path = `https://image.tmdb.org/t/p/original/${poster_path}`
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={poster_path}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
           </CardContent>
        </CardActionArea>
        <CardActions>
<Button size="small" color="primary">
            <VisibilityOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
export default Cards
