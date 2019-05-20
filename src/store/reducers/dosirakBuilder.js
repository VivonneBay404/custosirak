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
            마늘쫑: {
                selected: false, price: 800
            },
            오이짱아찌: {
                selected: false, price: 900
            }
        },
        반찬3: {
            무김치: {
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
            볶음밥: {
                selected: false, price: 600
            }
        },
        국: {
            된장찌개: {
                selected: false, price: 800
            },
            순두부찌개: {
                selected: false, price: 600
            }
        }
    },
    totalPrice: 0,
    wasBuilding: false,
    diffAddr: ''
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
                        마늘쫑: {
                            selected: false, price: 800
                        },
                        오이짱아찌: {
                            selected: false, price: 900
                        }
                    },
                    반찬3: {
                        무김치: {
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
                        볶음밥: {
                            selected: false, price: 600
                        }
                    },
                    국: {
                        된장찌개: {
                            selected: false, price: 800
                        },
                        순두부찌개: {
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
        case actionTypes.SET_DIFF_ADDR:
            return {
                ...state,
                diffAddr: action.diffAddr
            }
        default:
            return state;
    }

}


export { reducer }