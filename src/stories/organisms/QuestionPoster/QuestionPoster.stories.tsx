import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { QuestionPoster } from './QuestionPoster';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/QuestionPoster',
  component: QuestionPoster,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof QuestionPoster>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QuestionPoster> = (args) => <QuestionPoster {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    expanded: false,
    question: '',
    tags: [],
    duration: [0, 100],
    responsesToAccept: 0,
};
