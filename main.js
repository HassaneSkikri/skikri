let words =document.querySelectorAll(".word"); //select all the elements in the document that match a specified css selector word 

words.forEach((word)=>{ //iterates over each item in the word NodeList
    let letters = word.textContent.split("");
    word.textContent=""; //remove all the text content from the word element
    letters.forEach((letter)=>{
        let span = document.createElement("span");//create a span element
        span.textContent = letter;//after this the span element will contain the same content of the current letter element
        span.className = "letter";
        word.append(span);
        //this allows each caracter to be styled individually and tranditioned separatley .

    });
});

let WordIndex = 0;
let maxwordIndex = words.length - 1;
words[WordIndex].style.opacity = "1";

let changingText = ()=>{
    let currentWord = words[WordIndex];
    //store the next word in the list words
    let nextWord = WordIndex === maxwordIndex ? words[0] : words[WordIndex +1]//this is a ternary conditional expression , it checks if wordIndex is equal to maxWordIndex if it is it return words[0] that means we've reached the end of the list 

    Array.from(currentWord.children).forEach((letter,i )=>{ //letter for the current letter and i for the index ==>create an array that contain each letter of the word and iterates over eacn letter of the word
        setTimeout(()=>{ //htis function is used to delay the execution of the specified function  by a specific number of miliseconds
            letter.className="letter out";
        },i*80);  // so this ensures that each letter is hidden with a delay that is proportional to its position in the word
    }); //the letters of the current word are hidden one by one with a delay
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i )=>{ 
        letter.className = "letter behind";
        setTimeout(()=>{ 
            letter.className="letter in";
        },340 + i*80);  
    });
    WordIndex = WordIndex === maxwordIndex ? 0 : WordIndex + 1;
};

changingText();
setInterval(changingText,3000); //caling the changing text function every 3 seconds 
