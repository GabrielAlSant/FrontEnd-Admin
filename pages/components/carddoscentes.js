import Link from "next/link";
import React from "react";

 const TableDocentes = ({currentdocentes, search})=>{
    return(
        <table className="table table-striped">
        <thead>
            <th>Nome</th>
            <th>E-mail</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Formação</th>
            <th>Campus</th>
        </thead>
        <tbody>
        {search(currentdocentes).map(({id, nome, email, cpf, datanascimento, formacao, campusId})=>(
            <tr key={id}>
                <td>{nome}</td>
                <td>{email}</td>
                <td>{cpf}</td>
                <td>{datanascimento}</td>
                <td>{formacao}</td>
                <td>{campusId}</td>
            </tr>
        ))}
        </tbody>
        </table>
    )
}

export default TableDocentes




