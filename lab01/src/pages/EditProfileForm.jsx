<<<<<<< HEAD
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useData from "../hooks/UseData";
import UseDispatch from "../hooks/UseDispatch"; // jeśli Twój hook ma dużą literę U
=======
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../data/AppContext";
import "../styles/EditProfileForm.css"; 
>>>>>>> 585a752c4e08d68f84d9a5b8014bc86bff49dfc1

export default function EditProfileForm() {
  const items = useData();
  const dispatch = UseDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const person = items.find((p) => p.id?.toString() === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (person) {
      setFormData({
        name: person.name || "",
        email: person.email || "",
        birthDate: person.birthDate || "",
        phone: person.phone || "",
      });
    }
  }, [person]);

  if (!person) return <p>Nie znaleziono osoby</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Imię i nazwisko są wymagane";

    if (!formData.email.trim()) newErrors.email = "Email jest wymagany";
    if (!formData.birthDate) newErrors.birthDate = "Data urodzenia jest wymagana";

    if (!formData.phone.trim()) newErrors.phone = "Telefon jest wymagany";
    else if (formData.phone.length > 9)
      newErrors.phone = "Numer telefonu jest zbyt długi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch({ type: "edit", payload: { ...formData, id: person.id } });
    navigate("/lab03");
  };

  return (
    <div className="form-container">
      <h2>Edytuj osobę</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Birth Date:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          {errors.birthDate && <p className="error-text">{errors.birthDate}</p>}
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="np. 600123456"
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        <button type="submit" className="submit-btn">
          Zapisz zmiany
        </button>
      </form>
    </div>
  );
}
