import React from 'react'
import classNames from 'classnames'

const footer = () => {
    const style = classNames('footer', 'sample')
    return (
        <div>
            <div className={style}>
                <h2>Footer Component</h2>
            </div>
        </div>
    )
} 

export default footer