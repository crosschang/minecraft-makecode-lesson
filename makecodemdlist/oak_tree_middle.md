# 🌳 참나무 중급 

```template
let 랜덤숫자 = 0
```

## 시작하기 | Introduction @showdialog

이번 수업에서는 참나무를 만든 뒤, 나뭇잎 일부를 **랜덤으로 없애서** 더 자연스러운 나무를 만들어 봅니다.  
In this lesson, we will build oak trees and randomly remove some leaves to make the trees look more natural.

오늘 배울 내용 | What we will learn:

- 참나무 줄기 만들기 / Build an oak trunk
- 나뭇잎 채우기 / Fill leaves
- 랜덤 숫자 사용하기 / Use random numbers
- 조건문 사용하기 / Use if statements
- 나뭇잎을 공기로 바꾸기 / Replace leaves with air
- 벌집을 랜덤으로 추가하기 / Randomly add a bee nest
- 작은 나무, 중간 나무, 큰 나무 만들기 / Build small, medium, and tall trees

모든 단계에는 완성 힌트가 보입니다.  
Every step shows a complete block hint.

---

## Step 1. 랜덤 숫자 변수 만들기 | Make a Random Number Variable

먼저 랜덤 숫자를 저장할 변수를 만듭니다.  
First, create a variable to store a random number.

```blocks
let 랜덤숫자 = 0
```

### 확인하기 | Check

`랜덤숫자` 변수 블록이 보이나요?  
Can you see the `랜덤숫자` variable block?

---

## Step 2. 작은 참나무 줄기 만들기 | Build a Small Oak Trunk

채팅창에 `1`을 입력하면 작은 참나무 줄기가 만들어지게 합니다.  
When you type `1` in chat, a small oak trunk will be created.

줄기는 플레이어 옆 `x = 2` 위치에 만들어집니다.  
The trunk is built at `x = 2` next to the player.

```blocks
let 랜덤숫자 = 0
player.onChat("1", function () {
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 0, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 1, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 2, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 3, 0)
    ))
})
```

### 확인하기 | Check

채팅창에 `1`을 입력했을 때 원목 기둥이 생기나요?  
When you type `1`, does a log trunk appear?

---

## Step 3. 작은 참나무 잎 만들기 | Add Leaves to the Small Oak

이번에는 줄기 주변에 참나무 잎을 채웁니다.  
Now fill oak leaves around the trunk.

아래쪽 잎은 크게 만들고, 위쪽 잎은 작게 만듭니다.  
Make the lower leaves large and the upper leaves smaller.

```blocks
let 랜덤숫자 = 0
player.onChat("1", function () {
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 0, 0)
    ))
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(0, 1, -2)
    ),
    positions.add(
    player.position(),
    pos(4, 2, 2)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(1, 3, -1)
    ),
    positions.add(
    player.position(),
    pos(3, 3, 1)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(1, 4, 0)
    ),
    positions.add(
    player.position(),
    pos(3, 4, 0)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(2, 4, -1)
    ),
    positions.add(
    player.position(),
    pos(2, 4, 1)
    ),
    FillOperation.Replace
    )
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 1, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 2, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 3, 0)
    ))
})
```

### 확인하기 | Check

참나무 모양이 만들어지나요?  
Does it look like an oak tree?

---

## Step 4. 랜덤 숫자 뽑기 | Pick a Random Number

이제 랜덤 숫자를 사용해 봅니다.  
Now let's use a random number.

`randint(0, 1)`은 0 또는 1 중 하나를 랜덤으로 고릅니다.  
`randint(0, 1)` randomly chooses either 0 or 1.

```blocks
let 랜덤숫자 = 0
player.onChat("test", function () {
    랜덤숫자 = randint(0, 1)
    player.say(랜덤숫자)
})
```

### 확인하기 | Check

채팅창에 `test`를 여러 번 입력해 보세요.  
Type `test` in chat several times.

0과 1이 랜덤으로 나오나요?  
Do 0 and 1 appear randomly?

---

## Step 5. 조건문으로 나뭇잎 하나 없애기 | Remove One Leaf with an If Statement

랜덤 숫자가 0이면 나뭇잎 하나를 공기로 바꿉니다.  
If the random number is 0, one leaf changes into air.

공기는 블록을 지우는 것처럼 보입니다.  
Air looks like removing a block.

```blocks
let 랜덤숫자 = 0
player.onChat("1_1", function () {
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 1, -2)
        ))
    }
})
```

### 확인하기 | Check

`1_1`을 여러 번 입력했을 때 나뭇잎이 지워질 때도 있고, 안 지워질 때도 있나요?  
When you type `1_1` many times, is the leaf sometimes removed and sometimes not?

---

## Step 6. 나뭇잎 여러 개를 랜덤으로 없애기 | Randomly Remove Several Leaves

이번에는 나뭇잎 모서리 여러 곳을 랜덤으로 없앱니다.  
Now randomly remove several corner leaves.

같은 구조가 반복됩니다.  
The same pattern repeats:

1. 랜덤 숫자를 뽑습니다. / Pick a random number.
2. 숫자가 0인지 확인합니다. / Check if the number is 0.
3. 0이면 공기를 놓습니다. / If it is 0, place air.

```blocks
let 랜덤숫자 = 0
player.onChat("1_1", function () {
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 1, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 2, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 1, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 2, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 1, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 2, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 1, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 2, 2)
        ))
    }
})
```

### 확인하기 | Check

나뭇잎 모서리 모양이 매번 다르게 바뀌나요?  
Do the leaf corners change differently each time?

---

## Step 7. 벌집도 랜덤으로 추가하기 | Randomly Add a Bee Nest

