import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('checks for button', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.my-button').length).toBe(1)
  })
});

// describe('<App />', () => {
//   let wrapper;
//   const setState = jest.fn();
//   const useStateSpy = jest.spyOn(React, 'useState');
//   useStateSpy.mockImplementation(init => [init, setState]);

//   beforeEach(() => {
//     wrapper = shallow(<App />);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   describe('Load more, ', () => {
//     it('calls set number with 3', () => {
//       wrapper
//         .find('.my-button')
//         .props()
//         .onClick();
//       expect(setState).toHaveBeenCalledWith(3);
//     });
//   });
// });
