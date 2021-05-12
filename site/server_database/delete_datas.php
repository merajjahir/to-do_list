

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

function delete_from_database ($pdo,$delete_value)
{
    $delete_command_sql = "DELETE FROM todo WHERE `Choice_date`=:delete_param;"; 
    
    //the statement
    $delete_stmt = $pdo->prepare($delete_command_sql);

    //binding the parameters

    $delete_stmt->bindParam(":delete_param",$delete_value);

    //execution 
    $delete_stmt->execute();
    
    //success massage
    echo "data deleted successfully";

}




try{
    echo "delete_datas.php loaded";

    $delete_status;
    if(isset($_REQUEST['delete_status'])){

        $delete_status = $_REQUEST['delete_status'];

        //setting the imported date value to the sql function value
        $delete_value = $delete_status;

        //executing the sql
        delete_from_database ($pdo,$delete_value);

    }else{

        echo " can't get the value from javascript";
    }

    



}
catch(PDOException $err)
{
    echo " delete  failed";
    echo " delete Massage :".$err;
}



// Close statement
unset($stmt);
 
// Close connection
unset($pdo);

?>