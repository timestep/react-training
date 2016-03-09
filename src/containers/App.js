import React, { Component } from 'react';
import ProfileList from '../components/ProfileList';
import ProfileAddForm from '../components/ProfileAddForm';
import Button from '../components/Button';

const PROFILES = [
  {
    id: 1,
    name: 'Jane React',
    description: 'hoola',
  },
  {
    id: 2,
    name: 'Jan Reacta',
    description: 'hooli',
  },
  {
    id: 3,
    name: 'Shri Jaani Reactpuram Jii',
    description: 'hoolu',
  },
  {
    id: 4,
    name: 'Junko Rikutou sama',
    description: 'hora hora',
  },
];

const dishonored = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      dishonored: dishonored,
      profiles: PROFILES.map((profile) => {
        return {onClick: () => {
          this.setState({
            dishonored: [
              ...this.state.dishonored,
              profile.id,
            ],
          });
        }, ...profile};
      }),
    };
  }

  render() {
    return (
      <div>
        <ProfileAddForm onSubmit={ this.addProfile }/>
        <Button onClick={ this.undo }>Undo</Button>
        <ProfileList profiles={ this.state.profiles.filter((profile) => this.state.dishonored.indexOf(profile.id) < 0) } />
      </div>
    );
  }

  addProfile = (profile) => {
    this.setState({
      profiles: this.state.profiles.concat(profile),
    });
  }

  undo = () => {
    this.setState({
      dishonored: this.state.dishonored.slice(0, this.state.dishonored.length - 1),
    });
  };
}

export default App;
