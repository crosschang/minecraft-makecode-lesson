# Repeat & Nested Loop Builder
# 반복문과 중첩 반복문으로 자동 건축하기

## Welcome! | 수업 시작 @showdialog

Today, you will build Minecraft structures using **loops** and **nested loops**.

You will build:

1. A line
2. A floor
3. A wall
4. A house
5. A pattern

At the end, you will complete two challenge missions **without example code**.

---

오늘은 **반복문**과 **중첩 반복문**을 이용해서 Minecraft 구조물을 자동으로 만들어봅니다.

오늘 만들 것:

1. 한 줄
2. 바닥
3. 벽
4. 집
5. 패턴

마지막에는 **예제 코드 없이** 두 개의 도전 미션을 완성합니다.

```template
//
```

---

## Step 1. Build a Line | 한 줄 만들기

### Mission 1 ★★

Create the chat command:

`line`

Use one loop to place Gold Blocks in a straight line.

```blocks
player.onChat("line", function () {
    for (let x = 0; x <= 5; x++) {
        blocks.place(GOLD_BLOCK, pos(x, 0, 4))
    }
})
```

### Test

Return to Minecraft and type:

`line`

You should see **6 Gold Blocks** in a straight line.

### Check

Before moving on, make sure:

- You used a chat command.
- You used one loop.
- You placed Gold Blocks.
- You tested the command in Minecraft.

### Mini Challenge

Change one thing and test again.

- Change the block.
- Change the number of blocks.
- Change the position.

---

### Mission 1 ★★

채팅 명령어를 만드세요.

`line`

반복문 하나를 사용해서 금 블록을 한 줄로 설치합니다.

### 테스트

Minecraft로 돌아가서:

`line`

을 입력하세요.

금 블록 **6개**가 한 줄로 만들어지면 성공입니다.

### 확인

다음 단계로 넘어가기 전에 확인하세요.

- 채팅 명령을 사용했나요?
- 반복문 1개를 사용했나요?
- 금 블록을 설치했나요?
- Minecraft에서 직접 실행했나요?

### 작은 도전

한 가지를 바꾼 뒤 다시 테스트하세요.

- 블록 바꾸기
- 블록 개수 바꾸기
- 위치 바꾸기

---

## Step 2. Build a Floor | 바닥 만들기

### Mission 2 ★★★

A floor needs blocks in two directions.

Use a loop inside another loop.

Create the chat command:

`floor`

```blocks
player.onChat("floor", function () {
    for (let x2 = 0; x2 <= 5; x2++) {
        for (let z = 0; z <= 5; z++) {
            blocks.place(PLANKS_OAK, pos(x2, 0, z + 4))
        }
    }
})
```

### Test

Type:

`floor`

You should see a **6 × 6 Oak Planks floor**.

### Think

The outside loop changes one direction.

The inside loop changes another direction.

Together, the two loops create a flat area.

### Check

Before moving on, make sure:

- You used one chat command.
- You used two loops.
- One loop is inside the other loop.
- You used Place Block.
- You tested the command.

### Mini Challenge

Change the floor.

- Make it smaller.
- Make it bigger.
- Change the block.

---

### Mission 2 ★★★

바닥은 두 방향으로 블록이 필요합니다.

이번에는 반복문 안에 또 다른 반복문을 넣어봅니다.

채팅 명령어:

`floor`

### 테스트

채팅창에:

`floor`

를 입력하세요.

**6 × 6 크기의 참나무 판자 바닥**이 만들어지면 성공입니다.

### 생각해보기

바깥 반복문은 한 방향을 바꿉니다.

안쪽 반복문은 다른 방향을 바꿉니다.

두 반복문을 함께 사용하면 넓은 바닥을 만들 수 있습니다.

### 확인

다음 단계로 넘어가기 전에 확인하세요.

- 채팅 명령을 사용했나요?
- 반복문 2개를 사용했나요?
- 반복문 안에 반복문이 들어가 있나요?
- 블록 설치를 사용했나요?
- Minecraft에서 직접 실행했나요?

### 작은 도전

바닥을 바꿔보세요.

- 더 작게 만들기
- 더 크게 만들기
- 블록 바꾸기

---

## Step 3. Build a Wall | 벽 만들기

### Mission 3 ★★★

Now use nested loops to build upward.

Create the chat command:

`wall`

```blocks
player.onChat("wall", function () {
    for (let y = 0; y <= 2; y++) {
        for (let x3 = 0; x3 <= 5; x3++) {
            blocks.place(STONE, pos(x3, y + 1, 4))
        }
    }
})
```

### Test

Type:

`wall`

You should see a Stone wall.

### Think

For the floor, the loops moved across the ground.

For the wall, one loop moves sideways and the other loop moves upward.

### Check

Before moving on, make sure:

- You used a chat command.
- You used two loops.
- You used Stone.
- The wall is 6 blocks wide.
- The wall is 3 blocks high.
- You tested the command.

### Mini Challenge

Change one part of the wall.

- Make it taller.
- Make it wider.
- Change the block.

---

### Mission 3 ★★★

