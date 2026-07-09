


let getvlaue = document.querySelector(".input");
let getbtn = document.querySelector(".search-btn");
let words = document.querySelector(".word");
let pos = document.querySelector(".pos");
let meaning = document.querySelector(".meaning");
let example = document.querySelector(".example");
let syn = document.querySelector(".synonyms");


getbtn.addEventListener("click" , ()=>{
    let word = getvlaue.value;  
    console.log(word);


fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
     words.innerText ="Word:"+" "+ data[0].word; 
     pos.innerText ="Part of Speech:"+" "+ data[0].meanings[0].partOfSpeech;  

  meaning.innerText ="Meaning:"+" "+data[0].meanings[0].definitions[0].definition;
example.innerText = "Example:"+" "+data[0].meanings[0].definitions[0].example;

 if(data[0].meanings[0].definitions[0].example){
    example.innerText ="Example:"+" "+data[0].meanings[0].definitions[0].example
}else{
    example.innerText = "Example: Not Available";
}


    if(data[0].meanings[0].synonyms.length > 0){
    syn.innerText = "Synonyms: " + data[0].meanings[0].synonyms.join(", ");
}else{
    syn.innerText = "Synonyms: Not Available";
}
      
    })
    .catch((error) => {
        console.log(error);
    });


    


})



