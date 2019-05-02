import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

import '../../assets/css/App.css'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    rootTable: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    cell: {
        fontSize: 20
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    mgnTop20: {
        marginTop: 60
    },
    button: {
        margin: theme.spacing.unit
    }
});

@inject('root')
@observer
class User extends Component {

    state = {
        open: false
    }

    handnOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { root, classes } = this.props;
        
        return (
            <div className="App-header">
                <div className={classes.mgnTop20}>
                    <h1>User Status</h1>
                    {root.userStore.userInfo.userName} / {root.userStore.userInfo.userJob}
                    <Grid container className={classes.root} spacing={24}>
                        <Grid item xs></Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.rootTable}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Level</TableCell>
                                            <TableCell align="center">HP</TableCell>
                                            <TableCell align="center">MP</TableCell>
                                            <TableCell align="center">공격력</TableCell>
                                            <TableCell align="center">방어력</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className={classes.cell} align="center">
                                                {root.userStore.userStatus.level}
                                            </TableCell>
                                            <TableCell className={classes.cell} align="center">
                                                {root.userStore.userStatus.minHp} / {root.userStore.userStatus.maxHp}
                                            </TableCell>
                                            <TableCell className={classes.cell} align="center">
                                                {root.userStore.userStatus.minMp} / {root.userStore.userStatus.maxMp}
                                            </TableCell>
                                            <TableCell className={classes.cell} align="center">
                                                {root.userStore.userStatus.str}
                                            </TableCell>
                                            <TableCell className={classes.cell} align="center">
                                                {root.userStore.userStatus.def}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                        <Grid item xs></Grid>
                    </Grid>
                </div>
                <div className={classes.mgnTop20}>
                    <Grid container className={classes.root} spacing={24}>
                        <Grid item xs></Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" className={classes.button}
                                onClick={root.userStore.levelUp}>
                                레벨업
                            </Button>
                            <Button variant="contained" color="secondary" className={classes.button}
                                onClick={root.enemyStore.enemyAttack}>
                                데미지 테스트
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button}
                                onClick={root.userStore.usePotion}>
                                포션 사용
                            </Button>
                        </Grid>
                        <Grid item xs></Grid>
                    </Grid>
                </div>
                <Snackbar
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Fade}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">레벨업!!</span>}
                />
            </div >
        )
    }
}

export default withStyles(styles)(User);