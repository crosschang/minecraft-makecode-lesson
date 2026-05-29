# 🌳 참나무 만들기 초급 | Build an Oak Tree: Beginner

```template
player.onChat("1", function () {
})
```

## 시작하기 | Introduction @showdialog

채팅창에 **`1`** 을 입력하면 참나무가 나타나는 블록 코딩을 만들어 봅시다!  
Let's create block code that builds an oak tree when you type **`1`** in chat!

오늘 사용할 블록 | Blocks we will use:

- **채팅 명령어 실행** / On chat command
- **블록 놓기** / Place block
- **영역 채우기** / Fill an area
- **플레이어 기준 위치** / Position relative to the player

나무가 만들어질 넓은 빈 공간에 서서 시작하세요.  
Stand in a wide empty space before you begin.

---

## Step 1. 나무 심기 시작 | Start Planting

먼저 채팅창에 `1`을 입력하면 참나무 원목 1개가 놓이게 만들어 봅시다.  
First, make one oak log appear when you type `1` in chat.

원목은 플레이어 위치에서 옆으로 2칸 떨어진 곳에 놓입니다.  
The log will be placed 2 blocks to the side of the player.

```blocks
player.onChat("1", function () {
    blocks.place(LOG_OAK, positions.add(
        player.position(),
        pos(2, 0, 0)
    ))
})
```

### 실행해 보기 | Test It

게임 화면에서 채팅창에 `1`을 입력하세요.  
In the game, type `1` in chat.

원목 1개가 보이면 성공입니다!  
You succeed when you see one oak log!

---

## Step 2. 줄기 쌓기 | Build the Trunk

나무 줄기가 높아지도록 원목을 위로 쌓아 봅시다.  
Stack oak logs upward to make the tree trunk taller.

`y` 숫자가 커지면 블록이 위로 올라갑니다.  
A bigger `y` number places the block higher.

```blocks
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
    blocks.place(LOG_OAK, positions.add(
        player.position(),
        pos(2, 4, 0)
    ))
})
```

### 확인하기 | Check

채팅창에 `1`을 입력했을 때 **원목 5개 높이의 줄기**가 생기나요?  
When you type `1`, do you see a trunk that is **5 logs tall**?

---

## Step 3. 큰 나뭇잎 만들기 | Add the Big Leaves

이번에는 줄기 주변을 나뭇잎으로 채웁니다.  
Now fill the area around the trunk with leaves.

**영역 채우기** 블록은 시작 위치부터 끝 위치까지 한 번에 블록을 채웁니다.  
The **fill** block fills every block between a start position and an end position.

```blocks
player.onChat("1", function () {
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
})
```

### 관찰하기 | Observe

나뭇잎을 채운 다음 원목을 다시 놓는 이유는 무엇일까요?  
Why do we place some logs again after filling the leaves?

> 나뭇잎이 줄기 자리를 덮을 수 있기 때문에, 줄기가 보이도록 원목을 다시 놓습니다.  
> Leaves can cover the trunk, so we place the logs again to keep the trunk visible.

---

## Step 4. 위쪽 나뭇잎 설계하기 | Design the Upper Leaves

이제 아래쪽보다 작은 나뭇잎 층을 더해 나무 모양을 완성해 봅시다.  
Now add smaller upper layers of leaves to complete the tree shape.

이번 단계부터는 표를 보고 직접 **영역 채우기** 블록을 추가하세요.  
From this step, use the table to add the **fill** blocks yourself.

| 추가할 부분 / Part | 블록 / Block | 시작 위치 / From | 끝 위치 / To |
|---|---|---|---|
| 위쪽 잎 / Upper leaves | 참나무 잎 / Oak Leaves | `(1, 4, -1)` | `(3, 4, 1)` |
| 꼭대기 가로 잎 / Top horizontal leaves | 참나무 잎 / Oak Leaves | `(1, 5, 0)` | `(3, 5, 0)` |
| 꼭대기 세로 잎 / Top vertical leaves | 참나무 잎 / Oak Leaves | `(2, 5, -1)` | `(2, 5, 1)` |

사용할 수 있는 블록 | Blocks you may use:

```ghost
blocks.fill(
    LEAVES_OAK,
    positions.add(
        player.position(),
        pos(0, 0, 0)
    ),
    positions.add(
        player.position(),
        pos(0, 0, 0)
    ),
    FillOperation.Replace
)
```

### 꼭대기 모양 | Shape of the Top

위에서 보면 꼭대기 나뭇잎은 십자 모양입니다.  
From above, the top leaves make a cross shape.

```text
    🍃
  🍃🍃🍃
    🍃
```

---

## Step 5. 나무 테스트하기 | Test Your Tree

이제 게임으로 돌아가 채팅창에 `1`을 입력하세요.  
Now return to the game and type `1` in chat.

### 성공 체크 | Success Checklist

- [ ] 참나무 줄기가 5칸 높이인가요? / Is the oak trunk 5 blocks tall?
- [ ] 아래쪽 잎이 크고 풍성한가요? / Are the lower leaves large and full?
- [ ] 위쪽 잎이 더 작게 올라가나요? / Are the upper leaves smaller?
- [ ] 꼭대기가 십자 모양인가요? / Is the top shaped like a cross?

문제가 있다면 좌표를 다시 확인하세요.  
Check your positions again when something does not look right.

---

## Step 6. 나만의 참나무 만들기 | Create Your Own Oak Tree

기본 나무가 완성되었다면, 이제 한 가지를 바꾸어 나만의 나무를 만들어 보세요.  
After finishing the basic tree, change one feature to create your own tree.

### 선택 미션 | Choose a Mission

1. 줄기를 더 높게 만들기 / Make the trunk taller
2. 나뭇잎을 더 넓게 만들기 / Make the leaves wider
3. 채팅 명령어를 `big_tree`로 바꾸기 / Change the chat command to `big_tree`
4. 서로 다른 위치에 나무 두 그루 만들기 / Build two trees in different positions

이번 미션에는 정답 힌트가 없습니다. 직접 설계해 보세요!  
There is no answer hint for this mission. Design it yourself!

### 미션 완료 | Mission Complete

참나무가 완성되었습니다!  
You built an oak tree!

친구에게 내가 바꾼 부분을 설명해 보세요.  
Explain to a classmate what you changed in your tree.
