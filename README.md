![Furious Consulting Logo](/assets/img/logo.png)
<h1 align="center">Furious Consulting</h1>

This is a small website project for a fictional consulting company client. The website should have a landing page with some "Call to Action" buttons. The website should have a dynamically generated page as well as a form page. My motivation for this project was to put to use what I have learned about CSS and layout as well as practice using API.

See [Live Demo](https://furiousconsulting.netlify.app/).

## Technologies used

<p align="left"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/> <img src="https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png" alt="jQuery" width="60" height="60"/> <img src="https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png" alt="Netlify" width="60" height="60" /> </p>

I will be using HTML5 for the markup, CSS3 for styling the website using Gridbox and Flexbox. JavaScript and little jQuery v3.6 for the interactive part of this project such as carousel, burger menu and using Fetch API to retrieve data from TMDB.

I will also be using Font Awesome v5 for some icons.

TMDb API for calling the characters in the Fast and Furious movie. (This product uses the TMDB API but is not endorsed or certified by TMDB.)

It the end, the website will be hosted on Netlify and the form will be linked using Netlify honeypot.

### Demonstration

I have attached below a short video demonstration of the website on a mobile device to showcase mobile responsiveness design.

https://user-images.githubusercontent.com/84579000/164705714-3f2c1e66-e763-40cf-8621-063f8d3751a7.mp4


### What I have learnt

The first challenge I encounter was how to make the hamburger menu remain fixed while the menu is open, and disable user scroll. I wanted this feature so that when the user open up the navigation menu they will not be able to scroll the rest of the content. After some research, I found the solution, which was to place the body element of the HTML to be fixed. I achieved this using jQuery as I had already set up toggle for the opening and closing of the burger menu.

The next challenge was creating a simple image carousel from scratch using javascript. Creating this element, I solidify my knowledge with DOM manipulation and using Event Listeners for the carousel buttons.

To obtain the images for the Our Team page, I used the Fetch API to make a request to TMDb with an API Key, then inserting these images into the DOM when page load.

### Credits

- Stock photos taken from [Unsplash](https://unsplash.com/) and [Pixabay](https://pixabay.com/).
- Hero image from [Unsplash](https://unsplash.com/) by Shiro Hatori.
