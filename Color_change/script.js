const buttons=document.querySelectorAll('.button') ; // sare button ko pehle select kr rhe hai
// console.log(buttons);
const body=document.querySelector('body'); // puri body ko select kr rhe hai

buttons.forEach(function(button){           //hr button pr jake uspr kaam krne k liye aise select krte hai
    button.addEventListener('click',function(event){  // hr button pr ky kaam krna hai wo define kr rhe
        // console.log(event.target.id);
        if(event.target.id === 'grey')           //event.target.id hme hr button ki id name provide kr rha
        {
            body.style.background = event.target.id;  // body mein wo color assign kr rhe hai jo id name hai
        } 
        if(event.target.id === 'brown')
        {
            body.style.background = event.target.id;
        } 
        if(event.target.id === 'green')
        {
            body.style.background = event.target.id;
        } 
        if(event.target.id === 'orange')
        {
            body.style.background = event.target.id;
        } 
    })
})
