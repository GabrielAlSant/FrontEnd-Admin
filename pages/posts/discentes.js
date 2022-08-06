import Link from "next/link";
import axios from "axios"
import Header from "../components/header"
import { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import PaginationSelector from "../components/paginaselector";
import TableDiscentes from "../components/carddiscente";

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
        <center>
            <Link href="/posts/post/postdiscente"><h3>Cadastrar discente</h3></Link>
            </center>
        <h2>Discente Cadastrados</h2>
       <TableDiscentes search={search} currentdiscentes={currentdiscentes}/>
        <PaginationSelector itensperpage={itensperpage} setItensperpage={setItensperpage}/>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
        </div>
    )
}