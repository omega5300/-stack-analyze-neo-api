const axios = require('axios');

module.exports = async (req, res) => {
  const { url } = req.query;
  
  const webValidation = /https?:\/\//g;
  
  if (!webValidation.test(url)) {
    return res.status(404).send('Please http:// or https:// is required');
  }
  
  try {
    const { data } = await axios.get(url);
    res.send(data);
  } catch(err) { res.send(err); }
};

