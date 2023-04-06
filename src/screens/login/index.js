import React, {useEffect, useState} from "react";
import "../../styles/auth.css"
import {Link} from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    if(password.length > 5 && email !== '') {
        setBtn(true)
    }else if(btn === true) {
        setBtn(false)
    }
  }, [password, email, btn])

  const handleSubmit = e => {
    e.preventDefault();
    
}

  return (
    <div class="login-page">
      <h2 className="title">Connexion</h2>
      {error !== '' && <span>{error.message}</span>}
      <div class="form">
        <form class="login-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Adresse email" onChange={e => setEmail(e.target.value)} value={email}/>
          <input type="password" name="password" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} value={password}/>
          {btn ? <button>Se connecter</button> : <button disabled>Se connecter</button>}
          <p class="message">N'avez vous pas de compte? <Link to={"/register"}>Créer un compte</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login