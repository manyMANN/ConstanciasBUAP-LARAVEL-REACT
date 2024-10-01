import React from 'react';
import { useState } from 'react';
import ConstanciaPDF from './PDFConstancia'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { BlobProvider } from '@react-pdf/renderer';
import { FaDownload } from "react-icons/fa";


export default function TableConstanciasDownload({ constancias }) {
    // Estado para la búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Función para manejar el cambio en la barra de búsqueda
    const handleSearch = (event) => {
        setSearchTerm(event.target.value); // Actualizar el valor de búsqueda
    };

    // Filtrar constancias basado en el valor de búsqueda
    const filteredConstancias = constancias.filter((constancia) =>
        constancia.contenido_1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        constancia.contenido_constancia.toLowerCase().includes(searchTerm.toLowerCase()) ||
        constancia.fecha_elaboracion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <h1 className="title">Constancias Benemérita Universidad Autónoma de Puebla</h1>
            <div className="barrabusqueda">
                <input
                    type='text'
                    placeholder="Buscar constancia..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Constancia</th>
                        <th>Fecha de Elaboración</th>
                        <th>Vista Previa</th>
                        <th>Descargar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mostrar constancias filtradas */}
                    {filteredConstancias.length > 0 ? (
                        filteredConstancias.map((constancia, index) => (
                            <tr key={constancia.id}>
                                <td>{index + 1}</td>
                                <td className='td_constancia_contenido'>Por su valiosa participacón {constancia.contenido_1} {constancia.contenido_constancia}</td>
                                <td>{constancia.fecha_elaboracion}</td>
                                <td>
                                    <BlobProvider document={<ConstanciaPDF constancia={constancia} />}>
                                        {({ url, loading, error }) =>
                                            loading ? (
                                                'Generando vista previa...'
                                            ) : (
                                                <iframe
                                                    src={url}
                                                    width="200"
                                                    height="142"
                                                    title="Vista previa de la constancia"
                                                />
                                            )
                                        }
                                    </BlobProvider>
                                </td>
                                <td>
                                    <div className='flex text-white justify-items-center content-center items-center btn-login '>
                                        <FaDownload className='m-2' />
                                        <PDFDownloadLink document={<ConstanciaPDF constancia={constancia} />} fileName='ConstanciaBUAP.pdf'>

                                            {
                                                ({ loading, url, error }) => loading ? (<button className="">
                                                    Descargando...
                                                </button>) : (<button className="">
                                                    Descargar
                                                </button>)
                                            }
                                        </PDFDownloadLink>
                                    </div>

                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No se encontraron constancias</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}