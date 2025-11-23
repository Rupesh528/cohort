// store/atoms/todos.js
import { atom, selector } from "recoil";

export const todos = atom({
  key: "todos",
  default: [
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Finish Assignment",
      completed: true,
    },
    {
      id: 3,
      title: "Practice DSA",
      completed: false,
    },
  ],
});

// Atom to store search/filter text
export const filterkey = atom({
  key: "filterkey",
  default: "",
});

// Selector to return filtered todos
export const filteredTodos = selector({
  key: "filteredTodos",
  get: ({ get }) => {
    // Read todos
    const list = get(todos);

    // Read search/filter text
    const keyword = get(filterkey).toLowerCase();

    // Return filtered results
    return list.filter((t) =>
      t.title.toLowerCase().includes(keyword)
    );
  },
});
 