import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EduCard } from './EduCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/EduCard',
  component: EduCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EduCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EduCard> = (args) => <EduCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    major : 'Computer Engineering',
    school : 'Texas A&M University',
    date : '2018 - 2022'
};
