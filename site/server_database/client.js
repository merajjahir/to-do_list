

console.log("client.js is connected  !!");
document.addEventListener("DOMContentLoaded",() => {

    console.log("the dom is loaded");

    //the menu_input_query field is the navigation input that hopefully work as a typeahead


    let sibling_id = document.getElementById("sibling");
    // console.log(menu_input_query);
    
    menu_input_query.addEventListener('keyup',async ()  => 
    {

        //assing the sibling to the reslut variable
        let result_that_drops = menu_input_query.nextElementSibling;
        result_that_drops.classList = "result";
        console.log(result_that_drops)

        
        /* Get input value on change */
        let inputVal = menu_input_query.value;



        
        


        if(inputVal.length)
        {

            //regular expresion 
            let pattern_number = /[\d\:\-\ ]{1,}/;
            let regular_number = pattern_number.test(inputVal);


            // let pattern_character = /([a-zA-z]{1,}||[\:\-\ \!\@\#\$\\\\^\&\(\)\[\]\{\}\/\;\.\"\"\'\']){1,}/; version 1.0
            let pattern_character = /([a-zA-z\D]{1,}|[:\- !@#$\\^&()\[\]\{\}\/;.""'']){1,}/    //version 1.2

            let regular_character = pattern_character.test(inputVal);
            

            



             if ( pattern_number.test(inputVal)  )
            {
                
                let pligrim  = await fetch("/to-do/site/server_database/server.php", 
                                    {
                                        method:"POST",
                                        body:new URLSearchParams(`Choice_date=${inputVal}`)
                                    });
                                    // console.log(`${inputVal} date time passed `,regular_number);

                let pilgrim_peer = await pligrim.text();
                result_that_drops.innerHTML = pilgrim_peer;
                console.log("done CHOICE")

                
            }

            // // the regular expression of the character inputs 
            else if(pattern_character.test(inputVal))
            {

                let pligrim  = await fetch("/to-do/site/server_database/server.php", 
                                    {
                                        method:"POST",
                                        body:new URLSearchParams(`CHOICE=${inputVal}`)  
                                    });

                let pilgrim_peer = await pligrim.text();
                result_that_drops.innerHTML = pilgrim_peer;

                console.log("done CHOICE")
            }
            else{
                console.log("NOT BEEN ABLE TO CONNECT TO THE SERVER");
            }

           
        } else{

            result_that_drops.innerHTML = "";
        }
    });
    
    // Set search input value on click of result item
    sibling_id.addEventListener("click",()=>
    {
        //selecting the p tag of the suggestion box/the class result 
        let sibling_p = document.querySelector("#sibling > p");
        let child_nodes = sibling_id.parentElement.childNodes;

            
        //getting all the childnodes and iterating through them 
        
        child_nodes.forEach( a_child => 
            {
                if(a_child == menu_input_query)
                {
                    a_child.value = sibling_p.innerHTML;
                    sibling_id.innerHTML="";

                    let h2_element = document.createElement("h2");
                    h2_element.textContent= sibling_p.textContent; 
                    sibling_id.innerHTML="";       
    
                    data_in.append(h2_element);
                }
            });
        
        


        
        
    })
});