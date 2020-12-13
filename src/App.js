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

export const GlobalCtx = React.createContext(null)

function App() {
  //State to hold our profiles
  const [studentProfile, setStudentProfile] = React.useState([])

  //State to hold form data
  const [createForm, setCreateForm] = React.useState({
    student_id: "",
    name: "",
    address: ""
  })


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

  //Renders the jsx for when the profiles are loaded
  // const loaded = () => (
  //   <>
  //     {studentProfile.map((profile) => {
  //       return (
  //         <div>
  //           <h1>{profile.student_id}</h1>
  //           <h1>{profile.name}</h1>
  //           <h3>{profile.address}</h3>
  //           <button onClick={async () => {
  //             //Make delete request
  //             await fetch("https://jlzenproject4api.herokuapp.com/student_profiles/" + profile.id, {
  //               method: "delete"
  //             })
  //             //get updated list of student profiles
  //             setStudentProfile()
  //           }}>Delete</button>
  //         </div>
  //       );
  //     })}
  //   </>
  // );

  

//our handleChange function for our create form
  const createChange = (event) => {
    setCreateForm({...createForm, [event.target.name]: event.target.value})
  }

//our handleCreate function for when the form is submitted
  const handleCreate = async(event) => {
    event.preventDefault() //prevent page refresh
    await fetch("https://jlzenproject4api.herokuapp.com/student_profiles", {
      method: "post",
      headers: {
        "Content-Type":"application/json" 
      },
      body: JSON.stringify(createForm)
    })
    //fetching an updated list of notices
    getStudentProfile()
    setCreateForm({
      student_id: "",
      name: "",
      address: ""
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
              <Home {...rp} studentProfile={studentProfile}/>
          )}/>
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
