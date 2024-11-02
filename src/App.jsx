import './App.css'
import { FaGoogle, FaInstagram, FaLinkedinIn  } from "react-icons/fa";


function App() {

  return (
    <>
      <div className=" flex items-center justify-center h-screen w-auto">

        <div className='flex items-center justify-center h-3/4 w-4/6 bg-slate-800 shadow-slate-500 shadow-lg rounded-lg'>

          <div className='flex flex-col items-center justify-center h-full w-1/2 gap-5 bg-white rounded-s-lg '>

              <h1 className=' text-6xl font-bold'>Login</h1>

              <ol className='flex justify-between items-center w-1/4 p-3 mb-4'>
                <li className='text-xl hover:text-blue-400'><FaGoogle /></li>
                <li className='text-xl hover:text-purple-900'><FaInstagram /></li>
                <li className='text-xl hover:text-blue-500'><FaLinkedinIn /></li>
              </ol>

              <div className=' flex flex-col justify-center items-center gap-5 w-1/2  '>
                  <input  
                    type='text' 
                    placeholder='Email'
                    className=' bg-slate-200 shadow-lg rounded-lg p-7 h-11 w-full'
                  />

                  <input 
                    type='text' 
                    placeholder='Senha'
                    className=' bg-slate-200 shadow-xl rounded-lg p-7 h-11 w-full '
                  />
              </div>

              <h2 className=' mt-3'><a className='font-light'>Esqueci minha senha</a></h2>
              <button type="submit" className=' p-2 w-2/6 mb-10 text-white font-medium bg-blue-500 rounded-lg hover:bg-blue-400'>LOGAR</button>

          </div>

          <div className='flex items-center justify-center h-full w-3/5 bg-blue-600 rounded-e-lg hover:bg-blue-400 transition duration-2s'>
              <h1 className=' text-white font-bold text-5xl'>Cadastro</h1>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
