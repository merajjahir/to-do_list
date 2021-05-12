
//the title h2 and the input field 
const title = document.getElementById("title");

// const title_h2 = document.querySelector("#title > h2");
const title_h1 = document.getElementById("iamtheman");
//the title input 
const title_name = document.getElementById("title_name");



title_h1.addEventListener("click",() =>
{
    title_name.style.display = "block";
    title_name.classList = "style_all_input";
    title_h1.style.display = "none";
    
    title_name.addEventListener("keyup",(e) =>{
       
    let title_value = title_name.value;
        if(e.key ==="Enter"){
            e.preventDefault();
            if( title_value === ""){
                let time =new Date();
                title_h1.textContent = `${time.toLocaleDateString()} ${time.toLocaleTimeString('en-US', { hour12: false })} `;
                title_h1.placeholder = "YOU SUCKKER !!!";

                title_name.style.display = "none";
                title_h1.style.display = "block";
                return


            }else
            {
                title_h1.textContent = title_value;
                title_h1.placeholder = `${title_value}`;
                title_name.style.display = "none";
                title_h1.style.display = "block";
                return;
            }
        }
        
    })

})