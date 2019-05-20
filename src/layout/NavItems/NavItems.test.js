import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NavItems from './NavItems'
import NavItem from './NavItem/NavItem'

configure({ adapter: new Adapter() })

describe('<NavItems />', () => {

    let wrapper
    beforeEach(() => {
         wrapper = shallow(<NavItems/>)
    })

    it('should render three <NavItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavItem)).toHaveLength(3)
    })
    it('should render three <NavItem /> elements if authenticated', () => {
        // wrapper = shallow(<NavItems isAuthenticated/>)
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavItem)).toHaveLength(4)
    })
    it('should have log out button if authenticated', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavItem link='/logout'>Log out</NavItem>)).toEqual(true)
    })
})