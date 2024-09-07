import {
  Dashboard,
  FunctionalitySection,
  MainSection,
  Navbar,
} from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <Dashboard />
      <FunctionalitySection />
    </div>
  )
}

export default App
