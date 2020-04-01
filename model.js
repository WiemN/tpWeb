// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

// Classe Drawing 
function Drawing () {
	
	// Créer un array forms
	this.forms = new Array();
	// Méthode d'ajout d'un form dans le tableau 
	this.addForm = function(form) {
		
		this.forms.push(form);
	};
	// Enlever un form à partir de son index 
	this.removeForm = function(index) {
		
		this.forms.splice(index,1);
	};
	// Retourne forms
	this.getForms = function() {
		
		return forms;
	}
};

// Classe Form 
function Form (epaisseur, couleur) {
	this.epaisseur = epaisseur;
	this.couleur = couleur;
};

// Classe Rectangle
function Rectangle (x, y, largeur, hauteur, epaisseur, couleur) {
	Form.call(this, epaisseur, couleur);
	this.x = x;
	this.y = y;
	this.largeur = largeur;
	this.hauteur = hauteur;
};

// Classe Line
function Line (x1, y1, x2, y2, epaisseur, couleur) {
	Form.call(this, epaisseur, couleur);
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
};