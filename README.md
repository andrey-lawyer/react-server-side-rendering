## React-server-side-rendering

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Running](#running)
- [Deployment](#deployment)

## Introduction

This project is a server-side rendered React application designed to provide users with dynamic content based on their interactions. Leveraging React Router for client-side routing and Express.js for server-side rendering, this application offers a seamless user experience. The project was tested on the version node 14.21.3

## Features

- **Server-side Rendering (SSR):** Utilizes server-side rendering to pre-render React components on the server, improving performance and SEO.

- **Dynamic Content:** Fetches data from the server based on the requested route, providing users with personalized content.

- **React Router:** Implements client-side routing using React Router, enabling navigation within the application without full page reloads..

- **Static Assets:** Serves static assets (HTML, CSS, JavaScript) from the server for enhanced performance and reliability..

## Installation

1. **Clone the repo**

```bash
github.com/andrey-lawyer/react-server-side-rendering
```

2. **Install dependencies** It's recommended to use npm:

```bash
npm install
```

## Usage

This project is built using the following technologies:

- **React.js:** A powerful JavaScript library for building user interfaces, known for its declarative and component-based approach.

- **Express.js:** A minimalist web application framework for Node.js, providing a robust set of features for building APIs and web applications.

## Running

```bash
 npm run dev
```

After that, you can access the application in your web browser at http://localhost:3006.

## Deployment

The project is currently deployed on [Render](https://render-image-x1xv.onrender.com) from docker image.
(free version). Please note that it may take a few minutes for the application to start up initially.

Feel free to check the live deployment and interact with the application.

**Docker**
This project supports Docker, making it easy to deploy. To deploy the project, follow these steps:

1. **Install Docker:** If you don't have Docker installed on your computer yet, you can download and install it from the official Docker website.

2. **Start the Docker Containers:** Use Docker Compose to start the containers defined in the docker-compose.yml file:

```bash
docker-compose up -d
```

3. **Check the project:** Once the containers are up and running, you can access the application in your web browser at http://localhost:4005. Please note that it may take a few minutes for the application to start up initially.

4. **Stopping the Containers:** To stop the running containers, use the following command:

```bash
docker-compose down
```
