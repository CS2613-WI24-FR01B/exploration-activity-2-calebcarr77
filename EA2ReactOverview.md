# CS2613 Exploratory Assignment 2 
# Caleb Carr
[![image](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-calebcarr77/assets/97684864/6e4a9468-3775-43e1-b5d9-f9c9c7231549)](https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F67605317%2Freact-show-png-image-with-transparent-style-background&psig=AOvVaw2YoLFYw8XbwOpc-SyO_Up3&ust=1711730931831000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDyxuK0l4UDFQAAAAAdAAAAABAE)

## Introduction
For this assignment, I chose to explore the JavaScript library called *React*.
This markdown file discusses this library.
By the end of this document the following questions will be answered:
- What is React
    - What purpose does it serve?
    - How is it used?
- What are the functionalities?
- Why was it selected for this exploratory assignment?
- How did the learning of this library influence the learning of python?
- How was my personal experience with this library?

## What is React?

### What is React's Purpose?
In *2013* React was released [[ref](https://www.mygreatlearning.com/react-js/tutorials/history-of-reactjs#)]. React is a JavaScript library desgined for building user interfaces. 

### How is React Used
React has a wide range of abilities and useful tools. React's strength comes from it's ability to break down a UI into a component based design. This means React can create functional, interactive UI components, such as a button, form, list, etc. React can integrate these components together to create an elaborate UI. Building UI through an component based architecture enables ease of reusabliity and maintenance.

## Functionality
This section will go describe a variety of React's functionalities.

### Getting Started
When beginning a react project, Node.js as well as NPM must be installed on your device. The following link provides steps to install these [[Install Node.js and NPM](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac)].
To begin the project, the terminal must be used to run the following commands:
```
npx create-react-app my-first-react-app
```
This will create a react app and save it to a file called *my-first-react-app*.
From there do:
```
cd my-first-react-app
npm start
```
This will switch to the desired directory and start the react app.
[[ref](https://radixweb.com/blog/steps-to-build-react-project-with-create-react-app#step1)]

Note that upon running the first command line, many files will have been created, open these files in your desired IDE to begin editing your react app.

### Importing React
Importing react can be done in two lines within a class as shown below:

```js
import React from "react";
import ReactDOM from "react-dom/client";
````
Note that the files produce by the command line above will already have imported React.
### Capabilities
This section will go over some capabilities of react, showing how to create a form and button counter. Code source: [[Owlcation](https://owlcation.com/stem/reactCounter)] 

#### Form
Within the react files that has been created using the commands lines above, open up app.js, and add the following code to the App function:
```html
<form>
    <label>
        Sample Form: 
        <input type="text" name="name" />
    </label>
</form>
```
This will add a simple text box form to the default react app.


#### Button Counter

Within the app.js file, add the following code for the header and buttons:
```html
<div className="counter">
    <h1>React Counter</h1>
    <span className="counter__output"></span>
    <div className="btn__container">
        <button className="control__btn">+</button>
        <button className="control__btn">-</button>
        <button className="reset">Reset</button>
    </div>
</div>
```

#### Use state
Now it is time to make use of a powerful react tool called *useState*. This is a type of a hook that allows the user to add state to a functional component. It is comprised of an array with two values, the current state and a fucntion to update it. The *hook* takes an initial value as an argument and returns the updates state value whenever the *setter* function is called. Below is an example pertaining to the button example. [[ref](https://blog.logrocket.com/guide-usestate-react/#:~:text=useState%20is%20React%20Hook%20that,the%20setter%20function%20is%20called.)]
```js
//Import useState
import { React, useState } from 'react'

//Define the useState for the counter
const [counter, setCounter] = useState(0);

//The following are the setters used to adjust the value in the use state
//increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }

```
Now, the following block of code will be the implement the useState functionality within the app:

```html
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <label>
            Sample Form:
            <input type="text" name="name" />
          </label>
        </form>
        <div className="counter">
          <h1>React Counter</h1>
          <span className="counter__output">{counter}</span>
          <div className="btn__container">
            <button className="control__btn" onClick={increase}>+</button>
            <button className="control__btn" onClick={decrease}>-</button>
            <button className="reset" onClick={reset}>Reset</button>
          </div>
        </div>
      </header>
    </div>
  );
```
The code above will produce this app, where to +, -, and reset buttons adjust the counter value (currently 4):

<p align="center"><img width="500" alt="Screenshot 2024-03-28 at 12 54 44 PM" src="https://github.com/CS2613-WI24-FR01B/exploration-activity-2-calebcarr77/assets/97684864/002a5bb1-bf6d-4aaf-b4b4-280a2c3c1b40"></p>



React is a powerful tool with a massive amount of functionalities. React's official documentation outlines the full capabilities [[documentation](https://react.dev)].

## Why was React chosen for this activity
React was chosen for this acitvity as I beleive it will be a valuable tool to have in my arsenal throughout my programming career. Web design is the field of computer science I would like to work in, so this was a great opprotunity to learn new skills. 

## How did learning React affect my learning of the language
Learning React did not significantly effect my learning of JavaScript. React stands on it own, learning felt more like learning a new language entirely. Although it helped me gain an understanding of importing and utilzing parts of code from other files. 

## My overall experience with React
My experience with React was great. It was a challenging tool to learn, but highly useful. I would recommmend React to anyone working with web design. Understanding React will be a great asset throughout my programming career, especially if I am working with front end web design. I will absolutely continue to use it.
