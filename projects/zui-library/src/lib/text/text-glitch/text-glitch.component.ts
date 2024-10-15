import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'zui-text-glitch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-glitch.component.html',
  styleUrl: './text-glitch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.data-text]': 'text()',
    '[style.background-color]': 'backgroundColor()',
  },
})
export class TextGlitchComponent {
  /** The text who will glitch */
  text = input.required<string>();

  /** Indicate when the text will glitch */
  bounceState = input<'always' | 'on-hover' | 'stop-on-hover'>('on-hover');

  /** Color of the background of glitch effect. Required for a nice glitching effect */
  backgroundColor = input<string>('var(--background, white)');
}
