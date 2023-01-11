import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MessageFeedItem } from './MessageFeedItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/MessageFeedItem',
  component: MessageFeedItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MessageFeedItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MessageFeedItem> = (args) => <MessageFeedItem {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    recieverName: 'Company Name',
    date: 'Jan 3',
    message: 'Lorem ipsum dolor sit amet, consecte...',
    imgSrc: 'https://via.placeholder.com/75',
    bookMarked: false,
};
