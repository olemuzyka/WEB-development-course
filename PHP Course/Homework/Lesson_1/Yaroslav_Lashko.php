<?php
  function arrayToAscending($arr) {
    $steps = 0;
    for ($i = 0; $i < count($arr) - 1; $i++) {
      if ($arr[$i] > $arr[$i + 1]) {
        $steps += $arr[$i] - $arr[$i + 1] + 1;
        $arr[$i + 1] += $steps;
      } else if ($arr[$i] == $arr[$i + 1]) {
        $steps += 1;
        $arr[$i + 1] += $steps;
      }
    }
    return $steps;
  }
            
?>
