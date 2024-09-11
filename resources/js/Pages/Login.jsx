import React from 'react';
import Layout from '../Layouts/Layout';
import { Link } from "@inertiajs/react";
import { useForm } from '@inertiajs/react';


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
            <div className="w-1/2 mx-auto m-20 h-auto p-0">
                <h1 className="block title">Login</h1>
                <form onSubmit={submit} method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 opacity-60 hover:opacity-100">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            E-mail
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="text" placeholder="E-mail" value={data.email} onChange={(e) => setData('email', e.target.value)}></input>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Password
                        </label>
                        <input className=" shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="******************" value={data.password} onChange={(e) => setData('password', e.target.value)}></input>
                    </div>
                    <div className="h-10 p-0 m-0 ">
                        {errors.name && <p className="error">{errors.name}</p>}
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="flex items-center content-center justify-center">
                        <button disabled={processing} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
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