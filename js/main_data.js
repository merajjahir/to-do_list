


// selecting the main submit button for the database entry

let main_submit_button = document.getElementById("main_submit_button");


    main_submit_button.addEventListener("click",async ()=>{

        

        //the h2_data_collector collecting data's form input's.
            let h2_data_collector = document.querySelectorAll(".pipe_h2_main_database");
            
        //the span_due_done
            let span_due_done_for_database = document.querySelectorAll(".span_due_done");
        
        //the due and done 
            let status_done_for_database = document.querySelectorAll(".done_h3");
            let status_due_for_database = document.querySelectorAll(" .due_h3");


        //the main choice bag
        let main_CHOICE_string = [];

        //the due or done bag
        let status_collector =[];


        for(let i = 0 ; i < h2_data_collector.length ; i++){
            
            main_CHOICE_string.push(h2_data_collector[i].textContent);
            
            status_done_for_database[i].id = "temporary_done";
            let done = document.getElementById("temporary_done").style.display  === "inline-block";

            status_due_for_database[i].id = "temporary_due";
            let due = document.getElementById("temporary_due").style.display === "inline-block";

            // //the status value 
            if(done)
            {
                status_collector.push("done");
                status_done_for_database[i].id = "";
                status_due_for_database[i].id = "";
                
            }else if (due)
            {
                status_collector.push("due");
                status_done_for_database[i].id = "";
                status_due_for_database[i].id = "";

            }


        }

        // converting the title to array
        let choice_Title_array = [title_h1.textContent];
        
        
        let fectch_data = async () => {
            let all_datas = {
                ChoiceTitle : choice_Title_array,
                CHOICE : main_CHOICE_string,
                choice_status : status_collector
            }
    
            let all_data_json = JSON.stringify(all_datas);
            // console.log(all_data_json);
    
            let data_entry_server_to_database = await fetch('/to-do/site/server_database/insert_datas.php', 
                                                        {
                                                            method: 'POST',
                                                            body: new URLSearchParams(`all_data=${all_data_json}`),
                                                        }
                                                    )
    
    
    
            let data_receive = await data_entry_server_to_database.text();
            console.log(data_receive)
    

        }

        fectch_data();


        

    })    
    
