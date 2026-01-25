import { Component } from '@angular/core';
import { LandingHeader } from "../landing-header/landing-header";
import { LandingFooter } from "../landing-footer/landing-footer";
import { LandingContent } from "../landing-content/landing-content";

@Component({
  selector: 'app-landing',
  imports: [LandingHeader, LandingFooter, LandingContent],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

}
