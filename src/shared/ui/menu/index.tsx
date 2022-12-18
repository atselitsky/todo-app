import React from "react";
import { menu, menuColumn, menuRow, menuItem } from "./styles.module.css";

interface MenuItemProps {
  /**
* Item label
*/
  children: React.ReactNode | React.ReactNode[];
};
interface MenuProps {
  /**
 * Choose Menu Layout
 */
  mode?: 'row' | 'column';
  /**
* Add menu items
*/
  children: React.ReactElement<MenuItemProps> | Array<React.ReactElement<MenuItemProps>>;
};

export const MenuItem = ({ children }: MenuItemProps) => {
  return <span className={menuItem}>{children}</span>;
};

export const Menu = ({ mode = 'row', children }: MenuProps) => {
  return (
    <menu className={`${mode === 'row' ? menuRow : menuColumn} ${menu}`}>
      {children}
    </menu>
  );
};

Menu.Item = MenuItem;
