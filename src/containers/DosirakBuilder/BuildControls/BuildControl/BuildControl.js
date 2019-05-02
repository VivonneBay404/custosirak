import React from 'react';
import classes from './BuildControl.css'

const BuildControl =(props) => {
    console.log(props)
    const items =props.item;
    let itemArr = [];
    for(const item in items){
        itemArr.push({
            item: item,
            price: items[item].price,
            selected: items[item].selected
        })
    }
    console.log('Buildcontrol.itemArr:' +itemArr)
    const btns =itemArr.map((e)=> {
        //if selected=true classes.selected else classes.button
        let btnClass = null;
        if(e.selected===true){
            btnClass = classes.Selected
        }else {
            btnClass = classes.BuildControl
        }
        return (
                <button key={e.item} className={btnClass} onClick ={()=>props.clicked(e.item,props.section)}>{e.item} | {e.price}</button>
        )
    })
    return (
        <div  className={classes.BuildControl} >
            <div className={classes.Section}>{props.section}</div>
           {btns}
        </div>
    )
}

export default BuildControl