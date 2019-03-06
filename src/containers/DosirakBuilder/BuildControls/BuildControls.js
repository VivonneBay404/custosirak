import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const BuildControls = (props) => {
    const items = {
        반찬1 : {
            제육볶음: {
                price: 1000
            },
            불고기: {
                price: 1200
            }
        },
        반찬2 : {
            오뎅볶음: {
                price: 800
            },
            가지볶음: {
                price: 900
            }
        },
        반찬3 : {
            김치: {
                price: 800
            },
            볶은김치: {
                price: 1000
            }
        },
        밥 : {
            백미: {
                price: 1000
            },
            잡곡밥: {
                price: 1100
            }
        },
        국 : {
            미역국: {
                price: 1500
            },
            된장국: {
                price: 1400
            }
        }
        
    }
       let itemArray = [];
       for(let key in items){
            itemArray.push({
               key : key,
               item : Object.keys(items[key]),
               price :Object.values(items[key]).map((i)=>{
                    return i.price
               })}
            )
           };
       
       console.log(itemArray)
       const buildControls = itemArray.map((i)=>{
            return(
                <BuildControl key = {i.key} section ={i.key} items ={i.item} prices ={i.price}/>
            )
       })
    
    return buildControls
}


export default BuildControls