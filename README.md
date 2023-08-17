This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot
For large screens:
![image](https://github.com/AdroitMonella/preview-cards-component/assets/121580367/48e0a2db-d8ee-4864-9d0a-2a35d7164236)
For small screens:
![image](https://github.com/AdroitMonella/preview-cards-component/assets/121580367/ed22274b-d04f-4fff-b19a-0c7524c63f96)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev/) - React framework
- [Tailwindcss](https://tailwindcss.com/) - For styles
- Flexbox
- Mobile-first workflow

### What I learned
In this project, I experimented with tailwindcss and explored how to incorporate custom styles and colors. 
Through this process, I discovered the extent to which tailwind can be customized, 
as well as the challenges of seamlessly blending default styles with personal modifications. 
A clear example of this can be found in the tailwind.config file: 
```
theme: {
    extend: {},
    fontFamily: {
      'lexend': ['Lexend Deca'],
      'bigShoulders': ['Big Shoulders Display']
    },
    colors: {
      'blue': '#3e52a3',
      'orange': '#e38826',
      'cyan': '#006970',
      'darkCyan': '#004241',
      'white': '#ffffffbf',
      'grey': '#f2f2f2'
    }
  }
```
Here I have overwritten Tailwinds default colors like blue and white with my own colors.

### Continued development
In future projects I want to continue my experimentation with Tailwind and try to iron out the 
problems I encountered using different flexbox layouts for different media sizes.
To see an example, please view the live site url.

# Author
- Frontend Mentor - [@AdroitMonella](https://www.frontendmentor.io/profile/AdroitMonella)
