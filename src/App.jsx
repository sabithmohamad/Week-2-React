import './App.css'
import Card from './components/card'
import Note from './components/Note'
import image1 from "./assets/download1.jpeg"
import image2 from "./assets/download2.jpeg"
import image3 from "./assets/download.jpeg"
import UserCard from './components/UserCard'
import Button from './components/Button'

function App() {

  const details = {section:"abcwrf",
    grade:"A"
  }

  const cardData = [
    {
      image: image1,
      name :"sabith",
      email:'test@123',
      age:25
      
    },
    {
      image: image2,
            name :"jack",
      email:'tedw@123',
      age:28
      
    },
    {
      image: image3,
            name :"jhon",
      email:'t@123',
      age:21
      
    }
    
  ]

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
    {cardData.map((card,index) =>(
      <UserCard key={index} {...card}>
        <Button onClick ={() => {
          alert("clicked me")
        } } />
      </UserCard>
    ) )}
    </>
  )
}

export default App
