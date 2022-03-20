import {useState, useEffect} from 'react';

import Error from './Error'



const Formulario = ( {pacientes, setPacientes, paciente, setPaciente} ) => {
  const [nombre, setNombre] = useState("")
  const [dueño, setDueño] = useState("")  
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [comentario, setComentario] = useState("")
  
  const [error, setError] = useState(false)
  
  useEffect(()=>{
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setDueño(paciente.dueño)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setComentario(paciente.comentario)
    }
  },[paciente])
  
  const generarId = () => {
    const random = Math.random().toString().slice(2)
    const fecha = Date.now().toString()
  
    return random + fecha
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    //Validacion del formulario
    if ( [nombre, dueño, email, fecha, comentario].includes("")){
      setError(true)
      return ; 
    } 

    setError(false)

    //Construccion del objeto paciente
    const objPaciente = {
      nombre,
      dueño, 
      email, 
      fecha, 
      comentario
    }
    
    if(paciente.id){
      //Se edita el paciente
      objPaciente.id = paciente.id
      
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})      
    }else{
      //paciente nuevo
    
      objPaciente.id = generarId()
      setPacientes([...pacientes, objPaciente])
    }

    //Agregando el paciente a la lista de pacientes. 
    
    //Reiniciando el formulario. 
    setNombre('')
    setDueño('')
    setEmail('')
    setFecha('')
    setComentario('')

  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>

      <h2 className='font-black text-3xl text-center'>
        Seguimiento Pacientes
      </h2>

      <p className='text-lg mt-5 text-center mb-10'>
          Añade Pacientes y {''}
          <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'>
        
       { error && < Error mensaje="Todos los campos son obligatorios" /> }

        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input
            id='mascota'
            type="text"
            placeholder='Escribe el nombre de la mascota'
            className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
          />
        </div>
      
        <div className='mb-5'>
          <label htmlFor='dueño' className='block text-gray-700 uppercase font-bold'>
            Nombre Dueño
          </label>
          <input
            id='dueño'
            type="text"
            placeholder='Escribe el nombre del dueño'
            className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
            value={dueño}
            onChange={(e)=>setDueño(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
            Email
          </label>
          <input
            id='email'
            type="email"
            placeholder='Escribe un email de contacto'
            className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='ingreso' className='block text-gray-700 uppercase font-bold'>
            Ingreso
          </label>
          <input
            id='ingreso'
            type="date"
            className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={(e)=>setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='comentario' className='block text-gray-700 uppercase font-bold'>
            Comentario
          </label>
          <textarea
            id='comentario'
            className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Escribe un comentario'
            value={comentario}
            onChange={(e)=>setComentario(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className='bg-indigo-600 p-3 w-full font-bold rounded-md text-white cursor-pointer hover:bg-indigo-700 transition-colors'
          value={ paciente.id ? "Editar Paciente" : "Agregar Paciente" }
        />

      </form>

    </div>
  )
}

export default Formulario