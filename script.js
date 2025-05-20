function mincost(arr) {
  if (arr.length <= 1) return 0;

  const heap = [...arr];
  heap.sort((a, b) => a - b); 

  let totalCost = 0;

  while (heap.length > 1) {
    const first = heap.shift();
    const second = heap.shift();

    const cost = first + second;
    totalCost += cost;

    heap.push(cost);
    heap.sort((a, b) => a - b);
  }

  return totalCost;
}

module.exports = mincost;