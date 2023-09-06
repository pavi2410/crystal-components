import type { Meta, StoryObj } from 'storybook-solidjs';

import { Button } from '../components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: "Primary UI component for user interaction",
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['filled', 'outline', 'flat', 'ghost'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
    },
    radius: {
      control: { type: 'inline-radio' },
      options: ['square', 'rounded', 'circular'],
    },
    children: {},
    onClick: { action: 'clicked' }
  },
  args: {
    variant: 'filled',
    size: 'medium',
    radius: 'rounded',
    children: 'Button',
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    size: 'medium',
    radius: 'rounded',
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    children: 'Button',
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Square: Story = {
  args: {
    radius: 'square',
    children: 'Button',
  },
};

export const Rounded: Story = {
  args: {
    radius: 'rounded',
    children: 'Button',
  },
};

export const Circular: Story = {
  args: {
    radius: 'circular',
    children: 'Button',
  },
};
