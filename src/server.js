// server.js
import express from 'express';
import bodyPaser from 'body-parser';

const app = express()

app.use(bodyPaser.json())

app.get('/', (req,res) => {
    return res.status(200).send({'message': 'Welcome!'})
})

// Setup Server Port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to ${port}`))

export default app;