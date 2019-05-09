import React from 'react'
import classes from './DiffAddrForm.css'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'


const DiffAddrForm = (props) => {

    return (
        <div className={classes.DiffAddrForm}>
        
            <Input label='다른 주소로 주문' inputType='input' placeholder='다른 주소'/>
            <Button btnType='Cancel' clicked={props.canceled}>취소</Button>
            <Button btnType='Enter'>주문하기</Button>
            
        </div>
    )
}

export default DiffAddrForm