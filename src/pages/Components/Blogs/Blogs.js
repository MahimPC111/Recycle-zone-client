import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='m-8 lg:m-10 p-6 lg:p-16 rounded-lg bg-blue-200'>
                <p className='text-xl font-bold lg:text-2xl mb-5'>1) What are the different ways to manage a state in a React application?</p>
                <p><span className='font-bold'>Different ways to handle state in React applications:</span> <br />
                    <b>URL:</b>
                    <br />
                    We can use URL to store some data. The id of the current item, being viewed
                    Filter parameters Pagination offset and limit Sorting data Keeping such data in the URL allows users to share deep links with others. It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change
                    <br />

                    <b>Web Storage:</b>
                    <br />
                    The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies. Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available. We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.
                    <br />

                    <b>Local state:</b>
                    <br />
                    Local state in React allows you to instantiate a plain JavaScript object for a component and hold information that might affect its rendering. Local state is managed in isolation within the component without other components affecting it. Keep in mind that using local state in the context of React requires you to create your components using the ES6 classes which come with a constructor function to instantiate the initial requirements of the component. Additionally, you have the option of using the useState Hook when creating functional components. In a component built with ES6 classes, whenever the state changes (only available through setState function), React triggers a re-render which is essential for updating the state of the application.
                    <br />

                    <b>Lifted State:</b>
                    <br />
                    The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state
                    <br />

                    <b> Derived State</b>
                    <br />
                    The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.
                    So, why bother deriving the state? Well, deriving the state avoids our state values getting out of sync. It simplifies our code since we do not have to remember to keep separate values in sync. When we update the state, derived values are automatically recalculated in the render.
                </p>
            </div>

            <div className='m-8 lg:m-10 p-6 lg:p-16 rounded-lg bg-blue-200'>
                <p className='text-xl font-bold lg:text-2xl mb-5'>2) How does prototypical inheritance work?</p>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
                    <br />
                    In a class-based model, you have Classes, which are represented by the triple “Parents, Variables, Methods”. Where:
                    Parents is the list of classes you’re extending. Classes may only extend other classes;
                    Variables is the number of variable slots that instances will have. For example, a “class Point2d(int x, int y)” has 2 instance variables;
                    Methods is a table of “name → function” that describes which services each instance of the class will support;
                    Instances (or Objects) in a class-based model are represented with the tuple “Class, Values”. Where:
                    Class is a pointer to the class triple that defines how many variables this instance supports, and what methods you can call on it;
                    Values is a list of the values for each variable the instance has.
                    In this model, Classes only describe how instances look like, and Instances are the only thing you can interact with. Classes cannot be instances, and you can’t inherit from Instances.
                    “Inheritance” just means “a concatenation of the layouts”.
                    Then the complete set of ClassB methods is “toString, add”. It’s the union of all methods from the parents (generally with things to the right being chosen when there’s a conflict).
                    There are some languages that support the notion of Classes which can also be instances, like Ruby and Python. Python actually uses the model I’m going to describe later. Ruby uses evil black magic and you’ll wish you had never looked if you try prying under the hood[1] .
                    (And this is why I hate classes)
                    Now, someone realised at some point that you do not need classes.
                    Let’s look at what we’re trying to get with classes so far:
                    A way of declaring what objects look like (that is, what methods and variables it supports);
                    A way of extending this “looks like” relationship, so you don’t need to keep repeating yourself everywhere;
                    A way of having objects (that is, values you can interact through the methods it supports);
                    Turns out that if we change things slightly, we can combine Classes and Instances into a single concept: an Object. So instead of the model above, we can have a single triple “Parents, Variables, Methods”. Which happens to look exactly like our Classes triple in the names alone, but there are some semantic differences:
                    Parents is a list of Objects that we inherit from. Objects here are the same triple, so this doesn’t change much our concept of inheritance established above in the class-model. Objects are just a “more powerful” class of sorts;
                    Variables is a mapping “name → value”. This is because we now have to store the values as well. You could have a simple list, but inheritance then becomes a problem—how do you conciliate methods expecting “variable 0” meaning different things for different objects? Names at least reduce this problem;
                    Methods is a mapping “name → function”. Same as in the class-model.
                    We can even simplify this further and merge “Variables” and “Methods”, as they’re both mappings from some kind of name to some kind of value. We’d just need to make “function” a value—which is exactly what JavaScript does.
                    So, JavaScript’s model is something like: “Parent, Slots”. Where “Parent” is a single object (or null), because JavaScript does not support multiple inheritance; and “Slots” is a mapping “name → value” that combines Variables and Methods. Functions are just a regular value, after all.
                    (Python uses this model too, because it’s the right thing to do. You really don’t want to have to deal with all of the headaches that come from separating classes from objects and making classes objects at the same time)
                    Now, these are the mathematical models for classes and prototypes. But it may be too abstract to see how they work exactly. We can implement the second model in a few lines of JavaScript:
                    That’s it. The entire prototype-based model is that. “Inheritance” is just “getSlot”—you try to find some name within the slots of your objects, and if it’s not there you try finding it in the slots of the parent object.
                    This is really all there’s to the model.
                    Implementing a class-based model would be a much bigger effort, so I’m not going to add it here. I do recommend thinking about the pros/cons of each model, though. You can read the Self papers for more information:
                    Self Papers 4.5.0 documentation
                    Parents are Shared Parts: Inheritance and Encapsulation in Self
                    Organizing Programs Without Classes
                    It’s important to note that this answer is about models (i.e.: what goes under the hood in the language specification and non-optimised implementations). What actually happens when you run a program is very different, because compilers will try their best to make the processor do no work, if they can. They’ll remove all objects and functions and operations you write if there’s no real need for them to exist. The only way of knowing that is reading the entire source code of a specific compiler on every new commit.

                    And what people interact with (along with the conceptual models they use for programming) is not necessarily based on this either. JavaScript has a “class” concept, and it has had that since its first version. People use classes in JavaScript, and they may not even think about what’s going under the hood at all, and that’s perfectly fine.
                </p>
            </div>

            <div className='m-8 lg:m-10 p-6 lg:p-16 rounded-lg bg-blue-200'>
                <p className='text-xl font-bold lg:text-2xl mb-5'>3) What is a unit test? Why should we write unit tests?</p>
                <p>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    <br />

                    <b>How does it works:</b>
                    <br />
                    A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
                    Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.
                    Unit testing involves only those characteristics that are vital to the performance of the unit under test. This encourages developers to modify the source code without immediate concerns about how such changes might affect the functioning of other units or the program as a whole. Once all of the units in a program have been found to be working in the most efficient and error-free manner possible, larger components of the program can be evaluated by means of integration testing. Unit tests should be performed frequently, and can be done manually or can be automated.
                </p>
            </div>


            <div className='m-8 lg:m-10 p-6 lg:p-16 rounded-lg bg-blue-200'>
                <p className='text-xl font-bold lg:text-2xl mb-5'>4) React vs. Angular vs. Vue?</p>
                <p>
                    <b>React:</b>
                    <br />
                    React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.
                    React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.
                    Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.
                    React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.
                    Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.
                    <br />
                    <b>Vue:</b>
                    <br />
                    The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.
                    Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.
                    Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.
                    Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.
                    SFCs are the recommended way to organize code in Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into working JavaScript code.
                    <br />

                    <b>AngularJS:</b>
                    <br />
                    AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.
                    Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.
                    Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.
                    Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.
                    Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.
                    Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported.
                    <br />
                </p>
            </div>
        </div>
    );
};

export default Blogs;