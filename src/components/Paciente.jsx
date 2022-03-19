
const Paciente = ({paciente, setPaciente}) => {

  const {nombre, dueño, email, fecha, comentario} = paciente

  return (
    <div  className='bg-white shadow-md rounded-lg pt-10 pb-5 px-5 mx-5 my-10'>
                      
        <p className='font-bold text-gray-700 uppercase  mb-3'> Nombre: {''}
          <span className='font-normal normal-case'>
             {nombre} 
          </span>
        </p>

        <p className='font-bold text-gray-700 uppercase mb-3'> Dueño: {''}
          <span className='font-normal normal-case'>
              {dueño}
          </span>
        </p>
        
        <p className='font-bold text-gray-700 uppercase mb-3'> Email: {''}
          <span className='font-normal normal-case'>
              {email}
          </span>
        </p>
        
        <p className='font-bold text-gray-700 uppercase mb-3'> Ingreso: {''}
          <span className='font-normal normal-case'>
              {fecha}
          </span>
        </p>

        
        <p className='font-bold text-gray-700 uppercase mb-3'> Comentario: {''}
          <span className='font-normal normal-case'>
            {comentario}
          </span>
        </p>

        <div className="flex justify-around">
          <button 
            type="button"
            className="font-bold py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
            onClick={()=>setPaciente(paciente)}
            >
            Editar
          </button>

          <button 
            type="button"
            className="font-bold py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-md">
            Eliminar
          </button>

        </div>



      </div>
  )
}

export default Paciente