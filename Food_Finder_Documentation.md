# Food Finder - Project Documentation

## Overview
Full-stack food discovery application built with MERN stack (MongoDB, Express.js, React.js, Node.js).

## Backend

### Dependencies
- Express.js - Web framework
- MongoDB/Mongoose - Database
- JWT - Authentication
- bcryptjs - Password hashing
- CORS - Cross-origin requests
- Morgan - HTTP logging

### Models
- **User**: username, email, password, favorites
- **Restaurant**: name, description, address, phone, menu
- **MenuItem**: name, description, price, category, image

### API Routes
- `/api/auth` - Registration and login
- `/api/restaurants` - Restaurant data
- `/api/favorites` - User favorites management

### Server Setup
```bash
cd backend
npm install
npm run dev
```

## Frontend

### Dependencies
- React 19 - UI library
- Material-UI - Components
- React Router - Navigation
- Axios - HTTP requests

### Components
- **App.js** - Main application with routing
- **AuthContext** - User authentication state
- **RestaurantList** - Display restaurant grid
- **RestaurantDetail** - Single restaurant view
- **Favorites** - User's favorite items
- **Login/Register** - Authentication forms

### Setup
```bash
cd frontend
npm install
npm start
```

## Features
- User authentication (register/login)
- Browse restaurants
- View restaurant details and menus
- Add/remove menu items to favorites
- Responsive design
- JWT token authentication

## Database
- MongoDB with Mongoose ODM
- Dummy data included for testing
- User favorites stored in database

## Project Structure
```
Food Finder/
├── backend/          # Express server
│   ├── models/      # Database schemas
│   ├── routes/      # API endpoints
│   └── server.js    # Main server
└── frontend/        # React app
    ├── src/
    │   ├── components/
    │   ├── context/
    │   └── App.js
    └── public/
```

## Installation & Setup

### Prerequisites
- Node.js (>=16.0.0)
- MongoDB (local or cloud)

### Backend Setup
1. Navigate to backend directory
2. Install dependencies: `npm install`
3. Create `.env` file with MongoDB URI
4. Run development server: `npm run dev`

### Frontend Setup
1. Navigate to frontend directory
2. Install dependencies: `npm install`
3. Start development server: `npm start`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get single restaurant
- `GET /api/restaurants/:id/menu` - Get restaurant menu

### Favorites
- `GET /api/favorites` - Get user favorites
- `POST /api/favorites/:menuItemId` - Add to favorites
- `DELETE /api/favorites/:menuItemId` - Remove from favorites

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/food-finder
JWT_SECRET=your-secret-key
PORT=5000
```

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- Morgan

### Frontend
- React 19
- Material-UI
- React Router
- Axios
- Context API

## Features Overview

### User Management
- Secure user registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes

### Restaurant Discovery
- Browse restaurant listings
- View detailed restaurant information
- Explore restaurant menus
- Payment method indicators

### Favorites System
- Add menu items to favorites
- Remove items from favorites
- Persistent favorites storage
- Dedicated favorites page

### UI/UX
- Responsive Material-UI design
- Modern card-based layout
- Smooth animations and transitions
- Loading states and error handling

## Database Schema

### User Collection
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (hashed),
  favorites: [MenuItem ObjectIds],
  timestamps: true
}
```

### Restaurant Collection
```javascript
{
  name: String (required),
  description: String,
  address: String,
  phone: String,
  supportsCOD: Boolean,
  supportsMobilePayment: Boolean,
  image: String,
  menu: [MenuItem Schema],
  timestamps: true
}
```

### MenuItem Schema
```javascript
{
  name: String (required),
  description: String,
  price: Number (required),
  category: String,
  image: String
}
```

## Security Features
- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Input validation
- Error handling middleware

## Development Commands

### Backend
```bash
npm start      # Production start
npm run dev    # Development with nodemon
npm run build  # Build step (not required)
```

### Frontend
```bash
npm start      # Development server
npm run build  # Production build
npm test       # Run tests
```

## Deployment Considerations
- Set up MongoDB database (local or cloud)
- Configure environment variables
- Set up CORS for production domains
- Use HTTPS in production
- Implement proper error logging
- Set up monitoring and analytics

## Troubleshooting

### Common Issues
1. **MongoDB Connection**: Ensure MongoDB is running
2. **Port Conflicts**: Check if ports 3000/5000 are available
3. **CORS Issues**: Verify API URL configuration
4. **JWT Errors**: Check JWT_SECRET environment variable

### Debug Steps
1. Check console logs for errors
2. Verify database connection
3. Test API endpoints with Postman
4. Check browser network tab
5. Validate environment variables

## Contributing
1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## License
This project is for educational purposes. 