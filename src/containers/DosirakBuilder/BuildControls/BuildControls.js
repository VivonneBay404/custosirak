import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const BuildControls = (props) => {
    const items = [
        {반찬1 : [
                {name: '제육볶음',price: 1000},
                {name: '불고기',price: 1200}
            ]
        },

        {반찬2 : [
                {name: '오뎅볶음',price: 800},
                {name: '가지볶음',price: 900}
            ]
        }
    ]

    const buildControls = items.map((section,index)=> {
       const sectionName = Object.keys(section);
        return (
        <BuildControl 
            key={sectionName}  
            section={sectionName} 
            btnArr={section[sectionName]}/>
        )
    })
      
      
    
    return buildControls
}


export default BuildControls