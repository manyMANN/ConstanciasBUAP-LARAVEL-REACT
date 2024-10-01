import React from 'react';
import { useState } from 'react';
import { RiFileEditFill } from "react-icons/ri";
import { Link } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';
import { MdDelete } from "react-icons/md";

export default function TableConstancias({ constancias }) {
    const handleDelete = (constancia_id) => {
        if (confirm('¿Estás seguro de que quieres eliminar esta constancia?')) {
            Inertia.delete(`/delete-constancia/${constancia_id}`, {
                onSuccess: () => {
                    alert('Constancia eliminada correctamente');
                },
                onError: () => {
                    alert('Ocurrió un error al eliminar la constancia.');
                },
            });
        }
    };
    // Estado para la búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Función para manejar el cambio en la barra de búsqueda
    const handleSearch = (event) => {
        setSearchTerm(event.target.value); // Actualizar el valor de búsqueda
    };

    // Filtrar constancias basado en el valor de búsqueda
    const filteredConstancias = constancias.filter((constancia) =>
        constancia.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        constancia.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        constancia.unidad_academica.toLowerCase().includes(searchTerm.toLowerCase()) ||
        constancia.fecha_elaboracion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <h1 className="title">Constancias Benemérita Universidad Autónoma de Puebla</h1>
            <div className="barrabusqueda">
                <input
                    type='text'
                    placeholder="Buscar constancia..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID Docente</th>
                        <th>Nombre del Docente</th>
                        <th>Constancia</th>
                        <th>Fecha de Elaboración</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mostrar constancias filtradas */}
                    {filteredConstancias.length > 0 ? (
                        filteredConstancias.map((constancia) => (
                            <tr key={constancia.id}>
                                <td>{constancia.constancia_id}</td>
                                <td>{constancia.user_id}</td>
                                <td>{constancia.name}</td>
                                <td className='td_constancia_contenido'>Por su valiosa participacón {constancia.contenido_1} {constancia.contenido_constancia}</td>
                                <td>{constancia.fecha_elaboracion}</td>
                                <td>
                                    <Link className="flex items-center content-center justify-center" href={`/edit-constancia/${constancia.constancia_id}`}>
                                        <button className="btn-login text-white">
                                            <RiFileEditFill className='text-2xl m-1' />
                                            Editar
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <div className="flex items-center content-center justify-center">
                                        <button
                                            className="btn-login text-white flex items-center"
                                            onClick={() => handleDelete(constancia.constancia_id)}
                                        >
                                            <MdDelete className='text-2xl m-1' />
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No se encontraron constancias</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    );
}