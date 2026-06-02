# 4일차. 알록달록 색깔 닭장 | Day 4. Colorful Chicken Stage
```template
//
```
## 오늘의 미션 | Today's Mission @showdialog

오늘은 색깔 카펫과 닭을 이용해서 알록달록 닭 무대를 만들어요.  
Today, we will use colorful carpets and chickens to make a colorful chicken stage.

채팅창에 숫자를 입력하면 코드가 실행됩니다.  
Type a number in the chat to run your code.

준비가 되었다면 **확인**을 눌러 시작하세요!  
Press **OK** when you are ready to begin!

## Step 1

### 1번: 빨간닭 | Number 1: Red Chicken

`1`을 입력하면 발밑에 빨간 카펫을 놓고 닭을 소환하세요.  
Type `1` to place a red carpet under you and spawn a chicken.

```blocks
player.onChat("1", function () {
    blocks.place(RED_CARPET, positions.add(player.position(), pos(0, -1, 0)))
    mobs.spawn(CHICKEN, player.position())
})
```

### 테스트 | Test

`1`을 입력하고 빨간 카펫과 닭이 생기는지 확인하세요.  
Type `1` and check for a red carpet and chicken.

## Step 2

### 2번: 파란닭 | Number 2: Blue Chicken

`2`를 입력하면 파란 카펫과 닭이 나오게 만드세요.  
Type `2` to make a blue carpet and a chicken.

```blocks
player.onChat("2", function () {
    blocks.place(BLUE_CARPET, positions.add(player.position(), pos(0, -1, 0)))
    mobs.spawn(CHICKEN, player.position())
})
```

### 테스트 | Test

`2`를 입력하고 색이 다른지 확인하세요.  
Type `2` and check the different color.

## Step 3

### 3번: 노란닭 | Number 3: Yellow Chicken

`3`을 입력하면 노란 카펫과 닭이 나오게 만드세요.  
Type `3` to make a yellow carpet and a chicken.

```blocks
player.onChat("3", function () {
    blocks.place(YELLOW_CARPET, positions.add(player.position(), pos(0, -1, 0)))
    mobs.spawn(CHICKEN, player.position())
})
```

### 테스트 | Test

`3`을 입력하고 노란 카펫을 찾아보세요.  
Type `3` and find the yellow carpet.

## Step 4

### 4번: 알록달록 닭 무대 | Number 4: Colorful Chicken Stage

여러 색 카펫을 한 줄로 놓고 닭을 4마리 소환하세요.  
Place colorful carpets in a row and spawn four chickens.

```blocks
player.onChat("4", function () {
    blocks.place(RED_CARPET, positions.add(player.position(), pos(0, -1, 0)))
    blocks.place(YELLOW_CARPET, positions.add(player.position(), pos(1, -1, 0)))
    blocks.place(BLUE_CARPET, positions.add(player.position(), pos(2, -1, 0)))
    blocks.place(PURPLE_CARPET, positions.add(player.position(), pos(3, -1, 0)))
    mobs.spawn(CHICKEN, positions.add(player.position(), pos(0, 0, 0)))
    mobs.spawn(CHICKEN, positions.add(player.position(), pos(1, 0, 0)))
    mobs.spawn(CHICKEN, positions.add(player.position(), pos(2, 0, 0)))
    mobs.spawn(CHICKEN, positions.add(player.position(), pos(3, 0, 0)))
    player.say("알록달록 닭 무대 완성!")
})
```

### 테스트 | Test

`4`를 입력하고 무대가 한 줄로 만들어지는지 확인하세요.  
Type `4` and check the stage line.

## Step 5

### 무대 꾸미기 | Decorate Your Stage

정답 힌트 없이 색깔을 바꾸거나 무대를 6칸으로 늘려 보세요.  
Without an answer hint, change the colors or make the stage 6 blocks long.

```ghost
blocks.place(GREEN_CARPET, positions.add(player.position(), pos(4, -1, 0)))
blocks.place(ORANGE_CARPET, positions.add(player.position(), pos(5, -1, 0)))
```

### 테스트 | Test

내 무대를 친구에게 소개하세요.  
Introduce your stage to a friend.
