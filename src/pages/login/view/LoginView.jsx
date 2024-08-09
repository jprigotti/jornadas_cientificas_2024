import React from 'react'
import { useLogin } from "../hooks/useLogin"
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const LoginView = () => {

  const { isRegistered, setIsRegistered } = useLogin();

  return (
    <div className='flex flex-col items-center px-3'>
      <h2>Bienvenido!</h2>

      {isRegistered
        ? <button className='pb-3'
          onClick={() => setIsRegistered(!isRegistered)}>Click para registrarse</button>
        : <button className='pb-3'
          onClick={() => setIsRegistered(!isRegistered)}>Click para iniciar sesión</button>}

      <div className='pb-3'>
        {isRegistered ? <SignInForm /> : <SignUpForm />}
      </div>


    </div>
  )
}

export default LoginView
