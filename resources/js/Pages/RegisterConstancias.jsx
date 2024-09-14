import { Link } from "@inertiajs/react";
import { useForm } from '@inertiajs/react';
import React from 'react';
import Layout from "../Layouts/Layout";


export default function Register() {
    const { data, setData, post, errors, processing } = useForm({
        constancia_id: "",
        user_id: "",
        folio: "",
        folio_2: "",

    })
    function submit(e) {
        e.preventDefault();
        post('/registerconstancias');
    }
    console.log(errors);
    return (
        <Layout>
            <div className="w-full my-20 h-screen p-0 justify-items-center">
                <h1 className="title">Register Constancias</h1>
                <form onSubmit={submit} method="POST" className="formconstancias">
                    <div className=" w-full grid grid-cols-5 gap-10 justify-items-center">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Constancia ID
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="constancia_id" id="constancia_id" type="text" placeholder="Constancia_id" value={data.constancia_id} onChange={(e) => setData('constancia_id', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                User_id
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="user_id" id="user_id" type="text" placeholder="User_id" value={data.user_id} onChange={(e) => setData('user_id', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Folio
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="folio" id="folio" type="text" placeholder="Folio" value={data.folio} onChange={(e) => setData('folio', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Folio 2
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="folio_2" id="folio_2" type="text" placeholder="Folio_2" value={data.folio_2} onChange={(e) => setData('folio_2', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Folio 4 año
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="folio" id="folio" type="text" placeholder="Folio" value={data.folio} onChange={(e) => setData('folio', e.target.value)}></input>
                        </div>

                    </div>
                    <div className="h-10 p-0 m-0 ">
                        {errors.user_id && <p className="error">{errors.user_id}</p>}
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