import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { filterkey, filteredTodos } from "./store/atoms/todos";

function App() {
  return (
    <>
      <RecoilRoot>
        <Filterer />
        <Todos />
      </RecoilRoot>
    </>
  );
}

// Show filtered todos
function Todos() {
  const todoList = useRecoilValue(filteredTodos); // ✔ fixed name

  return (
    <div>
      {todoList.map((t) => (
        <div key={t.id}>
          {t.title} — {t.completed ? "Done" : "Pending"}
        </div>
      ))}
    </div>
  );
}

// Filter input
function Filterer() {
  const setFilter = useSetRecoilState(filterkey);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Todo"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default App;
