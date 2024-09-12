<?php

namespace App\Entity;

use App\Repository\ContactUsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContactUsRepository::class)]
class ContactUs
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    
    #[ORM\Column(length: 255)]
    public ?string $name = null;
    
    #[ORM\Column(length: 255)]
    public ?string $email = null;
    
    #[ORM\Column(length: 255)]
    public ?string $subject = null;
    
    #[ORM\Column(length: 255)]
    public ?string $message = null;
    
    public function getId(): ?int
    {
        return $this->id;
    }
    
    public function getName(): String
    {
        return $this->name;
    }
    public function setName(string $name): static
    {
        $this->name = $name;
        
        return $this;
    }
    
    public function getEmail(): String
    {
        return $this->email;
    }
    public function setEmail(string $email): static
    {
        $this->email = $email;
        
        return $this;
    }
    
    public function getSubject(): String
    {
        return $this->subject;
    }
    public function setSubject(string $subject): static
    {
        $this->subject = $subject;
        
        return $this;
    }
    
    public function getMessage(): String
    {
        return $this->message;
    }
    public function setMessage(string $message): static
    {
        $this->message = $message; 
        
        return $this;
    }
}
