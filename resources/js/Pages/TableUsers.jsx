import React from 'react';
export default function TableUsers({ users }) {
    return (
        <div>
            <h1 className="title">Usuarios Benemérita Universidad Autónoma de Puebla</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id User</th>
                        <th>Nombre del Usuario</th>
                        <th>Correo Electrónico</th>
                        <th>Contraseña</th>
                        <th>Editar usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.user_id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.user_id}</td>
                            <td><a href="" class="btn-download" download>Editar</a></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}