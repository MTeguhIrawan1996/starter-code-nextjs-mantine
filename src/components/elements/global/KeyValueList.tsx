import { Flex, Grid, Text, TextProps } from '@mantine/core';
import * as React from 'react';

interface IGridTypeProps {
  type: 'grid';
  keySpan?: number;
  valueSpan?: number;
}
interface IFlexTypeProps {
  type: 'flex';
  label: string;
}
interface IKeyValueItemProps {
  dataKey: string;
  value: string;
  keyStyleText?: TextProps;
  valueStyleText?: TextProps;
}

type IKeyValueListProps = {
  data: Pick<IKeyValueItemProps, 'dataKey' | 'value'>[];
} & Pick<IKeyValueItemProps, 'keyStyleText' | 'valueStyleText'> &
  (IGridTypeProps | IFlexTypeProps);

const GridItem: React.FC<IKeyValueItemProps & IGridTypeProps> = (props) => (
  <Grid w="100%" align="center">
    <Grid.Col span={props.keySpan ?? 6}>
      <Text span fw={400} fz={18} color="dark.3" {...props.keyStyleText}>
        {props.dataKey}
      </Text>
    </Grid.Col>
    <Grid.Col span={props.valueSpan ?? 6}>
      <Text span fw={400} fz={18} color="dark.5" {...props.valueStyleText}>
        : {props.value}
      </Text>
    </Grid.Col>
  </Grid>
);

const FlexItem: React.FC<IKeyValueItemProps & IFlexTypeProps> = (props) => (
  <Flex gap="xs">
    <Text span fw={400} fz={18} color="dark.3" {...props.keyStyleText}>
      {props.dataKey}
    </Text>
    <Text span fw={400} fz={18} color="dark.5" {...props.valueStyleText}>
      : {props.value}
    </Text>
  </Flex>
);

const KeyValueList: React.FC<IKeyValueListProps> = ({ data, ...props }) => {
  return (
    <>
      {props.type === 'grid' &&
        data.map((item, i) => <GridItem key={i} {...item} {...props} />)}
      {props.type === 'flex' &&
        data.map((item, i) => <FlexItem key={i} {...item} {...props} />)}
    </>
  );
};

export default KeyValueList;
