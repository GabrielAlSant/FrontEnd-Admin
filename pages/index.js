import Head from 'next/head'
import FormLog from './components/formlog'
import Header from './components/header'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'
import { useRouter } from "next/router";


export default function Home() {
const [error, setError] = useState(false)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

let router = useRouter();

const handleLogin = (e) => {
  e.preventDefault();
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    router.push('/posts/tccs')
   
  })
  .catch((error) => {
   setError(true)
  });
}
  return (
    <div className="container-fluid g-0">
      <Head>Página Administrativa da Biblioteca Digital do IFMS</Head>
      <div className={styles.main}>
      <form onSubmit={handleLogin} className="border rounded w-50 p-3">
            <fieldset>
                <legend>Página de Login Administrativo da Biblioteca Digital do IFMS</legend>
                <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                onChange={e=>setEmail(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Senha</span>
                <input id="password" type="password"  class="form-control" placeholder="Digite sua senha" aria-label="Password" aria-describedby="basic-addon1"
                onChange={e=>setPassword(e.target.value)} />
                </div>
                {error &&<span className="error">error, you login fail, check your email or password</span>}
                <br></br>
                <br></br>
                <button className="btn btn-primary" type="submit">Login</button>
            </fieldset>
        </form>
      </div>
    </div>
  )
}
