<?php 

namespace App\Controller;

use App\Entity\ContactUs;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ContactUsController extends AbstractController
{
    public function onContact(EntityManagerInterface $entityManagerInterface, LoggerInterface $loggerInterface, Request $request): JsonResponse
    {
        $name       =   $request->get('name');
        $email      =   $request->get('email');
        $message    =   $request->get('message');
        $subject    =   $request->get('subject');
        
        $loggerInterface->info('### Contact Us Started ###', [
            'name'      =>  $name,
            'email'     =>  $email,
            'subject'   =>  $subject,
            'message'   =>  $message
        ]);
        
        try {
            $contactUs = new ContactUs();
            
            $contactUs->setName( $name );
            $contactUs->setEmail( $email );
            $contactUs->setSubject( $subject );
            $contactUs->setMessage( $message );
            
            $entityManagerInterface->persist($contactUs);
            
            $entityManagerInterface->flush();
            
            return new JsonResponse(['success' => true, 'message' => 'Thank You. Your Message has been Received']);
            
        } catch(Exception $exception){
            $loggerInterface->info('### Contact Us Exception ###', [
                'Message'   =>  $exception->getMessage(),
                'File'      =>  $exception->getFile(),
                'Line'      =>  $exception->getLine()
            ]);
            
            return new JsonResponse(['success' => false, 'message' => 'Some Error Occured']);
        }
    }
}