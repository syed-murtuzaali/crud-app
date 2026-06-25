# StockNest - Product Management System

A full-stack CRUD application for managing products with user authentication.

## Features

- 🔐 User Authentication (Register/Login)
- ✨ Product CRUD Operations (Create, Read, Update, Delete)
- 📱 Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS & DaisyUI
- 🔔 Toast Notifications
- 🎯 Clean and Intuitive Interface

## Tech Stack

### Frontend
- React.js
- Redux Toolkit (State Management)
- React Router (Navigation)
- Tailwind CSS (Styling)
- DaisyUI (UI Components)
- React Hot Toast (Notifications)
- Axios (HTTP Client)
- Poppins Font Family

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- bcryptjs (Password Hashing)
- dotenv (Environment Variables)
- CORS

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:
```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user

### Products
- `POST /product/create/:userId` - Create new product
- `GET /product/getProducts/:id` - Get all products by user
- `PUT /product/update/:id` - Update product
- `DELETE /product/delete/:id` - Delete product

## Project Structure

```
crud/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── libs/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.jsx
│   └── index.html
└── README.md
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

## Author

Syed Murtuza Ali
