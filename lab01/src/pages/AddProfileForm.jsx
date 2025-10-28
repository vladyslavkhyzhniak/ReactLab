import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";

export default function AddProfileForm() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch({ type: "add", payload: data });
    navigate("/lab03");
  };

  return (
    <div className="container mt-4">
      <h2>Dodaj nową osobę</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label>Name:</label>
          <input {...register("name", { required: true, maxLength: 50 })} />
          {errors.name && <p className="text-danger">Name jest wymagane</p>}
        </div>

        <div className="mb-2">
          <label>Email:</label>
          <input {...register("email", { required: true, maxLength: 50 })} />
          {errors.email && <p className="text-danger">Email jest wymagany</p>}
        </div>

        <div className="mb-2">
          <label>Birth Date:</label>
          <input type="date" {...register("birthDate", { required: true })} />
          {errors.birthDate && <p className="text-danger">Data jest wymagana</p>}
        </div>

        <div className="mb-2">
          <label>Phone:</label>
          <input {...register("phone", { required: true, maxLength: 15 })} />
          {errors.phone && <p className="text-danger">Telefon jest wymagany</p>}
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}
