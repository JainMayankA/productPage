import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Sidebar() {
  const findData = useSelector(state => state.findData)
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="auto"
          image={findData.image}
          title="product image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {findData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {findData.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {findData.tags.map((tag,index)=> (
        <Button size="small" color="primary">
          {tag}
        </Button>

      ))}
      </CardActions>
    </Card>
  );
}