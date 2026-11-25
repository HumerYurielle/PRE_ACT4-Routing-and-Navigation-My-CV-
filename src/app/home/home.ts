import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile.card/profile.card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // The Home page owns all CV data and passes it down to the children.
  fullName = 'Humer Yurielle S. Ramos';
  location = 'Porac, Pampanga';
  email = 'humerramos18@gmail.com';
  phone = '0927 896 2825';

  profile = 'I am Humer Yurielle Ramos, a front-end developer and web development student focused on building responsive, clean user interfaces and modern web applications with Angular. I enjoy learning new technologies, refining UI details, and turning practical ideas into interactive software.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular', 'MongoDB', 'Supabase','Node.js',
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
