slidenumbers: true

# React.js Training

---

# Setup

```
git clone https://github.com/rangle/react-training

npm install -g jspm
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
- A simple "todo list"

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

![left 50%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/lego-bricks.png)

# Components are Bricks

- Think of them as Lego bricks
- Build small components that together build larger components, screens
- Composition is key!

---

![left 15%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/lego-spaceplane.png)

# Composition

- We compose these bricks to build larger things

```
// LoginForm.js

<Form>
  <FormGroup>
    <Label>Username</Label>
    <Input name="username" />
    
    <Label>Password</Label>
    <Input name="password" />
  </FormGroup>
  
  <Button>Submit</Button>
</Form>
```

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
- Content for the `<Card></Card>` should be provided as `children`

---

# Task #3
### Build a component which renders a list of profiles

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

^ Bonus task:
- Add a counter that lists the amount of people in the list

---

# Task #4
### Add a delete button to each profile

- The delete button should remove an item from the array
- Please use `Array().filter`

^ Bonus task:
- Add a checkbox to each item in the list, allow a user to clear all selected items

---

# Task #5
### Add the ability to add a profile to the list

- Will require moving the state out of `<ProfileList />`
- Create a new container component called `<App />` which stores the state
- Don't forget to breakdown components!
	- Label, Input, Form, ProfileForm
	
^ Bonus task:
- Add ability to inline-edit each item

---

# Day 1 Recap

- How to think in components
	- Breaking down an interface
	- Think in small composable components
- Learned React
	- React is simple	
	- Stateful and Stateless Components
	- Defining interfaces that make sense
	- Composed small components to make larger components 
	
---

# Questions?	

---

# Day 2: Redux & Immutable.js

---

# Goal for Today

- Why Immutable.js is important and how to user it
- How and where to store state in a React application
- How to handle async code
- How to setup routing

---

# Immutable.js

---

# What is Immutable Data?

- A collection of data
- Once created, cannot be changed
- No defensive copying (*cough* `R.clone` *cough*, `angular.copy` *cough*)
- Advanced memoization
- Always yields new data!

---

# Immutable.js API

### List, Map, Set... and many more...

---

# Let's try it out

##### `http://neilff.github.io/immutable-repl`

^ Use `http://beta.json-generator.com/` to generate data

---

# Task #1
### Give me a list of the names of people

^ Example of using `get`

---

# Task #2
### Give me a list of the last names

^ Example of using `getIn`

---

# Task #3
### Give me the last name of the last person

^ Example of using `last` and `getIn`

---

# Task #4 
### The users with brown eyes

^ Example of using a `filter`

---

# Task #5
### A Map of the eye colors to count of people with that color

```
{
	"brown": 10,
	"green": 5,
	...
}
```

^ Example of using a `reduce`

---

# Task #6
### Add your own profile to the end of the list

^ Example of `update` with `push`

---

# Task #7
### Change the name of the first person to Marty Robbins

^ Example of using a `updateIn`

---

# Redux

---

# Overview 

- Application architecture
- Avoids pitfalls of MVC
- Global application state
- One way data flow
- Actions, Reducers, Store, View

---

![300%](http://i.kinja-img.com/gawker-media/image/upload/o3dgbksfdn7w8fzauk6p.png)

---

![75%](https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png)

---

# Actions

- Describes how we want to modify the state
- User interaction
	- Click, submit, entering text on a form, etc.
- For example, `ADD_PROFILE`
- Created by ActionCreators

---

# Action Creator

```
function createNewProfile(username, description) {
  return {
    type: 'ADD_PROFILE',
    payload: { username, password },
  };
}
```
---

# Reducers

- Receive actions, and modify the state
- Resposible for slices of the state
- Return a _new_ copy of the state after an action

---

# Profile Reducer

```
function profileReducer(state = {}, action = {}) {
  switch(action.type) {
    case ADD_PROFILE:
      return state.updateIn(['data'], i => i.push(action.payload));

    case DELETE_PROFILE:
      return state.updateIn(
        ['data'], 
        list => list.filter(i => i.id !== action.payload.id)
      );
     
    ...

    default:
      return state;
  }
}
```

---

# Store

- Global application state
- Single source of truth for the entire app
- Immutable (via Immutable.js)
- Connect Components to the store via. `react-redux`
- Takes several `reducers` and combines them to create a single large reducer

---

# View

- React views
- Smart components vs. Dumb components
- Uses `react-redux` to connect to the Store and retrieve data

--- 

# Example Time
### `shape-insights`


---

# Code Time

### `git checkout 04-redux`
### `jspm install`
### `npm run dev`

--- 

# Task #6

#### Rewrite the previous Profile Creator app in Redux

- Create a `profileReducer`
- Use Immutable to store your state
- Expand the reducer and its actions to `Create` and `Delete` entries

---

# Middleware

- Intercept actions before being dispatched
- Redux Logger
- Redux Thunk
- Async

---

# Redux Form

- Abstraction for persisting data in the store
- Easier than doing by hand
- Provides 

--- 

# Fetch

--- 

# Day 2 Recap

- How to work with Immutable data
- Redux

---

# Questions