import React from "react";

const CrudTableFila = ({el, setDatoEditar, borrarRegistro}) =>{
    let{id, usuario, comentario}=el;
    return (
        <tr>
            <td>{usuario}</td>
            <td>{comentario}</td>
             <td>
                <button onClick={() => setDatoEditar(el) } class="button-13" >Editar</button>
                <button onClick={() => borrarRegistro(id) }class="button-13">Eliminar</button>
             </td>
        </tr>
    );
};

export default CrudTableFila;