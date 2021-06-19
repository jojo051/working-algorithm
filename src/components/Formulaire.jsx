import { useEffect, useState } from "react";
import "./formulaire.css";

const Formulaire = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("password");
  const [errorSpeudo, setErrorSpeudo] = useState("");
  const [error, setError] = useState(true);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setConfirmErrorPassword] = useState("");
  const [typePassword, setTypePassword] = useState("password");

  const speudoChecker = (e) => {
    if (e.length > 0 && (e.length < 3 || e.length > 20)) {
      setErrorSpeudo("Le pseudo doit faire entre 3 et 20 caractères");
    } else if (!e.match(/^[a-zA-Z0-9_.-]*$/)) {
      setErrorSpeudo("Le pseudo ne doit pas contenir de caractères spéciaux");
    } else {
      setPseudo(e);
      setErrorSpeudo("");
    }
  };

  const emailChecker = (e) => {
    if (!e.match(/[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
      setErrorEmail("Le mail n'est pas valide");
    } else {
      setEmail(e);
      setErrorEmail("");
    }
  };

  const passwordChecker = (e) => {
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

  const verifPasswordChecker = (e) => {
    if (e !== password) {
      setConfirmErrorPassword("Les mots passes ne correspondent pas");
    } else {
      setConfirmPassword(e);
      setConfirmErrorPassword("");
    }
  };

  const viewPassword = (e) => {
    if (e === "password") {
      setTypePassword("text");
    } else setTypePassword("password");
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (password === confirmPassword && error === false) {
      const data = { pseudo, email, password };
      //ne pas envoyer le mot de passe en clair !!!
      //don't submit password in clear text !!!
      console.log(data);
      alert("Inscription validée !");
      //window.history.go(0);
    }
  };

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div className="pseudo-container">
          <label htmlFor="pseudo">Pseudo</label>
          <input
            required
            id="pseudo"
            type="text"
            onChange={(e) => speudoChecker(e.target.value)}
          ></input>
          <span className="security-container">{errorSpeudo}</span>
        </div>

        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            type="text"
            onChange={(e) => emailChecker(e.target.value)}
          ></input>
          <span className="security-container">{errorEmail}</span>
        </div>

        <div className="password-container">
          <label htmlFor="password">Mot de passe</label>
          <input
            required
            id="password"
            type={typePassword}
            onChange={(e) => passwordChecker(e.target.value)}
          ></input>
          <button
            type="button"
            onClick={(e) => viewPassword(e.target.form[2].type)}
          >
            view mdp
          </button>
          <p id="progress-bar"></p>
          <span className="security-container">{errorPassword}</span>
        </div>

        <div className="confirm-container">
          <label htmlFor="confirm">Confirmer mot de passe</label>
          <input
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
  );
};

export default Formulaire;