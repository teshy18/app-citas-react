
import Paciente from './Paciente'
 
const ListadoPacientes = ({pacientes, setPaciente}) => {

 
  return (

    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
    
    {pacientes && pacientes.length ? (
      <>

      <h2 className='font-black text-3xl text-center'>
        Listado de Pacientes
      </h2>

      <p className='text-lg mt-5 text-center mb-10'>
          Administra tus {''}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>

      { pacientes.map((paciente) => 
        <Paciente 
          paciente={paciente} 
          key={paciente.id}
          setPaciente={setPaciente}  
          /> )  }
      
      </>
      )
     : (
       <>
       <h2 className='font-black text-3xl text-center'>
        No hay pacientes
      </h2>

      <p className='text-lg mt-5 text-center mb-10'>
          Agrega a tus pacientes y {''}
          <span className='text-indigo-600 font-bold'>y dales seguimiento aquí.</span>
      </p>
       </>
      ) }
    
        
    </div>
  )
}  

export default ListadoPacientes