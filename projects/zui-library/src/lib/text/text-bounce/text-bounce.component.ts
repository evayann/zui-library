import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Text who will bounce each character */
@Component({
  selector: 'zui-text-bounce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-bounce.component.html',
  styleUrl: './text-bounce.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBounceComponent {
  /** The text who will bounce */
  text = input.required<string>();

  /** Indicate when the text will bounce */
  bounceState = input<'always' | 'on-hover' | 'stop-on-hover'>('on-hover');
}
