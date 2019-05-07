import React, { Component } from "react";
import '../../assets/css/App.css'
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames'

import Drawer from '././Layouts/Drawer'
import Contents from './Layouts/Contents'

class Body extends Component {
    render() {
        const leftLayout = classNames('contents', 'left')
        const rightLayout = classNames('contents', 'right')
        return (
            <div className="app">
                <Grid container>
                    <Grid item xs={12} md={2}>
                        {/* <Counter callbackData={this.parentCallback} /> */}
                        <div className={leftLayout}>
                            <Drawer />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <div className={rightLayout}>
                            <Contents />
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Body