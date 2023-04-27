// Premièrement : importer useState. Il s'agit d'une exportation nommée de 'react'
// Ou nous pourrions sauter cette étape, et écrire React.useState
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// Ce composant attend 2 éléments :
// text - le texte à afficher
// maxLength - le nombre de caractères à afficher avant de "lire la suite"
function LessText({ text, maxLength }) {
    // Créer un morceau d'état, et l'initialiser à `true`
  // `hidden` contiendra la valeur actuelle de l'état, 
  // et `setHidden` nous permettra de la changer,

  const [hidden, setHidden] = useState(true);
// Si le texte est suffisamment court, il suffit de le rendre
if (text.length <= maxLength) {
    return <span>{text}</span>;
  }
  // Rendre le texte (abrégé ou complet) suivi d'un lien permettant de le développer/réduire.
  // d'un lien pour le développer/réduire.
  // Lorsqu'un lien est cliqué, mettre à jour la valeur de `hidden`,
  // ce qui déclenchera un nouveau rendu
  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <a onClick={() => setHidden(false)}> read more</a>
      ) : (
        <a onClick={() => setHidden(true)}> read less</a>
      )}
    </span>
  );
}

ReactDOM.render(
  <LessText
    text={`Focused, hard work is the real key
      to success. Keep your eyes on the goal, 
      and just keep taking the next step 
      towards completing it.`}
    maxLength={35}
  />,
  document.querySelector('#root')
);



//Avec juste cette ligne de code, nous avons rendu cette fonction avec état :
const [hidden, setHidden] = useState(true);
//Une fois cela fait, les liens "lire plus" / "lire moins" n'ont plus qu'à s'appeler setHiddenlorsqu'ils sont cliqués.



// Pseudocode pour illustrer ce que fait React
// Garder la trace du composant qui est appelé
// Et garde une liste de hooks
currentComponent = YourComponent;
hooks[currentComponent] = []
// Appeler le composant. S'il appelle useState,
// cela mettra à jour les `hooks` ci-dessus
YourComponent();



//Mise a jour de la valeur l'etat en fonctionde la valeur précédente
import React, { useState } from 'react';

function StepTracker() {
  const [steps, setSteps] = useState(0);

  function increment() {
    setSteps(prevState => prevState + 1);
  }

  return (
    <div>
      Today you've taken {steps} steps!
      <br />
      <button onClick={increment}>
        I took another step
      </button>
    </div>
  );
}

ReactDOM.render(
  <StepTracker />,
  document.querySelector('#root')
);


//écrire une fonction autonome increment, au lieu d'intégrer la fonction flèche sur l' onClickaccessoire du bouton
<button onClick={() => setSteps(prevState => prevState + 1)}>
  I took another step
</button>


//useState contenant un tableau
function ListOfThings() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
  
    const addItem = event => {
      event.preventDefault();
      setItems([
        ...items,
        {
          id: items.length,
          name: itemName
        }
      ]);
      setItemName("");
    };
  
    return (
      <>
        <form onSubmit={addItem}>
          <label>
            <input
              name="item"
              type="text"
              value={itemName}
              onChange={e => setItemName(e.target.value)}
            />
          </label>
        </form>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </>
    );
  }

  // Appeler useState plusieurs fois pour pour stocker un nom d'utilisateur et un mot de passe
  function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const printValues = e => {
      e.preventDefault();
      console.log(username, password);
    };
  
    return (
      <form onSubmit={printValues}>
        <label>
          Username:
          <input
            value={username}
            onChange={event => setUsername(event.target.value)}
            name="username"
            type="text"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    );
  }


  // useState avec un Objet (valeurs multiples, sorta)
  function LoginForm() {
    const [form, setState] = useState({
      username: '',
      password: ''
    });
  
    const printValues = e => {
      e.preventDefault();
      console.log(form.username, form.password);
    };
  
    const updateField = e => {
      setState({
        ...form,
        [e.target.name]: e.target.value
      });
    };
  
    return (
      <form onSubmit={printValues}>
        <label>
          Username:
          <input
            value={form.username}
            name="username"
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={form.password}
            name="password"
            type="password"
            onChange={updateField}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    );
  }
