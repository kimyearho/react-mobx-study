import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    divider: {
        margin: `${6}px`
    },
    listItem: {
        margin: `${10}px 0px ${10}px 0px`
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
        margin: `${10}px`,
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
});

function generate(element) {
    return [0].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

@inject('app')
@observer
class Channel extends Component {
    state = {
        dense: false,
        secondary: false,
    };
    render() {
        const { classes } = this.props;
        const { dense, secondary } = this.state;
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Typography variant="h2" className={classes.divider}>
                            Channel
                        </Typography>
                        <Divider />
                        <div className={classes.demo}>
                            <List dense={dense}>
                                {generate(
                                    <ListItem className={classes.listItem}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton aria-label="Delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>,
                                )}
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Channel);