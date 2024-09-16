import Layout from "../Layouts/Layout";
import TableConstancias from "./TableConstancias";

export default function RegisterConstanciasExcel() {
    return (
        <Layout>
            <div className="cargararchivo">
                <input className="inputform" type="file" accept=".xlsx,.csv" />
                <button className="btn-download">
                    Cargar Archivo
                </button>
            </div>
            <TableConstancias>

            </TableConstancias>
        </Layout>
    );
}