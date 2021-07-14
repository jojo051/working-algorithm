import { useState } from "react";
import BtnReturn from "./BtnReturn";
import "./formulaire.css";

const Formulaire = () => {

  const [typePassword, setTypePassword] = useState<string>("password");

  const [pseudo, setPseudo] = useState<string>("");
  const [errorSpeudo, setErrorSpeudo] = useState<string>("");
  const [errorSpeudoVerif, setErrorSpeudoVerif] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorEmailVerif, setErrorEmailVerif] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorConfirmPassword, setConfirmErrorPassword] = useState<string>("");

  const speudoChecker = (e:string) => {
    if (e.length > 0 && (e.length < 3 || e.length > 20)) {
      setErrorSpeudo("Le pseudo doit faire entre 3 et 20 caractères");
      setErrorSpeudoVerif(true);
    } else if (!e.match(/^[a-zA-Z0-9_.-]*$/)) {
      setErrorSpeudo("Le pseudo ne doit pas contenir de caractères spéciaux");
      setErrorSpeudoVerif(true);
    } else {
      setPseudo(e);
      setErrorSpeudo("");
      setErrorSpeudoVerif(false)
    }
  };

  const emailChecker = (e:string) => {
    if (!e.match(/[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
      setErrorEmail("Le mail n'est pas valide");
      setErrorEmailVerif(true);
    } else {
      setEmail(e);
      setErrorEmail("");
      setErrorEmailVerif(false);
    }
  };

  const passwordChecker = (e:string) => {
    if (
      !e.match(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
      ) ||
      e.length < 8
    ) {
      setErrorPassword(
        "minimum de 8 caractères, une majuscule un caractère spécial et un chifre"
      );

      //progressBar.classList.add("progressRed");
    } else if (e.length < 12) {
      //progressBar.classList.add("progressBlue");
      setPassword(e);
      setErrorPassword("");
    } else {
      //progressBar.classList.add("progressGreen");
      setPassword(e);
      setErrorPassword("");
    }
  };
  
  const verifPasswordChecker = (e:string) => {
    if (e !== password) {
      setConfirmErrorPassword("Les mots passes ne correspondent pas");
    } else {
      setConfirmPassword(e);
      setConfirmErrorPassword("");
    }
  };

  const viewPassword = (e: string) => {
    if (e === "password") {
      setTypePassword("text");
    } else setTypePassword("password");
  };

  const submitForm = (e:any) => {
    e.preventDefault();
    if ( errorSpeudoVerif === true ) {
      alert("speudo non valide");
      }else if(errorEmailVerif === true ) {
        alert("email non valide");
        } else if (password === "" || confirmPassword === ""){
          alert("les mots de passe ne sont pas identique ou valide");
          } else {
            const data = { pseudo, email, password };
            //ne pas envoyer le mot de passe en clair !!!
            //don't submit password in clear text !!!
            console.log(data);
            alert("Inscription validée !");
            window.history.go(0);
          }
  };

  return (
    <div className="body-formulary">
        <BtnReturn/>      
      <div className="formulare-app" >
        <form className="form-formulary" action="" onSubmit={submitForm}>
          <div className="pseudo-container">
            <label className="label-formulary" htmlFor="pseudo">Pseudo</label>
            <input className="input-formulary"
              required
              id="pseudo"
              type="text"
              onChange={(e) => speudoChecker(e.target.value)}
            ></input>
            <span className="security-container">{errorSpeudo}</span>
          </div>

          <div className="email-container">
            <label className="label-formulary" htmlFor="email">Email</label>
            <input className="input-formulary"
              required
              id="email"
              type="text"
              onChange={(e) => emailChecker(e.target.value)}
            ></input>
            <span className="security-container">{errorEmail}</span>
          </div>

          <div className="password-container">
            <label className="label-formulary" htmlFor="password">Mot de passe</label>
            <input className="input-formulary"
              required
              id="password"
              type={typePassword}
              onChange={(e) => passwordChecker(e.target.value)}
            ></input>
            <button
              type="button"
              onClick={(e) => viewPassword((e.target as HTMLFormElement).form[2].type)}
            >
              view mdp
            </button>
            <p id="progress-bar"></p>
            <span className="security-container">{errorPassword}</span>
          </div>

          <div className="confirm-container">
            <label className="label-formulary" htmlFor="confirm">Confirmer mot de passe</label>
            <input className="input-formulary"
              required
              id="confirm"
              type="password"
              onChange={(e) => verifPasswordChecker(e.target.value)}
            ></input>
            <span className="security-container">{errorConfirmPassword}</span>
          </div>

          <button type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
};

export default Formulaire;
