import './App.css'
import Manager from "./components/Manager"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-200 via-purple-300 to-indigo-200 ">
        <Navbar />
        <main className="flex-grow">
          <Manager />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
