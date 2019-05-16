import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { inject, observer } from 'mobx-react';

const styles = {
  card: {
    maxWidth: 325,
  },
  media: {
    height: 140,
  },
};

@inject('app')
@observer
class MediaCard extends Component {

  constructor(props) {
    super(props)
    this.detail = this.detail.bind(this)
  }

  detail = () => {
    this.props.history.push('/home/detail')
  }

  render() {
    const { classes, data } = this.props;
    const description = data.snippet.description ? data.snippet.description : 'None'
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.snippet.thumbnails.high.url}
            title="Contemplative Reptile"
          />
          <CardContent onClick={this.detail}>
            <Typography gutterBottom variant="h5" component="h2">
              {data.snippet.title}
          </Typography>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>
    )
  }

}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(MediaCard));