function onUpload() {
    var filePath = document.getElementById("file-path-input").value;
    
    // Send the file path to the Flask server
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/load_model?data_file=' + filePath, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Model loaded successfully');
      } else {
        console.error('Error loading model');
      }
    };
    xhr.send();
  }


  /*
  
  function onUpload() {
    // Récupère le chemin du fichier à partir de l'élément d'entrée avec l'ID "file-path-input"
    var filePath = document.getElementById("file-path-input").value;
    
    // Envoie le chemin du fichier au serveur Flask
    var xhr = new XMLHttpRequest(); // Crée un nouvel objet XMLHttpRequest
    xhr.open('GET', '/load_model?data_file=' + filePath, true); // Configure une requête GET asynchrone vers "/load_model" avec le chemin du fichier en tant que paramètre
    xhr.onload = function() { // Fonction à exécuter lorsque la requête est terminée
        if (xhr.status === 200) { // Vérifie si la réponse du serveur est OK
            console.log('Modèle chargé avec succès'); // Affiche un message de succès dans la console du navigateur
        } else {
            console.error('Erreur lors du chargement du modèle'); // Affiche un message d'erreur dans la console du navigateur
        }
    };
    xhr.send(); // Envoie la requête au serveur
}

  */