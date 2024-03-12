const validateCss = require('css-validator');

module.exports = (req, res) => {
  const { url } = req.query;
  
  const webValidation = /https?:\/\//g;
  
  if (!webValidation.test(url)) {
    return res.status(404).send('Please http:// or https:// is required');
  }
  
  validateCss({uri: url.value}, (err, data) => {
  	if(err) {
  		res.status(400 || 500).json({ msg: err })
  	} else {
  		res.status(200 || 304).json(data)
  	}
  });
};
