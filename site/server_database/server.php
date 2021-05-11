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
 //the lame shit function 

    

 function the_lame_shit ($pdo,$input_choice,$input_param,$execute_parameter )
 {
    
        $the_query  = "SELECT $input_choice FROM todo WHERE $input_choice LIKE $input_param;";
        //prepareing the query with the statement
        $stmt = $pdo->prepare($the_query);

        //for emergency's only bindValue
        // $stmt->bindValue(':CHOICE',$input, PDO::PARAM_STR);
        

        $stmt->execute($execute_parameter);
        $row = $stmt->fetch();

        if($stmt->rowCount() > 0){
            
                if(isset($row["CHOICE"]))
                {
                    echo "<p> $row[CHOICE] </p>";

                }elseif (isset($row["Choice_date"])) 
                {
                    echo "<p> $row[Choice_date] </p>";
                }
        
        } else{
            echo "<p>No matches found</p>";
        }
        echo "<br>";
        echo "<br>";
        echo "<br>";
        echo "<br>";
 }
// Attempt search query execution
try{
    
    $input;
    $input_choice;
    $input_param;
    $execute_parameter;
    if(isset($_REQUEST['CHOICE']) && !isset($_REQUEST["Choice_date"]))
    {
        //inputs from client
        $input='%'.$_REQUEST['CHOICE'].'%';
        $input_choice = 'CHOICE';
        $input_param = ':CHOICE';
        //the execute parameter
        $execute_parameter = ["CHOICE"=>$input];
        the_lame_shit($pdo,$input_choice,$input_param,$execute_parameter);
    
    }elseif(isset($_REQUEST["Choice_date"]) && !isset($_REQUEST['CHOICE']))
    {
        //inputs from client more or less 
        $input ="%". $_REQUEST['Choice_date'] ."%";
        $input_choice = 'Choice_date';
        $input_param = ':Choice_date';
        $execute_parameter = ["Choice_date"=>$input];
        
        the_lame_shit($pdo,$input_choice,$input_param,$execute_parameter);
        
    }
    else{
        echo "the error is in the first part seem's like i can't even read the god damn input";
    }

 
        echo "connected with the server";
    
  
} catch(PDOException $e){
    die("ERROR: Could not able to execute $the_query. " . $e->getMessage());
}
 
// Close statement
unset($stmt);
 
// Close connection
unset($pdo);
?>