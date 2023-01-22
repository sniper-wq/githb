<?php
  session_start();
?>
<?php
  $http = file_get_contents('http.txt');
  file_put_contents('login.txt', '0');
  header("Location: " . $http);
?>