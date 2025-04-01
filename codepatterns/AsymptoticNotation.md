# Asymptotic Notation - Big O, Theta, and Omega

Welcome to the **Asymptotic Notation Guide!** 🚀 This document explains **Big O, Theta (Θ), and Omega (Ω) Notations**, their significance in algorithm analysis, and provides practical examples.

## 📌 What is Asymptotic Notation?

Asymptotic notation is used to describe the efficiency of algorithms in terms of **time complexity** and **space complexity** as input size **n** grows.

## ⏳ Common Asymptotic Notations

| Notation            | Meaning     | Definition                                                    |
| ------------------- | ----------- | ------------------------------------------------------------- |
| **O(f(n)) (Big O)** | Upper Bound | Worst-case complexity: Algorithm takes at most `f(n)` time.   |
| **Θ(f(n)) (Theta)** | Tight Bound | Average-case complexity: Algorithm runs in exact `f(n)` time. |
| **Ω(f(n)) (Omega)** | Lower Bound | Best-case complexity: Algorithm takes at least `f(n)` time.   |

## 📊 Complexity Classes & Examples

| Complexity   | Notation     | Example                                                        |
| ------------ | ------------ | -------------------------------------------------------------- |
| Constant     | `O(1)`       | Accessing an array element `arr[i]`                            |
| Logarithmic  | `O(log n)`   | Binary search                                                  |
| Linear       | `O(n)`       | Looping through an array                                       |
| Linearithmic | `O(n log n)` | Merge Sort, Quick Sort (average case)                          |
| Quadratic    | `O(n²)`      | Nested loops (e.g., Bubble Sort)                               |
| Exponential  | `O(2ⁿ)`      | Recursion-heavy problems (e.g., Fibonacci without memoization) |

## 📖 Resources

- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- [GeeksforGeeks - Asymptotic Notation](https://www.geeksforgeeks.org/asymptotic-notations/)
- [Khan Academy - Algorithm Complexity](https://www.khanacademy.org/computing/computer-science/algorithms)

---

🚀 **Master algorithm efficiency with Asymptotic Notation!**
