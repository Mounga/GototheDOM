//Step 2* : rajouter "Hello world" dans le paragraphe d'id 'addText';
$("#addText")
.html("HELLOOOOOOOOO");

// - *Step 3* : supprimer la div d'id 'remove';
$("#remove").remove();

// - *Step 4* : changer la couleur de background de la div d'id 'changeColor';
$("#changeColor").addClass("changementColor");

// - *Step 5* : ajouter 4 balises 'p' dans la div d'id 'addChildren';
for (var i = 0; i < 4; i++) {
  $("#addChildren").append("<p>Testerino</p>");
}


