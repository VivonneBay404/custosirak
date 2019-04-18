import React from 'react';
import classes from './DosirakViewItem.css'
import octopus from '../../../assets/images/foodItems/fried-octopus.png'

const dosirakItems = (props) => {
    const section = props.section;
    let sectionForGrid = '';
    //section에 따라 grid-area value를 스위치
    switch (section) {
        case '반찬1':
            sectionForGrid = 'banchan1'
            break;
        case '반찬2':
            sectionForGrid = 'banchan2'
            break;
        case '반찬3':
            sectionForGrid = 'banchan3'
            break;
        case '밥':
            sectionForGrid = 'rice'
            break;
        case '국':
            sectionForGrid = 'soup'
            break;
        default:
            break;
    }
    return (
        <div className={classes.DosirakViewItem} style={{ gridArea: sectionForGrid }}>
            {props.children}
            <img src={octopus} alt={props.children} />
        </div>
    )
}

export default dosirakItems 