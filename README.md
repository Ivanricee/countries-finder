#  REST Countries API with color theme switcher and lazy load

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Videos](#videos)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I practiced](#what-i-practiced)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Links

- Live Site URL: [countries-finder-ivanrice.vercel.app](https://countries-finder-ivanrice.vercel.app)

### Videos

https://user-images.githubusercontent.com/13322969/213577063-0500ba2d-b251-40f4-9eef-db2008e11f32.mp4

https://user-images.githubusercontent.com/13322969/213577662-bb78ea50-b139-49d4-b045-d7f29b816d18.mp4


## My process

### Built with

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white) 
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)  

- Lazy load with Intersection Observer.
- Mobile-first workflow
- Semantic HTML5 markup
- Flexbox for components.


### What I practiced


- Made use of localStorage with redux in order to preload and store a theme
```js
const getTheme = getLSThemeMode()
const INITIAL_STATE = {
  app: {
    themeMode: getTheme || 'darkMode',
    ...
  },
}
```
- Made use of custom hooks in order to handle the data
```js
  const [loading, error, countries, getCountries] = useCountriesState()
```
- Redux: changed "switch" for a literal object in order to handle "reducers"
```js
export const app = (state = INITIAL_STATE, action) => {
  return (
    {
      '@app/themeMode': { ...state, themeMode: action.payload },
      ...
    }[action.type] || state
  )
}
```

## Author

- Website - [ivanrice_](https://www.instagram.com/ivanrice_)
- Frontend Mentor - [@Ivanricee](https://www.frontendmentor.io/profile/Ivanricee)
- Twitter - [@ivanrice_](https://twitter.com/ivanrice_)
