# Project 14: Working with React and Vite and connecting a backend

### Overview

- Intro
- Technologies & Techniques
- Figma brief
- Images
- Link to live project

**Intro**

This project is a webpage titled What to Wear, showcasing current weather for a determined location and appropriate clothing based on that weather. It is based off of Figma briefs from the TripleTen team and focuses on executing with React and Vite. It is connected to a backend that leverages express and mongodb.

**Functionality**

This webpage is connected to the OpenWeatherMap API, allowing the current weather for the determined location to pull in dynamically along with updating the weather image near the top of the page based on current weather conditions. The cards below render dynamically based on current weather conditions and users are able to add their own clothing items which will also be filtered based on weather selections.

**Technologies & Techniques**

- CSS
  - CSS was leveraged for styling of all elements.
  - Flexbox and Grid used for positioning.
  - Media Queries used for responsive mobile design.
- BEM
  - File structure and class names are laid out in adherence with BEM recommendations.
- JavaScript/React
  - Leverages JSX instead of standard HTML
  - Code is organized in componenets for reusability
  - Manage state with React hooks to track and respond to data changes in the UI without manually updating the DOM
- Vite
  - Bundling/building
- API connection
  - Connected to: https://openweathermap.org/
- Backend Repository
  - https://github.com/jraebowen/se_project_express
  - This backend handles user authentication and authorization, allowing users to sign up, sign in, and stay logged in.
  - It manages user data and card information, ensuring each user can access and modify only their own content.

**Figma**

[Link to the project on Figma](https://www.figma.com/file/bfVOvqlLmoKZ5lpro8WWBe/Sprint-14_-WTWR?t=3hvVWRz9LUFsxyNn-6)

**Assets**
[Link to the assets](../se_project_react/src/assets/)

**Final Project**

- [Link to live project](https://jraebowen.github.io/se_project_react/)
- Recorded overview of project: (To Be Updated)
