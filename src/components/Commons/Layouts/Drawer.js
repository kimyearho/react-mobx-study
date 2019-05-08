import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import classNames from 'classnames'

const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

@inject("app")
@observer
class Drawer extends Component {

  state = {
    items: []
  };

  componentDidMount = () => {
    const menu = [
      { menuName: 'Home', url: '/home' },
      { menuName: 'Channel', url: '/channelList' },
      { menuName: 'Workspace', url: '/workspace' }
    ]
    this.setState({
      items: Object.assign([], menu)
    })
  };

  render() {
    // const { classes } = this.props;
    const style = classNames("sample")
    return (
      <div>
        <div className={style}>
          <h2>Left Menu Component</h2>
        </div>
        <Divider />
        <List>
          {
            this.state.items.map((item, index) => (
              <Link to={item.url} key={index} onClick={() => this.menuSelected(item)}>
                <ListItem button>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={item.menuName} /> {index} 
                </ListItem>
              </Link>
            ))
          }
        </List>
      </div>
    );
  }

  menuSelected = (item) => {
    console.log(item)
  }
}

export default withStyles(styles)(Drawer)
