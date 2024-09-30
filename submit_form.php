<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    // Save form data to a CSV file
    $file = fopen("inscriptions.csv", "a");
    fputcsv($file, array($name, $email, $phone));
    fclose($file);

    echo "Inscripción completada con éxito!";
}
?>
