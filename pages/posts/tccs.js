import axios from "axios";
import Header from "../components/header";
import { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import PaginationSelector from "../components/paginaselector";
import styles from "/styles/Home.module.css"
import Table from "../components/cardtcc";

export const getStaticProps = async () => {
    const response = await axios.get('https://BackEnd-ORM-TCC.undertak3r.repl.co/tcc')
    const pesquisas = await response.data
    return {
      props: {
        pesquisas
      }
    }
  }

export default function TCCs({pesquisas}){
const [query, setQuery] = useState("")

const keys = ["titulo"]

const search = (currentpesquisas) => {
  return currentpesquisas.filter((currentpesquisas) => keys.some(key=>currentpesquisas[key].toLowerCase().includes(queryn)))
}
/*const search = (currentpesquisas)=>{
  return currentpesquisas.filter(currentpesquisas=> currentpesquisas.titulo.toLowerCase().includes(query))}*/

  

const [itensperpage, setItensperpage] = useState(10)
const [currentpage, setCurrentPage] = useState(0)

const pages = Math.ceil(pesquisas.length / itensperpage)
const startIndex = currentpage * itensperpage
const endIndex = startIndex + itensperpage
const currentpesquisas = pesquisas.slice(startIndex, endIndex)

const queryn = query.toLowerCase()
useEffect(()=>{setCurrentPage(0)}, [itensperpage])
    return(
        <div className="container-fluid g-0">
            <Header setQuery={setQuery}/>
            
            <Table currentpesquisas ={currentpesquisas} search={search}></Table>
        <div className={styles.paginador}>
        <PaginationSelector itensperpage={itensperpage} setItensperpage={setItensperpage}/>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
        </div>
        </div>
    )
}