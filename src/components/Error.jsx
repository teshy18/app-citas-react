const Error = ({mensaje}) => {
  return (
    <div className='text-white bg-red-600 text-center rounded-md uppercase p-3 m-3'>
          <p>{mensaje}</p>
    </div>
  )
}

export default Error;