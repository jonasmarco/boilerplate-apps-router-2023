import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'Components/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'Another Title',
    description: 'Another Description'
  }
}
