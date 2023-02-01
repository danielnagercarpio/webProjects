<?php

// You can omit the ?\> only if all file is in php lang
// You can omit the semicolon at the end of the line if there is only one line between the tags

// Echo command don't return nothing
echo "Hello";
// Print command return 1 if its succesful
print "Bye";
// You can also write echo with separate commas
echo "Hello", ", it's a good day";
// (syntax error with ' )


// $this = 'hello'
// The variables in php are assign by value instead of reference by default
$name = 'Dozom'
echo $name;
// you can also write php variables with references with:
$nameLink = &$name;
// A good way to write the content of a variable with php is this:
echo "Hello {$name}";
// If you only need to print something, you can use: <?= 'Hello' ?'>
// You can also concat the content with:
echo "A"." B";
// Some ways of comment code:
/**
 * DOCUMENTATION CODE
 */
/*
BLOCK COMMENT
*/

