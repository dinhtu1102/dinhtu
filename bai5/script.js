const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: [],
};

function bfs(start, end) {
  const queue = [start];
  const visited = new Set();
  const path = [];

  while (queue.length) {
      const current = queue.shift();
      visited.add(current);

      if (current === end) {
          return path.concat(current);
      }

      for (const neighbor of graph[current]) {
          if (!visited.has(neighbor)) {
              queue.push(neighbor);
              path.push(current);
          }
      }
  }

  return null;
}

const resultElement = document.getElementById("result");

const path = bfs("A", "E");

if (path) {
  resultElement.textContent = path.join(" -> ");
} else {
  resultElement.textContent = "Không tìm thấy đường đi";
}