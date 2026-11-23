import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConferenceList } from '../conference-list/conference-list';
@Component({
  imports: [FormsModule, ConferenceList],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  SiteName:String="site";
  imageSrc="https://getwallpapers.com/wallpaper/full/c/2/7/120337.jpg";
  clickme(){
    return alert("Button clicked!");
  }
  inputitem="";
}