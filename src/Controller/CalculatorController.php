<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\Calculator;

class CalculatorController extends AbstractController
{
    #[Route('/calculator', name: 'app_calculator')]
    public function index(): Response
    {
        return $this->render('calculator/index.html.twig', [
            'controller_name' => 'CalculatorController',
        ]);
    }

    #[Route('/result', name: 'result')]
    public function getResult(Request $request)
    {
        $data = json_decode($request->getContent())->data;
        $calculator = new Calculator();
        $result = $calculator->calculate($data);

        return $this->json(['result' => $result]);
    }
}
