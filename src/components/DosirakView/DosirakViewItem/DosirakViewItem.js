import React from 'react';
import classes from './DosirakViewItem.css'
import octopus from '../../../assets/images/foodItems/fried-octopus.png'
import kimchi from '../../../assets/images/foodItems/kimchi.png'
import whiteRice from '../../../assets/images/foodItems/white-rice-alpha.png'
import friedRice from '../../../assets/images/foodItems/fried-rice.png'
import garlicStalk from '../../../assets/images/foodItems/garlic-stalk.png'
import cucumber from '../../../assets/images/foodItems/cucumber.png'
import bulgogi from '../../../assets/images/foodItems/bulgogi.png'
import muKimchi from '../../../assets/images/foodItems/mu-kimchi.png'
import soybeanSoup from '../../../assets/images/foodItems/soybean-soup.png'
import soontofuSoup from '../../../assets/images/foodItems/soontofu-soup.png'


const dosirakItems = (props) => {
    const section = props.section;
    const itemName = props.name;
    let sectionForGrid = '';
    let itemForGrid = '';

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
    switch (itemName) {
        case '오징어볶음':
            itemForGrid = octopus
            break;
        case '김치':
            itemForGrid = kimchi
            break;
        case '백미밥':
            itemForGrid = whiteRice
            break;
        case '볶음밥':
            itemForGrid = friedRice
            break;
        case '마늘쫑':
            itemForGrid = garlicStalk
            break;
        case '오이짱아찌':
            itemForGrid = cucumber
            break;
        case '불고기':
            itemForGrid = bulgogi
            break;
        case '무김치':
            itemForGrid = muKimchi
            break;
        case '된장찌개':
            itemForGrid = soybeanSoup
            break;
        case '순두부찌개':
            itemForGrid = soontofuSoup
            break;
        default:
            break;
    }
    return (
        <div className={classes.DosirakViewItem} style={{ gridArea: sectionForGrid }}>
            <img src={itemForGrid} alt={props.children} />
        </div>
    )
}

export default dosirakItems 