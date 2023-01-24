import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SectionHeader } from './SectionHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SectionHeader',
  component: SectionHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SectionHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SectionHeader> = (args) => <SectionHeader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'SectionLabel',
};
