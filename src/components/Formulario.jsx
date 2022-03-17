import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>

      <h2 className='font-black text-3xl text-center'>
        Seguimiento Pacientes
      </h2>

      <p className='text-lg mt-5 text-center mb-10'>
          Añade Pacientes y {''}
          <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input
            id='mascota'
            type="text"
            placeholder='Escribe el nombre de la mascota'
            className='w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md'
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
          />
        </div>

        <input
          type="submit"
          className='bg-indigo-600 p-3 w-full font-bold rounded-md text-white cursor-pointer hover:bg-indigo-700 transition-colors'
          value="Agregar Paciente"
        />

      </form>

    </div>
  )
}

export default Formulario