import React from "react";
import { useForm } from "react-hook-form";

const Rhform = ({setUsers}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
    } = useForm();
    
    const fromSubmit = (data) => {
        console.log(data)
        setUsers([data])
        reset();
    }

  return (
    <div>
      <form onSubmit={handleSubmit(fromSubmit)} >
        <input {...register("productName")} type="text" placeholder="productName" />
        <input {...register("price")} type="text" placeholder="price" />
        <input {...register("catogari")} type="text" placeholder="catogarie" />
        <input {...register("image")} type="text" placeholder="image" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Rhform;
