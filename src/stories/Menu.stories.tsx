import React from 'react';
import { Menu } from '@/shared/ui/menu';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const { Item } = Menu;

export default {
    title: 'ui-kit/Menu',
    component: Menu,
    argTypes: {
        children: {
            table: {
                type: {
                    summary: '<Menu.Item> | <Menu.Item>[]',
                    detail: 'React.ReactElement<MenuItemProps> | Array<React.ReactElement<MenuItemProps>>',
                },
            },
            options: ['1 item', '2 items', '3 items'],
            mapping: {
                '1 item': (<Item>Item one</Item>),
                '2 items': (
                    <>
                        <Item>Item one</Item>
                        <Item>Item two</Item>
                    </>
                ),
                '3 items': (
                    <>
                        <Item>Item one</Item>
                        <Item>Item two</Item>
                        <Item>Item three</Item>
                    </>
                ),
            },
            control: {
                type: 'select', // Type 'select' is automatically inferred when 'options' is defined
                labels: {
                    // 'labels' maps option values to string labels
                    '1 item': '1 item',
                    '2 item': '2 item',
                    '3 item': '1 item',
                },
            },
        },
    }
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu  {...args} />;

export const Row = Template.bind({});
Row.args = {
    mode: 'row',
    children: '1 item',
};

export const Column = Template.bind({});
Column.args = {
    mode: 'column',
    children: '1 item',
};


