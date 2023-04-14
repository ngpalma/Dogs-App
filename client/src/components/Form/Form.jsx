const Form = () => {
  return (
    <>
      {/* NOMBRE DE LA RAZA */}
      <label htmlFor="">
        <p>Nombre de la Raza:</p>
        <input type="text" name="" id="" placeholder="Ingrese un nombre" />
      </label>

      {/* URL DE LA IMAGEN */}
      <label htmlFor="">
        <p>URL de la imagen:</p>

        <input
          type="text"
          name=""
          id=""
          placeholder="Ingrese la URL de la imagen"
        />
      </label>

      {/* PESO */}
      <label htmlFor="">
        <p>Peso:</p>

        <input type="text" name="" id="" placeholder="Ingrese el peso" />
      </label>

      {/* ALTURA */}
      <label htmlFor="">
        <p>Altura:</p>

        <input type="text" name="" id="" placeholder="Ingrese la altura" />
      </label>

      {/* AÑOS DE VIDA */}
      <label htmlFor="">
        <p>Años de vida:</p>

        <input
          type="text"
          name=""
          id=""
          placeholder="Ingrese los años de vida"
        />
      </label>

      {/* TEMPERAMENTOS */}
      <label htmlFor="">
        <p>Temperamentos:</p>

        <input
          type="text"
          name=""
          id=""
          placeholder="Seleccione uno o mas temperamentos"
        />
      </label>
      <button type="submit">Crear Raza</button>
      <button>Volver</button>
    </>
  );
};

export default Form;
