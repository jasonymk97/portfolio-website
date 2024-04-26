# 🌟 Portfolio Website 🌟

## 🎯 Purpose

This is a portfolio website built using Create React App. It showcases my projects, skills, and experience by using React. It is a frontend project only, so no server-side code is provided.

## 🤝 Contribution

If you would like to contribute to the development of this application, please follow these steps:

1. 🔧 Fork the repository.
2. 🛠️ Create a new branch for your feature or bug fix.
3. 💻 Make your changes and commit them.
4. 🔄 Push your branch to your forked repository.
5. 📝 Open a pull request to merge your changes into the main repository.

## ✨ Features

- 🏠 **Home Page**: Welcome page
- 👤 **About Page**: Introduce myself
- 📄 **Resume Page**: Show my resume
- 💼 **Portfolio Page**: Demonstrate the use of public APIs
  - 📑 [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
  - ⚔️ [Battlenet API](https://develop.battle.net/documentation/guides)
  - 🗺️ [Google Map API](https://developers.google.com/maps/documentation/javascript)
- 🃏 **Card Page**: Display a Hearthstone card
- 🚫 **NotFoundPage**: Handle wrong navigation link

## 📦 Dependencies

To install the dependencies for this project, please follow these steps:

1. 💻 Make sure you have Node.js installed on your machine.
2. 🔍 Open a terminal and navigate to the project directory.
3. 📥 Run the command `npm install` to install the required dependencies.

### 📚 Useful Libraries

- 🔍 **Third Party Icons**
  - `@fortawesome/free-brands-svg-icons`
  - `@fortawesome/free-solid-svg-icons`
  - `@fortawesome/react-fontawesome`
- 🗂️ **Table**
  - `ag-grid-community`
  - `ag-grid-react`
- 🎨 **UI Components**
  - `@mui/icons-material`
  - `@mui/material`
- 🗺️ **Google Map**
  - `@react-google-maps/api`
- 🌐 **HTTP Client**
  - `axios`
- 🎭 **Animation**
  - `gsap`
- 🔀 **Proxy**
  - `http-proxy-middleware`
- 🛣️ **React Router**
  - `react-router-dom`
- 🔄 **HTML to React**
  - `html-react-parser`
- 🎨 **Tailwind CSS** (For development)
  - `tailwindcss`

## 🏗️ Architecture

This application is built using the following technologies:

- ⚛️ **React.js**: A JavaScript library for building user interfaces.
- 🚀 **Create React App**: A toolchain for creating React applications with no build configuration.

The source code is organized into different files. The main entry point is the `index.js` file.

- `src/`
  - 📁 `assets/images/`: All images, icons, and other documents
  - 🧩 `components/`: All reusable components
  - 📝 `data/`: Personal information for the portfolio
  - 📚 `lib/`: Some third-party libraries such as axiosService
  - 🧭 `navigation/`: All routings
  - 📄 `pages/`: All website pages
  - 🛠️ `services/`: Public API service such as githubservice
  - `App.js`
  - `index.js`
  - `setupProxy.js` (Call third-party APIs)
- `tailwind.config.js`
- `.env.local` (Please create this file for local development to save secrets such as tokens, API keys, or other settings)

## 🐞 Reporting Issues

If you encounter any issues or have any suggestions for improvement, please open an issue on the [GitHub repository](https://github.com/ymkqut/portfolio-website/issues).

Your feedback is valuable and will help us improve the application.

## 🛠️ Tools

- Visual Studio Code
- Postman: Test APIs
- Git
- GitHub
- SourceTree: Provides a GUI for version control
- Node.js (v20.11.1)
- Node Version Manager (nvm)
- Node Package Manager (npm)
