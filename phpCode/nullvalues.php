<?php

//null 
// null constant

$x = null

// is_null function returns true if its null, otherwise it will return false
var_dump(is_null($x))
// Remember that a undefined variable will return null value
// The unset function will destoy the X variable
unset($x);
var_dump((string) $x);






