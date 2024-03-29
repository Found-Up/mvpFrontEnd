import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExpCard } from './ExpCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/ExpCard',
  component: ExpCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ExpCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExpCard> = (args) => <ExpCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    role : 'Software Engineer',
    company : 'FoundUp',
    date : 'Jan 2021 - Current'
};
