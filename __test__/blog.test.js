import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
configure({ adapter: new Adapter() });

import Blogs from "../src/Pages/Blogs/Blogs";
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Blog Testing', () => {
    it('Blog Success ', () => {
        const wrapper = shallow(<Blogs />)
        expect(wrapper).toBe(true)
    });
});