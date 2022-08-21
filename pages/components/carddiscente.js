import Link from "next/link";
import React from "react";

 const TableDiscentes = ({currentdiscentes, search})=>{
    return(
        <center>
        <div class="col-sm-9">
        {search(currentdiscentes).map(({id, nome, email, datanascimento, cpf, campusId, cursoId})=>(
            <div class="card">
       <div class="card-body" key={id}>
       <h5 class="card-title">{nome}</h5>
       <p class="card-text">Email:{email}</p>
       <p class="card-text">Data de Nascimento:{datanascimento}</p>
       <p class="card-text">CPF:{cpf}</p>
       <p class="card-text">Campus:{campusId}</p>
       <p class="card-text">Curso:{cursoId}</p>
       <a href="#" class="btn btn-outline-danger">Excluir</a>
       <a href="#" class="btn btn-outline-primary">Alterar</a>
     </div>
     </div>
        ))}
       </div>
       </center>
    )
}

export default TableDiscentes




