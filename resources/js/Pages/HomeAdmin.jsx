import React from 'react';
import Layout from '../Layouts/Layout';
import TableAdmin from './TableAdmin';
import { Link } from '@inertiajs/react';


export default function Homeadmin({ user }) {
    console.log('Homeadmin props:', { user }); // Verifica los props
    return (
        <Layout auth={user}>
            <div className='bienvenida'>
                <p className='bienvenidaname'>Bienvenido Admin: {user.name}</p>
                <p className='bienvenidaemail'>{user.email}</p>
            </div>
            <div className='h-1/2 content-center'>
                <div className='botones'>
                    <Link className="botone-link" href="/homeregisterconstancias">Registrar Constancias</Link>
                    <Link className="botone-link" href="/homeregisterusers">Registrar Usuario</Link>
                </div>
            </div>
        </Layout>
    );
}