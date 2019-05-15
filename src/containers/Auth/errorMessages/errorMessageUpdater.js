import React from 'react'
import classes from './errorMessageUpdater.css'


const errorMessageUpdater = (errorMessage) => {

    let updatedErrorMessage = ''
    switch (errorMessage) {
        case 'EMAIL_NOT_FOUND':
            updatedErrorMessage = <p className={classes.errorMessageUpdater}>존재하지않는 이메일주소 입니다</p>
            break;
        case 'EMAIL_EXISTS':
            updatedErrorMessage = <p className={classes.errorMessageUpdater}>이미 가입된 이메일주소입니다</p>
            break;
        case 'INVALID_PASSWORD':
            updatedErrorMessage = <p className={classes.errorMessageUpdater}>올바르지않은 비밀번호입니다</p>
            break;
        case 'USER_DISABLED':
            updatedErrorMessage = <p className={classes.errorMessageUpdater}>정지된 유저입니다</p>
            break;
        default:
            updatedErrorMessage = <p className={classes.errorMessageUpdater}>알수없는 오류입니다</p>
            break;
    }
    return updatedErrorMessage
}

export default errorMessageUpdater