이번에는 중첩 반복문을 사용해서 위쪽 방향으로 벽을 만들어봅니다.

채팅 명령어:

`wall`

### 테스트

채팅창에:

`wall`

을 입력하세요.

돌 벽이 만들어지면 성공입니다.

### 생각해보기

바닥에서는 두 반복문이 바닥 방향으로 움직였습니다.

벽에서는 한 반복문이 좌우로 움직이고, 다른 반복문이 위로 움직입니다.

### 확인

다음 단계로 넘어가기 전에 확인하세요.

- 채팅 명령을 사용했나요?
- 반복문 2개를 사용했나요?
- 돌 블록을 사용했나요?
- 벽의 가로 길이가 6칸인가요?
- 벽의 높이가 3칸인가요?
- Minecraft에서 직접 실행했나요?

### 작은 도전

벽의 한 부분을 바꿔보세요.

- 더 높게 만들기
- 더 넓게 만들기
- 블록 바꾸기

---

## Step 4. Build a House | 집 만들기

### Mission 4 ★★★★

Now combine the floor, roof, and four walls.

Create the chat command:

`house`

```blocks
player.onChat("house", function () {
    for (let x4 = 0; x4 <= 5; x4++) {
        for (let z2 = 0; z2 <= 5; z2++) {
            blocks.place(PLANKS_OAK, pos(x4, 0, z2 + 4))
            blocks.place(PLANKS_OAK, pos(x4, 4, z2 + 4))
        }
    }
    for (let y2 = 0; y2 <= 2; y2++) {
        for (let x5 = 0; x5 <= 5; x5++) {
            blocks.place(STONE, pos(x5, y2 + 1, 4))
            blocks.place(STONE, pos(x5, y2 + 1, 9))
            blocks.place(STONE, pos(0, y2 + 1, x5 + 4))
            blocks.place(STONE, pos(5, y2 + 1, x5 + 4))
        }
    }
    blocks.place(AIR, pos(2, 1, 4))
    blocks.place(AIR, pos(2, 2, 4))
    blocks.place(GLASS, pos(0, 2, 6))
    blocks.place(GLASS, pos(5, 2, 6))
})
```

### Part 1. Floor and Roof

The first nested loop builds:

- The floor
- The roof

The floor is at height `0`.

The roof is at height `4`.

### Part 2. Four Walls

The second nested loop builds:

- Front wall
- Back wall
- Left wall
- Right wall

### Part 3. Door

Two Stone blocks are replaced with Air.

This creates the entrance.

### Part 4. Windows

Glass is placed on both side walls.

### Test

Type:

`house`

Check that your house has:

- A floor
- A roof
- Four walls
- An entrance
- Two windows

### Mini Challenge

Change at least **two** things.

- Floor material
- Roof material
- Wall material
- Window block
- Door position

---

### Mission 4 ★★★★

이번에는 바닥, 지붕, 네 방향 벽을 하나의 코드로 합쳐서 집을 만듭니다.

채팅 명령어:

`house`

### Part 1. 바닥과 지붕

첫 번째 중첩 반복문은:

- 바닥
- 지붕

을 만듭니다.

바닥의 높이는 `0`입니다.

지붕의 높이는 `4`입니다.

### Part 2. 네 방향 벽

두 번째 중첩 반복문은:

- 앞쪽 벽
- 뒤쪽 벽
- 왼쪽 벽
- 오른쪽 벽

을 만듭니다.

### Part 3. 출입구

돌 블록 2개를 공기로 바꿔서 출입구를 만듭니다.

### Part 4. 창문

양쪽 벽에 유리 블록을 설치합니다.

### 테스트

채팅창에:

`house`

를 입력하세요.

집에 다음이 모두 있는지 확인하세요.

- 바닥
- 지붕
- 네 방향 벽
- 출입구
- 창문 2개

### 작은 도전

최소 **2가지**를 바꿔보세요.

- 바닥 재료
- 지붕 재료
- 벽 재료
- 창문 블록
- 출입구 위치

---

## Step 5. Build a Checker Pattern | 체크무늬 패턴 만들기

### Mission 5 ★★★★

Now combine nested loops with a condition.

Create the chat command:

`pattern`

```blocks
player.onChat("pattern", function () {
    for (let x6 = 0; x6 <= 5; x6++) {
        for (let z3 = 0; z3 <= 5; z3++) {
            if ((x6 + z3) % 2 == 0) {
                blocks.place(GOLD_BLOCK, pos(x6, 0, z3 + 4))
            } else {
                blocks.place(DIAMOND_BLOCK, pos(x6, 0, z3 + 4))
            }
        }
    }
})
```

### Test

Type:

`pattern`

You should see a Gold and Diamond checker pattern.

### Think

The two loops decide **where** a block goes.

The condition decides **which block** goes there.

### Check

Before moving on, make sure:

- You used one chat command.
- You used two loops.
- You used an If / Else condition.
- You used Gold Block.
- You used Diamond Block.
- You tested the command.

### Mini Challenge

Change both block types and test again.

---

### Mission 5 ★★★★

이번에는 중첩 반복문과 조건문을 함께 사용합니다.

