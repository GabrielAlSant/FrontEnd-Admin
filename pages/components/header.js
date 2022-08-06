import Link from "next/link";

export default function Header({setQuery}){
    return(
        <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
        <Link href="/"><a className="navbar-brand">Biblioteca Digital de Pesquisas IFMS - Administração</a></Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
          <ul className="dropdown-menu">
          <li><Link href="/posts/campus"><a className="dropdown-item">Campus</a></Link></li>
          <li><Link href="/posts/cursos"><a className="dropdown-item">Curso</a></Link></li>
          <li><Link href="/posts/discentes"><a className="dropdown-item">Discentes</a></Link></li>
          <li><Link href="/posts/docentes"><a className="dropdown-item">Docentes</a></Link></li>
          <li><Link href="/posts/tccs"><a className="dropdown-item">TCCs</a></Link></li>
          </ul>
          </li>
          </ul> 
          <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" onChange={(e) => setQuery(e.target.value)}/>
        </form>
          </div>
      </nav>
    )
}