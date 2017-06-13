
const quote=document.querySelector(`.container`);
function getQuote(){
    const arr=[];
    fetch("https://gist.github.com/dmakk767/9375ff01aff76f1788aead1df9a66338")
	.then(blob=>blob.json())
        .then(data=>arr.push(...data));
	      let no=Math.random()*(101)+1;
	      quote.innerHTML=`${arr[no]}`;
	     }
    window.document.querySelector(`button`).addEventListener('click',getQuote);
   //window.document.querySelector(`a`).addEventListener('click',tweet);
