import { DosirakBuilder } from './DosirakBuilder'
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BuildControls from '../DosirakBuilder/BuildControls/BuildControls'


configure({ adapter: new Adapter() })

describe('<DosirakBuilder />',() => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<DosirakBuilder/>)
    })

    it('should render <BuildControl /> when receiving menu', () => {
        wrapper.setProps({ menu: {
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
        },})
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })
})
