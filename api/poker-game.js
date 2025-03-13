module.exports = async (req, res) => {
  const { game } = req.query;
  
  try {
    const data = await (
      await fetch(`https://bicyclecards.com/how-to-play/${game}`)
    ).text();
    
    if(!game) { res.send(data); }
  } catch(err) { res.send(err.message); }
};
