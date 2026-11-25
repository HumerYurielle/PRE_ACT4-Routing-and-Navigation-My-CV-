import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile.card.css',
  templateUrl: './profile.card.html',
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am a student passionate about web development and modern tech, specializing in building functional applications and designing futuristic, cyborg-inspired interfaces with vibrant purple and RGB color palettes.';
}
