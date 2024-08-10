import './App.css'
import Container from './Container'
import Price from './Price'

function App() {
  return (
    <>
      <div>
        <Container>
          <Price name = "Patates" price = {3500}/>
        </Container>
      </div>
    </>
  )
}

export default App
