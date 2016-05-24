module.exports = function(router, fs, path){
	var dataUrl = "../data/data.json";
	var properties = require(dataUrl);
	var savedProperties = properties.saved;
	var resultsProperties = properties.results;

	function saveProperties(properties){
		fs.writeFile(path.join(__dirname, dataUrl), JSON.stringify(properties, null, 4), function(err){
		    if(err){
		    	console.log(err);
		    }else{
		    	console.log("successfully saved");
		    }
		});
	}

	router.get('/api/properties', function(req, res) {
		res.send(properties);  
	});

	router.delete('/api/property', function (req, res) {
		var selectedProperty = req.body;
		console.log(selectedProperty);
		if(selectedProperty){
			properties.saved = properties.saved.filter(function(property){
				return property.id != selectedProperty.id;
			});
			properties.results.push(selectedProperty);
			saveProperties(properties);
			res.send(properties);
		}else{
			res.send(false);
		}
	});

	router.post('/api/property',  function(req, res) {
		var selectedProperty = req.body;
		if(selectedProperty){
			properties.saved.push(selectedProperty);
			properties.results = properties.results.filter(function(property){
				return property.id != selectedProperty.id;
			});
			saveProperties(properties);
			res.send(properties);
		}else{
			res.send(false);
		}
 	});
}