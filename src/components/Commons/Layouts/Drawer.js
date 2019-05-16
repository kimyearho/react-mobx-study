import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

@inject("app")
@observer
class Drawer extends Component {

  constructor(props) {
    super(props)
    this.success = this.success.bind(this)
  }

  state = {
    items: [],
    isLogin: false
  };

  componentDidMount = () => {
    this.success()
    this.props.app.eventStore.on('successLogin', this.success)
    const menu = [
      { menuName: 'Home', url: '/home' },
      { menuName: 'Channel', url: '/channelList' }
    ]
    this.setState({
      items: Object.assign([], menu)
    })
  };

  success = () => {
    this.setState({
      isLogin: this.props.app.userStore.getItem()
    })
  }

  render() {
    const leftMenu = classNames('contents', 'left')
    return (
      <div className={leftMenu}>
        <div className="sample">
          <h2>Left Menu Component</h2>
        </div>
        <Divider />
        <List>
          {
            this.state.items.map((item, index) => (
              <Link to={item.url} key={index} onClick={(e) => this.menuSelected(item, e)}>
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

  menuSelected = (item, e) => {
    console.log(item)
    const isLogin = this.state.isLogin;
    if(!isLogin) {
      alert('로그인해야 사용가능')
      e.preventDefault()
    } 
  }
}

export default withStyles(styles)(Drawer)
