# 🧊 기초코딩: 블록, 닭, 얼음길

```template
blocks.place(GRASS, pos(0, 0, 0))
```

## 시작하기 | Introduction @showdialog

이번 수업에서는 Minecraft Education의 **MakeCode 블록코딩**으로 아주 기본적인 명령을 배워 봅니다.  
In this lesson, we will learn basic commands using **MakeCode block coding** in Minecraft Education.

오늘 배울 내용 | What we will learn:

- 시작하면 블록이 생기게 하기 / Place blocks when the code starts
- 위치 좌표 `pos(x, y, z)` 이해하기 / Understand position coordinates
- 닭 소환하기 / Spawn chickens
- 무한 반복 만들기 / Use a forever loop
- 시간 조절하기 / Control time with pause
- 걸을 때 바닥을 얼음으로 바꾸기 / Change the ground to ice while walking

넓고 평평한 곳에서 시작하세요.  
Start in a wide, flat area.

---

## Step 1. 시작하면 블록 1개 만들기 | Place One Block on Start

먼저 코드가 시작되면 플레이어 근처에 블록 1개가 생기게 해 봅시다.  
First, place one block when the code starts.

위치는 `pos(0, 0, 0)`입니다.  
The position is `pos(0, 0, 0)`.

```blocks
blocks.place(GRASS, pos(0, 0, 0))
```

### 확인하기 | Check

코드를 실행했을 때 블록 1개가 생기나요?  
When you run the code, do you see one block?

---

## Step 2. 시작하면 블록 3개 만들기 | Place Three Blocks on Start

이번에는 블록을 3개 놓아 봅시다.  
Now place three blocks.

좌표는 다음과 같습니다.  
Use these positions:

| 순서 / Order | 위치 / Position |
|---:|---|
| 1 | `pos(0, 0, 1)` |
| 2 | `pos(0, 0, 2)` |
| 3 | `pos(0, 0, 3)` |

```blocks
blocks.place(GRASS, pos(0, 0, 1))
blocks.place(GRASS, pos(0, 0, 2))
blocks.place(GRASS, pos(0, 0, 3))
```

### 생각하기 | Think

`z` 숫자가 1, 2, 3으로 바뀌면 블록은 어느 방향으로 놓이나요?  
When the `z` number changes to 1, 2, and 3, which direction do the blocks go?

---

## Step 3. 실습: 반대 방향으로 블록 놓기 | Practice: Place Blocks in the Opposite Direction

이번에는 학생이 직접 실습합니다.  
Now it is your turn to practice.

`z` 값을 음수로 바꾸면 반대 방향으로 블록이 놓입니다.  
When the `z` value is negative, the blocks are placed in the opposite direction.

아래 좌표를 사용해 블록 3개를 추가하세요.  
Add three blocks using the positions below.

| 순서 / Order | 위치 / Position |
|---:|---|
| 1 | `pos(0, 0, -1)` |
| 2 | `pos(0, 0, -2)` |
| 3 | `pos(0, 0, -3)` |

```ghost
blocks.place(GRASS, pos(0, 0, -1))
blocks.place(GRASS, pos(0, 0, -2))
blocks.place(GRASS, pos(0, 0, -3))
```

### 결과 보기 | See the Result

블록이 양쪽 방향으로 놓이면 성공입니다.  
You succeed when the blocks appear in both directions.

---

## Step 4. 블록 대신 닭 1마리 소환하기 | Spawn One Chicken Instead of Placing a Block

이번에는 `blocks.place` 대신 `mobs.spawn`을 사용합니다.  
Now use `mobs.spawn` instead of `blocks.place`.

코드가 시작되면 닭 1마리가 소환됩니다.  
When the code starts, one chicken will spawn.

```blocks
mobs.spawn(CHICKEN, pos(0, 0, 1))
```

### 확인하기 | Check

코드를 실행했을 때 닭이 1마리 나오나요?  
When you run the code, does one chicken appear?

---

## Step 5. 닭 4마리 소환하기 | Spawn Four Chickens

이번에는 닭이 4마리 나오도록 만들어 봅시다.  
Now make four chickens appear.

각 닭은 서로 다른 위치에 소환됩니다.  
Each chicken spawns at a different position.

```blocks
mobs.spawn(CHICKEN, pos(0, 0, 1))
mobs.spawn(CHICKEN, pos(0, 0, 2))
mobs.spawn(CHICKEN, pos(0, 0, 3))
mobs.spawn(CHICKEN, pos(0, 0, 4))
```

