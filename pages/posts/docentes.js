import axios from "axios"
import Header from "../components/header"
import { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import PaginationSelector from "../components/paginaselector";

export const getStaticProps = async () =>{
    const response = await axios.get('https://BackEnd-ORM-TCC.undertak3r.repl.co/docente')
    const docentes = await response.data
    console.log(docentes)
    return{
        props:{
            docentes
        }
    }
}

export default function DocentesAll({docentes}){
    const [query, setQuery] = useState("")

    const keys = ["nome", "email", "formacao"]
    
    const search = (currentdocentes) => {
      return currentdocentes.filter((currentdocentes) => keys.some(key=>currentdocentes[key].toLowerCase().includes(queryn)))
    }
    const queryn = query.toLowerCase()

    const [itensperpage, setItensperpage] = useState(10)
const [currentpage, setCurrentPage] = useState(0)

const pages = Math.ceil(docentes.length / itensperpage)
const startIndex = currentpage * itensperpage
const endIndex = startIndex + itensperpage
const currentdocentes = docentes.slice(startIndex, endIndex)

useEffect(()=>{setCurrentPage(0)}, [itensperpage])
    return(
        <div className="container-fluid g-0">
            <Header setQuery={setQuery} />
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
            <PaginationSelector itensperpage={itensperpage} setItensperpage={setItensperpage}/>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
        </div>
    )
}