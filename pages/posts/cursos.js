import axios from "axios"
import Header from "../components/header"
import { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import PaginationSelector from "../components/paginaselector";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await axios.get('https://BackEnd-ORM-TCC.undertak3r.repl.co/curso')
    const curso = await response.data
    console.log(curso)
    return{
        props:{
            curso
        }
    }
}



export default function CursosAll({curso}){   
const [query, setQuery] = useState("")

const keys = ["nome"]
    
const search = (currentcurso) => {
return currentcurso.filter((currentcurso) => keys.some(key=>currentcurso[key].toLowerCase().includes(queryn)))
}    
const queryn = query.toLowerCase()    
const [itensperpage, setItensperpage] = useState(10)
const [currentpage, setCurrentPage] = useState(0)

const pages = Math.ceil(curso.length / itensperpage)
const startIndex = currentpage * itensperpage
const endIndex = startIndex + itensperpage
const currentcurso = curso.slice(startIndex, endIndex)

useEffect(()=>{setCurrentPage(0)}, [itensperpage])
    return(
        <div className="container-fluid g-0">
        <Header setQuery={setQuery} />
        <table className="table table-striped">
        <thead>
        <th>Nome</th>
        <th>Duração</th>
        <th>Descrição</th>
        <th>Campus</th>
        </thead>
        <tbody>
        {search(currentcurso).map(({id, nome, duracao, descricao, campusId})=>(
        <tr key={id}>
            <td>{nome}</td>
            <td>{duracao}</td>
            <td>{descricao}</td>
            <td>{campusId}</td>
            <Link href={`/posts/curso_tcc/${id}`}><button>TCCs Curso {nome}</button></Link>
        </tr>
        
        ))}
        </tbody>
        </table>
        <PaginationSelector itensperpage={itensperpage} setItensperpage={setItensperpage}/>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
        </div>
    )
}