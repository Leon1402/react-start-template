import type { Meta } from '@storybook/react';
import '../index.css';
import { OperationList } from '../components/cardInfo/OperationList';
import { TProduct, createRandomProduct } from '../homeworks/ts1/3_write';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof OperationList> = {
  title: 'Example/OperationList',
  component: OperationList,
  tags: ['autodocs'],
  argTypes: {
    operations: { defaultValue: [] },
    addOperations: { type: 'function' },
  },
};

export default meta;

const nowDate = new Date(0);

const addOperationsToList = (count = 5, list: TProduct[] = []): TProduct[] => {
  console.log('here');

  return [
    ...list,
    ...Array.from({ length: count }).map(() =>
      createRandomProduct(`${nowDate.getDate()}-${nowDate.getMonth()}-${nowDate.getFullYear()}`)
    ),
  ];
};

let operations = addOperationsToList();

const addOperations = (count: number) => {
  operations = addOperationsToList(count, operations);
};

export const OperationListDefault = {
  args: {
    operations: operations,
    addOperations: () => addOperations(5),
  },
};
