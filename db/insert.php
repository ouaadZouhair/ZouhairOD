<?php 
include "db.php";

function insert($conn){
    $username = 'medZouhairOD';
    $password = 'medZouhairOD2001$';
    $email = 'zouhairouaad11@gmail.com';
    $role = 'admin';

    // hash password

    $hash_password = password_hash($password, PASSWORD_BCRYPT);

    $sql = "INSERT INTO user (username, password, email, role) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ssss', $username, $hash_password, $email, $role);

    if($stmt->execute()){
        echo "You're insert sucessfully";
    }else{
        echo "Error :" . $stmt->error;
    }

    $stmt->close();
}

insert($conn);
?>