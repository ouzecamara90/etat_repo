import React, {component} from 'react';
 // transfert du composant App dans une class
class App extends component {
  constructors(props){
    super(props);
    this.state = {
      Person : { fullName : 'Ousmane', bio : 'je suis un informaticien', imgSrc : 'imgg.png', profession : 'developpeur fullstack' },
// Initialisation de l'etat de la class
      show : false,
      intervalId : null,
      timeElapsed : 0,
  };
} 
// utilisation de la méthode componentDidMount pour initialiser l'intervalle setInterval qui met a jour l'état timeElapsed toutes les secondes
componentDidMount() {
  this.setState({
    intervalId: setInterval(() => {
      this.setState({ timeElapsed: this.state.timeElapsed + 1 });
    }, 1000)
  });
}
//utilisation de la méthode componentWillUnmount pour nettoyer l'intervalle setInterval lorsque le composant est démonté
componentWillUnmount() {
  clearInterval(this.state.intervalId);
}

//fonction togggleshow pour inverser la valeur de show
toggleShow = () => {
  this.setState({ show: !this.state.show });
};
// ajout un rendu conditionnel pour afficher le profil uniquement si le show est vrai 
// ajout de la bouton toggleShow pour basculer l'etat show
// ajout un champqui affiche le temps écoulé depuis le montage du composant en utilisant timeElapsed

render(){
  const {fullName, bio, imgSrc, profession} = this.state.Person;
  return (
      <div>
              <button onClick={this.toggleShow}>
                {this.state.show ? 'Hide Profile' :'Show Profile'}
              </button>
                {this.state.show && (
                    <div>
                        <h1>{fullName}</h1>
                        <p>{bio}</p>
                          <img src = "imgg.png" alt = "photo"/>
                          <p>{profession}</p>
               
      </div>
       )}
  
        <p>Durée écoulée depuis le montage : {this.state.timeElapsed}</p>
        </div>
  );
}

}
export default App;
