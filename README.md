# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

! 

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

Here's a short summary of what you've learned from building your site:

### Responsive Layouts: 
You effectively used Tailwind CSS to create a responsive design, ensuring your website adapts to various screen sizes by toggling between desktop and mobile images.
### Navigation: 
You've implemented a navigation menu for both desktop and mobile views, including a toggle button for small screens.

### Grid Layout: 
You applied Tailwind's grid system to arrange content in a clean, structured manner, ensuring an organized layout.
### Interactive Design: 
You utilized hover states for buttons and links to enhance user interactivity and engagement.
### Mobile-First Approach:
 By hiding and showing elements based on screen size, you demonstrated the ability to prioritize mobile user experience.

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
```
``` 
<img src="./assets/images/image-web-3-desktop.jpg" alt="Abstract colorful shapes" class="w-full object-cover hidden md:block">

<img src="./assets/images/image-web-3-mobile.jpg" alt="Abstract colorful shapes" class="w-full object-cover block md:hidden">

```
```js

overlay.addEventListener('click', () => {
    mobileNav.classList.add('translate-x-full');
    overlay.classList.add('hidden');
});
```


### Continued development

### Accessibility (a11y):

Focus on improving accessibility by using semantic HTML elements and ARIA attributes to make your site more inclusive.
Test for keyboard navigation, screen readers, and contrast ratios to ensure your website is accessible to a wider audience.

### Advanced Grid & Flexbox Layouts:

Explore more complex grid and flexbox combinations for unique layouts, especially for sections that need precise alignment.
Perfect your control over alignment, spacing, and responsive reordering of elements across different screen sizes.

### CSS Customization:

Work on integrating custom CSS more seamlessly with Tailwind. Sometimes, unique design needs require custom styles or media queries that Tailwind might not cover easily.
Experiment with using Tailwind’s utility-first classes while maintaining custom brand styles for consistency.



### Useful resources



## Author

- Frontend Mentor - [@ussyalfaks](https://www.frontendmentor.io/profile/ussyalfaks)
- Twitter - [@usman_alfaki ](https://www.twitter.com/@usman_alfaki)