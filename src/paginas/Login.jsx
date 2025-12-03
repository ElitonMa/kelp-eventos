import "./style/login.css";

function Login() {
  return (
    <div className="login">
      {/* KELP no topo */}
      <h1> KELP </h1>
       
      {/* Fundo escuro */}
      <div className="fundo-login">
        <h2>Login</h2>
        <p>E-mail</p>
        <p>✉️ anônimo_misterio@gmail.com</p>
        <p>Senha</p>
        <p>🔑.........👁️‍🗨️</p>
      </div>
    </div>
  );
}

export default Login;
