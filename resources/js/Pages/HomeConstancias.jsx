import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/react";
import TableConstancias from "./TableConstancias";

export default function HomeConstancias({ constancias, user }) {
    return (
        <Layout auth={user}>
            <div className='h-1/2 content-center'>
                <div className='botonessa'>
                    <Link className="botone-link" href="/registerconstancias">Registrar Constancia (Formulario)</Link>
                    <Link className="botone-link" href="/registerconstanciasexcel">Registrar Constancias (Excel)</Link>
                </div>
            </div>
            <TableConstancias constancias={constancias}></TableConstancias>

        </Layout >
    );
}

