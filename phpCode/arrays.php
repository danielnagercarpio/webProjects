<?php

// Arrays 
$programminglanguage1 = 'PHP';
$programminglanguage2 = 'Java';
$programminglanguage3 = 'Python';


$programminglanguages = ['php', $programminglanguage2, $programminglanguage3];

// This expression will print true if the third index exists
echo isset($programminglanguages[3]);
// To see the size of the array
echo count($programminglanguages);



// With array_push we can push some elements to the array
array_push($programminglanguages, 'Go!');

// associative arrays
$associativearray = [
    'php' => '8.0',
    'java' => '18.0.0'
];

// It returns the 8.0 value
echo $associativearray['php'];
// You can append to an array with the tag name:
$associativearray['Go'] = '1.0';
echo '<pre>';
// It prints the full array with Go 1.0
print_r($associativearray);
echo '</pre>';
// Multidimensional arrays in php

$asoc = [
    'php' => '9.1',
    'java' => [
        'bastion' => 'yei',
        'somearrayInfo' => [
            'value' => 1, 
            'version' => 17
        ]
    ]
]

// You can print the value of bastion doing this:
echo $asoc['java']['bastion'];

// you can print the value of value in somearrayInfo doing this:
echo $asoc['java']['somearrayInfo']['value'];














