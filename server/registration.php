<?php
  session_start();
?>
<?php
  $http = file_get_contents('http.txt');
  $login = $_GET["login"];
  $password1 = $_GET["password1"];
  $password2 = $_GET["password2"];

  if ($password1 != $password2) {
    file_put_contents('error.txt', 'registerPassword');
    header("Location: " . $http . "/registration");
  }
  else {
    $servername = "localhost"; // расположение базы данных, если база данных расположена на этом компьютере - localhost , если на удаленном сервере -> ip сервера
    $username = "root"; // логин пользователя в базе данных, в опенсервере по умолчанию это root без пароля
    $password_db = ""; // пароль пользователя
    $dbname = "taro"; // название базы данных
      
    // Создание подключения к базе данных
    $conn = mysqli_connect($servername, $username, $password_db, $dbname);
    
    $sql1 = "SELECT * FROM taro";

    $result = $conn->query($sql1);

    $sql2 = "INSERT INTO taro (login, password, role, email) VALUES ('$login', '$password1', '1', 'NULL');";

    $result = $conn->query($sql2);
    header("Location: " . $http);
    file_put_contents('login.txt', '1');
    file_put_contents('role.txt', 'user');
  }
?>