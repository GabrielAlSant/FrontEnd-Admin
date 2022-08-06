import axios from "axios";
import Header from "../components/header";
import { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import PaginationSelector from "../components/paginaselector";

export const getStaticProps = async () => {
    const response = await axios.get('https://BackEnd-ORM-TCC.undertak3r.repl.co/campus')
    const campus = await response.data
    console.log(campus)
    return{
        props:{
            campus
        }
    }
}

export default function CampusAll({campus}){
const [query, setQuery] = useState("")    
const keys = ["nome","cidade","estado"]

const search = (currentcampus) => {
      return currentcampus.filter((currentcampus) => keys.some(key=>currentcampus[key].toLowerCase().includes(queryn)))
    }

const queryn = query.toLowerCase()

const [itensperpage, setItensperpage] = useState(10)
const [currentpage, setCurrentPage] = useState(0)

const pages = Math.ceil(campus.length / itensperpage)
const startIndex = currentpage * itensperpage
const endIndex = startIndex + itensperpage
const currentcampus = campus.slice(startIndex, endIndex)

useEffect(()=>{setCurrentPage(0)}, [itensperpage])
    return(
        <div className="container-fluid g-0">
        <Header setQuery={setQuery}/>
        <table className="table table-striped">
        <thead>
        <th>Nome</th>
        <th>Cidade</th>
        <th>Estado</th>
        <th>Contato</th>
        </thead>
        <tbody>
        {search(currentcampus).map(({id, nome, cidade, estado, contato})=>(
            <tr key={id}>
                <td>{nome}</td>
                <td>{cidade}</td>
                <td>{estado}</td>
                <td>{contato}</td>
            </tr>
        ))}
        </tbody>
        </table>
        <PaginationSelector itensperpage={itensperpage} setItensperpage={setItensperpage}/>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
        </div>
    )
}