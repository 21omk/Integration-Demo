# Registration Module - React Application

[![Lint, Build, and Deploy](https://github.com/21omk/Integration-Demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/21omk/Integration-Demo/actions/workflows/deploy.yml)

A complete registration and authentication system built with React and TypeScript, featuring a login page, registration page, and dashboard.

## 🌟 Features

- **User Authentication**: Complete login and registration flow
- **Form Validation**: Client-side validation for all forms
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Beautiful gradient design with smooth animations
- **Dashboard**: Basic dashboard with user profile and quick stats
- **React Router**: Client-side routing between pages
- **TypeScript**: Full TypeScript support for type safety

## 📱 Pages

### 1. Login Page (`/login`)
- Email and password authentication
- Form validation with error messages
- Link to registration page
- Redirects to dashboard on successful login

### 2. Registration Page (`/register`)
- User registration with full name, email, and password
- Password confirmation validation
- Form validation with error messages
- Link back to login page
- Redirects to dashboard on successful registration

### 3. Dashboard (`/dashboard`)
- User profile information with avatar
- Statistics overview (projects, tasks, etc.)
- Recent activities timeline
- Quick action buttons
- Logout functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/21omk/Integration-Demo.git
cd Integration-Demo
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode. The page will reload if you make edits.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Login.tsx          # Login page component
│   ├── Login.css          # Login page styles
│   ├── Register.tsx       # Registration page component
│   ├── Register.css       # Registration page styles
│   ├── Dashboard.tsx      # Dashboard component
│   └── Dashboard.css      # Dashboard styles
├── App.tsx                # Main app component with routing
├── App.css                # Global app styles
└── index.tsx             # App entry point
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple gradient design
- **Form Styling**: Modern form inputs with focus states
- **Responsive Grid**: Dashboard uses CSS Grid for layout
- **Icons & Emojis**: Visual indicators for better UX
- **Hover Effects**: Interactive button and link states
- **Error States**: Clear error messaging for form validation

## 🔒 Authentication Flow

1. Users start at the login page (`/`) by default
2. New users can navigate to registration (`/register`)
3. After successful login/registration, users are redirected to dashboard (`/dashboard`)
4. Users can logout from the dashboard to return to login

## 📋 Form Validation

### Login Form
- Email: Required and must be valid email format
- Password: Required and minimum 6 characters

### Registration Form
- Full Name: Required
- Email: Required and must be valid email format
- Password: Required and minimum 6 characters
- Confirm Password: Required and must match password

## 🚀 Deployment

### GitHub Pages (Automated)

This project includes a GitHub Actions workflow that automatically:
1. **Lints** the code with ESLint
2. **Tests** the application
3. **Builds** the production bundle
4. **Deploys** to GitHub Pages

The workflow runs on every push to the `main` branch and pull request.

**Setup GitHub Pages:**
1. Go to repository Settings → Pages
2. Under "Build and deployment" → Source, select "GitHub Actions"
3. Push to `main` branch to trigger deployment

The app will be available at: `https://21omk.github.io/Integration-Demo`

### Manual Deployment

The app can also be deployed to any static hosting service:

```bash
npm run build
```

Then deploy the `build` folder to your hosting provider.

## 🔧 Technologies Used

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **React Router DOM** - Client-side routing
- **CSS3** - Styling and animations
- **Create React App** - Project setup and build tools

## 📝 Notes

- This is a demo application with mock authentication
- In a real application, you would integrate with a backend API
- Form submissions currently log to console and redirect
- No persistent authentication state (refreshing returns to login)

---

Built with ❤️ using React and TypeScript