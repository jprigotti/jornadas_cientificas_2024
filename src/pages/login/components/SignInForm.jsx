import React from 'react'
import { useLogin } from '../hooks/useLogin'

const SignInForm = () => {

    const { signInEmail } = useLogin();
    return (
        <div className='bg-Blue px-2 py-2'>
            <form onSubmit={signInEmail}>
                <div>
                    <input
                        type="email"
                        name="email"
                        className='w-full px-2 py-2 mb-2'
                        placeholder="Correo electrónico"
                        required />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        className='w-full px-2 py-2 mb-5'
                        placeholder="Contraseña"
                        required />
                </div>
                <div className="w-full flex justify-center text-White">
                    <button
                        type={"submit"}
                        label={"Registarse"}
                    >Enviar
                    </button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm
