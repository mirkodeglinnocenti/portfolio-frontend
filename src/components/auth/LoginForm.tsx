import { useState } from "react";
import AuthUser from "../../services/AuthUser";

const LoginForm = () => {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState<undefined | string>(undefined);
  const [password, setPassword] = useState<undefined | string>(undefined);

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

  // Fetch
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    http
      .post("/login", { email: email, password: password })
      .then((res) => {
        console.log("utente loggato", res.data);
        setToken(res.data.user, res.data.access_token);
      })
      .catch((err) => {
        console.log("Errore utente non loggato", err);
      });
  };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h1 className="font-bold text-center sm:text-3xl text-gray-800 mb-4">
          Accedi
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
            <button
              className="rounded-xl font-bold px-4 py-2 bg-gradient-to-r from-primary-color to-secondary-color hover:text-color-light"
              type="submit"
            >
              Accedi
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
