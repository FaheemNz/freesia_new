<?php 

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class PageController extends AbstractController
{
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }

    public function contactUs(): Response
    {
        return $this->render('contact_us.html.twig');
    }
    
    public function aboutUs(): Response
    {
        return $this->render('about_us.html.twig');
    }

    public function albums(): Response
    {
        return $this->render('albums.html.twig');
    }
    
    public function ourTeam(): Response
    {
        return $this->render('our_team.html.twig');
    }
    
    public function partners(): Response
    {
        return $this->render('partners.html.twig');
    }
    
    public function careers(): Response
    {
        return $this->render('careers.html.twig');
    }
    
    public function projects(): Response
    {
        return $this->render('projects.html.twig');
    }
    
    public function termsAndConditions(): Response
    {
        return $this->render('terms_and_conditions.html.twig');
    }
    
    public function privacyPolicy(): Response
    {
        return $this->render('privacy_policy.html.twig');
    }
}
