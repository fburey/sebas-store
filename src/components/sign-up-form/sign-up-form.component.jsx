import { useState } from "react";
import {createAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayname, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleSubmit = asynct (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    const { name,value } = event.target;
    setFormFields({...formFields,[name]:value});
  };
  return (
    <div>
      <h1>Regístrese con su correo electrónico y contraseña</h1>
      <form onSubmit={() => {}}>
        <label>Nombre</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayname"
          value={displayname}
        />
        <label>Correo Electrónico</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>Contraseña</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label>Confirmar contraseña</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default SignUpForm;
