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
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden"
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
  },
  contentWrapper: {
    // margin: "40px 16px"
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
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const { classes, app } = this.props;
    console.log(app.homeStore.videoId)
    const opts = {
      height: "560",
      width: "935",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div>
        <Paper className={classes.paper}>
          <div className={classes.contentWrapper}>
            <YouTube
              videoId={app.homeStore.videoId}
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </Paper>
        <Paper>
          <Typography component="p">
            {/* {app.homeStore.detail.item.title} */}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(CardDetail));
