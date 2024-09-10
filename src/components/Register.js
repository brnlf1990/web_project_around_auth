import "../blocks/Register.css";
import { Link, Navigate, withRouter } from "react-router-dom";
import React from "react";
import * as auth from "../utils/auth";

function Register() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = React.useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    auth.register(formData).then((res) => {
      if (!res.ok) {
        console.log(res);
      }
      console.log(res);
    });
  };
  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Inscreva-se </h2>
        <form className="register__form">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="register__email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Senha"
            className="register__password"
          />

          <button onClick={handleSubmit} className="register__button">
            Inscreva-se
          </button>
          {message && <p className="register__error">{message}</p>}
          <p className="register__login">
            Já é um membro? <Link to="/signin">Faça o login aqui!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Register;
