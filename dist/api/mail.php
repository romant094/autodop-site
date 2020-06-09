<?php
sleep(3);
$to = "info@autodopspb.ru";
$subject = "Заполнена форма обратной связи на сайте Автодоп";
$from = 'noreply@autodopspb.ru';

$json = file_get_contents('php://input');
$decoded = json_decode($json, true);

//echo $decoded

$dictionary = [
    "name" => "Имя",
    "phone" => "Телефон",
    "car-brand" => "Марка автомобиля",
    "car-model" => "Модель автомобиля",
    "salon" => "Салон",
    "service" => "Услуга",
];

$content = '';

foreach ($decoded as $key => $value) {
    if ($value !== NULL){
        $content .= '<p><strong>' . $dictionary[$key] . ':</strong> ' . $value .'</p>';
    }
}

echo $content;

$message = '
<html>
<head>
    <title>
    ' .$subject. '
    </title>
</head>
<body>
' .$content. '
</body>
</html>';

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$verify = mail($to, $subject, $message, "from: " . $from . "\r\n" . $headers);

if ($verify) {
    echo $message;
} else {
    echo 'Something got wrong...';
}
