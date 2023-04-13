(function query()
{
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let equal=document.querySelector('.btn-equal');

    let  clear =document.querySelector('.btn-clear');
    
    buttons.forEach(function(button)
    {
        button.addEventListener('click',function(e)
        {
            let value = e.target.dataset.num;
           
            
            screen.value  += value;
        })
        });
   equal.addEventListener('click',function(e)
   {

   let ans=eval(screen.value);
   screen.value=ans;
   });

   clear.addEventListener('click',function(e)
   {
   let ans="";
   screen.value=ans;
   });
        

})();