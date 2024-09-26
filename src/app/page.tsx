import About from "./components/About/page"
import Contact from "./components/Contact/page"

export default function Home(){
  return ( 
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4 m-6 text-sky-700">This is my second assignment</h1>
      <div className="border-4 border-solid border-yellow-600 p-5"> 
      <h1 className="text-sky-700 font-bold">This is home page</h1><br/>
      <About/><br/>
      <Contact/>
      </div>
    </div>
  )
}