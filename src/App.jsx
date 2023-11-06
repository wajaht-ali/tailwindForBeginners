import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Students from "./components/Students"
import Products from "./components/Products"
import "./styles/styles.css"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="App bg-slate-900 h-full text-white">
      <Navbar />
      <Hero />
      <Students />
      <Products />
      <Footer />
    </div>
  )
}

export default App