<?php 
include "../db/db.php";

if($_SERVER['REQUEST_METHOD']=== 'POST'){
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Fetch data user
    $sql = "SELECT id, username, email, role, password FROM user WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows === 1){
        $user = $result->fetch_assoc();

        // check the password if correct
        if(password_verify($password, $user['password'])){
            session_start();
            $_SESSION['id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];
            $_SESSION['email'] = $user['email'];

            echo "You login it sucessfully";
            header('location: ../admin/dashboard.php');
        }else{
            echo "invalid password";
        }
    }else{
        echo "No user found";
    }

    $stmt->close();
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="./assets/logo/logo.png">
    <link rel="stylesheet" href="../src/style.css">
    <title>ZouhairOD login</title>
</head>

<body class="bg-slate-900 flex flex-col items-center justify-center min-h-screen">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 class="text-3xl font-bold text-center text-gray-700">Welcome Back</h2>
        <p class="text-center text-gray-500 mb-6">Login to your account</p>

        <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST" class="space-y-4">
            <!-- Email Field -->
            <div>
                <label for="username" class="block text-sm font-medium text-gray-600">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your username"
                    required>
            </div>

            <!-- Password Field -->
            <div>
                <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="********"
                    required>
            </div>
            <!-- Submit Button -->
            <button
                type="submit"
                class="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
                Login
            </button>
        </form>

        
    </div>
</body>

</html>