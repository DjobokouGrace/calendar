import React, {useEffect, useState} from "react";
import "../../styles/auth.css"
import {Link} from "react-router-dom";

function RegisterProfessor() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPassConfirm] = useState("");
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
    <div className="body">
    <div class="login-page">
      <h2 className="title">Inscription</h2>
      {error !== '' && <span>{error.message}</span>}
      <div class="form">
        <form class="login-form" onSubmit={{handleSubmit}}>
          <input type="text" placeholder="Nom d'utilisateur" name="username" onChange={e => setUsername(e.target.value)} value={username}/>
          <input type="email" placeholder="Adresse email" name="email" onChange={e => setEmail(e.target.value)} value={email}/>
          <input type="password" placeholder="Mot de passe" name="password" onChange={e => setPassword(e.target.value)} value={password}/>
          <input type="password" placeholder="Confirmez votre mot de passe" name="password-confirm" onChange={e => setPassConfirm(e.target.value)} value={password_confirm}/>
          {btn ? <button>S'inscrire</button> : <button disabled>S'inscrire</button>}
          <p class="message">Avez vous déjà un compte? <Link to={"/register"}>Connectez-vous</Link></p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default RegisterProfessor