<?php
  session_start();
?>
<?php
  $http = file_get_contents('http.txt');
  header("Access-Control-Allow-Origin: *"); //убрать при деплое на сервер
  file_put_contents('login.txt', '0');
  $login = $_GET["login"];
  $password = $_GET["password"];
  
  $servername = "localhost"; // расположение базы данных, если база данных расположена на этом компьютере - localhost , если на удаленном сервере -> ip сервера
  $username = "root"; // логин пользователя в базе данных, в опенсервере по умолчанию это root без пароля
  $password_db = ""; // пароль пользователя
  $dbname = "taro"; // название базы данных
    
  // Создание подключения к базе данных
  $conn = mysqli_connect($servername, $username, $password_db, $dbname);
  
  $sql1 = "SELECT * FROM taro";

  $result = $conn->query($sql1);

  if ($result->num_rows > 0) {
    // записываем в переменную $row - каждую строку из базы данных командой $result->fetch_assoc()
    // она поочереди будет выдавать массив данных, пока они не закончатся

    while($row = $result->fetch_assoc()) {
        // так как это цикл, значение $row, будет равно ОДНОЙ строке из базы данных, далее мы просто выводим на экран
        if ($login == $row["login"] and $password == $row["password"]) {
          file_put_contents('login.txt', '1');
          header("Location: " . $http);
          break;
        }
        else {
          file_put_contents('login.txt', '0');
          file_put_contents('error.txt', 'password-login');
          header("Location: " . $http . "/login");
        }
    }
  } else {
      echo "Результатов нет";
  }
?>