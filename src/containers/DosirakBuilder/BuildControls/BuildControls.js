import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import classes from './BuildControls.css'

const BuildControls = (props) => {
    const menu = props.menu;
    const sectionArr = [];
    for (const key in menu) {
        sectionArr.push({
            key: key,
            section: key,
            items: menu[key]
        })
    }
    const buildcontrol = sectionArr.map((e) => {
        return (
            <BuildControl key={e.key} section={e.key} item={e.items} clicked={props.clicked} />
        )
    })

    return (
        <div className={classes.BuildControls}>
            {buildcontrol}
        </div>
    )
}


export default BuildControls