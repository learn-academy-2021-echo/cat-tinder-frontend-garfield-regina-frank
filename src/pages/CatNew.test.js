import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './Home'

 Enzyme.configure({ adapter: new Adapter() })

 describe("When CatNew  Loads...", () => {
    it("displays an h2", () => {
        const CatNewRender = shallow(<CatNew />)
        const h2Wrapper = catNewRender.find("h2")
        expect(h2Wrapper.length ).toEqual(1);
    })
    it("dispays a form for the user to fill out", () =>{
        const catNewRender = shallow(<CatNew />)
        const formWrapper = catNewRender.find("Form")
        expect(formWrapper.length).toEqual(1)
    })
})