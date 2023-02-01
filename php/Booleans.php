<?php

$isComplete = false;
/*
integers 0 -0 = false
floats 0.0 -0.0 = false
'' = false
[] = false
null = false
*/

# echoes 1 when it's true
# echoes nothing when its false
# php casts boolean in echo as string,
# string(0) = false
# string(1) = true

echo $complete ;

if ($complete) {
    // do something
} else {
    // do something else
}