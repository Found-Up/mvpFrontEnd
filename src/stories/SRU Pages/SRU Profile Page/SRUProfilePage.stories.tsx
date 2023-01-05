import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SRUProfilePage } from './SRUProfilePage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SRU Pages/SRUProfilePage',
  component: SRUProfilePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SRUProfilePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SRUProfilePage> = (args) => <SRUProfilePage {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'SRUProfilePage',
};
