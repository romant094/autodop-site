<?php

$query = $_GET['type'];

$files1 = array_diff(scandir('../img/gallery/polishing_1/'), array('..', '.'));
$files2 = array_diff(scandir('../img/gallery/polishing_2/'), array('..', '.'));
$files3 = array_diff(scandir('../img/gallery/repair/'), array('..', '.'));
$files4 = array_diff(scandir('../img/gallery/armoring/'), array('..', '.'));
$files5 = array_diff(scandir('../img/gallery/other/'), array('..', '.'));

$result = [
    'polishing_1' => $files1,
    'polishing_2' => $files2,
    'repair' => $files3,
    'armoring' => $files4,
    'other' => $files5
];

echo json_encode($result);
