import { h } from 'hyperapp';

type IncrementerProps = {
  onIncrement: (by: number) => void;
};

export default (props: IncrementerProps) =>
  <button onclick={() => props.onIncrement(1)}>[+]</button>;