채팅 명령어:

`pattern`

### 테스트

채팅창에:

`pattern`

을 입력하세요.

금 블록과 다이아몬드 블록이 번갈아 나타나는 체크무늬가 만들어지면 성공입니다.

### 생각해보기

반복문 2개는 블록이 설치될 **위치**를 결정합니다.

조건문은 그 위치에 **어떤 블록을 설치할지** 결정합니다.

### 확인

다음 단계로 넘어가기 전에 확인하세요.

- 채팅 명령을 사용했나요?
- 반복문 2개를 사용했나요?
- If / Else 조건문을 사용했나요?
- 금 블록을 사용했나요?
- 다이아몬드 블록을 사용했나요?
- Minecraft에서 직접 실행했나요?

### 작은 도전

두 블록을 모두 다른 블록으로 바꿔서 다시 실행해보세요.

---

## Step 6. Secret Challenge 1 - Rectangle Builder | 비밀 도전 1 - 직사각형 만들기

### Challenge ★★★★★

This mission has **no example code and no block hint**.

Create a chat command named:

`rect2`

The command must accept **two numbers**.

The first number is the width.

The second number is the length.

### Mission Rules

Your program must:

1. Create a rectangular floor.
2. Use Oak Planks.
3. Use the first number as the width.
4. Use the second number as the length.
5. Work with different number combinations.

### Test

Try at least **three different sizes**.

Do not copy another student's code.

Solve it using what you learned today.

---

### 도전 ★★★★★

이번 미션에는 **예제 코드와 블록 힌트가 없습니다.**

채팅 명령어:

`rect2`

이 명령어는 **숫자 2개**를 입력받아야 합니다.

첫 번째 숫자는 가로 크기입니다.

두 번째 숫자는 세로 크기입니다.

### 미션 조건

프로그램은 다음 조건을 모두 만족해야 합니다.

1. 직사각형 바닥을 만들어야 합니다.
2. 참나무 판자를 사용해야 합니다.
3. 첫 번째 숫자로 가로 크기가 바뀌어야 합니다.
4. 두 번째 숫자로 세로 크기가 바뀌어야 합니다.
5. 다른 숫자를 입력해도 작동해야 합니다.

### 테스트

서로 다른 크기를 최소 **3번** 테스트하세요.

다른 학생의 코드를 그대로 따라 하지 마세요.

오늘 배운 내용을 이용해서 직접 해결하세요.

---

## Step 7. Secret Challenge 2 - Stripe Builder | 비밀 도전 2 - 줄무늬 만들기

### Challenge ★★★★★

This mission has **no example code and no block hint**.

Create a chat command named:

`stripe`

Build a rectangular pattern that is:

- 10 blocks wide
- 8 blocks long

The finished pattern must have **four horizontal color areas**.

### Mission Rules

From one side to the other, create:

1. Diamond Block area
2. Gold Block area
3. Diamond Block area
4. Iron Block area

Each area must be **2 blocks thick**.

The final build must be completely filled.

### Test

Run:

`stripe`

Check the finished pattern carefully.

Make sure:

- The size is correct.
- All four areas appear.
- Each area is 2 blocks thick.
- There are no empty spaces.

There is no example code for this mission.

Build it yourself.

---

### 도전 ★★★★★

이번 미션에도 **예제 코드와 블록 힌트가 없습니다.**

채팅 명령어:

`stripe`

다음 크기의 직사각형 패턴을 만드세요.

- 가로 10칸
- 세로 8칸

완성된 패턴에는 **가로 방향의 색 영역 4개**가 있어야 합니다.

### 미션 조건

한쪽 끝에서부터 다음 순서로 만드세요.

1. 다이아몬드 블록 영역
2. 금 블록 영역
3. 다이아몬드 블록 영역
4. 철 블록 영역

각 영역의 두께는 **2칸**이어야 합니다.

전체 영역이 빈칸 없이 채워져야 합니다.

### 테스트

채팅창에:

`stripe`

를 입력하세요.

다음을 확인하세요.

- 전체 크기가 맞나요?
- 4개의 영역이 모두 있나요?
- 각 영역의 두께가 2칸인가요?
- 빈 공간이 없나요?

이번 미션에는 완성 코드가 없습니다.

직접 생각해서 만들어보세요.

---

## Mission Complete! | 미션 완료!

Great work!

Today you learned how to use:

- A single loop
- Nested loops
- Positions
- Place Block
- If / Else
- Number inputs

You built:

1. A line
2. A floor
3. A wall
4. A house
5. A checker pattern

Then you solved two missions without example code.

Before finishing, make sure you tested every command in Minecraft.

---

잘했습니다!

오늘 사용한 내용:

- 단일 반복문
- 중첩 반복문
- 위치
- 블록 설치
- If / Else 조건문
- 숫자 입력값

오늘 만든 것:

1. 한 줄
2. 바닥
3. 벽
4. 집
5. 체크무늬 패턴

마지막에는 예제 코드 없이 두 개의 도전 미션도 해결했습니다.

수업을 마치기 전에 모든 명령어를 Minecraft에서 직접 테스트했는지 확인하세요.
