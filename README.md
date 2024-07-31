# Lucky Or Smart - Dice Game

Welcome to "Lucky Or Smart," an exciting and fun dice game where players compete to reach the winning score first. This game is perfect for testing your luck and strategy against friends.

## Table of Contents

1. [Introduction](#introduction)
2. [Game Rules](#game-rules)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Setup and Installation](#setup-and-installation)
6. [Usage](#usage)
7. [Keyboard Shortcuts](#keyboard-shortcuts)
8. [Technical Implementations](#technical-implementations)
9. [Accessibility](#accessibility)
10. [Deployment](#Deployment)
11. [Error Handling](#error-handling)
12. [Screenshots](#screenshots)
14. [Contact](#contact)

## Introduction

"Lucky Or Smart" is a simple yet engaging dice game built with HTML, CSS, and JavaScript. The game allows two players to roll dice and accumulate points, with the goal of reaching a specified score first. The game is deployed on Netlify and can be played directly in the browser.

## Game Rules

1. **Game Objective**: The objective of the game is to be the first player to reach a total score of 100 points.
2. **Player Turns**: Players take turns to roll the dice.
3. **Rolling the Dice**: On each turn, a player can roll a single dice. The number rolled is added to the player's current score for that turn.
4. **Keeping Points**: Players can choose to 'keep' their current turn's score, adding it to their total score and ending their turn.
5. **Rolling a One**: If a player rolls a one, their current turn score is reset to zero, and their turn ends.
6. **Winning the Game**: The first player to reach or exceed 100 points in their total score wins the game. The winning player is declared, and the game ends.
7. **New Game**: Players can start a new game at any time by clicking the "New Game" button. A new game resets all scores and starts with a random player.

## Features

- Interactive UI with modern design
- Real-time score updates
- Responsive design for mobile and desktop
- Keyboard shortcuts for quick actions
- Customizable game settings

## Technologies Used

- **HTML5**: Structure of the game
- **CSS3**: Styling and layout, including Flexbox
- **JavaScript**: Game logic and interactivity
- **Netlify**: Deployment platform
- **Git**: Version control
- **GitHub**: Code repository

## Setup and Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/alimagdye/lucky-or-smart-game.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd lucky-or-smart-game
    ```
3. **Open `index.html` in your preferred browser. You must use live server to open it**.

## Usage

Once the project is set up, open `index.html` in your browser to start the game. You can also play the game online 
<br>
at [https://luckyorsmart.netlify.app](https://luckyorsmart.netlify.app).

## Keyboard Shortcuts

- **P**: Close the rules and play the game
- **R**: Roll the dice
- **K**: Keep the current score and add it to the total score
- **N**: Start a new game

## Technical Implementations

### HTML Structure
The HTML file sets up the structure of the game, including containers for player scores, dice images, and buttons for game interactions. Semantic HTML tags are used for better readability and accessibility.

### CSS Styling
The game uses modern CSS techniques for styling:
- **CSS Variables**: For easy theming and maintaining consistent styles.
- **Flexbox**: For responsive layout management.
- **Animations**: Smooth transitions for game elements using CSS animations.
- **Media Queries**: Ensure the game is responsive and works well on different screen sizes.
- **two files of CSS**: to organize code.

### JavaScript Functionality
JavaScript is used to handle the game logic and interactivity:
- **Event Listeners**: For button clicks and keyboard shortcuts.
- **DOM Manipulation**: To update the scores, dice images, and game status dynamically.
- **Game Logic**: Includes functions to handle rolling dice, keeping scores, switching turns, and checking for a winner, no buttons works at the finish of the game or at the game rules modal.
- **LocalStorage**: Could be used to store game state for persistence (not implemented yet, working on it).
- **main.js** has many exported functions that are used in the game.

### Sound SynchronizationSound Effects
The game includes sound effects for various actions (rolling the dice, keeping points, starting a new game) that are synchronized with the corresponding animations and logic to enhance user experience.

### Dice Animation
The dice rolling animation is implemented using a combination of JavaScript and CSS in main.js and dice.css and imported in the main files of the project and the animations are syncronized with the JavaScript functionalities
The dice element dynamically changes its class based on the rolled number, which triggers a CSS animation to show the dice face.

### Meta Tags and SEO
Meta tags are used to enhance the SEO and social sharing experience:
- **Description and Author**: For search engine optimization.
- **Open Graph Protocol**: For rich link previews on social media platforms like Facebook, Twitter, and Telegram.
- **Favicon**: For better branding and recognition.

### Accessibility
Accessibility is a key consideration in this game:

- **Aria Labels**: The dice element uses aria-label to describe its current state, helping screen reader users understand the game.
- **Role Attributes**: The dice is given a role of img to indicate it's an image element.
- **Keyboard Navigation**: The game supports keyboard shortcuts for all main actions, ensuring it can be played without a mouse.
- **Semantic HTML**: Proper use of HTML5 elements enhances the accessibility of the game interface.
- **testing the accessibility** ![image](https://github.com/user-attachments/assets/6d3df57e-f968-4149-b5dc-b88c3ea94698)


### Deployment
The game is deployed on Netlify, which provides continuous deployment from the GitHub repository. This ensures that any changes pushed to the repo are automatically deployed.

## Error Handling
Error handling is implemented to ensure a smooth gaming experience:
- **Fallback Mechanisms**: Default values and checks are in place to handle unexpected scenarios, such as missing class names.
- **Graceful usage**: The game is designed to function even if the user used any bottons or keys and he's not allowed to use yet.

## Screenshots

![image](https://github.com/user-attachments/assets/ec70510f-3eb8-4cd7-bba3-fed2f2baf076)
*Screenshot of a modal, at the first loading of the page, has the rules of the game.*


![image](https://github.com/user-attachments/assets/f54d77f6-0bfb-4093-8747-9b5dba45aa11)
*Screenshot of the game at the start.*


![image](https://github.com/user-attachments/assets/f281f5b4-edae-42b7-ae94-36a4d4f8dd1f)
*Screenshot of the game on the phone.*


![image](https://github.com/user-attachments/assets/14385c0e-54d4-4478-be87-79e91545742b)
*Screenshot of the game interface.*


![image](https://github.com/user-attachments/assets/c7b69c92-d30d-49ed-8ab1-e3a0c80ad65f)
*Screenshot of the game after player1 won.*

## Contact

Created by Ali Magdy. Feel free to contact me at alimagdye1@gmail.com for any questions or suggestions.

---

Thank you for checking out "Lucky Or Smart."
