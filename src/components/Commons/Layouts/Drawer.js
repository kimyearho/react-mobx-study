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
import classNames from 'classnames'

const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

@inject("app")
@observer
class LeftContents extends Component {

  state = {
    items: []
  };

  componentDidMount = () => {
    const menu = [
      { menuName: 'My Chat', url: '' },
      { menuName: 'Channel', url: '' },
      { menuName: 'Workspace', url: '' }
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
              <ListItem button key={item.menuName}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={item.menuName} />
              </ListItem>
            ))
          }
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(LeftContents)
