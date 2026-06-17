# 🎵 Spotify Server

A lightweight Node.js and Express backend used by the **Metal Band App** frontend to interact with the Spotify Web API and provide custom endpoints for band-related data.

## 📖 Overview

Spotify Server acts as an intermediary between the frontend application and Spotify's services.

The main purpose of this backend is to handle Spotify API communication, manage authentication, process requests, and expose simplified endpoints that can be consumed by the React frontend.

By moving Spotify-related logic to the server, sensitive credentials remain protected and are never exposed to the client application.

---

## 🚀 Features

* Spotify API integration.
* Server-side authentication handling.
* Custom REST endpoints.
* Dynamic band data generation.
* CORS configuration for frontend communication.
* Centralized API request handling.

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* JavaScript (ES6+)
* Spotify Web API
* CORS

---

## 🏗️ Project Structure

```text
spotify-server/
│
├── data/
│   └── Static and generated band data
│
├── routes/
│   └── API route definitions
│
├── utils/
│   └── Helper functions and utilities
│
├── index.js
│
├── package.json
└── README.md
```

---

## 🔌 API Integration

### Spotify Web API

The server communicates with Spotify services to retrieve music-related information used by the frontend application.

Typical use cases include:

* Artist information
* Discography data
* Album information
* Music metadata

---

## 🔒 Why a Backend?

Spotify requires authentication and access tokens to access many of its resources.

This backend helps:

* Protect API credentials.
* Avoid exposing secrets in the frontend.
* Centralize Spotify requests.
* Simplify frontend API consumption.
* Handle CORS restrictions.

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/spotify-server.git
```

### Navigate to the project directory

```bash
cd spotify-server
```

### Install dependencies

```bash
npm install
```

### Create environment variables

Create a `.env` file in the root directory:

```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
PORT=3000
```

### Start the server

```bash
npm start
```

or

```bash
npm run dev
```

The server will be available at:

```text
http://localhost:3000
```

---

## 🌐 API Endpoints

The server exposes custom endpoints consumed by the frontend application.

Examples:

```text
GET /api/bands
GET /api/bands/:name
```

Additional endpoints may be available depending on the implementation.

---

## 🎯 Learning Objectives

This project was created to practice:

* Node.js fundamentals
* Express.js routing
* REST API development
* Environment variable management
* Third-party API integration
* CORS configuration
* Backend architecture
* Client-server communication

---

## 🔮 Future Improvements

Potential enhancements include:

* Request caching
* Rate limiting
* Better error handling
* Logging and monitoring
* API documentation with Swagger
* Unit and integration testing

---

## 🔗 Related Project

This backend was developed to support the **Metal Band App** frontend application.

Frontend technologies:

* React
* Vite
* Tailwind CSS
* React Router

---

## 👨‍💻 Author

**Ariel Gómez**

Frontend Developer with experience in React, JavaScript, web accessibility, and modern web technologies.

---

## 📄 License

This project was created for educational and portfolio purposes.
