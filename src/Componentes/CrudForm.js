import React, {useState, useEffect} from "react";
import { App } from "../App.css";
import gif from './gidCod.gif';

const initialForm={
    id:null,
    usuario:"",
    comentario:"",
};

const CrudForm=({agregarRegistro, actualizarRegistro, datoEditar, setDatoEditar})=>{
    const [form, setForm] = useState(initialForm);

    useEffect (()=>{
        if(datoEditar){
            setForm(datoEditar);
        }else {
            setForm(initialForm);
        }
    
    }, [datoEditar]);

    const handleChange=(e) =>{
        setForm({...form, [e.target.name]:e.target.value,});
    };

    const handleSubmit=(e) =>{
        e.preventDefault();
        if(!form.usuario || !form.comentario){
            alert("Datos incompletos")
            return;
        }
        if(form.id===null){
            agregarRegistro(form);
        }else{
            actualizarRegistro(form);
        }

        handleReset();
    };

    const handleReset=(e) =>{
        setForm(initialForm);
        setDatoEditar(null);
    };

    return(
        <div class="contenedor">
            <div class="arriba">
            
            </div>

            <div class="izquierda">
                <img src={gif} class="gif"/>
            </div>
            <div class="derecha">
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <div id="usuario">
                            <label for="usuario" class="tercero">Usuario:</label>
                            <input type="text" name="usuario" class="textousu" onChange={handleChange} value={form.usuario}/>
                        </div>
                    </li>
                    <li>
                        <div id="comentario">
                            <label for="comentario" class="tercero">&nbsp;&nbsp;&nbsp;&nbsp;Comentario:</label>
                            <textarea type="text" name="comentario" onChange={handleChange} value={form.comentario}/>
                        </div>
                    </li>
                    <li>
                    <div id="enviar">
                        <input type="submit" class="button-28" a value="Enviar"/>
                    </div>
                    <div id="limpiar">
                        <input type="reset" class="button-28" value="Limpiar" onClick={handleReset}/>
                    </div>
                    </li>
                </ul>
            </form>
            </div>
        </div>
    )
}

export default CrudForm