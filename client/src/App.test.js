import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Header from './components/Header';
import Houses from './components/Houses';
import expectExport from 'expect';

describe('App component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
  it('should contain one Header', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Header).props().title).toBe(
      'App that displays some data'
    );
  });

  it('should contain Houses', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Houses).exists()).toBe(true);
  });
});
