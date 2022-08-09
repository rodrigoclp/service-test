import Express from 'express';

const app = new Express();
const PORT = process.env.PORT || 3000;

app.get('/calc/:number', (req, res) => {
  const { number } = req.params || {};
  res.status(200).json(number * 10);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
