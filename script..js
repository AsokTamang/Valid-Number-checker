const number=document.getElementById('inputfield');
const result=document.getElementById('resultfield');
const check=document.getElementById('checkbtn');
const clear=document.getElementById('clearbtn');


const checkfirst=(num1)=>{
    if (!num1){
        alert('please enter a valid number')
    }
    checklength(num1)
    
    
}
const checklength=(item)=>{
        regex1=/^\+977\-?\d{10}$/g
        regex2=/^(\(\d{3}\)\-?\s?\d{7})$/g
        regex3=/^\d{3}\-?\d{3}\-?\d{4}$/g
        regex4=/^\d{10}$/g
        item=item.replace(/[^\+\d\-\(\)]/g,"");
        item=item.replace(/\s/g,"");
        if (regex1.test(item)||regex2.test(item)||regex3.test(item)||regex4.test(item)){  // this code checks whether the regexpattern completely matches the string or not.
            good(item); 
        }
        else{
        bad(item)}

            
    }
    const good=(num)=>{
        result.textContent=`Valid Nepali Number:${num}`
    }
    const bad=(num)=>{
        result.textContent=`Invalid Nepali Number:${num}`
    
    }
    
    check.addEventListener('click',()=>checkfirst((number.value)));
    clear.addEventListener('click',()=>{
        number.value="";
        result.textContent="";
    });
    check.addEventListener('keydown',(e)=>{
        if(e.key==="Enter"){
            
            checkfirst((number.value));
    
        }
    });
    
            

            
        
            

       



