slidenumbers: true

# React.js Training

---

# Setup

```
git clone https://github.com/rangle/react-training

npm install
jspm install

npm run dev
```

---

# Day 1:

- Setup (1 hr)
- Functional JavaScript + ES6 constructs (1 hr)
- Thinking in Components (1 hr)
- React (4 hr)

---

# Day 2:

- Immutable.js (1 hr)
- React + Redux (6 hr)
- Q&A (1 hr)

---

# Goal for Today:

- What web components are
- How to build React components
- Build the components required to construct our views
- The kitchen sink

---

# Goal for Tomorrow:

- Why Immutable.js is important and how to user it
- How and where to store state in a React application
- How to handle async code
- How to setup routing

---

# Functional JavaScript

- Show of hands those who have little to no experience with ES6
- TypeScript, Babel, etc.

---

# Default Params

```
function link(height = 50, color = 'red', url = 'google.com') {
  ...
}
```

---

# Template Literals

```
const color = 'red';
const str = `The color is ${ color }`;
// The color is red
```

---

# Destructuring

---

## Objects


```
const props = {
  firstName: 'Jane',
  lastName: 'Doe',
  id: 1243,
};

const { firstName, lastName } = props;

console.log(firstName, lastName);
// Jane, Doe

```

---

## Arrays


```
const events = ['Event1', 'Event2', 'Event3'];

const [pending, success, error] = events;

console.log(pending, success, error);
// 'Event1', 'Event2', 'Event3'

```

---

# Arrow Functions

```
const example = () => {
  console.log('hello world');
}

const onSuccess = (response) => response.result;

[1, 2, 3].map(i => console.log(i));
```

---

# Promises

```
const wait (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

wait(1000).then(() => console.log('tick'));
```

---

# let and const

```
const alwaysTheSame = 0;
let state = 0;

if (true) {
  state++; // valid
  alwaysTheSame++; // invalid
}
```

---

# Modules

```
import Parse from 'parse';
import { myFunc } from './myModule';
import * as myModule from './myOtherModule';

```

---

# Thinking in Components

---

![left 300%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/thinking-in-react-mock.png)

# Start with a Mock

- Break the UI into a hierarchy
- Single Responsibility Principle
- Think in terms of Information Architecture

---

![left 300%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/thinking-in-react-components.png)

# Component Hierarchy

1. FilterableProductTable (orange): contains the entirety of the example
2. SearchBar (blue): receives all user input
3. ProductTable (green): displays and filters the data collection based on user input
4. ProductCategoryRow (turquoise): displays a heading for each category
5. ProductRow (red): displays a row for each product

---

![left 75%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/thinking-in-react-task.png)

# Task #1
### Break Down the Mockup

---

![left 75%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/thinking-in-react-task.png)

# Answer #1

- Header
- Navigator
- NavigatorLink
- Content
- ProfileCard
- ProfileImage

---

# Lunch Break

---

# React

---

## Getting Started

```
git checkout 02-component
jspm install

npm run dev
```

Open `src/index.js`

---

# React Components
### Stateful vs. Stateless Components

---

![left 75%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/stateless-component.png)

# Stateless Component

- Super simple
- Given some state (as props)... return some DOM (or additional components)
- Pure.

##### Useful when...

- 95% of the time

---

# Let's look at code

#### `git checkout 02-component`
#### `jspm install`
#### `npm run dev`

---

![left 50%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/component-task.png)

# Task #2
### Create a component that renders a media object

- Should be made up of separate components: 
	- `<ProfileImage />`
	- `<Card />`
- Content for the `<Card />` should be provided as `children`

---

![left 75%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/stateful-component.png)

# Stateful Component

- Internal State
- Component Lifecycle Hooks

##### Useful when...

- We need to have an internal state
- We need to perform an action when the component is mounted

---

# Stateful vs. Stateless Components
### When to choose one over the other?

---

# Stateful

- We need internal state
	- D3 graph
- We need to utilize a Component Lifecycle hook
	- Ajax request on mount	

---

# Stateless
### 95% of the time

---

# Task #3
## Build a component which renders a list of profiles

- Use your previously created `<Card />` component
- Create a new stateful `<CardList />` component
- Store the array of profiles in state

```
[
  {
  	id: 1,
  	name: 'Jane React',
  	description: 'Coolest person alive'
  },
  ...
]
```

---

# Task #4
## Add a delete button to each profile

- The delete button should remove an item from the array
- Please use `Array().filter`

---

# Task #5
## Add the ability to add a profile to the list

- Will require moving the state out of `<ProfileList />`
- Create a new container component called `<App />` which stores the state
- Don't forget to breakdown components!
 	- Label
	- Input
	- Form
	- ProfileForm
