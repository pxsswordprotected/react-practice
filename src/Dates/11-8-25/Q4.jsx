function App() {
  const [items, setItems] = useState([]);
      const [filter, setFilter] = useState("");

  return (
    <div>
      <AddItemForm onAdd={(item) => setItems([...items, item])} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <ItemList items={items} filter={filter} />
    </div>
  );
}
