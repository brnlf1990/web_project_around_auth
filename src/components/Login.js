import React from "react";
import "../blocks/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__title">Entrar</h2>
        <form className="login__form">
          <input placeholder="E-mail" className="login__email" />
          <input placeholder="Senha" className="login__passowrd" />

          <button className="login__button">Entrar</button>
          <p className="login__register">
            Ainda não é membro? Inscreva-se aqui!
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
