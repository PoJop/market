import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrimaryLink } from './index';

export default {
  title: 'ui-kit/links/primary-link',
  component: PrimaryLink,
} as ComponentMeta<typeof PrimaryLink>;

const Template: ComponentStory<typeof PrimaryLink> = (args) => <PrimaryLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "text",
  href: "/"
};
Primary.parameters = {
  nextRouter: {
    path: "/",
    asPath: "/",
  },
};