# Reverse String Algorithm - Flowchart

## Two Pointer Approach

```mermaid
graph TD
    A["🟢 Start<br/>Input: arr"] --> B["Initialize<br/>x = arr.length - 1<br/>i = 0<br/>temp = ''"]
    B --> C{"i < Math.floor<br/>arr.length / 2?"}
    C -->|Yes| D["temp = arr[i]"]
    D --> E["arr[i] = arr[x]"]
    E --> F["arr[x] = temp"]
    F --> G["x = x - 1"]
    G --> H["i = i + 1"]
    H --> C
    C -->|No| I["Return reversed arr"]
    I --> J["🔴 End"]
```

## Algorithm Steps:

1. **Initialize Pointers**:
   - `i = 0` (pointer at start)
   - `x = arr.length - 1` (pointer at end)
   - `temp = ''` (temporary variable for swap)

2. **Loop Condition**: Iterate only till middle of array
   - `i < Math.floor(arr.length / 2)`

3. **Swap Elements**:
   - Store `arr[i]` in `temp`
   - Move `arr[x]` to `arr[i]`
   - Move `temp` (original `arr[i]`) to `arr[x]`

4. **Move Pointers**:
   - Decrement `x` by 1
   - Increment `i` by 1

5. **Return**: Reversed array

## Example:
- Input: `['a', 'k', 's', 'h', 'a', 'y']`
- Output: `['y', 'a', 'h', 's', 'k', 'a']`

## Complexity:
- **Time**: O(n/2) = O(n) - Only iterate till middle
- **Space**: O(1) - In-place algorithm, only temp variable used
