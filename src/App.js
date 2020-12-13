import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './pages/Home'
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
  const handleCreate = (newProfile) => {
    fetch("https://jlzenproject4api.herokuapp.com/student_profiles/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
          },
          body: JSON.stringify(newProfile),
        }).then(() => {
          getStudentProfile();
        });
      };

  const handleUpdate = (event) => {
    fetch(`https://jlzenproject4api.herokuapp.com/student_profiles/${event.id}`, {
      method: "put",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(event),
      }).then(() => {
        getStudentProfile()
      })
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact
            path="/home"
            render={(rp) => (
              <Home {...rp} studentProfile={studentProfile} getStudentProfile={getStudentProfile} selectedStudentProfile={selectedStudentProfile}/>
          )}/>

          <Route exact path="/home/new"
            render={(rp) => (
              <New {...rp} label="create" handleSubmit={handleCreate} emptyProfile={emptyProfile}/>
          )}/>

          <Route exact path="/home/edit"
            render={(rp) => (
              <New {...rp} label="update" selectedProfile={selectedProfile} handleSubmit={handleUpdate} />
          )}/>

            <Route exact
              path="/home/:id"
              render={(rp) => (
                <Show {...rp} showProflie={showProfile} studentProfile={studentProfile} selectedStudentProfile={selectedStudentProfile}/>
          )}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
