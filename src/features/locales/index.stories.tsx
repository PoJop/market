import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Locales } from './index';

export default {
  title: 'features/locales',
  component: Locales,
} as ComponentMeta<typeof Locales>;

const Template: ComponentStory<typeof Locales> = (args) => <Locales {...args} />;

export const Primary = Template.bind({});

Primary.parameters = {
};