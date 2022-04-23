	const express = require('express')
	const app = express()
	const port = 4000 // 포트 5000 등 다른로 바꿔도 노상관
	
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jickoon:ohoh1643@boiler-plate.xodsd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(() => console.log('mongoDB Connected...')).catch(err => console.log(err))

	app.get('/', (req, res) => {
	  res.send('Hello World! Hi!')
	})
	
	app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`)
	})