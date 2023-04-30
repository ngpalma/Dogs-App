const validate = (form) => {
  let errors = {};

  if (form.name === "") errors.name = "Este campo no puede estar vacío";
  else if (!/^[A-Z]+$/i.test(form.name))
    errors.name = "El nombre debe contener solo letras";

  if (form.image === "") errors.image = "Este campo no puede estar vacío";
  else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(form.image))
    errors.name = "Debe ingresar una URL válida";

  if (form.weight === "") errors.weight = "Este campo no puede estar vacío";
  else if (!/^[0-9]+$/.test(form.weight))
    errors.weight = "Solo se admiten números";

  if (form.height === "") errors.height = "Este campo no puede estar vacío";
  else if (!/^[0-9]+$/.test(form.height))
    errors.height = "Solo se admiten números";

  if (form.life_span === "")
    errors.life_span = "Este campo no puede estar vacío";
  else if (!/^[0-9]+$/.test(form.life_span))
    errors.life_span = "Solo se admiten números";

  if (form.temperament === "")
    errors.temperament = "Este campo no puede estar vacío";

  return errors;
};

export default validate;
