import axios from 'axios';

class AuthService{
  // Login Request
  login(username, password){
    axios.post("/api/token", {
      username : username,
      password : password
    })
    .then((response) => response)
    .catch((error) => error);
  }

  // Register Request
  register(etudiant){
    axios.post("/etudiant/api/token", {
      last_name: etudiant.last_name,
      first_name: etudiant.first_name,
      email: etudiant.email,
      phone: etudiant.phone,
      datenaissance: etudiant.datenaissance,
      annee: etudiant.annee,
      filiere: etudiant.filiere
    }).then((response) => response)
    .catch((error) => error)
  }

  
  register_prof(prof){
    axios.post("/professeurs/api/professeurs", {
      last_name : prof.last_name,
      first_name : prof.first_name,
      email : prof.email,
      phone : prof.phone,
      disponibilite : true,
      matiere : prof.matiere
    }).then((response) => response)
    .catch((error) => error)
  }
}


