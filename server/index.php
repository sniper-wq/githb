<?php
  header("Access-Control-Allow-Origin: *"); //убрать при деплое на сервер
  
  $login = file_get_contents('./login.txt');
  echo $login;
?>
