const axios = require('axios');

module.exports = async (req, res) => {
  const { url } = req.query;
  
  try {
    if(url !== '') {
      const { data } = await axios.get(url);
      res.send(data);
    }
    
    res.send('link is required');
  } catch(err) { res.send(err); }
};