### 생각하기 | Think

닭의 위치를 더 멀리 바꾸려면 어떤 숫자를 바꾸면 좋을까요?  
Which number should you change to spawn the chickens farther away?

---

## Step 6. 닭이 계속 나오게 하기 | Make Chickens Spawn Forever

이번에는 **무한 반복**을 사용해 닭이 계속 나오게 만들어 봅니다.  
Now use a **forever loop** to keep spawning chickens.

```blocks
loops.forever(function () {
    mobs.spawn(CHICKEN, pos(0, 5, 0))
})
```

### 주의하기 | Be Careful

닭이 너무 많이 생길 수 있습니다.  
Too many chickens can appear.

테스트가 끝나면 코드를 멈추거나 월드를 정리하세요.  
Stop the code or clean up the world after testing.

---

## Step 7. 시간 조절하기: 1000ms | Control Time: 1000ms

닭이 너무 빠르게 나오지 않도록 잠깐 쉬는 시간을 넣어 봅시다.  
Add a short pause so chickens do not spawn too quickly.

`1000ms`는 **1초**입니다.  
`1000ms` means **1 second**.

```blocks
loops.forever(function () {
    mobs.spawn(CHICKEN, pos(0, 5, 0))
    loops.pause(1000)
})
```

### 확인하기 | Check

닭이 약 1초마다 한 마리씩 나오나요?  
Does one chicken appear about every 1 second?

---

## Step 8. 실습: 시간 바꾸기 | Practice: Change the Time

이번에는 학생이 직접 시간을 바꾸어 봅니다.  
Now change the time yourself.

`loops.pause()` 안의 숫자를 `1000`부터 `10000` 사이로 바꾸어 보세요.  
Change the number inside `loops.pause()` from `1000` to `10000`.

| 숫자 / Number | 시간 / Time |
|---:|---|
| `1000` | 1초 / 1 second |
| `3000` | 3초 / 3 seconds |
| `5000` | 5초 / 5 seconds |
| `10000` | 10초 / 10 seconds |

```ghost
loops.forever(function () {
    mobs.spawn(CHICKEN, pos(0, 5, 0))
    loops.pause(3000)
})
```

### 실험하기 | Experiment

시간을 짧게 하면 닭이 어떻게 나오나요?  
What happens when the time is short?

시간을 길게 하면 닭이 어떻게 나오나요?  
What happens when the time is long?

---

## Step 9. 걸으면 바닥이 얼음으로 바뀌게 하기 | Turn the Ground into Ice While Walking

이번에는 플레이어가 걸을 때 바닥이 얼음으로 바뀌게 해 봅시다.  
Now make the ground turn into ice when the player walks.

`플레이어가 걸었을 때` 이벤트를 사용합니다.  
Use the `on travelled WALK` event.

```blocks
player.onTravelled(WALK, function () {
    blocks.fill(
        ICE,
        pos(5, -1, 5),
        pos(-5, -1, -5),
        FillOperation.Replace
    )
})
```

### 확인하기 | Check

걸어 다닐 때 내 아래쪽 넓은 바닥이 얼음으로 바뀌나요?  
When you walk, does the ground under you change into ice?

---

## Step 10. 마지막 실습: 다른 움직임으로 바꾸기 | Final Practice: Change the Movement

마지막 실습입니다.  
This is the final practice.

`걸을 때(WALK)` 대신 다른 움직임으로 바꾸어 결과를 확인해 보세요.  
Change `WALK` to another movement and observe the result.

예시 아이디어 | Ideas:

- 뛸 때 / When running
- 날 때 / When flying
- 수영할 때 / When swimming

```ghost
player.onTravelled(WALK, function () {
    blocks.fill(
        ICE,
        pos(5, -1, 5),
        pos(-5, -1, -5),
        FillOperation.Replace
    )
})
```

### 도전 질문 | Challenge Question

움직임 조건을 바꾸면 얼음 바닥이 언제 만들어지나요?  
When does the ice floor appear after you change the movement condition?

### 미션 완료 | Mission Complete

축하합니다!  
Congratulations!

오늘 여러분은 블록 만들기, 몹 소환, 무한 반복, 시간 조절, 이벤트 코딩을 모두 실습했습니다.  
Today you practiced placing blocks, spawning mobs, using forever loops, controlling time, and coding events.
