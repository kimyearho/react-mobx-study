import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { inject, observer } from "mobx-react";

const styles = {
  card: {
    maxWidth: 325
  },
  media: {
    height: 140
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
    this.props.history.push("/home/detail/123");
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
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={data.snippet.thumbnails.high.url}>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data.snippet.title} />
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
