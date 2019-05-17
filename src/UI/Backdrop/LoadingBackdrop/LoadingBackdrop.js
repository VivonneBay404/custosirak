import React from 'react'
import classes from './LoadingBackdrop.css'
import Backdrop from '../Backdrop'
import Spinner from '../../Spinner/Spinner'

const LoadingBackdrop = (props) => {
    let loadingBackdrop = null
    if (props.loading) {
        loadingBackdrop = (
            <div className={classes.LoadingBackdrop}>
                <Backdrop className={classes.Backdrop} show>
                    <div className={classes.Spinner}>
                        <Spinner />
                    </div>
                </Backdrop>
            </div>

        )
    }
    return loadingBackdrop


}

export default LoadingBackdrop