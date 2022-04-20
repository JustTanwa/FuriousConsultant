# Furious Consulting

This is a small project website for me to learn about creating landing page and web site layout. I will be using the a fictional company and characters from the Fast and Furious movie franchise.

## Tech Stack

I will be using HTML5, CSS, JavaScript and little jQuery for this project.

I will also be using Font Awesome v5 for some icons.

TMDb API for calling the characters in the Fast and Furious movie. (This product uses the TMDB API but is not endorsed or certified by TMDB.)

### Goals

I want to have a website with a CTA button on the landing page. As well as explore a couple of pages to test layout of forms and information page.

### What I have learnt

The first challenge I encounter was how to make the hamburger menu remain fixed while the menu is open, and disable user scroll. I wanted this feature so that when the user open up the navigation menu they will not be able to scroll the rest of the content. After some research, I found the solution, which was to place the body element of the HTML to be fixed. I achieved this using jQuery as I had already set up toggle for the opening and closing of the burger menu.

The next challenge was creating a simple image carousel from scratch using javascript. Creating this element, I solidify my knowledge with DOM manipulation and using Event Listeners for the carousel buttons.

I did not want to hard code the information for the "about me" page so I decided to look for a database API to use so I can call it to get charater informations to display. I came across TMDb, and used the fetch API to request the data.

### Credits

I will be using TMDb for the movie database information and images will be taken from Unsplash.

- Hero image from Unsplash by Shiro Hatori
- Image of the laughing man from Pixabay, artist unknown.
