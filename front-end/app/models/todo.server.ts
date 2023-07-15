export type Todos = {
  id?: number;
  newId: string;
  todos: string;
};

export async function getTodos(): Promise<Array<Todos>> {
  const defaultset = { id: 0, newId: "default", todos: "default set" };
  return [defaultset];
}
export async function deleteTodos(id: number): Promise<number[]> {
  return [id];
}
export async function testTodos() {
  const res = await fetch("http://localhost:8000/api/test", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Add this line to parse the response body as JSON
  const data = await res.json();

  return data;
}

// export async function setTodos(): Promise<Array<string>> {

// }
