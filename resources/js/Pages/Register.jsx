import { Link } from "@inertiajs/react";
import { useForm } from '@inertiajs/react';
import React from 'react';
import Layout from "../Layouts/Layout";


export default function Register() {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        role: "",
        password: "",
    })
    function submit(e) {
        e.preventDefault();
        post('/register');
    }
    console.log(errors);
    return (
        <Layout>
            <div className="w-1/2 mx-auto m-20 h-auto p-0">
                <h1 className="block title">Register</h1>
                <form onSubmit={submit} method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 opacity-60 hover:opacity-100">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            User ID
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="user_id" id="user_id" type="text" placeholder="User ID" value={data.user_id} onChange={(e) => setData('user_id', e.target.value)}></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" type="text" placeholder="Username" value={data.name} onChange={(e) => setData('name', e.target.value)}></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            E-mail
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="text" placeholder="E-mail" value={data.email} onChange={(e) => setData('email', e.target.value)}></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Role
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="role" id="role" type="text" placeholder="Role" value={data.role} onChange={(e) => setData('role', e.target.value)}></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Password
                        </label>
                        <input className=" shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="******************" value={data.password} onChange={(e) => setData('password', e.target.value)}></input>
                    </div>
                    <div className="h-10 p-0 m-0 ">
                        {errors.user_id && <p className="error">{errors.user_id}</p>}
                        {errors.username && <p className="error">{errors.username}</p>}
                        {errors.email && <p className="error">{errors.email}</p>}
                        {errors.role && <p className="error">{errors.role}</p>}
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="flex items-center content-center justify-center">
                        <button disabled={processing} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>

                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2024 Benemérita Universidad Autónoma de Puebla.
                </p>
            </div>
        </Layout>
    )
}
//id contraseña
//correo username