import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({setUsers}) => {

  const {register,handleSubmit,reset,formState:{errors}} = useForm({mode:"onChange"})

  const fromSubmit = (data) => {
    setUsers(pre => [...pre, data])
    reset()
  }

  return (
    <div className="w-90 bg-gray-300 borderd rounded-xl p-4 flex flex-col gap-10">
      <h1 className='text-blue-600 font-bold'>Create Users</h1>
      <form
        onSubmit={handleSubmit(fromSubmit)}
        className="flex flex-col gap-4 p-2"
      >
        <input
          {...register("name", {
            required: "please enter name",
          })}
          className="p-2 border rounded-xl "
          type="text"
          placeholder="name"
        />
        {errors.name && (
          <p className="text-red-500 font-semibold">{errors.name.message}</p>
        )}

        <input
          {...register("email", {
            required: "please enter email",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "please enter valid email",
            },
          })}
          className="p-2 border rounded-xl "
          type="email"
          placeholder="email"
        />
        {errors.email && (
          <p className="text-red-500 font-semibold">{errors.email.message}</p>
        )}

        <input
          {...register("mobile", {
            required: "please enter mobile no..",
            minLength: {
              value: 10,
              message: "minimun 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "maximun 10 digits are required",
            },
          })}
          className="p-2 border rounded-xl "
          type="tel"
          placeholder="Mobile no.."
        />
        {errors.mobile && (
          <p className="text-red-500 font-semibold">{errors.mobile.message}</p>
        )}

        <input
          {...register("image", {
            required: "please enter image url",
          })}
          className="p-2 border rounded-xl "
          type="url"
          placeholder="Image URL"
        />
        {errors.image && (
          <p className="text-red-500 font-semibold">{errors.image.message}</p>
        )}

        <button className="p-2 bg-blue-500 border rounded-xl ">Create</button>
      </form>
    </div>
  );
}

export default Form