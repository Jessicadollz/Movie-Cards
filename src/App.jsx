import './App.css'
import Movie from './Components/Movie'
import arr from './Components/Movie.json'

function App() {

  return (
    <>
      <Movie card={arr}/>
    </>
  )
}

export default App
