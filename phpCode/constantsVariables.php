<?php
// Constants
$constantValue = 'Im not a constant';

// This is how we define a constant in php, Convention is to set it with uppercase
define('STATUS', 'value');
// You can't reassign the value
// It crashes: define('STATUS', 'value');
// A way to print the constant is:
echo defined('STATUS');

const CONSTANT_VALUE = 'Im a constant value';
echo CONSTANT_VALUE;
$constantValue = 'Im a constant';
// SOME PREDEFINED CONSTANTS, STARTS WITH: PHP_...
// MAGIC CONSTANTS STARTS WITH: __(SOME NAME)__
echo __FILE__;

// variable variables
$foo = 'bar';
// This line, 
$$foo = 'baz';
// Is the same as:
$bar = 'baz';
// This don't work
// echo $foo, $$foo;
// echo "$foo, $$foo";

// This works
echo "$foo, {$$foo}";
echo "$foo, ${$foo}";
