import axios from "axios";
import Header from "../../components/header";
import { useState, useEffect } from "react";
import Pagination from "../../components/pagination";
import PaginationSelector from "../../components/paginaselector";

export async function getServerSideProps(context) {
    const id = context.params.id
    const response = await axios.get(`http://localhost:4000/curso/${id}/tcc`)
    const pesquisas = response.data
   return{
     props: {
       pesquisas
     }
   }
  }

export default function CursoTCCs({pesquisas}){
  const [query, setQuery] = useState("")

  const keys = ["titulo"]
  
  const search = (currentpesquisas) => {
    return currentpesquisas.filter((currentpesquisas) => keys.some(key=>currentpesquisas[key].toLowerCase().includes(queryn)))
  }
  const queryn = query.toLowerCase()
const [itensperpage, setItensperpage] = useState(10)
const [currentpage, setCurrentPage] = useState(0)

const pages = Math.ceil(pesquisas.length / itensperpage)
const startIndex = currentpage * itensperpage
const endIndex = startIndex + itensperpage
const currentpesquisas = pesquisas.slice(startIndex, endIndex)

useEffect(()=>{setCurrentPage(0)}, [itensperpage])

    return(
        <div className="container-fluid g-0">
            <Header setQuery={setQuery}/>
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
        {currentpesquisas.map(({id, titulo, discenteId, docenteId, cursoId, data_apresentacao})=> (
          <tr key={id}>
          <td>{titulo}</td>
          <td>{discenteId.nome}</td>
          <td>{docenteId}</td>
          <td>Nova Andradina</td>
          <td>{cursoId}</td>
          <td>{data_apresentacao}</td>
          </tr>
        ))}
        </tbody>   
        </table>
        
        <PaginationSelector itensperpage={itensperpage} setItensperpage={setItensperpage}/>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
        </div>
    )
}