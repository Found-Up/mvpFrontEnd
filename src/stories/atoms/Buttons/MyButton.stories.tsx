import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyButton } from './MyButton';

export default {
  title: 'atoms/MyButton',
  component: MyButton,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'MyButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'MyButton',
};

export const Round = Template.bind({});
Round.args = {
  label: 'MyButton',
  shape: 'round',
};
