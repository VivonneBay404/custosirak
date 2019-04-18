import React, { Component } from 'react';
import classes from './DosirakBuilder.css';
import BuildControls from './BuildControls/BuildControls';
import DosirakView from '../../components/DosirakView/DosirakView'

class DosirakBuilder extends Component {

    state = {
        menu: {
            반찬1: {
                오징어볶음: {
                    selected: false, price: 1500
                },
                불고기: {
                    selected: false, price: 1800
                }
            },
            반찬2: {
                오뎅볶음: {
                    selected: false, price: 800
                },
                가지볶음: {
                    selected: false, price: 900
                }
            },
            반찬3: {
                볶은김치: {
                    selected: false, price: 600
                },
                김치: {
                    selected: false, price: 500
                }
            },
            밥: {
                백미밥: {
                    selected: false, price: 500
                },
                현미밥: {
                    selected: false, price: 600
                }
            },
            국: {
                된장국: {
                    selected: false, price: 800
                },
                미역국: {
                    selected: false, price: 600
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

        // section엔 하나의 true만 있게 만드는 로직
        if (oldItemSelected) {
            updatedItemSelected = !oldItemSelected;
        } else {
            for (const items in oldSection) {
                oldSection[items].selected = false
            }
            updatedItemSelected = !oldItemSelected;
        }
        updatedItem.selected = updatedItemSelected;

        //총 가격 로직
        let totalPrice = 0
        // for(const updatedSection in updatedMenu){
        //     for(const item in updatedMenu[updatedSection]){
        //         if(updatedMenu[updatedSection][item].selected === true){
        //             totalPrice = totalPrice + updatedMenu[updatedSection][item].price
        //         }
        //     }
        // }

        this.selectedItemFinder().forEach(e => {
            totalPrice += e.price
        });

        this.setState({ menu: updatedMenu, totalPrice: totalPrice })
        console.log(this.state)
    }


    //selected 프로퍼티가 true면 selectedItems 란 array에 selected된 item을 넣고 return하는 func
    selectedItemFinder = () => {
        //state의 menu를 복사
        const updatedMenu = { ...this.state.menu };
        let selectedItems = []
        //updatedMenu를 recursive loop로 검색, selected가 true면 push로 array에 넣음
        for (const updatedSection in updatedMenu) {
            for (const item in updatedMenu[updatedSection]) {
                if (updatedMenu[updatedSection][item].selected === true) {
                    selectedItems.push({...updatedMenu[updatedSection][item],name: item,section:updatedSection})
                }
            }
        }
        //name,price,section,selected를 property로 같는 objects를 가진 array
        return selectedItems
    }

    render() {
        let items = [];
         this.selectedItemFinder().map(e => {
            return items.push(e)
        })
        
        return (
            <div className={classes.DosirakBuilder}>
                <DosirakView selectedItems ={items}/>
                <BuildControls clicked={this.menuClickHandler} menu={{ ...this.state.menu }} />
                <p>총 가격 : {this.state.totalPrice}</p>
            </div>

        )
    }

}
export default DosirakBuilder;