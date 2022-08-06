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

export default function CadastrarDiscente({curso}){

const [discente, setDiscente] = useState({
    nome: "",
   email: "",
    datanascimento: "",
    cpf: "",
    campusId:"",
    cursoId:""
  });
  let router = useRouter();

  
 const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyFieldCheck = Object.values(discente).some(
      (element) => element === ""
    )
    if (emptyFieldCheck) {
      toast.error("Preencha todos os campos!");
      return
    }
    const data = {
      ...discente
    }

    const response = await axios.post("https://BackEnd-ORM-TCC.undertak3r.repl.co/discente", data)


    if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/posts/discentes')
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setDiscente({ ...discente, [id]: value });
  };

  const { nome, email,  datanascimento, cpf, cursoId, campusId } = discente;
  
  return (
    <div>
   <Header />

      <ToastContainer/>
      <form onSubmit={handleSubmit}>
        <center>
      <h2>Cadastre o discente</h2>
       
  <h4>Nome do Aluno</h4>
  <input id="nome" type="text" value={discente.nome} onChange={handleInputChange} class="form-control" placeholder="Digite o nome do aluno" />
        
  <h4>Selcione o discente</h4>
  <input id="email" type="text" value={discente.email} onChange={handleInputChange} class="form-control" placeholder="Email" />         

  <h4>Data de Nascimento</h4>
  <input id="datanascimento" type="date" value={discente.datanascimento} onChange={handleInputChange} class="form-control" />
  <h4>Selcione o discente</h4>
  <input id="cpf" type="text" value={discente.cpf} onChange={handleInputChange} class="form-control" placeholder="Cpf" />         

          <h4>Selecione o Curso</h4>
          <select class="form-control" id="cursoId" value={discente.cursoId} onChange={handleInputChange}>
            <option selected >Selecione o Campus </option>
            {curso.map(({id, nome, duracao, descricao, campusId}) => (
              <option key={id} value={id} > {nome}</option>
            ))}
          </select>
          
          <h4>ID do campus</h4>
          <input id="campusId" type="text" value={discente.campusId} onChange={handleInputChange} class="form-control" placeholder="Digite o id do campus" />

          
          
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







