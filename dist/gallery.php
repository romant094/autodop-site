<?php

$query = $_GET['type'];

$files1 = scandir('./img/gallery/polishing_1/');
$files2 = scandir('./img/gallery/polishing_2/');
$files3 = scandir('./img/gallery/repair/');

$result = [
    'polishing_1' => $files1,
    'polishing_2' => $files2,
    'repair' => $files3
];

$json = json_encode($result);

echo $json;
