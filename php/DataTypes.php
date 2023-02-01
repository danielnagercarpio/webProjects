<?php

declare(strict_types=1);
# Scalar Types
# bool 
$question = true;
# int
$b = 9;
# float 
$price = 4.5;
# string
$greeting = 'Hello Dani';



# Compund types 
# array
$companies = [1, 2, 3, 8.5, -9.2, 'A', 'b', true];
# It's impossible to print array without for and echo command, 
# it produces an Array to string conversion error
print_r($companies);
# object
# callable
# iterable
function sum(int $a, int $b) {
    return $a + $b;
} 

# garantee the type until here
function multiply(int $a, int $b) {
    return $a + $b;
} 

# it works becouse type cohersion (not works with strict mode because type of function parameters)
# echo sum(2, '3');
# it don't works
# echo sum(2, 'a');
echo sum(2, 3);
# Type casting

$x = (int)'5';

var_dump($x);