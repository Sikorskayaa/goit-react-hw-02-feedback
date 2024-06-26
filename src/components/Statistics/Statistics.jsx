import { List, Item } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <List>
      <Item>Good:{good}</Item>
      <Item>Neutral:{neutral}</Item>
      <Item>Bad:{bad}</Item>
      <Item>Total:{total}</Item>
      <Item>Positive Feedback:{positive}%</Item>
    </List>
  );
};