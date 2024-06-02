import Image from "next/image";

// Images
import LoginImage from "../assets/LoginImage.png";
import Logo from "../assets/Logo.png";


const LoginPage = () => {
  return (
    <div className="flex w-screen h-screen items-center content-between">
      <div className="flex flex-wrap w-1/2 h-screen items-center justify-center content-center p-4">

        <Image src={LoginImage} alt="LoginImage" 
        className="w-[80%] h-[75%]"
        />

        <h1 className="text-2xl pt-4 text-center font-semibold"> 
        A journey of a thousand miles begins with a single step 
        </h1>

      </div>

      <div className="flex flex-col w-1/2  items-center content-center border-6 border-appMain h-[80%]">
        <div className="p-8"> 
          <Image src={Logo} alt="LoginImage" className=""/>

          <h1 className="text-2xl mt-4 text-center font-bold"> 
          Habit Journey 
          </h1>

        </div>

        <div className="flex-col w-[60%] ">

          <h2 className="text-2xl text-left uppercase font-bold pt-4
          underline underline-offset-5 decoration-appMain decoration-[5px] "> 
          Entrar 
          </h2>

          <form className="flex flex-col mt-4" action="POST" id="loginForm">
            <input type="text" placeholder="Email" 
            className="w-full px-15 py-[3%] outline-none border-2 border-appMain bg-transparent rounded-2xl text-xl p-2 mb-4" />
            
            <input type="password" placeholder="Senha"
            className="w-full px-15 py-[3%] outline-none border-2 border-appMain bg-transparent rounded-2xl text-xl p-2 mb-4" />

            <input type="submit" value="Entrar" form="loginForm" 
            className="w-full px-15 py-[3%] outline-none bg-appMain rounded-xl text-xl text-backgroundMain p-2 mb-4"/>

            <div> 
              <p> Esqueceu a senha? <a href="#"> Clique aqui </a></p>
              <p> Não tem conta? <a href="#"> Clique aqui </a></p>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;