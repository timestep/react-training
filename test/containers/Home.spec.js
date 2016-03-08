import React from 'react';
import { mount, render } from 'enzyme';
import { spy } from 'sinon';
import { fromJS } from 'immutable';
import { Home } from '../../src/containers/Home';
import TopicCard from '../../src/components/TopicCard';

describe('(Container) Home', () => {
  it('calls componentDidMount', () => {
    spy(Home.prototype, 'componentDidMount');
    const wrapper = mount(<Home onComponentDidMount={() => {}} />);
    expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('should render a loading visual if `isLoading` is true', () => {
    const wrapper = mount(
      <Home
        onComponentDidMount={() => {}}
        isLoading={ true } />
    );


    expect(wrapper.find('.js-loading')).to.have.length(1);
  });

  it('should render a message if loading is complete, but there is no content', () => {
    const wrapper = mount(
      <Home
        onComponentDidMount={() => {}}
        isLoading={ false } />
    );

    expect(wrapper.find('.js-loading')).to.have.length(0);
    expect(wrapper.find('h2')).to.have.length(1);
  });

  it('should render the lastest card if there is data', () => {
    const wrapper = mount(
      <Home
        latestCard={fromJS({
          objectId: 1234,
          title: 'Foo',
          description: 'Bar',
        })}
        onComponentDidMount={() => {}}
        onMarkInterested={() => {}}
        onMarkUninterested={() => {}}
        isLoading={ false } />
    );

    expect(wrapper.find('.js-topic-card')).to.have.length(1);
  });
});
