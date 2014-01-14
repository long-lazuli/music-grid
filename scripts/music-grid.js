mg = {
	toneChange: function(selectbox){
		mg.getAncestorSheet(selectbox).setAttribute("data-mg-key", selectbox.value);
	},
	getAncestorSheet: function(domObj) {
		var parent = domObj.parentNode;
		while (parent && parent.tagName.toLowerCase() != "table") parent = parent.parentNode;
		return parent;
	},
	generate: function(notation) {
		
	}
};