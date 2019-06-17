import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";

import YouTube from "react-youtube";

const styles = theme => ({
  paper: {
    maxWidth: 1280,
    margin: "auto",
    overflow: "hidden",
    background: "#000"
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: "block"
  },
  addUser: {
    marginRight: theme.spacing.unit
  }
});

@inject("app")
@observer
class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.homeStore = this.props.app.homeStore;
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.homeStore.findDetailVideo(id);
  }

  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const { classes, app } = this.props;
    const opts = {
      height: "720",
      width: "1280",
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <div style={{ 'background': '#000' }}>
        <Paper className={classes.paper}>
          <YouTube
            videoId={app.homeStore.videoId}
            opts={opts}
            onReady={this._onReady}
          />
        </Paper>
        <Paper style={{ borderRadius: '0px' }}>
          <Typography component="p" style={{ paddingLeft: '10px', fontSize: '23px' }}>
            {app.homeStore.detail.item.title}
          </Typography>
          <Typography component="p" style={{ paddingLeft: '10px', fontSize: '18px' }}>
            {app.homeStore.detail.item.channelTitle}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(CardDetail));
