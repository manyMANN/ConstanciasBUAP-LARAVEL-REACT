import React from 'react';
import Layout from '../Layouts/Layout';
import TableConstancias from './TableConstancias';

export default function Homeuser({ user }) {
    return (
        <Layout auth={user}>
            <div className='bienvenida'>
                <p className='bienvenidaname'>Welcome User: {user.name}</p>
                <p className='bienvenidaemail'>{user.email}</p>
            </div>
            <div className='h-screen p-0 m-0'>
                <TableConstancias>

                </TableConstancias>
            </div>
        </Layout>
    );
}