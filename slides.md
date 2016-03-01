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

# Atomic Design
### By Brad Frost

---

> _We're not designing pages, we're designing systems of components_
> -- Stephen Hay

---

# Atomic Design Principles

![inline fill](https://raw.githubusercontent.com/rangle/react-training/training-material/images/atomic-design.png)

---

# _But..._

---

#[fit] We are designing a _single-page application_

---

# We should never think of our interfaces as _Pages_

---

## Instead we should think in terms of _stateless_, _dynamic abstractions_, which are rendered based on the state provided

---

# Atomic Component Principles

![inline 55%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/atomic-components.png)

---

![left fit](https://raw.githubusercontent.com/rangle/react-training/training-material/images/atoms.jpg)

# Atoms[^1]

- The simplest building block
- HTML tags
- Not very useful on their own
- Easily styled
- Very reusable
- Foundation of building a brand

```
<Form>
  <Label>Search</Label>
  <Input />
</Form>
```

[^1]: Image from Brad Frosts's article, [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

---

![left fit](https://raw.githubusercontent.com/rangle/react-training/training-material/images/molecule.jpg)

# Molecules[^1]

- Groups of Atoms bonded together
- Serve as backbone of design system
- For example, a Search Form
- Do one thing, do it well

```
<Form onSubmit={ onSubmit }>
  <Label>Search</Label>
  <Input type="text" value={ search } />
  
  <Button type="submit">Search</Button>
</Form>
```

[^1]: Image from Brad Frosts's article, [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

---

![left fit](https://raw.githubusercontent.com/rangle/react-training/training-material/images/organism2.jpg)

# Organisms[^1]

- Groups of molecules
- Distinct section of an interface
- Portable, easily modified

```
<Header>
  <Navigator>
    <Brand />
    <NavItem to="home">Home</NavItem>
    <NavItem to="about">About</NavItem>
    <NavItem to="blog">Blog</NavItem>
  </Navigator>
  <SearchForm />
</Header>
```

[^1]: Image from Brad Frosts's article, [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

---

![left 50%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/ecosystem.png)

# Ecosystem[^1]

- What the client will see
- Connected containers
- Many components that make up a view

[^1]: Image from Joey Di Nardo's article, [Atomic Components: Managing Dynamic React Components using Atomic Design — Part 1](https://medium.com/@yejodido/atomic-components-managing-dynamic-react-components-using-atomic-design-part-1-5f07451f261f#.9b2faky8s).

---

![left fit](https://raw.githubusercontent.com/rangle/react-training/training-material/images/environment.png)

# Environment[^1]

- Root Component
- Typically the `<App />` component
- Represents everything packaged together as an application

[^1]: Image from Joey Di Nardo's article, [Atomic Components: Managing Dynamic React Components using Atomic Design — Part 1](https://medium.com/@yejodido/atomic-components-managing-dynamic-react-components-using-atomic-design-part-1-5f07451f261f#.9b2faky8s).

---

# Benefits of this Approach

- Single Responsibility Principle
- Modular components
- Build a Brand
	- Walmart Electrode

---

# The Process

---

![left 300%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/thinking-in-react-mock.png)

# Start with a Mock

- Break the UI into a hierarchy
- Single Responsibility Principle
- Think in terms of Information Architecture
- Atoms first, Molecules second

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

# The Motivation Behind Redux
### Reduce complexity

---

# Managing state is hard
### Server side responses, cached data, local data, routers, spinners, etc. etc. etc

^ Demands of frontend is way beyond what it was in the past

---

![300%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/mvc.png)

---

# If a model can update another model...

---

## Then a view can update a model..

---

### Which updates another model...

---

### How can we reason about this? 
### How can we debug this? 
### How can we replicate errors?

---

## At some point, you no longer understand what happens in your app

---

# You lose control over the WHEN, WHY, and HOW of its state

---

# And as if this isn't difficult enough to reason about... 

---

# Think of the new requirements becoming common in front-end product development... 

---

# Optimistic updates, server-side rendering, fetching data before route transitions, automatic client side caching, etc., etc., etc.

---

# The problem comes from two things:
## Mutation & Asynchronicity

^ React solves problems in the View layer by removing asynchrony and direct DOM manipulation
^ However managing state is left up to you

---

# Redux
### Makes state mutations _PREDICTABLE_

---

# Three Principles of Redux

### Single Source of Truth
### State is Read Only
### Changes are made with Pure Functions

---

# Single source of Truth

- Entire state is stored in an object tree
	- Easy to debug
	- Easy to inspect application
	- Easy to hydrate initial state

---

# State is READ ONLY

- Only way to mutate state is to emit an action
	- Actions describe what happened
	- Views, network callbacks, etc. will _never_ mutate state
	- Mutations are centralized and happen in strict order
	- No race conditions
	- Actions are objects, they can be logged, serialized, stored, and replayed 

---

# Changes are made with Pure Functions

- Reducers are responsible for modifying the state tree
	- Pure functions
	- Take in previous state, and action, and return new state
	- Can be split out into smaller reducers to manage specific parts of state tree
	
^ Same input results in same output

---

![75%](https://raw.githubusercontent.com/rangle/react-training/training-material/images/redux.png)

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

- Receive the current state, and an action
- Returns the modified state
- Resposible for slices of the state
- Can be made up of one, or many

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
- Connect Components to the store via. `react-redux`
- Takes several `reducers` and combines them to create a single large reducer

---

# View

- React views
- Smart components vs. Dumb components
- Uses `react-redux` to connect to the Store and retrieve data

--- 

# Example Time

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

---

# Task #7
#### Add the ability to `delete` an entry

---

# Forms

---

# Redux Form

- `npm install redux-form`
- Abstraction for persisting data in the store
- Useful when form state is needed in the store
	- Dynamic forms
	- Forms with Drafts (e.g. blog post)
	- Debugging

---

# React Formal

- `npm install react-formal`
- Easy to create Forms
- Uses `yup` to validate (similar to Joi)
- Useful for when form state is _not_ needed in the store
	- Login form
	- Generic CRUD forms

--- 

# Task #8
#### Add the ability to `create` an entry

- Use `react-formal` to manage your forms using local state

---

# Middleware

- Intercept actions before being dispatched
- Redux Logger
- Redux Thunk
- Async

---

# Redux Thunk

- Allows us to dispatch `functions`
- We can perform async operations with this
- Access `getState` and `dispatch`

```
function createNewProfile(username, description) {
  return (dispatch, getState) => {
  	dispatch({ type: CREATE_PROFILE_PENDING });
  	
  	profiles.create({ username, description })
  	  .then(response => dispatch({ type: CREATE_PROFILE_SUCCESS, payload: response }))
  	  .catch(error => dispatch({ type: CREATE_PROFILE_ERROR, payload: error }));
  };
}
```

---

# Task #9
#### Retrieve items from the server

- Previously it was hard coded at application start
- Use our Parse service to read data from the backend
- Use `redux-thunk` to perform async actions

---

# Task #10
#### Add items to the server

---

# Day 2 Recap

- How to work with Immutable data
- Redux

---

# Questions