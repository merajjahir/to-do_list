

//the entire field
const all_of_it = document.getElementById("insert_datas");

// input tag's by tag name and id's
let inputs = document.getElementsByClassName("main_input");
let inputs_id = document.getElementById("input_field");


//the div all the elements will get append to 
let data_in = document.getElementById("data_in");


//the plus image to create the element's 
let plus_img = document.getElementById("plus_img");

//declareing the h2 and the input field
// let h2_element;
// let input_tag;

//the delete image which is the plus image i really should get 
//another photo other then the plus icon
// let delete_img

plus_img.style.marginTop = "100px";
// console.log(plus_img);



plus_img.addEventListener("click",()=>{

    //creating the element's h3 and the input tag
    let h2_element = document.createElement("h2");
    h2_element.textContent= "YOU SUCK!";
    //this is not logical as there will be n number's of h2
    h2_element.classList = "pipe_h2_main_database";
    h2_element.style.display = "none";
    h2_element.style.width = "700px";

    //the input tag
    let input_tag = document.createElement("input");
    input_tag.classList = "style_all_input";
    input_tag.id = "main_input_for_database";
    input_tag.style.display = "block";

    
    //the due done tag 
    let span_due_done = document.createElement("span")
    span_due_done.classList = "span_due_done";

    //input due
    let input_due = document.createElement("h3")
    input_due.classList = "due_h3";

    // input done
    let input_done = document.createElement("h3")
    input_done.classList = "done_h3";

    //the delete img
    let delete_img = document.createElement("img")
    delete_img.src= "../site/images/plus.png"
    delete_img.id = "delete_img"


    //delete functionality

    if(delete_img.style.display="block"){
        delete_img.addEventListener("click",()=>{
            input_tag.parentElement.removeChild(input_tag)
            h2_element.parentElement.removeChild(h2_element)
            span_due_done.parentElement.removeChild(span_due_done)
        })
    }    

    //appending everything to the div
    
    data_in.append(span_due_done,input_tag);



    //the line number from my brain an i have a lot of 
    // pride which is probably not good.
    //it is important to left this number constant here as 
    // it does'nt get renewed every time the user presse's enter.
    const numbers_of_h2 = document.querySelectorAll("#data_in > h2").length;
    console.log(numbers_of_h2);
    

    input_tag.addEventListener("keyup",(e)=>{
        
        
        //input values from the user's
        let input_value = input_tag.value;

        if(e.key =="Enter")
        {
            

            e.preventDefault();
            if(input_value =="")
            {
                    //setting the h3 and the input placeholder to default value
                    h2_element.textContent = `${numbers_of_h2}. sure you don't wanna do someting`;
                    input_tag.placeholder = "sure you don't wanna do something";

                    input_tag.parentElement.removeChild(input_tag)
                    h2_element.parentElement.removeChild(h2_element)
                    // h2_element.style.display = "block";
                    // input_tag.style.display = "none";

            }else{
                    //setting the h3 to the input value
                    h2_element.textContent = `${numbers_of_h2}. ${input_value}`;
                    input_tag.placeholder = input_value;

                    h2_element.style.display = "block";
                    input_tag.style.display = "none";


                //the delete img
                    // let due_done = document.getElementById("due_done")
                    // due_done.style.backgroundColor = "red"
                    delete_img.style.display = "block";
                    delete_img.style.width = "30px";
                    delete_img.style.position = "relative";
                    delete_img.style.marginLeft = "600px"
                    delete_img.style.marginTop = "30px"

                //input due
                    input_due.textContent = "DUE!!!!"
                    input_due.style.position = "absolute";
        
                    input_due.style.color = "red";
                    input_due.style.fontSize = "1.1em"
                    input_due.style.paddingTop = "30px";
                    input_due.style.display = "inline-block";

                // input done
                    input_done.textContent = "DONE :-)";
                    input_done.style.position = "absolute";
                    
                    input_done.style.display = "none";
                    input_done.style.color = "#14b614";
                    input_done.style.fontSize = "1.1em"
                    input_done.style.paddingTop = "30px";
                    input_done.style.display = "none";
                    

                    span_due_done.append(h2_element)
                    span_due_done.append(delete_img,input_due,input_done);

            }
            //the extra style's don't touch them now 
            // you are wasting your time in this 
            // part you should fix the input field 
            // and if it is fixed do the error you are 
            // having right now sukker of the future

            // h2_element.style.width = "500px";
            // h2_element.style.height = "100px";
            // h2_element.style.textAlign = "center";
            // h2_element.style.border = "2px solid #14b614";
            // h2_element.style.boxSizing = "border-box";
            // h2_element.style.borderRadius = "5px 50px 50px 50px";

            //---------------------x--x-------
        }
        

    })
    
    //when the h2 exit's this code will get executed
    h2_element.addEventListener("dblclick",()=>{

        h2_element.style.display= "none";
        input_tag.style.display= "block";

        input_due.style.display = "none"
        input_done.style.display = "none"

        delete_img.style.display = "none";

    })


    input_due.addEventListener("click",()=>{(input_due.style.display="inline-block")?
                                            (input_due.style.display = "none",
                                            input_done.style.display = "inline-block"):(input_due.style.display="inline-block")
                                            })
    input_done.addEventListener("click",()=>{(input_done.style.display="inline-block")?
                                            (input_done.style.display = "none",
                                            input_due.style.display = "inline-block"):(input_done.style.display="inline-block")
                                            })

})




