let words =document.querySelectorAll(".word"); 
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent=""; 
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let WordIndex = 0;
let maxwordIndex = words.length - 1;
words[WordIndex].style.opacity = "1";

let changingText = ()=>{
    let currentWord = words[WordIndex];
    let nextWord = WordIndex === maxwordIndex ? words[0] : words[WordIndex +1];
    Array.from(currentWord.children).forEach((letter,i )=>{ 
        setTimeout(()=>{ 
            letter.className="letter out";
        },i*80);
    });
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
setInterval(changingText,3000);
