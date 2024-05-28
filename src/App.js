import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';

function App() {
  const { darkMode, setDarkMode } = useContext(AuthContext)
  return (
    <div className={`App ${darkMode && 'dark'}  dark:bg-gray-700 h-auto`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
