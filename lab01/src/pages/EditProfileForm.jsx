import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useData from "../hooks/UseData";
import UseDispatch from "../hooks/UseDispatch"; // jeśli Twój hook ma dużą literę U

export default function EditProfileForm() {
  const items = useData();
  const dispatch = UseDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const person = items.find(p => p.id?.toString() === id);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    if (person) reset(person);
  }, [person, reset]);

  if (!person) return <p>Nie znaleziono osoby</p>;

  const onSubmit = (data) => {
    dispatch({ type: "edit", payload: { ...data, id: person.id } });
    navigate("/lab03");
  };

  return (
    <div className="container mt-4">
      <h2>Edytuj osobę</h2>
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
        <button type="submit">Zapisz zmiany</button>
      </form>
    </div>
  );
}
