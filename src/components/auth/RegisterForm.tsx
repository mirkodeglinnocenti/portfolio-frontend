import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../services/AuthUser";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { http } = AuthUser();
  const [email, setEmail] = useState<undefined | string>(undefined);
  const [password, setPassword] = useState<undefined | string>(undefined);
  const [passwordConf, setPasswordConf] = useState<undefined | string>(undefined);

  // Set Email
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(email);
  };

  // Set Password
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(password);
  };

  // Set Password Conf
  const handlePasswordConf = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConf(e.target.value);
    console.log(password);
  };

  // Fetch
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    
    http
      .post("/register", {
        email: email,
        password: password,
        password_confirmation: passwordConf,
      })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log("Errore utente non loggato", err);
      });
  };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h1 className="font-bold text-center sm:text-3xl text-gray-800 mb-4">
          Registrazione
        </h1>
        <div className="flex flex-col items-center">
          <form className="contents" onSubmit={submit}>
            <div className="email contents">
              <label>Inserisci la tua email*</label>
              <input
                className="border-gray-950 border-2 rounded-full px-2 mb-4"
                type="email"
                name="email"
                onChange={handleEmail}
                required
              />
            </div>
            <div className="password contents">
              <label>Inserisci la tua password*</label>
              <input
                className="border-gray-950 border-2 rounded-full mb-4 px-2"
                type="password"
                name="password"
                onChange={handlePassword}
                required
              />
            </div>
            <div className="password contents">
              <label>Conferma la password*</label>
              <input
                className="border-gray-950 border-2 rounded-full mb-4 px-2"
                type="password"
                name="passwordconf"
                onChange={handlePasswordConf}
                required
              />
            </div>
            <button
              className="rounded-xl font-bold px-4 py-2 bg-primary-color text-white hover:text-color-light"
              type="submit"
            >
              Registrati
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
