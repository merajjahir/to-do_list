<?php

/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
try{
    $pdo = new PDO("mysql:host=localhost;dbname=to-do", "root", "");
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
}


 function the_entry_to_the_database 
($pdo,$CHOICE,$CHOICE_param,$title_choice,$title_param,$status_choice,$status_param)
       {

          $random_id = floor(random_int(1,500));
          // the insert command to the database

          $the_sql_command ="INSERT INTO todo( `Choice_number`,`title_choice`, `status_choice`, `CHOICE`, `Choice_date`) 
                             VALUES($random_id, $title_param ,$status_param,$CHOICE_param,NOW());";



          //making the statement by prepare the sql command 

          $the_insert_stmt = $pdo->prepare($the_sql_command);

          //binding the parameters with the value

          $the_insert_stmt->bindParam($title_param,$title_choice);
          $the_insert_stmt->bindParam($status_param, $status_choice);
          $the_insert_stmt->bindParam($CHOICE_param, $CHOICE);
                      
         
          // executing the statement this is not supose to return any thing 
          // so using exec() insted of execute()
       //    $the_insert_stmt->exec($execute_parameter);
          $the_insert_stmt->execute();
          echo "data entered successfully ";
          
       }


       try{


              echo " insert_datas.php loaded";
              //the parameters for the database entry

              $title_choice=""  ;
              $title_param = ':title_choice';

              $status_choice="" ;
              $status_param = ':status_choice';

              $CHOICE ="" ;
              $CHOICE_param = ':CHOICE';
              //the execute parameter
              // $execute_parameter = ["title_choice"=>$title_choice,"status_choice"=>$status_choice,"CHOICE"=>$CHOICE];
       


              // the main variable to store the values of the client

              $all_data_decode;
              $all_data;

       if(isset($_REQUEST['all_data']))
       {
              $all_data = $_REQUEST['all_data'];
              $all_data_decode = json_decode($all_data);
       } 

       // print_r($all_data);

       //truned it into an array
       // $all_data_array = get_object_vars($all_data_decode);
       
       foreach($all_data_decode as $main_key => $whole_array_value)
       {
              foreach($whole_array_value as $key => $value)
              {
                     // print_r($whole_array_value);
                     if($main_key==="ChoiceTitle")
                     {
                            $title_choice .= $value;

                     }elseif($main_key === "choice_status"){

                            $status_choice .= $value;
                            
                     }
                     elseif($main_key === "CHOICE")
                     {
                            $CHOICE .= $value;

                     }
              }
       }
       
       // print_r( $CHOICE);
       // echo "     ";
       // print_r( $status_choice);
       // echo "     ";
       // print_r( $title_choice);

       //calling the main fucntion to enter the datas 
       if(isset($title_choice,$status_choice,$CHOICE))
       {
        the_entry_to_the_database ($pdo,$CHOICE,$CHOICE_param,$title_choice,$title_param,$status_choice,$status_param);

       }

       echo "the code ran till the end of the line";
       }
       catch(Exception $e) {
              echo 'Message: ' . $e->getMessage();
              echo " this it the catch";
       }

// Close statement
unset($the_insert_stmt);
 
// Close connection
unset($pdo);
?>