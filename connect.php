<?php
    $name = $_POST['name'];
    $address = $_POST['address'];

    $conn = new mysqli('localhost','root','','db');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into make_order(name, address)
            values(?, ?)");
        $stmt->bind_param("ss", $name, $address);
        $stmt->execute();
        echo "Successfully made order...";
        $stmt->close();
        $conn->close();
    }
?>