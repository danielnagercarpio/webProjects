<?php
# FLOATS rounds down (problems)
# it returns 8, becuase float are not precise
$x = floor((0.1 + 0.8) * 10);

# CEIL rounds up (problems)
# it returns 4, because returns 3.000004
$y = ceil((0.1 + 0.2) * 10);

/*
NEVER COMPARE FLOATS DIRECTLY 
X if ($x == $y) 
*/
// returns false if is infinite
echo is_finite($x);
// returns true if is NAN
echo is_nan($x);
