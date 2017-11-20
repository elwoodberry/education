<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Connect To A Database
$conn = mysqli_connect('localhost', 'root', 'admin', 'ajax-crash-course');

// Check for POST variable
if(isset($_POST['name'])){
  $name = mysqli_real_escape_string($conn, $_POST['name']);

  $query = "INSERT INTO users(name) VALUE('$name')";

  if(mysqli_query($conn, $query)){
    echo "User Added.."
  } else {
    echo "Error " . mysqli_error($conn);
  }
}

// Check for GET variable
if(isset($_GET['name'])){
  echo 'GET: Your Name Is ' . $_GET['name'];
}
