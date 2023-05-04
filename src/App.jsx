/* eslint-disable no-undef */
import { useState } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import PatientList from "./components/PatientList"

function App() {

  const[patients, setPatients] = useState([])
  const[patient, setPatient]= useState({})
  
  const deletePatient = id => {
    const updatePatients = patients.filter( patient => patient.id !== id)
    setPatients(updatePatients)
  }

  return (
   <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-12 md:flex">
      <Formulario
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        setPatient={setPatient}
      />
      <PatientList
        patients={patients}
        setPatient={setPatient}
        deletePatient={deletePatient}
      />
    </div>
  </div>
  )
}

export default App
