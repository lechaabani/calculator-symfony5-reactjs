<?php

namespace App\Service;

class Calculator
{
    /**
     * @return string The result of calculation
     */
    public function calculate($data): string
    {
        if (preg_match('/(\d+)(?:\s*)([\+\-\*\/])(?:\s*)(\d+)/', $data, $matches) !== FALSE) {
            $operator = $matches[2];
            switch ($operator) {
                case '+':
                    $result = $matches[1] + $matches[3];
                    break;
                case '-':
                    $result = $matches[1] - $matches[3];
                    break;
                case '*':
                    $result = $matches[1] * $matches[3];
                    break;
                case '/':
                    $result = $matches[1] / $matches[3];
                    break;
            }
        }
        return $result;
    }
}
