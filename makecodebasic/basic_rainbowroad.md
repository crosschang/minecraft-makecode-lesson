# 무지개 길 만들기 | Rainbow Road
```template
//
```
## 오늘의 미션 | Today's Mission @showdialog

오늘은 반복과 조건을 사용해서 색이 바뀌는 무지개 길을 만들어요.  
Today, we will use loops and conditions to make a rainbow road with changing colors.

채팅창에 숫자를 입력하면 코드가 실행됩니다.  
Type a number in the chat to run your code.

준비가 되었다면 **확인**을 눌러 시작하세요!  
Press **OK** when you are ready to begin!

## Step 1

### 1번: 빨간 길 | Number 1: Red Road

먼저 빨간 카펫으로 10칸 길을 만드세요.  
First, make a 10-block road with red carpet.

```blocks
player.onChat("1", function () {
    for (let i = 0; i < 10; i++) {
        blocks.place(RED_CARPET, positions.add(player.position(), pos(i, -1, 0)))
    }
})
```

### 테스트 | Test

`1`을 입력하고 빨간 길이 생기는지 확인하세요.  
Type `1` and check the red road.

## Step 2

### 2번: 두 색 길 | Number 2: Two-Color Road

조건문으로 짝수 칸과 홀수 칸의 색을 다르게 만들어 봅시다.  
Use conditions to make even and odd blocks different colors.

```blocks
player.onChat("2", function () {
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            blocks.place(RED_CARPET, positions.add(player.position(), pos(i, -1, 0)))
        } else {
            blocks.place(BLUE_CARPET, positions.add(player.position(), pos(i, -1, 0)))
        }
    }
})
```

### 테스트 | Test

`2`를 입력하고 색이 번갈아 나오는지 확인하세요.  
Type `2` and check the alternating colors.

## Step 3

### 3번: 네 색 무지개 길 | Number 3: Four-Color Rainbow Road

나머지 값을 사용해 네 가지 색이 반복되게 만드세요.  
Use the remainder value to repeat four colors.

```blocks
player.onChat("3", function () {
    player.say("무지개 길 만들기!")
    for (let i = 0; i < 20; i++) {
        if (i % 4 == 0) {
            blocks.place(RED_CARPET, positions.add(player.position(), pos(i, -1, 0)))
        } else if (i % 4 == 1) {
            blocks.place(YELLOW_CARPET, positions.add(player.position(), pos(i, -1, 0)))
        } else if (i % 4 == 2) {
            blocks.place(BLUE_CARPET, positions.add(player.position(), pos(i, -1, 0)))
        } else {
            blocks.place(PURPLE_CARPET, positions.add(player.position(), pos(i, -1, 0)))
        }
    }
})
```

### 테스트 | Test

`3`을 입력하고 네 가지 색이 반복되는지 확인하세요.  
Type `3` and check the four repeating colors.

## Step 4

### 4번: 긴 무지개 길 | Number 4: Long Rainbow Road

길의 길이를 20칸에서 40칸으로 늘려 보세요.  
Make the road longer by changing 20 to 40.

```blocks
player.onChat("4", function () {
    for (let i = 0; i < 40; i++) {
        if (i % 4 == 0) {
            blocks.place(RED_CARPET, positions.add(player.position(), pos(i, -1, 0)))
        } else if (i % 4 == 1) {
            blocks.place(YELLOW_CARPET, positions.add(player.position(), pos(i, -1, 0)))
        } else if (i % 4 == 2) {
            blocks.place(BLUE_CARPET, positions.add(player.position(), pos(i, -1, 0)))
        } else {
            blocks.place(PURPLE_CARPET, positions.add(player.position(), pos(i, -1, 0)))
        }
    }
})
```

### 테스트 | Test

`4`를 입력하고 긴 무지개 길을 걸어 보세요.  
Type `4` and walk on the long rainbow road.

## Step 5

### 나만의 색 조합 | My Color Pattern

색깔을 바꾸어 나만의 패턴 길을 만들어 보세요.  
Change the colors to make your own pattern road.

```ghost
blocks.place(GREEN_CARPET, positions.add(player.position(), pos(0, -1, 0)))
blocks.place(ORANGE_CARPET, positions.add(player.position(), pos(0, -1, 0)))
```

### 테스트 | Test

내 길의 이름을 정해 보세요.  
Give your road a name.
