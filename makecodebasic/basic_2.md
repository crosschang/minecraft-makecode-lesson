# 2일차. 하늘에서 떨어지는 동물 | Day 2. Animals from the Sky
```template
//
```
## 오늘의 미션 | Today's Mission @showdialog

오늘은 위치와 높이를 사용해서 내 머리 위와 하늘에 동물을 만들어요.  
Today, we will use position and height to create animals above us and in the sky.

채팅창에 숫자를 입력하면 코드가 실행됩니다.  
Type a number in the chat to run your code.

준비가 되었다면 **확인**을 눌러 시작하세요!  
Press **OK** when you are ready to begin!

## Step 1

### 1번: 머리 위 닭 | Number 1: Chicken Above Your Head

`1`을 입력하면 내 위치보다 5칸 위에 닭이 나오게 만드세요.  
Type `1` to spawn a chicken 5 blocks above you.

```blocks
player.onChat("1", function () {
    mobs.spawn(CHICKEN, positions.add(player.position(), pos(0, 5, 0)))
})
```

### 테스트 | Test

`1`을 입력하고 닭이 위에서 떨어지는지 보세요.  
Type `1` and watch the chicken fall.

## Step 2

### 2번: 하늘닭 | Number 2: Sky Chicken

이번에는 Y값을 더 크게 해서 닭이 아주 높은 곳에서 나오게 만드세요.  
This time, use a bigger Y value so the chicken appears high in the sky.

```blocks
player.onChat("2", function () {
    mobs.spawn(CHICKEN, positions.add(player.position(), pos(0, 15, 0)))
})
```

### 테스트 | Test

`2`를 입력하고 닭이 얼마나 높은 곳에서 나오는지 확인하세요.  
Type `2` and check how high the chicken appears.

## Step 3

### 3번: 하늘돼지 | Number 3: Sky Pig

`3`을 입력하면 하늘에서 돼지가 나오게 만드세요.  
Type `3` to spawn a pig in the sky.

```blocks
player.onChat("3", function () {
    mobs.spawn(PIG, positions.add(player.position(), pos(0, 15, 0)))
})
```

### 테스트 | Test

`3`을 입력하고 하늘돼지를 찾아보세요.  
Type `3` and look for the sky pig.

## Step 4

### 4번: 하늘에서 선물 | Number 4: Gift from the Sky

`4`를 입력하면 다이아몬드 블록과 닭이 위쪽에 나타나게 만드세요.  
Type `4` to create a diamond block and a chicken above you.

```blocks
player.onChat("4", function () {
    player.say("선물이 떨어진다!")
    blocks.place(DIAMOND_BLOCK, positions.add(player.position(), pos(0, 5, 0)))
    mobs.spawn(CHICKEN, positions.add(player.position(), pos(0, 10, 0)))
})
```

### 테스트 | Test

`4`를 입력하고 선물이 어디에 생기는지 확인하세요.  
Type `4` and check where the gift appears.

## Step 5

### 높이 바꾸기 도전 | Change the Height Challenge

Y값을 `5`, `10`, `20`으로 바꾸어 보세요. 숫자가 커지면 무엇이 달라질까요?  
Change the Y value to `5`, `10`, and `20`. What changes when the number gets bigger?

```ghost
positions.add(player.position(), pos(0, 20, 0))
mobs.spawn(SHEEP, positions.add(player.position(), pos(0, 10, 0)))
```

### 테스트 | Test

내가 가장 좋아하는 높이를 친구에게 설명해 보세요.  
Explain your favorite height to a friend.
