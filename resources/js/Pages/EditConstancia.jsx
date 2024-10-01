import { useForm } from '@inertiajs/react';
import React from 'react';
import Layout from "../Layouts/Layout";
import { FaRegAddressCard } from "react-icons/fa";

export default function EditConstancia({ constancia }) {
    const { data, setData, post, errors, processing } = useForm({
        constancia_id: constancia.constancia_id,
        user_id: constancia.user_id,
        name: constancia.name,
        email: constancia.email,
        unidad_academica: constancia.unidad_academica,
        academia: constancia.academia,
        periodo: constancia.periodo,
        dems_id: constancia.dems_id,
        f_direccion: constancia.f_direccion,
        f_coordinacion: constancia.f_coordinacion,
        f_4ano: constancia.f_4ano,
        f_extra: constancia.f_extra,
        foja: constancia.foja,
        libroMA: constancia.libroMA,
        f_3partida: constancia.f_3partida,
        contenido_1: constancia.contenido_1,
        contenido_constancia: constancia.contenido_constancia,
        fecha_elaboracion: constancia.fecha_elaboracion,
        observaciones: constancia.observaciones,
        fecha_envio: constancia.fecha_envio,
        validacion: constancia.validacion,
        factor_esdeped: constancia.factor_esdeped,
        concepto_esdeped: constancia.concepto_esdeped,
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/update-constancia/${constancia.constancia_id}`);
    }
    console.log(errors);
    return (
        <Layout>
            <div className="w-full my-20 justify-items-center p-0">
                <h1 className="title">Modificar Constancias</h1>
                <form onSubmit={handleSubmit} method="POST" className="formconstancias">
                    <div className="cajaform">
                        <div className="mb-4">
                            <label className="labelform">
                                Constancia_id
                            </label>
                            <input className="inputform" name="constancia_id" id="constancia_id" type="text" placeholder="Constancia_id" value={data.constancia_id} onChange={(e) => setData('constancia_id', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                User_id
                            </label>
                            <input className="inputform" name="user_id" id="user_id" type="text" placeholder="User_id" value={data.user_id} onChange={(e) => setData('user_id', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Dems_id
                            </label>
                            <input className="inputform" name="dems_id" id="dems_id" type="text" placeholder="Dems_id" value={data.dems_id} onChange={(e) => setData('dems_id', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Folio (Dirección)
                            </label>
                            <input className="inputform" name="f_direccion" id="f_direccion" type="text" placeholder="Folio (Dirección)" value={data.f_direccion} onChange={(e) => setData('f_direccion', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Folio (Coordinación)
                            </label>
                            <input className="inputform" name="f_coordinacion" id="f_coordinacion" type="text" placeholder="Folio (Coordinación)" value={data.f_coordinacion} onChange={(e) => setData('f_coordinacion', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Folio (Año)
                            </label>
                            <input className="inputform" name="f_4ano" id="f_4ano" type="text" placeholder="Folio (Año)" value={data.f_4ano} onChange={(e) => setData('f_4ano', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Folio (Extra)
                            </label>
                            <input className="inputform" name="f_extra" id="f_extra" type="text" placeholder="Folio (Extra)" value={data.f_extra} onChange={(e) => setData('f_extra', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Foja (Subtotal)
                            </label>
                            <input className="inputform" name="foja" id="foja" type="text" placeholder="Foja (Subtotal)" value={data.foja} onChange={(e) => setData('foja', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Libro (Mes/Año)
                            </label>
                            <input className="inputform" name="libroMA" id="libroMA" type="text" placeholder="Libro (Mes/Año)" value={data.libroMA} onChange={(e) => setData('libroMA', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Folio (Partida)
                            </label>
                            <input className="inputform" name="f_3partida" id="f_3partida" type="text" placeholder="Folio (Partida)" value={data.f_3partida} onChange={(e) => setData('f_3partida', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Periodo
                            </label>
                            <input className="inputform" name="periodo" id="periodo" type="text" placeholder="Periodo" value={data.periodo} onChange={(e) => setData('periodo', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Fecha (Elaboración)
                            </label>
                            <input className="inputform" name="fecha_elaboracion" id="fecha_elaboracion" type="text" placeholder="Fecha de Elaboración" value={data.fecha_elaboracion} onChange={(e) => setData('fecha_elaboracion', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Observaciones
                            </label>
                            <input className="inputform" name="observaciones" id="observaciones" type="text" placeholder="Observaciones" value={data.observaciones} onChange={(e) => setData('observaciones', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Academia
                            </label>
                            <input className="inputform" name="academia" id="academia" type="text" placeholder="Academia" value={data.academia} onChange={(e) => setData('academia', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Fecha de Envio
                            </label>
                            <input className="inputform" name="fecha_envio" id="fecha_envio" type="text" placeholder="Fecha de Envio" value={data.fecha_envio} onChange={(e) => setData('fecha_envio', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Validación
                            </label>
                            <input className="inputform" name="validacion" id="validacion" type="text" placeholder="Validación" value={data.validacion} onChange={(e) => setData('validacion', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Factor (ESDEPED)
                            </label>
                            <input className="inputform" name="factor_esdeped" id="factor_esdeped" type="text" placeholder="Factor (ESDEPED)" value={data.factor_esdeped} onChange={(e) => setData('factor_esdeped', e.target.value)}></input>
                        </div>
                        <div className="mb-4">
                            <label className="labelform">
                                Concepto (ESDEPED)
                            </label>
                            <input className="inputform" name="concepto_esdeped" id="concepto_esdeped" type="text" placeholder="Concepto (ESDEPED)" value={data.concepto_esdeped} onChange={(e) => setData('concepto_esdeped', e.target.value)}></input>
                        </div>

                    </div>

                    <div className="mb-4">
                        <label className="labelform">
                            Unidad Académica
                        </label>
                        <input className="inputform" name="unidad_academica" id="unidad_academica" type="text" placeholder="Unidad Académica" value={data.unidad_academica} onChange={(e) => setData('unidad_academica', e.target.value)}></input>
                    </div>
                    <div className="mb-4">
                        <label className="labelform">
                            E-mail
                        </label>
                        <input className="inputform" name="email" id="email" type="text" placeholder="E-mail" value={data.email} onChange={(e) => setData('email', e.target.value)}></input>
                    </div>
                    <div className="mb-4">
                        <label className="labelform">
                            Nombre
                        </label>
                        <input className="inputform" name="name" id="name" type="text" placeholder="Nombre" value={data.name} onChange={(e) => setData('name', e.target.value)}></input>
                    </div>
                    <div className="mb-4">
                        <label className="labelform">
                            Contenido (1)
                        </label>
                        <input className="inputform" name="contenido_1" id="contenido_1" type="text" placeholder="Contenido" value={data.contenido_1} onChange={(e) => setData('contenido_1', e.target.value)}></input>
                    </div>
                    <div className="mb-4">
                        <label className="labelform">
                            Contenido de la Constancia
                        </label>
                        <textarea className="inputform" name="contenido_constancia" id="contenido_constancia" type="text" placeholder="Contenido de la Constancia ..." value={data.contenido_constancia} onChange={(e) => setData('contenido_constancia', e.target.value)}></textarea>
                    </div>
                    <div className="h-10 p-0 m-0 ">
                        {errors.constancia_id && <p className="error">{errors.constancia_id}</p>}
                        {errors.user_id && <p className="error">{errors.user_id}</p>}
                        {errors.name && <p className="error">{errors.name}</p>}
                        {errors.email && <p className="error">{errors.email}</p>}
                        {errors.unidad_academica && <p className="error">{errors.unidad_academica}</p>}
                        {errors.academia && <p className="error">{errors.academia}</p>}
                        {errors.periodo && <p className="error">{errors.periodo}</p>}
                        {errors.dems_id && <p className="error">{errors.dems_id}</p>}
                        {errors.f_direccion && <p className="error">{errors.f_direccion}</p>}
                        {errors.f_coordinacion && <p className="error">{errors.f_coordinacion}</p>}
                        {errors.f_4ano && <p className="error">{errors.f_4ano}</p>}
                        {errors.f_extra && <p className="error">{errors.f_extra}</p>}
                        {errors.foja && <p className="error">{errors.foja}</p>}
                        {errors.libroMA && <p className="error">{errors.libroMA}</p>}
                        {errors.f_3partida && <p className="error">{errors.f_3partida}</p>}
                        {errors.contenido_1 && <p className="error">{errors.contenido_1}</p>}
                        {errors.contenido_constancia && <p className="error">{errors.contenido_constancia}</p>}
                        {errors.fecha_elaboracion && <p className="error">{errors.fecha_elaboracion}</p>}
                        {errors.observaciones && <p className="error">{errors.observaciones}</p>}
                        {errors.fecha_envio && <p className="error">{errors.fecha_envio}</p>}
                        {errors.validacion && <p className="error">{errors.validacion}</p>}
                        {errors.factor_esdeped && <p className="error">{errors.factor_esdeped}</p>}
                        {errors.concepto_esdeped && <p className="error">{errors.concepto_esdeped}</p>}
                    </div>
                    <div className="flex items-center content-center justify-center">
                        <button disabled={processing} className="btn-login text-white" type="submit">
                            <FaRegAddressCard className='login-icons mx-2' />
                            Actualizar
                        </button>
                    </div>
                </form>
                <p className="buap">
                    &copy;2024 Benemérita Universidad Autónoma de Puebla.
                </p>

            </div>
        </Layout>
    )
}