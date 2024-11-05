## 1. Two Sum

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

---

### Example 1:

**Input:** `nums = [2,7,11,15]`, `target = 9`  
**Output:** `[0,1]`  
**Explanation:** Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

### Example 2:

**Input:** `nums = [3,2,4]`, `target = 6`  
**Output:** `[1,2]`

### Example 3:

**Input:** `nums = [3,3]`, `target = 6`  
**Output:** `[0,1]`

---

### Constraints:

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

---

### Follow-up:

Can you come up with an algorithm that is less than `O(n^2)` time complexity?

---

### 문제풀이

#### O(n^2) case

- 이중 for 문을 사용하여, `nums[i]`와 `nums[j]`의 합이 `target`과 동일한지 확인한다.
- 두 값의 합이 target과 동일하다면 [i, j]를 return 한다.

#### O(n) case

hash map과 `target` - `n1` = `n2` 식을 이용한 풀이.

nums = \[2,7,11,15\] , target = 9 인 case에서,

9 - 2 = 7이므로 7이 배열에 있는지 확인 된다면 해당 element의 index들을 반환해주면 된다.

하지만 7을 다시 `nums`배열 내에서 탐색하게 된다면 시간 복잡도가 늘어나니,

빈 hahsMap()을 만들고 for문 내에서 `n2`에 해당하는 값이 있는지 확인하고 ,

없다면 해당 값과 index를 hash map에 추가해주면 된다.
