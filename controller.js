
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	
	this.onInteractionStart = function(DnD) {
		
		// Recuperer les boutons de canvas.html
		var butRect = document.getElementById('butRect');
		var butLine = document.getElementById('butLine');
		var spinnerWidth = document.getElementById('spinnerWidth');
		var colour = document.getElementById('colour');
		
		this.currLineWidth = spinnerWidth.value;
		this.currColour = colour.value;
		
		// Vérifier la forme sélectionnée
		if (butRect.checked) {
			
			this.currEditingMode = editingMode.rect;
			
		} else if (butLine.checked) {
			
			this.currEditingMode = editingMode.line;
		}
		
		// Création de la forme séléctionnée
		switch (this.currEditingMode) {
		
		// Line
		case editingMode.line : {
			
			this.currentShape = new Line (DnD.cordInitX, DnD.cordInitY, DnD.cordFinalX, DnD.cordFinalY, this.currLineWidth, this.currColour);
			break;
		}
		
		case editingMode.rect : {
			
			var largeur = DnD.cordFinalX - DnD.cordInitX;
			var hauteur = DnD.cordFinalY - DnD.cordInitY;
			this.currentShape = new Rectangle (DnD.cordInitX, DnD.cordInitY, largeur, hauteur, this.currLineWidth, this.currColour);
			break;
			
		}
		}
	}.bind(this);
	
    this.onInteractionUpdate = function(DnD) {
    	
    	if(butRect.checked){
    		
    		var largeur = DnD.cordFinalX - DnD.cordInitX;
			var hauteur = DnD.cordFinalY - DnD.cordInitY;
			this.currentShape = new Rectangle (DnD.cordInitX, DnD.cordInitY, largeur, hauteur, this.currLineWidth, this.currColour);
    
    	}else if(butLine.checked){
    		
			this.currentShape = new Line (DnD.cordInitX, DnD.cordInitY, DnD.cordFinalX, DnD.cordFinalY, this.currLineWidth, this.currColour);

    	}
    	
    	ctx.clearRect(0, 0, canvas.width, canvas.height);
    	drawing.paint(ctx);
    	this.currentShape.paint(ctx);
		
	}.bind(this);

    this.onInteractionEnd = function(DnD) {
    	if(butRect.checked){
    	var largeur = DnD.cordFinalX - DnD.cordInitX;
		var hauteur = DnD.cordFinalY - DnD.cordInitY;
		this.currentShape = new Rectangle (DnD.cordInitX, DnD.cordInitY, largeur, hauteur, this.currLineWidth, this.currColour);
		
		
    	}else if(butLine.checked){
			this.currentShape = new Line (DnD.cordInitX, DnD.cordInitY, DnD.cordFinalX, DnD.cordFinalY, this.currLineWidth, this.currColour);
    	}
    	
    	ctx.clearRect(0,0, canvas.width, canvas.height);
    	drawing.addForm(this.currentShape);
    	drawing.paint(ctx, canvas);
    	drawing.updateShapeList(this.currentShape);
    	this.currentShape = null;

    }.bind(this);
};


