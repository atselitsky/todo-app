import { Link as LinkComponent } from '@/shared/ui/link';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export default {
    title: "ui-kit/Link",
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
    decorators: [(Story) => (<MemoryRouter>{Story()}</MemoryRouter>)], //Wrapping the story inside the router
    argTypes: {
        type: {
            required: true,
            description: `Specify type of link  
            1.link is for Router link  
            2.anchor is equal to html **a** tag `,
            table: {
                type: {
                    summary: `"link" | "anchor"`,
                },
                defaltValue: 'anchor',
            },
            control: 'select',
            options: ['link', 'anchor'],
        },
    },
} as ComponentMeta<typeof LinkComponent>

export const Link: ComponentStory<typeof LinkComponent> = (args) => <LinkComponent {...args} />

Link.args = {
    type: 'anchor',
    children: 'Link',
};;