import React from 'react';
import { Menu } from '@/shared/ui/menu';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const { Item } = Menu;

export default {
    title: 'ui-kit/Menu/Menu Item',
    component: Item,
    argTypes: {

    }
} as ComponentMeta<typeof Menu>;

export const MenuItem: ComponentStory<typeof Item> = (args) => <Item  {...args} />;
MenuItem.args = {
    children: 'menu item',
}
