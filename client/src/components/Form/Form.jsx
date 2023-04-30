import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import validate from "../validate";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    image: "",
    weight: "",
    height: "",
    life_span: "",
    temperament: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    weight: "",
    height: "",
    life_span: "",
    temperament: "",
  });

  const temperaments = useSelector((state) => state.temperaments);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value }));
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setForm({ ...form, temperament: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/dogs", form)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* NOMBRE DE LA RAZA */}
      <label htmlFor="name">
        <p>Nombre de la Raza:</p>
        <input
          type="text"
          name="name"
          placeholder="Ingrese un nombre..."
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </label>

      {/* URL DE LA IMAGEN */}
      <label htmlFor="image">
        <p>URL de la imagen:</p>
        <input
          type="text"
          name="image"
          placeholder="Ingrese la URL de la imagen"
          value={form.image}
          onChange={handleChange}
        />
        {errors.image && <span>{errors.image}</span>}
      </label>

      {/* PESO */}
      <label htmlFor="weight">
        <p>Peso:</p>
        <input
          type="text"
          name="weight"
          placeholder="Ingrese el peso"
          value={form.weight}
          onChange={handleChange}
        />
        {errors.weight && <span>{errors.weight}</span>}
      </label>

      {/* ALTURA */}
      <label htmlFor="height">
        <p>Altura:</p>
        <input
          type="text"
          name="height"
          placeholder="Ingrese la altura"
          value={form.height}
          onChange={handleChange}
        />
        {errors.height && <span>{errors.height}</span>}
      </label>

      {/* AÑOS DE VIDA */}
      <label htmlFor="life_span">
        <p>Años de vida:</p>
        <input
          type="text"
          name="life_span"
          placeholder="Ingrese los años de vida"
          value={form.life_span}
          onChange={handleChange}
        />
        {errors.life_span && <span>{errors.life_span}</span>}
      </label>

      {/* TEMPERAMENTOS */}
      <label htmlFor="temperament">
        <p>Temperamentos:</p>
        <input
          type="text"
          name="temperament"
          placeholder="Seleccione uno o mas temperamentos"
          value={form.temperament}
          onChange={handleChange}
        />
        <select
          name="temperament"
          multiple={true}
          value={form.temperament}
          onChange={handleSelectChange}
        >
          {temperaments.map((t) => (
            <option key={t.id} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
        {errors.temperament && <span>{errors.temperament}</span>}
      </label>
      <br />
      <button type="submit">Crear Raza</button>
    </form>
  );
};

export default Form;
