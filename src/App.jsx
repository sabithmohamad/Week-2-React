import './App.css'
import Card from './components/card'
import Note from './components/Note'

function App() {

  const details = {section:"abcwrf",
    class:"A"
  }

  return (
    <>
    <h1>hello</h1>
    <Card
      name="sabith" age = "28" city ="abc"
    />
    <Note
     person = {{Job:'SDE'}}
     {...details}
    />
    </>
  )
}

export default App
