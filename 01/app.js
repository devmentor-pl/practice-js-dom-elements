

const comments= document.querySelector('.comments');
//console.log(comments)
if(comments)
{
    const commentsItems= comments.querySelector('.comments__item' && '.comments__item--newest');
    if(commentsItems){
        //console.log(commentsItems)
        const data = commentsItems.querySelectorAll('span');
        const arr = Array.from(data);
        
        if(data)
       for(let i = 0; i<arr.length; i++)
      {
          //console.log(arr[i]);
          const dataInfo = arr[i].getAttribute('data-info');
          console.log(dataInfo);  
 
   
      }
          console.log(arr.length);
    }
}
