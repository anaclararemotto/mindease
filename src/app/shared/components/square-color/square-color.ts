import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-color',
  imports: [],
  templateUrl: './square-color.html',
  styleUrl: './square-color.scss',
})
export class SquareColor {
@Input() bgColor?: string; // HEX, rgb, hsl, etc
}
