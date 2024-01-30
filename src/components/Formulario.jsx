import React from 'react'
import {useForm} from 'react-hook-form'
import '../css/formulario.css'

const Formulario = () => {
  console.log('formulario')
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    if(data.nombre && data.apellido && data.dni && data.email){
      alert(`Nombre: ${data.nombre} ${data.apellido} \nDNI: ${data.dni} \nEmail: ${data.email} \nDatos enviados correctamente`)
    }else{
      alert('Complete todos los campos')
    }
  }
  return (
    <div className='container-formulario'>
       <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <label>
          Nombre:
          <input type="text" {...register("nombre",{ required: true })} />
          {errors.nombre && <span>Este campo es obligatorio</span>}
        </label>
       
        <label>
          Apellido:
          <input type="text"  {...register("apellido",{ required: true })} />
          {errors.apellido && <span>Este campo es obligatorio</span>}
        </label>
        
        <label>
          DNI:
          <input type="number" {...register("dni",{ required: true })} />
          {errors.dni && <span>Este campo es obligatorio</span>}
        </label>
        
        <label>
          Email:
          <input type="email"  {...register("email",{ required: true })} />
          {errors.email && <span>Este campo es obligatorio</span>}
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}


export default Formulario