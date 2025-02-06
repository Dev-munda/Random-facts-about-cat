let btn = document.querySelector('button');
btn.addEventListener("click", async()=>{
let fact =  await getFacts();
let p= document.querySelector("#output");
output.innerText=fact;
btn.innerText="show more "
})
let url="https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        
          return res.data.fact;
        
    }catch(error){
        console.log("error----",error);
        console.log("No data found");

    }
}






