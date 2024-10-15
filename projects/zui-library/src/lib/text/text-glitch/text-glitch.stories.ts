import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TextGlitchComponent } from './text-glitch.component';

const cssPropsDefinition = {
  'glitch-color-1': {
    value: 'red',
    description: 'Optional description',
  },
  'glitch-color-2': {
    value: 'blue',
    description: 'Optional description',
  },
};

const meta: Meta<TextGlitchComponent> = {
  title: 'Text/Glitch',
  component: TextGlitchComponent,
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
    // bounceState: 'always',
  },
  argTypes: {
    // bounceState: {
    //   control: 'select',
    // },
  },
};

export default meta;

type Story = StoryObj<TextGlitchComponent>;

export const Default: Story = {};
