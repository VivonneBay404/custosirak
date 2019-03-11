import React from 'react';
import classes from './BuildControl.css'

const BuildControl =(props) => {
    console.log(props)
    const items =props.item;
    console.log("BC.items:" +items)
    let itemArr = [];
    for(const item in items){
        itemArr.push({
            item: item,
            price: items[item].price
        })
    }
    console.log('Buildcontrol.itemArr:' +itemArr)
    const btns =itemArr.map((e)=> {
        return (
            <div className={classes.Button}>
                <button onClick ={()=>props.clicked(e.item,props.section)} key={e.item}>{e.item} | {e.price}</button>
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