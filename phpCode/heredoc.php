<?php

/** STRINGS */

$firstname = 'Will';
$lastname = 'Smith';
$name = $firstname . ' ' . $lastname;

echo $name . '<br />';
// This line, converts the 'Will Smith' into 'WIll Smith
$name[1] = 'I';
// This line, converts the 'Will Smith' into 'WIll Smith
$name[1] = 'I';

$x = 1;
$y = 2;

// Heredoc -> Double quotes
$text = <<<TEXT
line 1 $x
line 2 $y
line 3
TEXT;

// Nowdoc -> Single quotes
$textnowdoc = <<<'TEXT'
line 1 $x
line 2 $y
line 3
TEXT;

echo '<br />';
echo nl2br($text);
