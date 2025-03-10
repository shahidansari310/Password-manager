import './App.css'
import Manager from "./components/Manager"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
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