나뭇잎뿐만 아니라 벌집도 랜덤으로 추가해 봅니다.  
Now randomly add a bee nest too.

랜덤 숫자가 0이면 줄기 옆에 벌집이 생깁니다.  
If the random number is 0, a bee nest appears next to the trunk.

```blocks
let 랜덤숫자 = 0
player.onChat("1_1", function () {
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(BEE_NEST, positions.add(
        player.position(),
        pos(2, 0, 1)
        ))
    }
})
```

### 확인하기 | Check

`1_1`을 여러 번 실행하면 벌집이 생길 때도 있고, 안 생길 때도 있나요?  
When you run `1_1` several times, does a bee nest sometimes appear and sometimes not?

---

## Step 8. 작은 랜덤 참나무 완성하기 | Complete the Small Random Oak

이제 작은 참나무를 만들고, 바로 랜덤 꾸미기 명령을 실행합니다.  
Now build the small oak tree and immediately run the random decoration command.

`player.runChatCommand("1_1")`은 채팅 명령어 `1_1`을 자동으로 실행합니다.  
`player.runChatCommand("1_1")` automatically runs the chat command `1_1`.

```blocks
let 랜덤숫자 = 0
player.onChat("1", function () {
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 0, 0)
    ))
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(0, 1, -2)
    ),
    positions.add(
    player.position(),
    pos(4, 2, 2)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(1, 3, -1)
    ),
    positions.add(
    player.position(),
    pos(3, 3, 1)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(1, 4, 0)
    ),
    positions.add(
    player.position(),
    pos(3, 4, 0)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(2, 4, -1)
    ),
    positions.add(
    player.position(),
    pos(2, 4, 1)
    ),
    FillOperation.Replace
    )
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 1, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 2, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 3, 0)
    ))
    player.runChatCommand("1_1")
})
player.onChat("1_1", function () {
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 1, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 2, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 1, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 2, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 1, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 2, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 1, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 2, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(BEE_NEST, positions.add(
        player.position(),
        pos(2, 0, 1)
        ))
    }
})
```

### 확인하기 | Check

`1`만 입력해도 랜덤 나뭇잎과 벌집이 적용되나요?  
When you type only `1`, are the random leaves and bee nest applied?

---

## Step 9. 중간 크기 랜덤 참나무 만들기 | Build a Medium Random Oak

이번에는 채팅창에 `2`를 입력하면 중간 크기 참나무가 만들어집니다.  
This time, type `2` in chat to build a medium oak tree.

작은 참나무보다 줄기와 나뭇잎이 한 칸 더 높습니다.  
The trunk and leaves are one block higher than the small tree.

```blocks
let 랜덤숫자 = 0
player.onChat("2", function () {
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 0, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 1, 0)
    ))
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(0, 2, -2)
    ),
    positions.add(
    player.position(),
    pos(4, 3, 2)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(1, 4, -1)
    ),
    positions.add(
    player.position(),
    pos(3, 4, 1)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(1, 5, 0)
    ),
    positions.add(
    player.position(),
    pos(3, 5, 0)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(2, 5, -1)
    ),
    positions.add(
    player.position(),
    pos(2, 5, 1)
    ),
    FillOperation.Replace
    )
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 2, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 3, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 4, 0)
    ))
    player.runChatCommand("2_1")
})
player.onChat("2_1", function () {
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 2, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 3, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 2, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 3, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 2, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 3, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 2, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 3, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(BEE_NEST, positions.add(
        player.position(),
        pos(2, 1, 1)
        ))
    }
})
```

### 확인하기 | Check

`2`를 입력했을 때 작은 나무보다 더 큰 나무가 만들어지나요?  
When you type `2`, is the tree taller than the small tree?

---

## Step 10. 큰 랜덤 참나무 만들기 | Build a Tall Random Oak

마지막으로 채팅창에 `3`을 입력하면 큰 참나무가 만들어집니다.  
Finally, type `3` in chat to build a tall oak tree.

나무가 가장 크고, 벌집 위치도 더 높습니다.  
This tree is the tallest, and the bee nest position is higher.

```blocks
let 랜덤숫자 = 0
player.onChat("3", function () {
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 0, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 1, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 2, 0)
    ))
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(0, 3, -2)
    ),
    positions.add(
    player.position(),
    pos(4, 4, 2)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(1, 5, -1)
    ),
    positions.add(
    player.position(),
    pos(3, 5, 1)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(1, 6, 0)
    ),
    positions.add(
    player.position(),
    pos(3, 6, 0)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    LEAVES_OAK,
    positions.add(
    player.position(),
    pos(2, 6, -1)
    ),
    positions.add(
    player.position(),
    pos(2, 6, 1)
    ),
    FillOperation.Replace
    )
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 3, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 4, 0)
    ))
    blocks.place(LOG_OAK, positions.add(
    player.position(),
    pos(2, 5, 0)
    ))
    player.runChatCommand("3_1")
})
player.onChat("3_1", function () {
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 3, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 4, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 3, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(0, 4, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 3, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 4, -2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 3, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(AIR, positions.add(
        player.position(),
        pos(4, 4, 2)
        ))
    }
    랜덤숫자 = randint(0, 1)
    if (랜덤숫자 == 0) {
        blocks.place(BEE_NEST, positions.add(
        player.position(),
        pos(2, 2, 1)
        ))
    }
})
```

### 미션 완료 | Mission Complete

축하합니다!  
Congratulations!

이제 여러분은 랜덤과 조건문을 사용해서 매번 조금씩 다른 참나무를 만들 수 있습니다.  
Now you can use random numbers and if statements to create oak trees that look a little different every time.
