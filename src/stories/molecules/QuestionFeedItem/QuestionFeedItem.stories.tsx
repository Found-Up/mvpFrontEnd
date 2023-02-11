import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { QuestionFeedItem } from './QuestionFeedItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/QuestionFeedItem',
  component: QuestionFeedItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof QuestionFeedItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QuestionFeedItem> = (args) => <QuestionFeedItem {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    status: 'active',
    timeRemaining: '2 hours',
    bookmarked: false,
    question: 'Why is the sky blue?',
    responses: 10,
    unread: 10,
    starred: 2,
    repeats: 2,
    open: false,
};
