import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profil",
    element: <Profile />
  },
  {
    path: "/register",
    element: <Register />
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
