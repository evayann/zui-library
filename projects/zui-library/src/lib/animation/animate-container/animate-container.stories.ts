import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { AnimateContainerComponent } from './animate-container.component';
import { noBorder } from '../../../stories/addons/no-border';

const meta: Meta<AnimateContainerComponent> = {
  title: 'Background/Animate',
  component: AnimateContainerComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    noBorder,
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  render: (args: AnimateContainerComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    todoContent: {
      control: 'text',
    },
    showDeleteButton: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<AnimateContainerComponent>;

export const Default: Story = {
  args: {
    todoContent: 'My First Todo',
    showDeleteButton: false,
  },
};
