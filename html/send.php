<?
// ----------------------------конфигурация-------------------------- //
$adminemail = "servis.yut@gmail.com";  // e-mail админа
$date = date("d.m.y"); // число.месяц.год
$time = date("H:i"); // часы:минуты:секунды
$backurl = "http://specremstroy76.ru/index.html";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //


// Принимаем данные с формы

$name = $_POST['firstname'];

$email = $_POST['email'];

$msg = $_POST['question'];


// Проверяем валидность e-mail

if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is",
    strtolower($email))
) {

    echo '<script language="javascript">';
    echo 'alert("Проверьте правильность введенных данных")';
    echo '</script>';
} else {
    $msg = "
<p>Имя: $name</p>
<p>E-mail: $email</p>
<p>Сообщение: $msg</p>";


    // Отправляем письмо админу

    mail("$adminemail", "$date $time Сообщение
от $name", "$msg");

// Выводим сообщение пользователю
   
print "<script language='Javascript'><!--
function reload() {location = \"$backurl\"}; setTimeout('reload()', 2000);
//--></script>
$msg
<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";
    exit;
}
?>