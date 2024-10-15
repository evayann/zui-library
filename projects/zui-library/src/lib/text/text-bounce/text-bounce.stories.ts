import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TextBounceComponent } from './text-bounce.component';

const cssPropsDefinition = {
  'pause-between-bounce': {
    value: '1s',
    description: 'Optional description',
  },
  'delay-between-character': {
    value: '300ms',
    description: 'Optional description',
  },
  'character-offset': {
    value: '-5%',
    description: 'Optional description',
  },
};

const meta: Meta<TextBounceComponent> = {
  title: 'Text/Bounce',
  component: TextBounceComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  parameters: {
    cssprops: cssPropsDefinition,
  },
  args: {
    text: 'Amazing text',
    bounceState: 'always',
  },
  argTypes: {
    bounceState: {
      control: 'select',
    },
  },
};

export default meta;

type Story = StoryObj<TextBounceComponent>;

export const Default: Story = {};
