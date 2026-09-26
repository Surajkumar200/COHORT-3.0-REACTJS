import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ users, setUsers, setToggle, updateUser, setUpdateUser }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", defaultValues: updateUser });

  const formSubmit = (data) => {
    if (updateUser) {
      setUsers((prev) => {
        return prev.map((elem) => {
          return elem.id === updateUser.id ? { ...data } : elem;
        });
      });
         setUpdateUser(null)
    } else {
      let arr = [...users, {... data, id: nanoid() }];
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }

    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="w-90  bg-gray-300 rounded-xl p-4 flex flex-col gap-4 ">
      <h1>Create User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className=" flex flex-col gap-4 "
      >
        <input
          {...register("name", {
            required: "please enter name",
          })}
          className="p-3 bg-gray-100 rounded-2xl"
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <p className="text-red-500 font-semibold ">{errors.name.message}</p>
        )}

        <input
          {...register("email", {
            required: "please enter your email",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "please enter a valid email",
            },
          })}
          className="p-3 bg-gray-100 rounded-2xl"
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 font-semibold ">{errors.email.message}</p>
        )}

        <input
          {...register("mobile", {
            required: "please enter your number",
            minLength: {
              value: 10,
              message: "minimun 10 digits are required ",
            },
            maxLength: {
              value: 10,
              message: "maximum 10 digits are required",
            },
          })}
          className="p-3 bg-gray-100 rounded-2xl"
          type="tel"
          placeholder="MObile no.."
        />
        {errors.mobile && (
          <p className="text-red-500 font-semibold ">{errors.mobile.message}</p>
        )}

        <input
          {...register("image", {
            required: "please enter your img url",
          })}
          className="p-3 bg-gray-100 rounded-2xl"
          type="url"
          placeholder="img url"
        />
        {errors.image && (
          <p className="text-red-500 font-semibold ">{errors.image.message}</p>
        )}
        <button className="bg-green-400 py-3 px-5  rounded-2xl text-white font-semibold">
          {updateUser ?"Update User" :"Add User"}
        </button>
      </form>
    </div>
  );
};

export default Form;
