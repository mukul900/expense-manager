const router = require('express').Router();

const { json } = require('body-parser');
// write all routing code and logic here
const fs=require('fs');


router.get('/',(req,res)=>{
    res.send(fs.readFileSync('server/db.json'));
})
router.post('/',(req,res)=>{
    
    fs.readFile('server/db.json', (err, data) => {
        if (err) throw err;
        let newarray= JSON.parse(data);
        newarray.push(req.body);
       fs.writeFile("server/db.json",JSON.stringify(newarray,null,2),(err)=>{
          if(err) throw err;
           res.status(201).send("Expense is added successfully");
       }); 
})
})
router.get('/:id',(req,res)=>{
   fs.readFile('server/db.json','utf8',(err,data)=>{
       if(err)
       {
           throw err;
       }
       const userId=req.params["id"]
       const ans=JSON.parse(data)
       console.log(ans[userId-1])
       res.status(200).send(ans[userId-1])
   })
})
router.delete('/:id',(req,res)=>{

    fs.readFile('server/db.json', (err, data) => {
        if (err) throw err;
        const userid=req.params["id"]
        let newarray= JSON.parse(data);
        delete(newarray[userid-1])
       fs.writeFile("server/db.json",JSON.stringify(newarray,null,2),(err)=>{
          if(err) throw err;
           res.status(201).send("deleted");
       }); 
})

})
router.put('/:id',(req,res)=>{
    fs.readFile('server/db.json', (err, data) => {
        if (err) throw err;
        const userid=req.params["id"]
        let newarray= JSON.parse(data);
        newarray[userid-1]=req.body
       fs.writeFile("server/db.json",JSON.stringify(newarray,null,2),(err)=>{
          if(err) throw err;
           res.status(201).send("updated");
       }); 
})
})
module.exports = router;