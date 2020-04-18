import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Mentorlist from './components/Mentorlist'
import './App.css'

function App() {

  const [ mentors, setMentors ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
      const getMentors = async () => {
          try{
              const response = await axios.get('https://codesydney-mentors.herokuapp.com/api/v1/mentors')
              //console.log(response.data.data.mentors)
              setMentors(response.data.data.mentors)
              setLoading(false)
          }
          catch(e){
              console.log(e.message)
          }
      }
      getMentors()
      
  },[])


  return (
    <>
     {loading === true && 'Loading......'}
      <div className="App">
        <Mentorlist mentors={mentors}/>
      </div>
    </>
  );
}

export default App;
