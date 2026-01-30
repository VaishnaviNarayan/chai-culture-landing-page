const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json());
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","*");
  next();
});

// Serve the frontend statically from the project frontend folder
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.post("/save", (req,res)=>{
  const email = req.body.email;
  let data = [];
  const dbPath = path.join(__dirname, "emails.json");

  if (fs.existsSync(dbPath)) {
    try {
      data = JSON.parse(fs.readFileSync(dbPath));
    } catch (err) {
      // If JSON is corrupted, start fresh to avoid crashing
      data = [];
    }
  }

  data.push({email: email, date: new Date()});
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

  res.json({message: "saved"});
});

// simple health route to verify server is running
app.get('/health', (req, res) => {
  res.json({status: 'ok'});
});

app.listen(5000, ()=> console.log("Server running on port 5000"));
