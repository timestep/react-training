import React from 'react';
import ReactDOM from 'react-dom';

import ProfileCard from './components/ProfileCard';

ReactDOM.render(
  <div>
    <ProfileCard>
      <h3>Jane Doe</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec scelerisque dolor, non aliquam dolor.</p>
    </ProfileCard>
  </div>,
  document.getElementById('root')
);
