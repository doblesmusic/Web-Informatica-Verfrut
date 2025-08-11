import Header from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <div className="container">
          <h1>Bienvenido a Verfrut</h1>
          <p>Tu portal de sistemas empresariales</p>
        </div>
      </main>
    </>
  )
}

export default App
