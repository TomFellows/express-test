let express = require('express')
let app = express()

app.get('/', (req,res) => {
    res.send("this is a test server using express")
})

app.listen(3000, () => console.log("Server listening"))
