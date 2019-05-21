import React from 'react';
import classes from './BuildControl.css'

const BuildControl = (props) => {
    const items = props.item;
    let itemArr = [];
    for (const item in items) {
        itemArr.push({
            item: item,
            price: items[item].price,
            selected: items[item].selected
        })
    }
    const btns = itemArr.map((e) => {

        let attachedClasses = [classes.Button]
        if (e.selected) {
            attachedClasses = [classes.Button, classes.Selected]
        }
        return (
            <button key={e.item} className={attachedClasses.join(' ')} onClick={() => props.clicked(e.item, props.section)}>{e.item} | {e.price}</button>
        )
    })
    return (
        <div className={classes.BuildControl} >
            <div className={classes.Section}>{props.section}</div>
            {btns}
        </div>
    )
}

export default BuildControl