# Grokking Algorithms
## Binary Search 
```typescript
function binarySearch(list: Array<number>, item: number): number | null;
function binarySearch(list: Array<string>, item: string): number | null {
    let low = 0;
    let high = list.length -1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        if (guess === item) {
           return mid;
        }

        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}

const test1 = [0,1,2,3,4,5,6]

const test2 = ['Alice', 'Barry', 'Daryna', 'Fred', 'Karen', 'Shams'];

console.log(binarySearch(test2, 'Fred'));

```

simple search - (100 items, 100 guesses) Linear Time: O(n)

binary search -  (100 items, 7 guesses) Log time O(log n)

## Big O 
Tells you how fast an algorithm is.

Runs time grow at very different speeds.
