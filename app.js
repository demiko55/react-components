// TODO
const { useState } = React;

const ListItem = (props) => {
  const [changeStyle, setChangeStyle] = useState(false);
  const style = {
    'font-weight': changeStyle? 'bold' : 'none',
  };
  return (
    <li style = {style}
    onMouseEnter={() => {
      setChangeStyle(true)}
    }
    onMouseLeave={() => {
      setChangeStyle(false)}
    }>
      {props.singleList}
    </li>
  );
};
const GroceryListItem = (props) => (
  <ul>
    {props.listItems.map((list) => (
      <ListItem singleList={list} />
    ))}
  </ul>
);
const GroceryList = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryListItem listItems = {['apple', 'orange']} />
  </div>

);
ReactDOM.render(<GroceryList />, document.getElementById("app"));
