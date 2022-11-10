import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
  // your code here
  const expand = document.querySelectorAll(".expand_button");
 
  for(let i = 0; i < expand.length; i++) { 
    const para = document.querySelectorAll(".article_body");
  
    expand[i].addEventListener("click", (event) => { 
    const text = event.target.innerHTML;
    const parent = event.target.parentElement;
       var article = parent.parentElement;
    
    
   
      if(text !== "V"){
      para[i].style.display = "block";
      event.target.innerHTML = "V";
    } else if(text == "V"){
      para[i].style.display = "none";
      event.target.innerHTML = ">";
    }
   
  
  })
 }
}

    /*if(text == "V"){
      para[i].style.display = "none";
     event.target.innerHTML = ">"; 
    } else if(text !== "V"){
      para[i].style.display = "block";
      event.target.innerHTML = "V";
    }*/
  
     //console.log(parent);
 
   
 
/* expand.onClick =  function(){
    if (para.style.display !== "block") {
    para.style.display = "block";
  } else {
     para.style.display = "none";
  }
 }*/
   
  /*
*/

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  // your code here
  const highlight = document.querySelectorAll(".highlightBtn");
  highlight.forEach(button => {
  button.addEventListener("click", (event) => {
    let text = event.target.innerHTML;
    let parent = event.target.parentElement;
    
    event.preventDefault();
   const art = document.querySelectorAll("article_body");
    
    if(text == "+"){
      parent.classList.add("highlight");
      event.target.innerHTML = "-";
    } else if(text !== "+"){
      parent.classList.remove("highlight");
      event.target.innerHTML = "+";
    }
      if(text !== "+"){
      parent.classList.remove("highlight");
      event.target.innerHTML = "+";
    } else if(text == "+"){
      parent.classList.add("highlight");
      event.target.innerHTML = "-";
    }
   
  })
    })
  
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
