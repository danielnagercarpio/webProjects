<?php

/* Data types and type casting */
# Scalar types
    # bool - true, false
    $completed = true;
    # int
    $score = 75;
    # float
    $price = 0.99;
    # string
    $greeting = 'Hello';
    echo $completed;
    echo $score;
    echo $price;
    echo $greeting;

    // You can get the type of a variable with:
    echo gettype($completed);
    // Another way to print the type of a variable with:
    var_dump($score);
# Compounds types
    #array 
    $companies = [1,2,3,4,5];
    # Array to String conversion in (Error)
    echo $companies;
    # To print array:
    print_r($companies);
    # object
    # callable
    # iterable
# Special types
    # resource
    # null
// Type Cohersion, it returns 6
echo 3+"3";
