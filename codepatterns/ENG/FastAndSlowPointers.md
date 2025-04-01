# Fast and Slow (or Floyd’s Cycle Detection)

The Fast and Slow (or Floyd’s Cycle Detection) two-pointer technique is a clever way to solve problems related to cycles in linked lists or arrays. The idea is to use two pointers:

- Slow Pointer – Moves one step at a time.

- Fast Pointer – Moves two steps at a time.

How It Works:

- If there is a cycle, the fast pointer will eventually meet the slow pointer.
- If there is no cycle, the fast pointer will reach the end first.

Common Use Cases:

- Detecting a Cycle in a Linked List
- If the fast pointer catches up to the slow pointer, there is a cycle.

- If the fast pointer reaches the end (NULL), there is no cycle.

- Finding the Starting Node of a Cycle in a Linked List

- After detecting a cycle, reset one pointer to the head.

- Move both pointers one step at a time until they meet again—this is the cycle's start.

- Finding the Middle of a Linked List

- If the fast pointer moves two steps while the slow pointer moves one, when the fast pointer reaches the end, the slow pointer will be at the middle.

## Why Use Fast & Slow Pointers?

Efficient: Only requires
𝑂
(
𝑛
)
O(n) time and
𝑂
(
1
)
O(1) space.

Useful for cycle detection, middle element retrieval, and intersection problems.
