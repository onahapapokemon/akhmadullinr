<?php
error_reporting(0);
include "config.php";

// Функция отправки письма
function send_mail($_mail, $_name, $mail_from, $_subject, $_message) {
  mail($_mail, $_subject, $_message,
    "From: ".$mail_from." (".iconv("ISO-8859-1", "utf-8", $_name).")\r\n".
    "Reply-To: ".$mail_from."\r\n".
    "Content-type: text; charset=utf-8\r\n".
    "X-Mailer: PHP/" . phpversion());
}

if (isset($_POST['name']) && isset($_POST['phone'])) {
	// Проверяем тип формы и отправляем письмо
	$subject = (isset($_POST['subject'])) ? $_POST['subject'] : "Заявка с сайта MoveHostel хостел";
	$message = $subject . "\r\n\r\nКонтакт: {$_POST['name']}\r\nТелефон: {$_POST['phone']}" .
		((isset($_POST['date']) && $_POST['date'] != "") ? "\r\n\r\nДата:".$_POST['date'] : "") .
		((isset($_POST['koll']) && $_POST['koll'] != "") ? "\r\n\r\nКол-во человек:".$_POST['koll'] : "") .
		((isset($_POST['tepl']) && $_POST['tepl'] != "") ? "\r\n\r\nУтепление ангара:".$_POST['tepl'] : "") .
		((isset($_POST['email']) && $_POST['email'] != "") ? "\r\n\r\nEmail:".$_POST['email'] : "") .
		((isset($_POST['mess']) && $_POST['mess'] != "") ? "\r\n\r\nВаши требования:".$_POST['mess'] : "");
	
	send_mail($mail_to, $name_from, $mail_from, $subject, $message);
	die("Ваше сообщение отправлено!");
	header("Location:thanks.html");
}

die("Возникла ошибка! Попробуйте еще раз.");

?>