import React from "react";
import Layout from "../Layouts/Layout";
import { FaRegImage } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import PlantillaConstancia from "./PlantillaConstancia";
import { BlobProvider } from '@react-pdf/renderer';


const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};

export default function RegisterPlantilla({ success, error }) {
    const [file, setFile] = useState(null);
    const [nombrePlantilla, setNombrePlantilla] = useState('');
    const [errors, setErrors] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [preview, setPreview] = useState(null);
    const [latitud_nombre, setLatitud_nombre] = useState('50%'); // Por defecto, en el centro
    const [longitud_nombre, setLongitud_nombre] = useState('50%');
    const [latitud_texto, setLatitud_texto] = useState('50%'); // Por defecto, en el centro
    const [longitud_texto, setLongitud_texto] = useState('50%');
    const [font_size_nombre, setfont_size_nombre] = useState();
    const [font_size_texto, setfont_size_texto] = useState();
    const [text_color_nombre, settext_color_nombre] = useState();
    const [text_color_texto, settext_color_texto] = useState();

    useEffect(() => {
        if (preview) {
            console.log('Vista previa actualizada');
        }
    }, [preview]);

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0]; // Solo tomamos el primer archivo
        setFile(selectedFile)
        if (selectedFile) {
            // Generar la URL de vista previa para la imagen seleccionada
            const objectUrl = await fileToBase64(selectedFile);
            //const objectUrl = URL.createObjectURL(selectedFile);
            setPreview(objectUrl);
        } else {
            setPreview(null); // Si se elimina la imagen, limpiar la vista previa
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file || !nombrePlantilla) {
            setErrors('Debe proporcionar un nombre y seleccionar un archivo de imagen.');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('nombre_plantilla', nombrePlantilla);
        formData.append('font_size_nombre', font_size_nombre);
        formData.append('font_size_texto', font_size_texto);
        formData.append('text_color_nombre', text_color_nombre);
        formData.append('text_color_texto', text_color_texto);
        formData.append('longitud_nombre', longitud_nombre);
        formData.append('latitud_nombre', latitud_nombre);
        formData.append('longitud_texto', longitud_texto);
        formData.append('latitud_texto', latitud_texto);


        setProcessing(true);
        setErrors(null);

        Inertia.post('/registerplantillapost', formData, {
            onSuccess: (response) => {
                setSuccessMessage('Plantilla creada con éxito.');
                setFile(null); // Limpiar el archivo
                setNombrePlantilla(''); // Limpiar el nombre
                setfont_size_nombre();
                setfont_size_texto();
                settext_color_nombre();
                settext_color_texto();
            },
            onError: (error) => {
                setErrors('Hubo un error al subir la plantilla.');
            },
            onFinish: () => setProcessing(false),
        });

    };
    const customStyles = {
        name: {
            fontSize: font_size_nombre || 22,
            color: text_color_nombre || '#003B5C',
            position: 'absolute',
            left: longitud_nombre,
            top: latitud_nombre,
        },
        text: {
            fontSize: font_size_texto || 12,
            color: text_color_texto || '#003B5C',
            position: 'absolute',
            left: longitud_texto,
            top: latitud_texto,
        },
    };
    return (
        <Layout>
            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}
            <div className="w-full p-0 m-0">
                <h1 className="title">Registrar Plantilla</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 opacity-60 hover:opacity-100">
                    <div className="mb-6">
                        <label className="labelform">Nombre</label>
                        <input className="inputform" type="text" placeholder="Nombre de la Plantilla" name="nombre_plantilla" id="nombre_plantilla" value={nombrePlantilla} onChange={(e) => setNombrePlantilla(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="labelform">Imagen</label>
                        <input className="inputform" type="file" name="image" id="image" accept=".jpg, .jpeg, .png, .gif, .bmp, .svg, .webp, .ico" onChange={handleFileChange} />
                    </div>
                    <div>
                        {preview && (
                            <div className="content-center">
                                <h3 className="title">Vista previa:</h3>
                                <div>
                                    <label className="labelform text-center">Posición del Nombre</label>
                                    <div className="coordenadas">
                                        <div className="mb-6">
                                            <label className="labelform ">Latitud Nombre</label>
                                            <input type="number" placeholder="Latitud Nombre" id="latitud_nombre" name="latitud_nombre" value={latitud_nombre} onChange={(e) => setLatitud_nombre(e.target.value)} />
                                        </div>
                                        <div className="mb-6">
                                            <label className="labelform ">Longitud Nombre</label>
                                            <input type="number" placeholder="Longitud Nombre" id="longitud_nombre" name="longitud_nombre" value={longitud_nombre} onChange={(e) => setLongitud_nombre(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="labelform text-center">Posición del Texto</label>
                                    <div className="coordenadas">
                                        <div className="mb-6">
                                            <label className="labelform ">Latitud texto</label>
                                            <input type="number" placeholder="Latitud texto" id="latitud_texto" name="latitud_texto" value={latitud_texto} onChange={(e) => setLatitud_texto(e.target.value)} />
                                        </div>
                                        <div className="mb-6">
                                            <label className="labelform ">Longitud texto</label>
                                            <input type="number" placeholder="Longitud texto" id="longitud_texto" name="longitud_texto" value={longitud_texto} onChange={(e) => setLongitud_texto(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="mb-6">
                                        <label className="labelform ">Tamaño Fuente (Nombre)</label>
                                        <input type="number" placeholder="Tamaño de fuente (Nombre)" id="font_size_nombre" name="font_size_nombre" value={font_size_nombre} onChange={(e) => setfont_size_nombre(e.target.value)} />
                                    </div>
                                    <div className="mb-6">
                                        <label className="labelform ">Tamaño Fuente (Texto)</label>
                                        <input type="number" placeholder="Tamaño de fuente" id="font_size_texto" name="font_size_texto" value={font_size_texto} onChange={(e) => setfont_size_texto(e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="mb-6 flex justify-center items-center w-1/2 mx-auto">
                                        <label className="labelform m-0">Color(Nombre)</label>
                                        <input type="color" id="text_color_nombre" name="text_color_nombre" value={text_color_nombre} onChange={(e) => settext_color_nombre(e.target.value)} />
                                    </div>
                                    <div className="mb-6 flex justify-center items-center w-1/2 mx-auto">
                                        <label className="labelform m-0">Color(Texto)</label>
                                        <input type="color" placeholder="Tamaño de fuente" id="text_color_texto" name="text_color_texto" value={text_color_texto} onChange={(e) => settext_color_texto(e.target.value)} />
                                    </div>
                                </div>
                                <BlobProvider document={<PlantillaConstancia ConstanciaIMG={preview} customStyles={customStyles} />}>
                                    {({ url, loading, error }) =>
                                        loading ? (
                                            'Generando vista previa...'
                                        ) : (
                                            <iframe
                                                src={url}
                                                width="500"
                                                height="400"
                                                title="Vista previa de la constancia"
                                                className="relative"
                                            >
                                            </iframe>
                                        )
                                    }
                                </BlobProvider>
                            </div>
                        )}
                    </div>
                    <div className="h-10 p-0 m-0 ">
                        {errors && <p className="error">{errors}</p>}
                        {successMessage && <p className="success">{successMessage}</p>}
                    </div>
                    <div className="flex items-center content-center justify-center">
                        <button className="btn-login text-white" type="submit" disabled={processing}>
                            <FaRegImage className='login-icons mx-2' />
                            {processing ? 'Cargando...' : 'Cargar Plantilla'}
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}