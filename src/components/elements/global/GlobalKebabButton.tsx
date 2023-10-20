import { ActionIcon, Center, Menu, MenuItemProps } from '@mantine/core';
import { IconDotsVertical } from '@tabler/icons-react';
import * as React from 'react';

interface IGlobalKebabButtonProps {
  actionRead?: MenuItemProps & React.ComponentPropsWithoutRef<'button'>;
  actionDelete?: MenuItemProps & React.ComponentPropsWithoutRef<'button'>;
  actionUpdate?: MenuItemProps & React.ComponentPropsWithoutRef<'button'>;
}

const GlobalKebabButton: React.FC<IGlobalKebabButtonProps> = ({
  actionRead,
  actionDelete,
  actionUpdate,
}) => {
  return (
    <Center>
      <Menu shadow="md" width={150} position="left">
        <Menu.Target>
          <ActionIcon
            radius={4}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <IconDotsVertical size="1.125rem" />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          {actionRead ? <Menu.Item {...actionRead}>Lihat</Menu.Item> : null}
          {actionDelete ? <Menu.Item {...actionDelete}>Hapus</Menu.Item> : null}
          {actionUpdate ? <Menu.Item {...actionUpdate}>Ubah</Menu.Item> : null}
        </Menu.Dropdown>
      </Menu>
    </Center>
  );
};

export default GlobalKebabButton;
