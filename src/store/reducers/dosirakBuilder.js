import * as actionTypes from '../actions/actionTypes'

export const initialState = {
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
    wasBuilding: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.MENU_CLICKED:
            return {
                ...state,
                menu: action.updMenu,
                totalPrice: action.totalPrc

            }
        case actionTypes.STORE_INITIALIZE:
            return {
                ...state,
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
        case actionTypes.SET_WAS_BUILDING_TRUE:
            return {
                ...state,
                wasBuilding: true
            }
            case actionTypes.SET_WAS_BUILDING_FALSE:
            return {
                ...state,
                wasBuilding: false
            }
        default:
            return state;
    }
    // return {
    //     ...state,
    //     menu: {
    //         ...state.menu,
    //         [action.sectionID]: {
    //             ...state.menu[action.sectionID],
    //             [action.itemID]: {
    //                 ...state.menu[action.sectionID][action.itemID],
    //                 [action.itemID]: state.menu[action.sectionID][action.itemID].selected
    //             }
    //         }

    //     }
    // }

}


export { reducer }