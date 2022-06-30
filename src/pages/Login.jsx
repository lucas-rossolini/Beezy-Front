import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { authUser, isLogged } from '../api/auth';
import { InputPassword, InputMail } from '../components/inputs';
import ButtonPrimary from '../components/Buttons/ButtonPrimary';
import { setCookie } from '../api/backRouting';
import AuthContext from '../contexts/authContext';

const Login = function Login() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const { handleLogged } = useContext(AuthContext);
  const empty = () => null;

  const pages = async () => {
    try {
      const payload = await isLogged();
      if (!payload) throw new Error('Nop');
      // navigate('/home');
      return setIsLoaded(true);
    } catch (err) {
      return setIsLoaded(true);
    }
  };
  useEffect(() => {
    setIsLoaded(false);
    pages();
  }, []);

  /**
   * Fonction pour récupérer la valeur de l'email
   * @param {string} e format email
   */
  const handleEmail = (value) => {
    setEmail(value);
  };
  /**
   * Fonction pour récupérer la valeur du mot de passe
   * @param {string} e  Contrainte : 1 majuscule, 1 minuscule, 1 nombre et 1 caractère spécial
   */
  const handlePassword = (value) => {
    setPassword(value);
  };
  const handleLogin = (e) => {
    const run = async () => {
      try {
        e.preventDefault();
        await authUser(email, password);
        setCookie(email);
        handleLogged();
      } catch (err) {
        setIsError(true);
        empty();
        // FIX: Afficher un message d'erreur ici
      }
    };
    run();
  };
  if (isLoaded) {
    return (
      <div className="flex flex-col h-screen lg:flex-row">
        <div className="relative flex flex-col items-center justify-center w-full h-full py-24 max-w-1/2 bg-gray-50">
          <form
            className="grid w-auto grid-cols-1 px-6"
            onSubmit={(e) => handleLogin(e)}
          >
            <h1 className="text-4xl font-bold tracking-tight text-left text-gray-800">
              Connexion à votre compte
            </h1>
            {isError
              ? "Le nom d'utilisateur ou le mot de passe est incorrect"
              : ''}
            <div className="flex flex-col my-10 gap-y-4">
              <InputMail
                titreLabel="Adresse e-mail"
                placeholder="abeilles@mail.com"
                funct={handleEmail}
                id="emailConnect"
                initial=""
              />
              <InputPassword
                titreLabel="Mot de passe"
                placeholder="********"
                funct={handlePassword}
              />
            </div>
            <ButtonPrimary
              text="Se connecter"
              disabled={!(email.length > 0 && password.length > 0)}
            />
            <div className="flex justify-center">
              <span className="ml-0 text-sm text-center text-gray-600 mt-9">
                Pas encore de compte ?
                <br />
                <Link to="/signup">
                  <span className="text-sm text-center text-gray-600 underline hover:text-blue-800">
                    Cliquez ici
                  </span>
                </Link>
              </span>
            </div>
          </form>
        </div>
        <div className="hidden w-full h-full bg-center bg-cover lg:block max-w-1/2" />
      </div>
    );
  }
  return <h1>Loading ...</h1>;
};

export default Login;
