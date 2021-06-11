import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const Cards = ({ title, poster_path, }) => {

  const useStyles = makeStyles({
    root: {
      margin: 10,
      width: 230,
      color: 'white',
      background: 'rgb(54, 57, 63)',
      border: 'none',
      fontFamily: 'Varela Round',
    },
    media: {
      height: 340,
      overflow: 'hidden',
      transition: 'all 0.2s ease-in',
      '&:hover': {
        transform: ' scale(1.1) ',
      },
    },
    title: {
      fontSize: 14,
      overflow: 'hidden',
      textAlign: 'center',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    buttton: {
      justifyContent: 'center',
    }
  })

  const classes = useStyles();
  // poster_path = `https://image.tmdb.org/t/p/original/${poster_path}`
  return (
    <>
      <Card className={classes.root} variant="outlined" >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"}
            title={title}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2" className={classes.title} overflow='hidden'>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
export default Cards
