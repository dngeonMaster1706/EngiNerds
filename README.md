# Full Stack Blog Application

A full-stack blog application developed using Next.js, MongoDB, and Tailwind CSS. This project includes a responsive frontend, a robust backend, and an admin dashboard for managing blog posts.

## Features

- **Next.js for Server-Side Rendering (SSR)**: Enhances SEO and performance.
- **MongoDB Integration**: Efficient data storage and management.
- **Tailwind CSS**: Modern and responsive UI design.
- **Admin Dashboard**: Manage blog posts with ease.
- **RESTful APIs**: Perform CRUD operations seamlessly.
- **User Authentication**: Secure access with JWT.

## Project Overview

- **Frontend**: Next.js and Tailwind CSS
- **Backend**: Next.js API routes and MongoDB
- **Deployment**: Vercel

## Demo

[Insert Link to Live Demo]



## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/blog-app.git
    cd blog-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env.local` file in the root directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

5. **Open your browser:**
    Visit [http://localhost:3000](http://localhost:3000)

## Usage

- **Admin Dashboard:** Accessible at `/admin`, use your credentials to log in and manage posts.
- **API Endpoints:** Available under `/api`, used for CRUD operations on blog posts.

## Project Structure

