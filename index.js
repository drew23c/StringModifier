const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send(homepage);
});
app.get('/upper/:str', (req,res)=>{
  let {str, oldStr, upper} = req.params;
  let obj = {}
  obj.oldStr = oldStr;
  obj.oldStr = str;
  obj.upper = str.toUpperCase()
  res.json(obj)
})
app.get('/lower/:str', (req,res)=>{
  let {str, oldStr, lower} = req.params;
  let obj = {}
  obj.oldStr = oldStr;
  obj.oldStr = str;
  obj.lower = str.toLowerCase()
  res.json(obj)
})
app.get('/length/:str', (req,res)=>{
  let {str, oldStr, length} = req.params;
  let obj = {}
  obj.oldStr = oldStr;
  obj.oldStr = str;
  obj.length = str.length
  res.json(obj)
})
app.get('/reverse/:str', (req,res)=>{
  let {str, oldStr, reverse} = req.params;
  let obj = {}
  obj.oldStr = oldStr;
  obj.oldStr = str;
  obj.reverse = str.split('').reverse().join('');
  res.json(obj)
})
app.listen(port, () => {
  console.log(`running on port ${port}`);
});

const homepage = `
<html>
  <head>
    <title>Mid Program String Modifier</title>
    <link href="app.css"
          type="text/css" rel="stylesheet">
    <link rel="icon" type="image/x-icon"
          href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Itim" rel="stylesheet">
    <script src="app.js"></script>
    </head>
  <body>
    <h1>Mid Program String Modifier</h1>
    <input id="str" type="text" name="string"
           placeholder="type a string">
    <p id="modP">modified strong goes here</p>
    <button id="upper">Upper</button>
    <button id="lower">Lower</button>
    <button id="length">Length</button>
    <button id="reverse">Reverse</button>
  </body>
</html>
`;
