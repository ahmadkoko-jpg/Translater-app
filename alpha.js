let Q = "";

let btn = document.querySelector("button");
let input = document.querySelector("input")
let p = document.querySelector("p");

async function Getdata (){
    let url = `https://api.mymemory.translated.net/get?q=${Q}&langpair=en|ur`;
    let res = await axios.get(url);
    console.log(res.data.responseData.translatedText);
    p.innerText = res.data.responseData.translatedText;
}

btn.addEventListener("click", async function (){
     Q = input.value;
    await Getdata();
})

