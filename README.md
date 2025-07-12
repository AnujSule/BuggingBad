# BuggingBad – Community Marketplace Platform

## Overview
BuggingBad is a modern, full-stack web application built with React and Node.js. It's a community marketplace platform that enables users to buy, sell, and exchange items through a beautiful, user-friendly interface. The platform features role-based access control, real-time interactions, and a responsive design optimized for all devices.

## Features

### 🎯 Core Features
- **User Authentication & Authorization** - Secure login/registration with role-based access (User/Admin)
- **Modern UI/UX** - Beautiful, responsive interface built with Tailwind CSS and DaisyUI
- **Role-Based Dashboard** - Different experiences for regular users and administrators
- **Item Management** - Add, view, and manage listings with image uploads
- **Search & Discovery** - Browse items with advanced filtering and search capabilities
- **Admin Panel** - Comprehensive admin interface for managing users, orders, and listings

### 🎨 User Experience
- **Landing Page** - Hero section with search functionality and featured items
- **User Dashboard** - Personal profile, listings, and purchase history
- **Item Details** - Rich product pages with image galleries and descriptions
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - Theme support for better user experience

### 🔧 Technical Features
- **TypeScript** - Full type safety across frontend and backend
- **Modern React** - Built with React 18, hooks, and functional components
- **State Management** - Context API for global state management
- **Routing** - Client-side routing with React Router
- **Form Handling** - Robust form validation and error handling

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind
- **React Router** - Client-side routing
- **HeadlessUI** - Accessible UI components
- **Heroicons** - Beautiful SVG icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe backend development
- **Prisma** - Modern database ORM
- **PostgreSQL** - Reliable database (planned)

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## Project Structure
```
BuggingBad/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   │   ├── LandingPage.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── AddItem.tsx
│   │   │   ├── ItemDetail.tsx
│   │   │   └── AdminPanel.tsx
│   │   ├── components/    # Reusable components
│   │   ├── styles/        # CSS and styling
│   │   └── App.tsx        # Main app component
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── server/                # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Data models
│   │   ├── routes/        # API routes
│   │   └── middleware/    # Custom middleware
│   ├── prisma/            # Database schema
│   └── package.json       # Backend dependencies
├── use-node.sh           # Node.js environment setup
├── npm.sh               # NPM wrapper script
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (local installation included)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AnujSule/BuggingBad.git
   cd BuggingBad
   ```

2. **Set up the Node.js environment:**
   ```bash
   source use-node.sh
   ```

3. **Install frontend dependencies:**
   ```bash
   cd client
   ../npm.sh install
   ```

4. **Install backend dependencies:**
   ```bash
   cd ../server
   ../npm.sh install
   ```

### Running the Application

1. **Start the frontend development server:**
   ```bash
   cd client
   ../npm.sh start
   ```
   The frontend will be available at `http://localhost:3000`

2. **Start the backend server:**
   ```bash
   cd server
   ../npm.sh run dev
   ```
   The backend API will be available at `http://localhost:5000`

## Usage

### For Users
1. **Browse Items** - Visit the landing page to see featured items
2. **Create Account** - Register to access full features
3. **Add Listings** - Upload items you want to sell or exchange
4. **Manage Profile** - Update your profile and view your activity
5. **Search & Filter** - Find items using the search functionality

### For Administrators
1. **Access Admin Panel** - Use admin credentials to access the admin interface
2. **Manage Users** - View and manage user accounts
3. **Moderate Content** - Approve or reject listings
4. **View Analytics** - Monitor platform activity and statistics

## Development

### Code Style
- Use TypeScript for type safety
- Follow React best practices with functional components
- Use Tailwind CSS for styling
- Write clean, readable code with proper comments

### Git Workflow
- Create feature branches for new development
- Write descriptive commit messages
- Test changes before pushing
- Use pull requests for code review

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ using modern web technologies** 