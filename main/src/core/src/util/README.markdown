tips 

* the task.js holds one task in one process, 并且这个任务是原子性的， 这意味着如果这个任务因为中间的任何一个事物而中断，则对整个任务进行回滚(rollback).