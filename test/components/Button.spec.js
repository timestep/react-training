import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../src/components/Button';

describe('(Component) Button', () => {
  it('renders as a <button>', () => {
    const btn = shallow(<Button />);
    expect(btn.type()).to.eql('button');
  });

  it('allows styles to be passed in as props', () => {
    const expectedStyles = {
      height: '100%',
    };
    const btn = shallow(<Button style={ expectedStyles } />);
    expect(btn.prop('style')).to.eql(expectedStyles);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <Button>
        <div className="unique" />
      </Button>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Button onClick={ onClick } />);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
