import React, { Component } from 'react';
import classes from './DosirakBuilder.css';
import BuildControls from './BuildControls/BuildControls';
import DosirakView from '../../components/DosirakView/DosirakView';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { Redirect } from 'react-router-dom'

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
        totalPrice: 0,
        showOrderSummury: false,
        canOrder: false,
        loading: false,
        submitted: false
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

        this.selectedItemFinder().forEach(e => {
            totalPrice += e.price
        });

        this.setState({ menu: updatedMenu, totalPrice: totalPrice })
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
                    selectedItems.push({ ...updatedMenu[updatedSection][item], name: item, section: updatedSection })
                }
            }
        }
        //name,price,section,selected를 property로 같는 objects를 가진 array
        return selectedItems
    }


    //주문하기 버튼을 누르면 주문내역이 보이게하고 안보이게하는 메소드
    orderButtonHandler = () => {
        this.setState({ showOrderSummury: true })
    }
    orderCancelHandler = () => {
        this.setState({ showOrderSummury: false })
    }

    //ordersummary의 주문하기 버튼을 누르면 firebase의 데이터베이스로 json 전송
    orderConfirmHandler = () => {
        this.setState({ loading: true })
        const order = {
            items: this.selectedItemFinder().map(e => {
                return (e.name)
            }),
            price: this.state.totalPrice,
            customer: {
                name: 'jihong park',
                address: {
                    street: 'cheunyongdong',
                    country: 'South Korea'
                },
                email: 'test@gamil.com'

            }
        }
        axios.post('.json', order)
            .then(respone => {
                this.setState({ loading: false, showOrderSummury: false, submitted: true });
                //orders로 리다이렉팅
                //this.props.history.push('/orders')
            }
            )
            .catch(error => {
                this.setState({ loading: false, showOrderSummury: false })
            })
    }

    componentDidMount() {
        console.log(this.props)
    }
    render() {
        //선택된 아이템의 array
        let items = [];
        this.selectedItemFinder().map(e => {
            return items.push(e)
        })

        //1이상 아이템을 선택하면 주문버튼 활성화
        let canOrder = { ...this.state.canOrder };
        if (items.length > 0) {
            canOrder = !canOrder
        }

        //orderSummary가 로딩중일때 spinner를 보여줌
        let orderSummary = null;
        if (this.state.loading) {
            orderSummary = <Spinner />
        } else {
            orderSummary = <OrderSummary
                loading={this.state.loading}
                selectedItems={items}
                totalPrice={this.state.totalPrice}
                canceled={this.orderCancelHandler}
                confirmed={this.orderConfirmHandler}></OrderSummary>
        }

        //주문이 완료되면 /orders로 리다이렉트
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to='/orders' />
        }

        return (
            <>
                {redirect}
                <Modal show={this.state.showOrderSummury} canceled={this.orderCancelHandler} loading={this.state.loading}>
                    {orderSummary}
                </Modal>
                <div className={classes.DosirakBuilder}>
                    <DosirakView selectedItems={items} />
                    <BuildControls clicked={this.menuClickHandler} menu={{ ...this.state.menu }} />
                    <div className={classes.PriceAndOrderFlexContainer}>
                        <div className={classes.TotalPrice}>총 가격 : {this.state.totalPrice}</div>
                        <Button btnType="Enter" orderable={canOrder} className={classes.OrderButton} clicked={this.orderButtonHandler} >주문하기</Button>
                    </div>

                </div>
            </>

        )
    }

}
export default withErrorHandler(DosirakBuilder, axios);