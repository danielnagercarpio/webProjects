<?php

$x = 5;

# 42 hexadecimal in integer
$x = 0x2A;

# 45 octal in integer
$x = 055;

# 3 binary in integer
$x = 0b11;

$x = PHP_INT_MAX + 1;

// it converts to float because 
// overflow int max value
var_dump($x);
$toint = (int) null; // 0
$toint = (int) 'test'; // 0
$toint = (int) '5.9'; // 5, removes the float

echo $x;