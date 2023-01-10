import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SRUMessagePortal } from './SRUMessagePortal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SRU Pages/SRUMessagePortal',
  component: SRUMessagePortal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SRUMessagePortal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SRUMessagePortal> = (args) => <SRUMessagePortal {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  user: 'devTest',
  messages: ['example'],
};
