import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import { inject, observer } from "mobx-react";

const styles = {
  card: {
    maxWidth: 325
  },
  media: {
    height: 140
  },
  bottom: {
    borderBottom: `${1}px solid`
  }
};

@inject("app")
@observer
class MediaCard extends Component {
  constructor(props) {
    super(props);
    this.detail = this.detail.bind(this);
  }

  detail = data => {
    this.props.history.push(`/home/detail/${data.id.videoId}`);
  };

  render() {
    const { classes, data } = this.props;
    const description = data.snippet.description
      ? data.snippet.description
      : "None";
    return (
      <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List>
              <ListItem className={classes.bottom.borderBottom}>
                <ListItemAvatar>
                  <Avatar src={data.snippet.thumbnails.high.url}>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  onClick={() => this.detail(data)}
                  primary={data.snippet.title}
                />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(MediaCard));
