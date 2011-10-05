<?php

// sanitise inputs 
function sane_get($get) {
	$var = preg_replace('/[^\w\s\.]/', '', $_GET[$get]);
	return $var;
}


$text = sane_get('id');
$date = date('r');

file_put_contents('./log.txt',$date.' '.$text.'
',FILE_APPEND);

echo $text;

?>