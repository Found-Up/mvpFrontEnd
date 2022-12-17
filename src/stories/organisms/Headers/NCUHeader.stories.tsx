import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NCUHeader } from './NCUHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/NCUHeader',
  component: NCUHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NCUHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NCUHeader> = (args) => <NCUHeader {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  links: ['Home', 'Messages', 'Profile', 'Notifications'],
};
