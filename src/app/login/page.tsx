import Image from "next/image";

// Images
import LoginImage from "../assets/LoginImage.svg";
import Logo from "../assets/Logo.png";


const LoginPage = () => {
  return (
    <section className="relative flex w-screen h-screen items-center">
      <div className="flex flex-col w-1/2 h-screen items-center ">

        <Image src={LoginImage} alt="LoginImage" 
        className="w-[60%] h-[80%]"
        />

        <h1 className="text-2xl pt-4 text-center font-semibold"> A journey of a thousand miles begins with a single step </h1>
      </div>

      <div>
        <div> 
          <Image src={Logo} alt="LoginImage" className=""/>
          <h1 className="text-2xl pt-4 text-center font-bold"> Habit Journey </h1>
        </div>

        <div className="flex-col ">

          <h2> ENTRAR </h2>
          <form className="flex-col" action="" id="loginForm">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />

            <input type="submit" value="Entrar" form="loginForm" />

            <div> 
              <p> Esqueceu a senha? <a href="#"> Clique aqui </a></p>
              <p> Não tem conta? <a href="#"> Clique aqui </a></p>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default LoginPage;