import React from 'react';
import Layout from "../Layouts/Layout";
import TableConstancias from "./TableConstancias";
//import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { FaUpload } from "react-icons/fa";

export default function RegisterConstanciasExcel({ constancias, user }) {
    /*
    const { data, setData, post, progress, errors } = useForm({
        file: null,
    });
    function submit(e) {
        e.preventDefault();
        post('/registerconstanciasexcelpost');
    }


    return (
        <Layout>
            <form className="cargararchivo" onSubmit={submit}>
                <input className="inputform" type="file" onChange={e => setData('file', e.target.files[0])} />
                {progress && (
                    <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                    </progress>
                )}
                <button className="btn-download" type="submit" >Archivo</button>
                {errors.file && <p className="error">{errors.file}</p>}
            </form>
            <TableConstancias>

            </TableConstancias>
        </Layout>
    );*/
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Solo tomamos el primer archivo
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setErrors('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        setProcessing(true);
        setErrors(null);

        try {
            const response = await fetch('/registerconstanciasexcelpost', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setSuccessMessage(data.message || 'File uploaded successfully!');
                setFile(null);
            } else {
                const errorData = await response.json();
                setErrors(errorData.error || 'There was an error uploading the file.');
            }
        } catch (error) {
            setErrors('There was an error uploading the file.');
            console.error(error);
        } finally {
            setProcessing(false);
        }
    };

    return (
        <Layout auth={user}>
            <h2 className='title'>Registrar Constancias (Excel)</h2>
            <div className='instrucciones'>
                <h2 className='instruccionesh1'>Instrucciones</h2>
                <p>
                    Por favor, descargue la plantilla
                    <a
                        className='text-red-800 hover:text-blue-800'
                        href="/files/constancias_plantilla.xlsx"
                        download
                    >
                        (constancias_plantilla.xlsx)
                    </a>
                    para tener éxito en la carga del archivo.
                </p>
            </div>
            <form className="cargararchivo" onSubmit={handleSubmit}>
                <input className="inputform" type="file" accept=".xlsx,.xls,.csv" onChange={handleFileChange} />
                <div className="flex items-center content-center justify-center" href='/'>
                    <button className="btn-login text-white" type="submit" disabled={processing}>
                        <FaUpload className='text-2xl m-2 mx-5' />

                        {processing ? 'Cargando...' : 'Cargar Archivo'}
                    </button>
                </div>
                <div className="h-10 p-0 m-0 ">
                    {errors && <p className="error">{errors}</p>}
                    {successMessage && <p className="success">{successMessage}</p>}
                </div>
            </form>
            <TableConstancias constancias={constancias} />
        </Layout>
    );
}