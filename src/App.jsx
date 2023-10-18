import './App.css'
import Path from './routes'
import Footer from './components/footer/Footer'


function App() {
  const initial = {
    name:'',
    brand:'',
    image:'',
    model:'',
    price:''
  }

  return (
    <>
    <Path/>
   <Footer/>
    </>
  )
}

export default App
