# Advice Generator App

A responsive advice card web app built with HTML, CSS, and TypeScript. The project consumes the Advice Slip API and updates the card every time the user clicks the dice button.

## Table of Contents

- [Overview](#overview)
- [Features](#key-features)
- [Demo](#demo)
- [Screenshot](#screenshot)
- [Built With](#built-with)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Notes](#notes)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This project is a solution for the Frontend Mentor "Advice Generator App" challenge. It displays advice slips fetched from the Advice Slip API and is optimized for mobile and desktop layouts.

## Features

- Responsive design for mobile and desktop
- Dynamic advice generation using the Advice Slip API
- DOM manipulation with TypeScript
- Modular code organization
- ES Modules support

## Demo

- Solution URL: [Click here](https://www.frontendmentor.io/solutions/advice-generator-app-using-typescript-and-fetch-api-3VRl08z7bw)
- Live site URL: [Click here](https://israel-monteiro.github.io/advice-generator-app/)

### Screenshot
![](./design/desktop-design.jpg)
![](./design/mobile-design.jpg)
## Built With

- HTML5
- CSS3
- TypeScript
- Fetch API
- ES Modules

## Project Structure

- `index.html` — main application page
- `src/css/reset.css` — CSS reset styles
- `src/css/variables.css` — design tokens and CSS variables
- `src/css/style.css` — base styles
- `src/css/responsive.css` — responsive layout rules
- `src/ts/` — TypeScript source files
- `src/js/` — compiled JavaScript files
- `assets/images/` — icons and graphic assets
- `design/` — design reference files
- `style-guide.md` — color, typography, and spacing guidance

## Setup

### Prerequisites

- Node.js installed (optional, only required to compile TypeScript)
- Modern browser

### Run Locally

1. Clone the repository
   ```bash
   git clone https://example.com/your-repo.git
   cd advice-generator-app
   ```
2. Install TypeScript if needed
   ```bash
   npm install typescript --save-dev
   ```
3. Compile TypeScript to JavaScript
   ```bash
   npx tsc
   ```
4. Open `index.html` in your browser

## Usage

- Open the app in a browser
- Click the dice button
- A new random advice slip will be displayed


## Future Improvements

- Prevent repeated advice
- Add loading animation
- Display friendly error messages
- Improve accessibility
- Add automated tests

## Author

- Name: Israel Monteiro
- GitHub: [Israel Monteiro](https://github.com/israel-monteiro)
- Frontend Mentor: [Israel Monteiro](https://www.frontendmentor.io/profile/Israel-Monteiro)

## Acknowledgments

- [Advice Slip API](https://api.adviceslip.com)
- [Frontend Mentor](https://www.frontendmentor.io)
