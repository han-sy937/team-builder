import React, {useState, useEffect} from 'react';
import { v4 as uuid} from 'uuid'
import TeamForm from './TeamForm'
import HeaderStyle from './style'
import './App.css';

const initialTeamList = [
  {
    id: uuid(),
    name: 'Name',
    email: 'email@email.com',
    role: 'Software Engineer',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamList})
}

const fakeAxiosPost =(url, {name, email, role}) => {
  const newTeam = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeam })
}

function App() {
  const [ teams, setTeams ] = useState([])

  const [ formValues, setFormValues ] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  }

  const submitForm = () => {
    const newTeam = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if(!newTeam.name || !newTeam.email || !newTeam.role) return
    fakeAxiosPost ('fakeapi.com', newTeam)
      .then(res => {
        const teamFromAPI = res.data
        setTeams([teamFromAPI, ...teams])
        setFormValues(initialFormValues)
      })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setTeams(res.data))
  }, [])



  return (
    <HeaderStyle className="App">
      <header><h1>My Team List</h1></header>
      <TeamForm 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      
    </HeaderStyle>
  );
}

export default App;
