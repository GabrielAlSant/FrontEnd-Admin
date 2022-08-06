import Link from "next/link";
import React from "react";

 const TableDiscentes = ({currentdiscentes, search})=>{
    return(
        <table className="table table-striped">
        <thead>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Data de Nascimento</th>
            <th>CPF</th>
            <th>Campus</th>
            <th>Curso</th>
        </thead>
        <tbody>
        {search(currentdiscentes).map(({id, nome, email, datanascimento, cpf, campusId, cursoId})=>(
        <tr key={id}>
            <td>{nome}</td>
            <td>{email}</td>
            <td>{datanascimento}</td>
            <td>{cpf}</td>
            <td>{campusId}</td>
            <td>{cursoId}</td>
        </tr>
        ))}
        </tbody>
        </table>
    )
}

export default TableDiscentes




