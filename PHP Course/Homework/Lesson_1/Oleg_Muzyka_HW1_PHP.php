<?php
$a1 = [1,1,1];
$a2 = [-1000, 0, -2, 0];

function stepCount($arr){
	$steps = 0;
	$arrayLength = count($arr);
    for ($i = 1; $i<$arrayLength; $i++){
        while($arr[$i]<=$arr[$i-1]){
            $steps++;
            $arr[$i] = $arr[$i] + 1;
          
        };        
    };
     echo $steps;
	return $steps;
};

stepCount ($a2);

?>
