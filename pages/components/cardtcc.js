import Link from "next/link";
import React from "react";

 const Table = ({currentpesquisas, search})=>{
    return(
        <table className="table table-striped">
        <thead>
        <tr>
            <th>Titulo</th>
            <th>Discentes</th>
            <th>Orientador(es)</th>
            <th>Campus</th>
            <th>Curso</th>
            <th>Data de Apresentação</th>
            <th>Monografia</th>
        </tr>
        </thead>
        <tbody>
        {search(currentpesquisas).map(({id, titulo, discenteId, docenteId, cursoId, data_apresentacao})=> (
          <tr key={id}>
          <td>{titulo}</td>
          <td>{discenteId}</td>
          <td>{docenteId}</td>
          <td>Nova Andradina</td>
          <td>{cursoId}</td>
          <td>{data_apresentacao}</td>
          </tr>
        ))}
        </tbody>   
        </table>
    )
}

export default Table




/*{search(currentpesquisas).map(currentpesquisas => {return <CardTcc key={currentpesquisas.id} id={currentpesquisas.id} titulo={currentpesquisas.titulo} discenteId={currentpesquisas.discenteId} docenteId={currentpesquisas.docenteId} cursoId={currentpesquisas.cursoId} data_apresentacao={currentpesquisas.data_apresentacao} ></CardTcc> }  )}*/