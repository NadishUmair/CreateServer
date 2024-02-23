const http=require("http")
const port=5000;
const fs=require('fs')
const first=fs.readFileSync('./first.txt','utf8')
console.log(first);
const result=fs.writeFileSync('./result.txt',`content:${first}`,{flag:'a'})
console.log(result);
// const server=http.createServer((req,res)=>{
//  if(req.url==="/"){
//    res.end("hey this is home page")
//  }
//  else if(req.url==="/about"){
//   res.end("hey this about page")
//  }
//  else if(req.url==="/contact"){
//   res.end("hey this contact page")
//  }
//  else{
//        console.log('not any page')
//     res.end(`<h1>Opps error occured</h1> <a href="/">Back to home</a>`)
//  }
// })

// server.listen(port,()=>{
//   console.log('server is running',port)
// })