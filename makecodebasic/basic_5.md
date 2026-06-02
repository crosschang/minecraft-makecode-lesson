# 5일차. 반복으로 동물 농장 만들기 | Day 5. Animal Farm with Loops
```template
//
```
## 오늘의 미션 | Today's Mission @showdialog

오늘은 반복문을 사용해서 동물 여러 마리와 길을 빠르게 만들어요.  
Today, we will use loops to create many animals and a path quickly.

채팅창에 숫자를 입력하면 코드가 실행됩니다.  
Type a number in the chat to run your code.

준비가 되었다면 **확인**을 눌러 시작하세요!  
Press **OK** when you are ready to begin!

## Step 1

### 1번: 닭 5마리 | Number 1: Five Chickens

반복문을 사용해서 닭 5마리를 소환하세요.  
Use a loop to spawn five chickens.

```blocks
player.onChat("1", function () {
    for (let i = 0; i < 5; i++) {
        mobs.spawn(CHICKEN, player.position())
    }
})
```

### 테스트 | Test

`1`을 입력하고 닭이 몇 마리 나오는지 세어 보세요.  
Type `1` and count the chickens.

## Step 2

### 2번: 돼지 5마리 | Number 2: Five Pigs

이번에는 반복문으로 돼지 5마리를 소환하세요.  
This time, use a loop to spawn five pigs.

```blocks
player.onChat("2", function () {
    for (let i = 0; i < 5; i++) {
        mobs.spawn(PIG, player.position())
    }
})
```

### 테스트 | Test

`2`를 입력하고 돼지가 5마리 나오는지 확인하세요.  
Type `2` and check for five pigs.

## Step 3

### 3번: 동물 농장 | Number 3: Animal Farm

닭, 돼지, 양을 각각 3마리씩 소환하세요.  
Spawn three chickens, three pigs, and three sheep.

```blocks
player.onChat("3", function () {
    for (let i = 0; i < 3; i++) {
        mobs.spawn(CHICKEN, player.position())
    }
    for (let i = 0; i < 3; i++) {
        mobs.spawn(PIG, player.position())
    }
    for (let i = 0; i < 3; i++) {
        mobs.spawn(SHEEP, player.position())
    }
})
```

### 테스트 | Test

`3`을 입력하고 세 종류의 동물이 나오는지 확인하세요.  
Type `3` and check for three animal types.

## Step 4

### 4번: 나무 길 만들기 | Number 4: Wooden Path

반복문을 사용해서 10칸짜리 나무 길을 만드세요.  
Use a loop to make a wooden path that is 10 blocks long.

```blocks
player.onChat("4", function () {
    for (let i = 0; i < 10; i++) {
        blocks.place(OAK_PLANKS, positions.add(player.position(), pos(i, -1, 0)))
    }
})
```

### 테스트 | Test

`4`를 입력하고 길이 몇 칸인지 세어 보세요.  
Type `4` and count the path blocks.

## Step 5

### 반복 숫자 바꾸기 | Change the Loop Number

반복 횟수를 `3`, `5`, `10`으로 바꾸어 결과가 어떻게 달라지는지 확인하세요.  
Change the loop number to `3`, `5`, and `10` and see what changes.

```ghost
for (let i = 0; i < 10; i++) {
    mobs.spawn(SHEEP, player.position())
}
blocks.place(GOLD_BLOCK, positions.add(player.position(), pos(0, -1, 0)))
```

### 테스트 | Test

가장 마음에 드는 반복 횟수를 말해 보세요.  
Tell your favorite loop number.
