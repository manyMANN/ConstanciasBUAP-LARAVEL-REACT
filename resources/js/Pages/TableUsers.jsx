import { Link } from '@inertiajs/react';
import React from 'react';
import { useState } from 'react';
import { RiFileEditFill } from "react-icons/ri";
import { Inertia } from '@inertiajs/inertia';
import { MdDelete } from "react-icons/md";

export default function TableUsers({ users }) {
    const handleDelete = (user_id) => {
        if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
            Inertia.delete(`/delete-user/${user_id}`, {
                onSuccess: () => {
                    alert('Usuario eliminada correctamente');
                },
                onError: () => {
                    alert('Ocurrió un error al eliminar la Usuario.');
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
    const filteredUsers = users.filter((user) =>
        user.user_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <h1 className="title">Usuarios Benemérita Universidad Autónoma de Puebla</h1>
            <div className="barrabusqueda">
                <input
                    type='text'
                    placeholder="Buscar Usuario..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id User</th>
                        <th>Nombre del Usuario</th>
                        <th>Correo Electrónico</th>
                        <th>Contraseña</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mostrar usuarios filtrados */}
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.user_id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.user_id}</td>
                                <td>
                                    <Link className="flex items-center content-center justify-center" href={`/edit-user/${user.user_id}`}>
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
                                            onClick={() => handleDelete(user.user_id)}
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
                            <td colSpan="5">No se encontraron usuarios</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}