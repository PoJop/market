import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';


export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variants: 'primary',
};
