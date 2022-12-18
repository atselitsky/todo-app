import { PATHS } from "@/app/config";
import { Link } from "@/shared/ui/link";
import { Menu } from "@/shared/ui/menu";

// FIXME: Pass paths instead of import
export const Sidebar = () => {
  return (
    <div>
      <Menu mode="column">
        {PATHS.map(({ name, path, icon }) => {
          return (
            <Menu.Item key={path}>
              {icon}
              <Link type="link" to={path}>
                {name}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};
