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
                <div>
                <label>E-mail</label>
                <input id="email" type="email"/>
                </div>
                <div>
                <label>Senha</label>
                <input id="password" type="password"/>
                </div>
                <button type="submit">Login</button>
            </fieldset>
        </form>
    )
}