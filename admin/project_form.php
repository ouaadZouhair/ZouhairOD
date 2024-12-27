<?php
include '../db/db.php';
session_start();

if (!isset($_SESSION['id'])) {
    header("Location: login.php");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $uploadDir = "../asset/projectIMG";
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $projectName = trim($_POST['projectName']);
    $techName    = trim($_POST['techName']);
    $API         = trim($_POST['lienAPI']);
    $websiteURL  = trim($_POST['websiteURL']);

    // Validate input fields
    if (empty($projectName) || empty($techName) || empty($API) || empty($websiteURL)) {
        die("All fields are required.");
    }

    $projectName = htmlspecialchars($projectName, ENT_QUOTES, 'UTF-8');
    $techName    = htmlspecialchars($techName, ENT_QUOTES, 'UTF-8');
    $API         = htmlspecialchars($API, ENT_QUOTES, 'UTF-8');
    $websiteURL  = htmlspecialchars($websiteURL, ENT_QUOTES, 'UTF-8');

    // Validate image
    $imgName = basename($_FILES['image']['name']);
    $fileType = mime_content_type($_FILES['image']['tmp_name']);
    $allowedTypes = ['image/jpeg', 'image/png'];

    if (!in_array($fileType, $allowedTypes)) {
        die("Invalid file type. Only JPG and PNG are allowed.");
    }

    $imgName = uniqid() . '_' . preg_replace('/[^a-zA-Z0-9_\.-]/', '_', $imgName);
    $targetFile = $uploadDir . '/' . $imgName;

    // Upload file
    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
        $stmt = $conn->prepare("INSERT INTO project (projectName, techName, API, websiteURL, image_path) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param('sssss', $projectName, $techName, $API, $websiteURL, $targetFile);

        if ($stmt->execute()) {
            echo "Image uploaded successfully.";
            header('location: ../index.html');
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
        $conn->close();
    } else {
        die("Failed to upload the file.");
    }
} else {
    die("Invalid request method.");
}
?>
