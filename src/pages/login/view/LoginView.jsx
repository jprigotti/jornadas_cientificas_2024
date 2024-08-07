import React from 'react'
import { useHooks } from '../../../hooks/useHooks'
import { useNavigate } from 'react-router-dom';

const LoginView = () => {

  const { isLoggedIn, setIsLoggedIn } = useHooks();
  const navigate = useNavigate();

  const handleLogIn = () => {
    setIsLoggedIn(true);
    navigate('/perfil');
  }

  const handleLogOut = () => {
    setIsLoggedIn(false);
    navigate('/home');
  }

  return (
    <div>
      <button onClick={handleLogIn}>LogIn</button>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default LoginView
