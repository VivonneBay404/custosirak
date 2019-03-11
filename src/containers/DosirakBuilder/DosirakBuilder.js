import React, { Component } from 'react';
import classes from './DosirakBuilder.css';
import BuildControls from './BuildControls/BuildControls'

class DosirakBuilder extends Component {

    state = {
        menu: {
            반찬1: {
                제육볶음: {
                    selected: false, price: 1000
                },
                불고기: {
                    selected: false, price: 1200
                }
            },
            반찬2: {
                오뎅볶음: {
                    selected: false, price: 800
                },
                가지볶음: {
                    selected: false, price: 900
                }
            }
        },
        totalPrice: 0
    }
    menuClickHandler = (item, section) => {
        const oldSection = this.state.menu[section];
        const oldItem = oldSection[item];
        const oldItemSelected = oldItem.selected;


        const updatedMenu = { ...this.state.menu };
        const updatedSection = updatedMenu[section];
        const updatedItem = updatedSection[item];
        let updatedItemSelected = null;

        if (oldItemSelected) {
            updatedItemSelected = !oldItemSelected;
        } else {
            for(const items in oldSection){
                oldSection[items].selected = false
            }
            updatedItemSelected = !oldItemSelected;
        }
        updatedItem.selected = updatedItemSelected;
        let totalPrice = 0
        for(const updatedSection in updatedMenu){
            for(const item in updatedMenu[updatedSection]){
                if(updatedMenu[updatedSection][item].selected === true){
                    totalPrice = totalPrice + updatedMenu[updatedSection][item].price
                }
            }
        }
        this.setState({ menu: updatedMenu, totalPrice: totalPrice})
        console.log(this.state)
    }

    render() {
        return (
            <div className={classes.DosirakBuilder}>
                <h1>DosirakBuilder Display</h1>
                <BuildControls clicked={this.menuClickHandler} menu={{ ...this.state.menu }} />
                <p>총 가격 : {this.state.totalPrice}</p>
            </div>

        )
    }

}
export default DosirakBuilder;