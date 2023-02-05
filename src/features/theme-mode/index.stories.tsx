import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeMode } from './index';

export default {
  title: 'features/theme-mode',
  component: ThemeMode,
} as ComponentMeta<typeof ThemeMode>;

const Template: ComponentStory<typeof ThemeMode> = (args) => <ThemeMode {...args} />;

export const Primary = Template.bind({});
