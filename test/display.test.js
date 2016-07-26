//
//dont want to explode
//test props are passed in properly
//test arguments to map function
//

// var React = require('react');
// var expect = require('expect');
// var shallow = require('enzyme');
// var display = require('./../Client/Admin_client/Components/display.jsx');
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import expect from 'expect';

import { Display } from './../Client/Admin_client/Components/display';


let actualState = {};

function checkState(state) {
  actualState = state;
}


describe('Component : Display', () => {
	const  props = {
		emptyBeds: [1,2], 
		census: [3,4] 
	}; 

	let wrapper = mount(<Display emptyBeds={{hello: 'people'}} occupied={{goodbye:'now'}} />); 

	

	it('Does things', () => {
		expect(true).toEqual(true);
	});
	
	it('contains an input field', () => {
		expect(wrapper.find('input')).to.have.length(1); 
	 }); 




});