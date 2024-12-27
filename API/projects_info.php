<?php
include "../db/db.php";

$stmt = $conn->prepare("SELECT * FROM project");
if ($stmt->execute()) {
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Fetch all rows into an associative array
        $data = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data); // Return all data as JSON
    } else {
        echo json_encode(["message" => "No data found"]);
    }
} else {
    echo json_encode(["error" => "Failed to execute query"]);
}
?>
