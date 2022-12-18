import React, { HTMLProps } from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

type ILinkRouterProps = {
    type: 'link',
} & RouterLinkProps;

type IAnchorProps = {
    type?: 'anchor',
} & HTMLProps<HTMLAnchorElement>;

type LinkProps = ILinkRouterProps | IAnchorProps;

export const Link = ({ type = 'anchor', ...restProps }: LinkProps) => {
    if (type === 'link') {
        const props = restProps as ILinkRouterProps;
        return <RouterLink {...props}></RouterLink>;
    }
    const props = restProps as IAnchorProps;
    return <a {...props}></a>

};
