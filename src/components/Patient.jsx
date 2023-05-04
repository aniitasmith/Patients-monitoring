/* eslint-disable react/prop-types */

const Patient = ({patient, setPatient, deletePatient}) => {

  const {pet, owner, email, dateRelease, symptoms, id} = patient

  const handleDelete = () => {
    const response = confirm('Do you want to delete this patient?')
    if(response){
      deletePatient(id)
    }
  }

  return (
    <div className=" mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold mb-3 text-gray-700 uppercase"> Pet Name: {''}
        <span className="font-normal normal-case"> 
          {pet}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase"> Owner Name: {''}
        <span className="font-normal normal-case"> 
        {owner}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase"> E-mail: {''}
        <span className="font-normal normal-case"> 
        {email}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase"> date of release: {''}
        <span className="font-normal normal-case"> 
        {dateRelease}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase"> Symptoms: {''}
        <span className="font-normal normal-case"> 
        {symptoms}   
        </span>
      </p>
      <div className="flex justify-between mt-5 gap-2">
        <button 
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md w-18"
          onClick={() => setPatient(patient)}>
          Editar
        </button>
        <button 
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md w-18"
          onClick={handleDelete}>
          Eliminar
        </button>

      </div>
  </div>
  )
}

export default Patient
