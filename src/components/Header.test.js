import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'


Enzyme.configure({ adapter: new Adapter() })

describe("When the Header Load...", () => {
    let header
    beforeEach(() => {
        header = shallow(<Header />)
    })

    it("displays a navlink on the header", () => {
        //Arrange the Header

        //Act on the header by finding an element
        const navLinkWrapper = header.find("NavLink")
        expect(navLinkWrapper.length).toEqual(3)
        
        const navDropdownWrapper = header.find("DropdownItem")
        expect(navDropdownWrapper.length).toEqual(4)
    })
    it("has a brand of 'Cat Tinder'",() => {

        const NavbarBrandWrapper = header.find('NavbarBrand')
        console.log("nav bar brand debug", NavbarBrandWrapper.debug());
        console.log("nav bar brand props", NavbarBrandWrapper.props());
        expect(NavbarBrandWrapper.props().children).toEqual("Cat Tinder")
})