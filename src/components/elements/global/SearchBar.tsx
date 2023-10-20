import { Icon } from '@iconify/react';
import { Center, TextInput, TextInputProps } from '@mantine/core';
import * as React from 'react';

export interface ISerachBar extends TextInputProps {
  onSearch?: () => void;
}

const SearchBar: React.FC<ISerachBar> = ({
  placeholder,
  value,
  onChange,
  onSearch,
  ...rest
}) => {
  return (
    <TextInput
      radius="xl"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && onSearch) {
          onSearch();
        }
      }}
      icon={
        <Center>
          <Icon icon="tabler:search" fontSize={20} />
        </Center>
      }
      // rightSection={
      //   <Button
      //     onClick={onSearch}
      //     fz={12}
      //     fw={400}
      //     sx={{
      //       borderRadius: '0px 100px 100px 0px',
      //       position: 'absolute',
      //       right: 0,
      //     }}
      //   >
      //     Cari
      //   </Button>
      // }
      styles={(theme) => ({
        input: {
          backgroundColor: theme.white,
          '::placeholder': {
            fontWeight: 400,
            fontSize: 14,
            color: theme.colors.dark[3],
          },
        },
        icon: {
          color: theme.colors.dark[6],
        },
      })}
      {...rest}
    />
  );
};

export default SearchBar;
