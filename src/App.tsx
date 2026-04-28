import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import AppRouter from '@/AppRouter'

function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
