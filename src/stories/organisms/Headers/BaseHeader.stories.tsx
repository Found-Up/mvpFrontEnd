import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BaseHeader } from './BaseHeader';

export default {
  title: 'Organisms/Base Header',
  component: BaseHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BaseHeader>;

const Template: ComponentStory<typeof BaseHeader> = (args) => <BaseHeader {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  links: ['Home', 'Features', 'Process', 'Discover', 'Feedback']
};