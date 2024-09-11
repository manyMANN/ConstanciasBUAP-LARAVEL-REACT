import React from 'react';
import Layout from '../Layouts/Layout';
import { Link } from "@inertiajs/react";


export default function Homesuperadmin({ user }) {
    console.log('Homesuperadmin props:', { user }); // Verifica los props
    return (
        <Layout auth={user} >
            <div className='bienvenida'>
                <p className='bienvenidaname'>Welcome Super-Admin: {user.name}</p>
                <p className='bienvenidaemail'>{user.email}</p>
            </div>
            <div className='h-1/2 content-center'>
                <div className='botonessa'>
                    <Link className="botone-link" href="">Registrar Constancias</Link>
                    <Link className="botone-link" href="/register">Registrar Usuario</Link>
                    <Link className="botone-link" href="">Registrar Administrador</Link>
                    <Link className="botone-link" href="">Registrar Super-Administrador</Link>
                </div>
            </div>
        </Layout>
    );
}