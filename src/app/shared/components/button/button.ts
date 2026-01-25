import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink, NgClass, CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
 @Input() label!: string;
  @Input() to?: string;
  @Input() transparent = false;
  @Input() disabled = false;
  @Input() icon?: string;

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

  get classes() {
    return {
      button: true,
      'button--transparent': this.transparent,
      'button--disabled': this.disabled,
    };
  }
}
