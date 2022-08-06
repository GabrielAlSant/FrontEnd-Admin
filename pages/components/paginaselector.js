import React from "react"
import styles from '/styles/Home.module.css'

const PaginationSelector =({itensperpage, setItensperpage}) =>{
    return (
        <center>
        <form>
            <span>Trabalhos por página: </span>       
            
          <select className={styles.seletor} value={itensperpage} onChange={(e) => setItensperpage(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </form>
        </center>
        )
}

export default PaginationSelector