# 8일차. 자동 닭장 만들기 | Day 8. Automatic Chicken Pen
```template
//
```
## 오늘의 미션 | Today's Mission @showdialog

오늘은 반복문으로 울타리를 만들고, 안에 닭을 넣는 자동 닭장을 만들어요.  
Today, we will use loops to build a fence and put chickens inside.

채팅창에 숫자를 입력하면 코드가 실행됩니다.  
Type a number in the chat to run your code.

준비가 되었다면 **확인**을 눌러 시작하세요!  
Press **OK** when you are ready to begin!

## Step 1

### 1번: 울타리 한 줄 | Number 1: One Fence Line

먼저 울타리 한 줄을 반복문으로 만들어 봅시다.  
First, use a loop to make one line of fences.

```blocks
player.onChat("1", function () {
    for (let i = -3; i <= 3; i++) {
        blocks.place(OAK_FENCE, positions.add(player.position(), pos(i, 0, -3)))
    }
})
```

### 테스트 | Test

`1`을 입력하고 울타리가 한 줄로 생기는지 확인하세요.  
Type `1` and check the fence line.

## Step 2

### 2번: 네모 울타리 | Number 2: Square Fence

이제 네 방향에 울타리를 놓아 네모 닭장을 만드세요.  
Now place fences on four sides to make a square pen.

```blocks
player.onChat("2", function () {
    for (let i = -3; i <= 3; i++) {
        blocks.place(OAK_FENCE, positions.add(player.position(), pos(i, 0, -3)))
        blocks.place(OAK_FENCE, positions.add(player.position(), pos(i, 0, 3)))
        blocks.place(OAK_FENCE, positions.add(player.position(), pos(-3, 0, i)))
        blocks.place(OAK_FENCE, positions.add(player.position(), pos(3, 0, i)))
    }
})
```

### 테스트 | Test

`2`를 입력하고 네모 모양이 되는지 위에서 보세요.  
Type `2` and look for the square shape.

## Step 3

### 3번: 닭 넣기 | Number 3: Put Chickens Inside

닭장 안에 닭 5마리를 소환하세요.  
Spawn five chickens inside the pen.

```blocks
player.onChat("3", function () {
    for (let i = 0; i < 5; i++) {
        mobs.spawn(CHICKEN, positions.add(player.position(), pos(0, 0, 0)))
    }
})
```

### 테스트 | Test

`3`을 입력하고 닭이 닭장 안에 들어가는지 확인하세요.  
Type `3` and check if the chickens are inside.

## Step 4

### 4번: 자동 닭장 완성 | Number 4: Complete Automatic Chicken Pen

울타리와 닭 소환을 한 명령어에 합쳐 자동 닭장을 완성하세요.  
Combine the fences and chickens into one command to complete the automatic chicken pen.

```blocks
player.onChat("4", function () {
    player.say("자동 닭장 만들기!")
    for (let i = -3; i <= 3; i++) {
        blocks.place(OAK_FENCE, positions.add(player.position(), pos(i, 0, -3)))
        blocks.place(OAK_FENCE, positions.add(player.position(), pos(i, 0, 3)))
        blocks.place(OAK_FENCE, positions.add(player.position(), pos(-3, 0, i)))
        blocks.place(OAK_FENCE, positions.add(player.position(), pos(3, 0, i)))
    }
    for (let i = 0; i < 5; i++) {
        mobs.spawn(CHICKEN, positions.add(player.position(), pos(0, 0, 0)))
    }
})
```

### 테스트 | Test

`4`를 입력하고 닭장이 한 번에 만들어지는지 확인하세요.  
Type `4` and check if the pen is built at once.

## Step 5

### 농장 바꾸기 | Change Your Farm

닭장 크기를 바꾸거나 닭 대신 다른 동물을 넣어 보세요.  
Change the pen size or put a different animal inside.

```ghost
mobs.spawn(PIG, positions.add(player.position(), pos(0, 0, 0)))
blocks.place(SPRUCE_FENCE, positions.add(player.position(), pos(0, 0, 0)))
```

### 테스트 | Test

내 농장 이름을 정해 보세요.  
Give your farm a name.
