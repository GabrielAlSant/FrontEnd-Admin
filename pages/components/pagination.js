import React from "react"

 const Pagination = ({pages, setCurrentPage}) => {
    return (
        <center>
        <div>{Array.from(Array(pages), (pesquisas, index) =>{
        return <button type="button" className="btn btn-outline-dark" value={index} onClick={(e) =>setCurrentPage
        (Number(e.target.value))}>{index + 1}</button>})}
        </div>
        </center>
        )   
}


export default Pagination
