export default function FormLog(){
    const userDefault = {
        email: "user1@ifms.com",
        senha: "ifms2022"
    }

    function Login1(email, password){
        if(password == userDefault.senha & email == userDefault.email){
            return console.log("Certo")
        }else{
            return console.log("Tente Novamente")
        }
    }
    return (
        <form onSubmit={Login1()} className="border rounded w-50">
            <fieldset>
                <legend>Página de Login</legend>
                <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Senha</span>
                <input id="password" type="password"  class="form-control" placeholder="Digite sua senha" aria-label="Password" aria-describedby="basic-addon1"/>
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </fieldset>
        </form>
    )
}