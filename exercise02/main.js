let queue = [];

function enqueue(item) {
  queue.push(item);
}

function dequeue() {
  if (queue.length === 0) {
    return "Queue is empty";
  }
  return queue.shift();
}

function isEmpty() {
  return queue.length === 0;
}

function peek() {
  if (queue.length === 0) {
    return "Queue is empty";
  }
  return queue[0];
}

function size() {
  return queue.length;
}

console.log("Initial Queue:", queue);

enqueue(1);
enqueue(2);
enqueue(3);
console.log("Queue after enqueue:", queue);

console.log("Dequeued item:", dequeue());
console.log("Queue after dequeue:", queue);

enqueue(4);
console.log("Queue after enqueue:", queue);
