module.exports = function(router, fs, path){

	var properties = require("../data/data.json");
	var savedProperties = properties.saved;
	var resultsProperties = properties.results;

	function saveProperties(properties){
		fs.writeFile(path.join(__dirname, '../data/data.json'), JSON.stringify(properties, null, 4), function(err){
		    if(err){
		    	console.log(err);
		    }else{
		    	console.log("success");
		    }
		});
	}

	function findSelectedProperty(selectedPropId, properties){
		var selectedProperty;
		properties.forEach(function(property){
			if(parseInt(property.id) == selectedPropId){
				selectedProperty = property;
			}
		});
		return selectedProperty;
	}

	router.get('/api/properties', function(req, res) {
		res.json(properties);  
	});

	router.delete('/api/property/:id', function (req, res) {
		var selectedProperty = findSelectedProperty(req.params.id, savedProperties);

		if(selectedProperty){
			properties.saved.splice(properties.saved.indexOf(selectedProperty), 1);
			properties.results.push(selectedProperty);
			saveProperties(properties);
			res.json(true);
		}else{
			res.json(false);
		}
	});

	router.post('/api/property/:id',  function(req, res) {
		var selectedProperty = findSelectedProperty(req.params.id, resultsProperties);

		if(selectedProperty){
			properties.saved.push(selectedProperty);
			properties.results.splice(properties.results.indexOf(selectedProperty), 1);
			saveProperties(properties);
			res.json(true);
		}else{
			res.json(false);
		}
 	});
}