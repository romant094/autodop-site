<?php

$query = $_GET['type'];

$csv = array_map('str_getcsv', file('cars.csv'));
$json = json_encode($csv);

echo $json;
