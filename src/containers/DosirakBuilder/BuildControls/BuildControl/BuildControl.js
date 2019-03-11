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
            <div className={classes.BuildControl}  key={e.item}>
                <button className={btnClass} onClick ={()=>props.clicked(e.item,props.section)}>{e.item} | {e.price}</button>
            </div>
        )
    })
    return (
        <div>
            <h3>{props.section}</h3>
           {btns}
        </div>
    )
}

export default BuildControl