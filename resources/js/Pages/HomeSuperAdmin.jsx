import React from 'react';
import Layout from '../Layouts/Layout';
import { Link } from "@inertiajs/react";


export default function Homesuperadmin({ user }) {
    console.log('Homesuperadmin props:', { user }); // Verifica los props
    return (
        <Layout auth={user} >
            <div className='bienvenida'>
                <p className='bienvenidaname'>Bienvenido Super-Admin: {user.name}</p>
                <p className='bienvenidaemail'>{user.email}</p>
            </div>
            <div className='h-full w-screen content-center pt-20'>
                <div className='botonessa'>
                    <Link className="botone-link" href="/homeregisterconstancias">Registrar Constancias</Link>
                    <Link className="botone-link" href="/homeregisterusers">Registrar Usuario</Link>
                    <Link className="botone-link" href="/registeradmin">Registrar Administrador</Link>
                    <Link className="botone-link" href="/registersuperadmin">Registrar Super-Administrador</Link>
                </div>
                <div className='flex justify-center items-center'>
                    <Link className="botone-link" href="/registerplantilla">Registrar Plantilla</Link>
                </div>

            </div>
        </Layout>
    );
}