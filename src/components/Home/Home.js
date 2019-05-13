import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../Card/Card'

const styles = theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    gridItem: {
        marginBottom: `${20}px`
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
    },
    divider: {
        margin: `${theme.spacing.unit * 2}px 0`,
    },
});

@inject('app')
@observer
class Home extends Component {

    state = {
        list: [],
        nextToken: ''
    }

    componentDidMount = () => {
        const searchList = this.props.app.requestStore.findSearch()
        searchList.then(result => {
            const data = result.data;
            this.setState({ list: data.items })

            if (data.nextPageToken) {
                this.setState({ nextToken: data.nextPageToken })
            }
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1 className="sample">Wellcome Home Component</h1>
                <Grid container>
                    {
                        this.state.list.map((item, index) => (
                            <Grid className={classes.gridItem} item xs={3}  key={index}>
                                <Card data={item} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Home);