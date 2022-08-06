import axios from "axios"
import Header from "../components/header"
import { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import PaginationSelector from "../components/paginaselector";

export const getStaticProps = async() => {
    const response = await axios.get('https://BackEnd-ORM-TCC.undertak3r.repl.co/discente')
    const discentes = await response.data
    console.log(discentes)
    return{
        props:{
            discentes
        }
    }
}

export default function DiscenteAll({discentes}){
    const [query, setQuery] = useState("")

    const keys = ["nome", "email","cpf"]
    
const search = (currentdiscentes) => {
        return currentdiscentes.filter((currentdiscentes) => keys.some(key=>currentdiscentes[key].toLowerCase().includes(queryn)))
      }
      const queryn = query.toLowerCase()

const [itensperpage, setItensperpage] = useState(10)
const [currentpage, setCurrentPage] = useState(0)

const pages = Math.ceil(discentes.length / itensperpage)
const startIndex = currentpage * itensperpage
const endIndex = startIndex + itensperpage
const currentdiscentes = discentes.slice(startIndex, endIndex)

useEffect(()=>{setCurrentPage(0)}, [itensperpage])
    return(
        <div className="container-fluid g-0">
        <Header setQuery={setQuery}/>
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
        <PaginationSelector itensperpage={itensperpage} setItensperpage={setItensperpage}/>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
        </div>
    )
}