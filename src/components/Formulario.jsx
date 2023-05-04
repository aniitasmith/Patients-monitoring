import { useEffect, useState } from 'react'
import Error from './Error'

const Formulario = ({patients, setPatients, patient, setPatient}) => {
  const [pet, setPet] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [dateRelease, setDateRelease] = useState('')
  const [symptoms, setSymptoms] = useState('')

  const [error, setError] = useState(false)

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36)
    
    return random + date
  }

  useEffect(() => {
    if(Object.keys(patient).length > 0) {
      setPet(patient.pet)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDateRelease(patient.dateRelease)
      setSymptoms(patient.symptoms)
    } 
  }, [patient])
  
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de formulario
    if ([pet, owner,email, dateRelease, symptoms].includes('')) {
      setError(true)
      return;
    }
      setError(false)

      //objeto de pacientes
      const newPatient = {
        pet,
        owner,
        email, 
        dateRelease, 
        symptoms
      }

      if(patient.id){
        newPatient.id = patient.id
        const updatePatients = patients.map(patientState => patientState.id === patient.id ? newPatient : patientState)
        setPatients(updatePatients)
        setPatient({})
      }else{
        newPatient.id= generateId()
        setPatients([...patients, newPatient])
      }

      //Reiniciar formulario
      setPet('')
      setOwner('')
      setEmail('')
      setDateRelease('')
      setSymptoms('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Patient Management</h2>
      <p className='text-lg mt-5 text-center mb-10'> Add Patients and {''}
        <span className='text-indigo-600 font-bold'>Manage Them</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'
      >
        { error && <Error> 
           <p>All fields are required</p>
        </Error>}
        <div className='mb-5'>
          <label htmlFor='pet' className='block text-gray-700 uppercase font-bold'>
          Pet Name
          </label>
          <input
            id='pet'
            type='text'
            placeholder="The pet's name"
            className='border-2 w-full p-2 m-2 placehoder-gray-400 rounded-md'
            value={pet}
            onChange={ (e) =>setPet(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='owner' className='block text-gray-700 uppercase font-bold'>
            Owner name
          </label>
          <input
            id='owner'
            type='text'
            placeholder='owner name'
            className='border-2 w-full p-2 m-2 placehoder-gray-400 rounded-md'
            value={owner}
            onChange={ (e) =>setOwner(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
             E-mail
          </label>
          <input
            id='email'
            type='email'
            placeholder='Contact email'
            className='border-2 w-full p-2 m-2 placehoder-gray-400 rounded-md'
            value={email}
            onChange={ (e) =>setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='release' className='block text-gray-700 uppercase font-bold'>
          date of release
          </label>
          <input
            id='release'
            type='date'
            className='border-2 w-full p-2 m-2 placehoder-gray-400 rounded-md'
            value={dateRelease}
            onChange={ (e) =>setDateRelease(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='Symptoms' className='block text-gray-700 uppercase font-bold'>
          Symptoms
          </label>
         <textarea 
          id='Symptoms'
          className='border-2 w-full p-2 m-2 placehoder-gray-400 rounded-md'
          placeholder='Describe the symptoms'
          value={symptoms}
            onChange={ (e) =>setSymptoms(e.target.value)}
          />
        </div>
        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase rounded-sm font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
          value={ patient.id ? 'edit patient' : 'add patient'}
        />
      </form>
    </div>
  )
}

export default Formulario


