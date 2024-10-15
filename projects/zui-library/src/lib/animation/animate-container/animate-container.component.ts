import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * A wrapper who contain a container with animation relative to a theme
 */
@Component({
  selector: 'zui-animate-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animate-container.component.html',
  styleUrl: './animate-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimateContainerComponent {}
