import React from 'react';
import Layout from '../Layouts/Layout';
import { Link } from "@inertiajs/react";
import { useForm } from '@inertiajs/react';
import { IoLogIn } from "react-icons/io5";

export default function Login() {
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
    })
    function submit(e) {
        e.preventDefault();
        post('/login');
    }
    console.log(errors);
    return (
        <Layout>
            <div className="w-full p-0 m-0">
                <h1 className="block title">Login</h1>
                <form onSubmit={submit} method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 opacity-60 hover:opacity-100">
                    <div className="mb-4">
                        <label className="labelform">
                            E-mail
                        </label>
                        <input className="inputform" name="email" id="email" type="text" placeholder="E-mail" value={data.email} onChange={(e) => setData('email', e.target.value)}></input>
                    </div>
                    <div className="mb-6">
                        <label className="labelform" >
                            Password
                        </label>
                        <input className="inputform" name="password" id="password" type="password" placeholder="******************" value={data.password} onChange={(e) => setData('password', e.target.value)}></input>
                    </div>
                    <div className="h-10 p-0 m-0 ">
                        {errors.name && <p className="error">{errors.name}</p>}
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="flex items-center content-center justify-center">
                        <button disabled={processing} className="btn-login text-white" type="submit">
                            <IoLogIn className='login-icons mx-2' />
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2024 Benemérita Universidad Autónoma de Puebla.
                </p>
            </div>
            <Link preserveScroll href='' className="block title mt-[100px]">{new Date().toLocaleTimeString()}</Link>
        </Layout>
    )
}
//id contraseña
//correo username