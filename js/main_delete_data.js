

console.log("delete js loaded");
const main_delete_button = document.getElementById("main_delete_button");

let delete_signal = false;
main_delete_button.addEventListener("click",async ()=>{

   delete_signal = true;
   let data_delete_form_database = await fetch('/to-do/site/server_database/delete_datas.php',
                                                {
                                                 method:'POST',
                                                 body : new URLSearchParams(`delete_status=${title_h1.textContent}`),

                                                }

                                            )
    let success_massage = await data_delete_form_database.text();
    console.log(success_massage);

    //setting the delete to false default value
})


