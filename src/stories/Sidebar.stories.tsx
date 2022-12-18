import React from 'react';
import { Sidebar as SidebarComponent } from '@/widgets/sidebar';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';


export default {
    title: 'widgets/Sidebar',
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
    decorators: [(Story) => (<MemoryRouter>{Story()}</MemoryRouter>)],
} as ComponentMeta<typeof SidebarComponent>;

export const Sidebar: ComponentStory<typeof SidebarComponent> = (args) => <SidebarComponent />