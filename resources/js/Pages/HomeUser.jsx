import React from "react";
import Layout from "../Layouts/Layout";
import TableConstanciasDownload from "./TableConstanciasDownload";

export default function HomeUser({ user, constancias, plantilla }) {
    return (
        <Layout auth={user}>
            <div className='bienvenida'>
                <p className='bienvenidaname'>Bienvenido: {user.name}</p>
                <p className='bienvenidaemail'>{user.email}</p>
            </div>
            <TableConstanciasDownload constancias={constancias} plantilla={plantilla} />
        </Layout>
    );
}