import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/react";
import TableUsers from "./TableUsers";

export default function HomeUsers({ users, user }) {
    return (
        <Layout auth={user}>
            <div className='h-1/2 content-center'>
                <div className='botonessa'>
                    <Link className="botone-link" href="/registeruser">Registrar Usuario (Formulario)</Link>
                    <Link className="botone-link" href="/registerusersexcel">Registrar Usuarios (Excel)</Link>
                </div>
            </div>
            <TableUsers users={users}></TableUsers>
        </Layout>
    );
}