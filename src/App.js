import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Link, Switch} from 'react-router-dom'
import Home from './pages/Home'
import {BrowserRouter} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login';
import StudentProfile from './pages/StudentProfile';
import Header from './components/Header'
import Show from './pages/Show'
import New from './pages/New'

export const GlobalCtx = React.createContext(null)

function App() {
  //State to hold our profiles
  const [studentProfile, setStudentProfile] = React.useState([])

  const selectedStudentProfile = (profile) => {
    setStudentProfile(profile)
  }

  //emptyProfile
    const emptyProfile = {
      student_id: "",
      name: "",
      address: ""
    }

  const [showProfile, setShowProfile] = React.useState(emptyProfile)

  const selectedProfile = (profile) => {
    setShowProfile(profile)
  }

  //Create a function to make API call to get notices
  const getStudentProfile = async () => {
    const response = await fetch("https://jlzenproject4api.herokuapp.com/student_profiles")
    const data = await response.json()
    setStudentProfile(data)
  } 

  //This is going to run the getStudentProfile function once component loads
  React.useEffect(() => {
    getStudentProfile()
  }, [])

//our handleChange function for our create form
  // const createChange = (event) => {
  //   setCreateForm({...createForm, [event.target.name]: event.target.value})
  // }

//our handleCreate function for when the form is submitted
  const handleCreate = async(event) => {
    event.preventDefault() //prevent page refresh
    fetch("https://jlzenproject4api.herokuapp.com/student_profiles", {
      method: "post",
      headers: {
        "Content-Type":"application/json" 
      },
      body: JSON.stringify(event),
    }).then((response) => {
    //fetching an updated list of notices
    getStudentProfile()
  })
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <BrowserRouter>
        <Switch>
          <Route exact
            path="/home"
            render={(rp) => (
              <Home {...rp} studentProfile={studentProfile} selectedStudentProfile={selectedStudentProfile}/>
          )}/>
          <Route exact path="/home/new"
            render={(rp) => (
              <New {...rp} label="create" selectedProfile={selectedProfile} handleSubmit={handleCreate} emptyProfile={emptyProfile}/>
            )}/>
          {/* <Route exact
            path="/home/:id"
            render={(rp) => (
              <Show {...rp} studentProfile={studentProfile} selectedStudentProfile={selectedStudentProfile}/>
          )}/> */}
        </Switch>
        </BrowserRouter>
      </main>
      {/* <h1>Create Notice</h1>
      <form onSubmit={handleCreate}>
        <input 
          type="text" 
          name="title" 
          value={createForm.title} 
          onChange={createChange}
        />
        <input 
          type="text" 
          name="author" 
          value={createForm.author} 
          onChange={createChange}
        />
        <input 
          type="text" 
          name="phone"
          value={createForm.phone} 
          onChange={createChange}
        />
        <input 
          type="submit" 
          value="Create Notice" 
          />
      </form>
      <h1>Student Profiles</h1>
      {studentProfile.length > 0 ? loaded() : <h3>there are no student profiles</h3>} */}
    </div>
  );
}

export default App;
