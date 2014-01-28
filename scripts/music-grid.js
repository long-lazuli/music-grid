mg = {
	toneChange: function(selectbox){
		mg.getAncestorSheet(selectbox).setAttribute("data-mg-key", selectbox.value);
	},
	getAncestorSheet: function(domObj) {
		var parent = domObj.parentNode;
		while (parent && parent.tagName.toLowerCase() != "body") parent = parent.parentNode;
		return parent;
	},
	generate: function(notation) {
		
	},
	chordChooser: {

		init: function(elements){
			console.log('chordChooser.init()', elements);

			mg.chordChooser.data = {
				'open': false,
				'elements': document.querySelectorAll(elements)
			};
			mg.chordChooser.menus = {
				'noteChooser': 	document.getElementsByClassName("mg-notechooser")[0],
				'altChooser': 	document.getElementsByClassName("mg-altchooser")[0],
				'rythmChooser': document.getElementsByClassName("mg-rythmchooser")[0]
			}


			for (var i = mg.chordChooser.data['elements'].length - 1; i >= 0; i--) {
				mg.chordChooser.data['elements'][i].addEventListener(
					"click",
					mg.chordChooser.handleClick
				);
			};
			mg.chordChooser.menus.noteChooser.addEventListener("click", mg.chordChooser.handleClick );
			mg.chordChooser.menus.altChooser.addEventListener("click", mg.chordChooser.handleClick );
			mg.chordChooser.menus.rythmChooser.addEventListener("click", mg.chordChooser.handleClick );

		},
		handleClick: function(e){
			var figure, event;
			figure = this;
			event = e;

			console.log(this, e);

			if (		this == mg.chordChooser.data['figure']){
				mg.chordChooser.close();
			
			}else if (	this == mg.chordChooser.menus.noteChooser){
				console.log('noteChooser');
				mg.chordChooser.changeMenu('altChooser',e);
			}else if (	this == mg.chordChooser.menus.altChooser){
				console.log('altChooser');
				mg.chordChooser.changeMenu('rythmChooser',e);
			}else if (	this == mg.chordChooser.menus.rythmChooser){
				console.log('rythmChooser');
				mg.chordChooser.close();
			
			}else{

				console.log(e);
				mg.chordChooser.changeMenu('noteChooser',e);
				mg.chordChooser.open(this, e);
			}
		},
		open: function(figure, e){

			if(mg.chordChooser.data['open']){
				var selectedFig = document.getElementsByClassName("selected");
				for (var i = selectedFig.length - 1; i >= 0; i--) {
					selectedFig[i].classList.remove("selected");
				};
				mg.chordChooser.close();
			}
				
			figure.classList.add("selected");
			console.log('mg.chordChooser.open(figure)', figure);

			var notefigures = mg.chordChooser.menus.noteChooser.querySelectorAll('figure.mg-chord');
			for (var n = notefigures.length - 1; n >= 0; n--) {
				if( notefigures[n].dataset.note == figure.dataset.note ) {
					notefigures[n].classList.add('selected');
				}else{
					notefigures[n].classList.remove('selected');
				}
			};

			mg.chordChooser.data['open'] = true;
			mg.chordChooser.data['figure'] = figure;
		},
		close: function(){
			console.log('mg.chordChooser.close()');
			mg.chordChooser.data['open'] = false;
			mg.chordChooser.menus.noteChooser.classList.add('hide');
			mg.chordChooser.data['figure'].classList.remove("selected");
			mg.chordChooser.data['figure'] = null;
		},
		change: function(note){
			mg.chordChooser.data['figure'].dataset['note'] = note;
		},
		changeMenu: function(menu , e){
			console.log('changeMenu', menu);
			for (var i = mg.chordChooser.menus.length - 1; i >= 0; i--) {
				mg.chordChooser.menus[i].classList.add('hide');
			}
			mg.chordChooser.menus[menu].style.left = 'calc(' +e.clientX + 'px - 2em )';
			mg.chordChooser.menus[menu].style.top = 'calc(' +e.clientY + 'px - 2em )';
			mg.chordChooser.menus[menu].classList.remove('hide');
		}
	}
};