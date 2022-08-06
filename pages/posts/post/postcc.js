import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import React from 'react';
import Header from '../../components/header';





export const getStaticProps = async () =>{
    const response = await axios.get('https://BackEnd-ORM-TCC.undertak3r.repl.co/docente')
    const docentes = await response.data
    return{
        props:{
            docentes
        }
    }
}


export default function CadastrarTcc({docentes, discentes, curso}){

const [tcc, setTcc] = useState({
    titulo: "",
    discenteId: "",
    docenteId: "",
    cursoId: "",
    data_apresentacao:""
  });
  let router = useRouter();

  
 const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyFieldCheck = Object.values(tcc).some(
      (element) => element === ""
    )
    if (emptyFieldCheck) {
      toast.error("Preencha todos os campos!");
      return
    }
    const data = {
      ...tcc
    }

    const response = await axios.post("https://BackEnd-ORM-TCC.undertak3r.repl.co/tcc", data)


    if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/pages/posts/tccs')
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTcc({ ...tcc, [id]: value });
  };

  const { titulo, discenteId, docenteId, cursoId , data_apresentacao } = tcc;
  
  return (
    <div>
   <Header />

      <ToastContainer/>
      <form onSubmit={handleSubmit}>
        <center>
      <h2>Cadastre o tcc</h2>
       
  <h4>Titulo Do TCC</h4>
  <input id="titulo" type="text" value={tcc.titulo} onChange={handleInputChange} class="form-control" placeholder="Digite o nome do tcc" />
        
  <h4>Selcione o discente</h4>
  <input id="discenteId" type="text" value={tcc.discenteId} onChange={handleInputChange} class="form-control" placeholder="escolha o discente" />         

          <h4>ID do Docente</h4>
          <select class="form-control" id="docenteId" value={tcc.docenteId} onChange={handleInputChange}>
            <option selected >Selecione o Orientador </option>
            {docentes.map(({id, nome, email, cpf, datanascimento, formacao, campusId}) => (
              <option key={id} value={id} > {nome}</option>
            ))}
          </select>
          
          <h4>ID do Curso</h4>
          <input id="cursoId" type="text" value={tcc.cursoId} onChange={handleInputChange} class="form-control" placeholder="Digite o nome do curso" size="40"/>

          <h4>Data de Nascimento</h4>
  <input id="data_apresentacao" type="date" value={tcc.data_apresentacao} onChange={handleInputChange} class="form-control" />
  <div class="mb-3">
  <h4 for="formFile" class="form-label">Selecione o PDF do TCC</h4>
  <input class="form-control" type="file" id="formFile" />
</div>    
          
        <br></br>
  
  <Link href="/"><button class="btn first">Cancelar</button></Link>
               <button type="submit" class="btn first">Cadastrar</button>
   

      </center>
      </form>
      <footer className={styles.footer}>     
          Todos os direitos reservados a Biblioteca Digital Contracapa - 2022
      </footer>
    </div>    
  )
}







