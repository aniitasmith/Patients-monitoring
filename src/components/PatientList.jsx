/* eslint-disable react/prop-types */
import Patient from "./Patient"

const PatientList = ({patients, setPatient, deletePatient}) => {

   return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center"> PatientList </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your {''}
            <span className="text-indigo-600 font-bold">
            patients and appointments
            </span>
          </p>       
          {patients.map( patient => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
     ) : (
      <>
        <h2 className="font=black text-3xl text-center"> No patients</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          start adding patients {''}
          <span className="text-indigo-600 font-bold">
          and they will appear here
          </span>
        </p>
      </>
     )}
  </div>
  )
}

export default PatientList

