import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames'

const styles = (theme) => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
})

@inject('app')
@observer
class InputMessage extends Component {
    render() {
        const { classes } = this.props;
        const style = classNames("room-input-message", classes.textField)
        return (
            <div>
                <TextField
                    id="standard-textarea"
                    label="Multiline Input Message Component"
                    placeholder="Placeholder"
                    multiline
                    className={style}
                    margin="normal"
                />
            </div>
        )
    }
}

export default withStyles(styles)(InputMessage)