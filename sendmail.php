<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('svetik.savina30@gmail.com', 'Бухгалтер для ФОП');
	//Кому отправить
	$mail->addAddress('svetik.savina30@gmail.com');
	//Тема письма
	$mail->Subject = 'Ловите нового клиента!';

	//Рука
	$tax = "Единый налог";
	if($_POST['tax'] == "general"){
		$tax = "Общая система";
	}

	//Тело письма
	$body = '<h1>Поступил запрос</h1>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['tax']))){
		$body.='<p><strong>Налог:</strong> '.$tax.'</p>';
	}
	
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}
	
	// //Прикрепить файл
	// if (!empty($_FILES['image']['tmp_name'])) {
	// 	//путь загрузки файла
	// 	$filePath = __DIR__ . "/files/" . $_FILES['image']['name']; 
	// 	//грузим файл
	// 	if (copy($_FILES['image']['tmp_name'], $filePath)){
	// 		$fileAttach = $filePath;
	// 		$body.='<p><strong>Фото в приложении</strong>';
	// 		$mail->addAttachment($fileAttach);
	// 	}
	// }

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>