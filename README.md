# Weather Dashboard

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |  
| Javascript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| DayJS | [https://day.js.org/docs/en/display/display](https://day.js.org/docs/en/display/display)
| JQuery | [https://api.jquery.com/category/attributes/](https://api.jquery.com/category/attributes/)  

## Description 

[Visit the Deployed Site](https://jesustgr.github.io/weather-dashboard/)

The goal of this site is for the user to see the weather outlook for multiple cities to do things such as plan a trip accordingly. This application a weather dashboard that runs in the browser and features dynamically updated HTML and CSS. I used the Open Weather Map APIto retrieve weather data for cities. I used local storage to store persistent data.


## Usage 

The screenshots below demonstrate the application's functionality.

<img src="assets/image1.png" height="450" width="720" >

<img src="assets/image2.png" height="450" width="720" >


## Learning Points 

Event Handling: The code demonstrates how to handle click events using jQuery's on() function. By attaching a click event listener to the save button, we can capture user interactions and perform the necessary actions, such as saving the event description to local storage.

DOM Traversal: The code utilizes DOM traversal methods provided by jQuery, such as parent(), siblings(), and find(). These methods allow us to navigate the DOM tree and select specific elements based on their relationships with other elements.

Local Storage: The code shows how to use the localStorage API to store and retrieve data in the browser's local storage. By leveraging the setItem() and getItem() methods, we can persist the user's event descriptions even when the page is refreshed.

Time Handling with Day.js: Day.js is a lightweight JavaScript library for manipulating and formatting dates and times. In this code, we use Day.js to get the current hour and format the date displayed in the header. By comparing the current hour with the hour of each time block, we can dynamically apply appropriate CSS classes.

Iterating Over Elements: The code demonstrates how to iterate over multiple elements using jQuery's each() function. It allows us to perform actions on each element individually, such as applying CSS classes or loading saved event descriptions.

CSS Class Manipulation: By adding or removing CSS classes dynamically, we can change the appearance of elements based on specific conditions. In this code, different CSS classes are applied to time blocks to indicate whether they are in the past, present, or future.

Separation of Concerns: The code separates different functionalities into separate functions, making the code more modular and maintainable. Each function has a clear purpose, such as saving events, loading events, applying time block classes, and handling the save button click event.

These learning points showcase some important concepts in web development, including event handling, DOM manipulation, data persistence, date/time handling, and code organization. Understanding these concepts is crucial for building interactive and dynamic web applications.

## Author Info


### Jesus Thomas Reyes 


* [Portfolio](https://jesustgr.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/jesus-thomas-reyes-aa001a192/)
* [Github](https://github.com/jesustgr)

