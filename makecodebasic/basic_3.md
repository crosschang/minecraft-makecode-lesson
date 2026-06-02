# 3일차. 내가 움직이면 월드가 바뀐다 | Day 3. Magic Trails
```template
//
```
## 오늘의 미션 | Today's Mission @showdialog

오늘은 내가 걸을 때마다 발밑에 블록이 생기는 길 만들기 코드를 배워요.  
Today, we will make trails that appear under your feet when you walk.

채팅창에 숫자를 입력하면 코드가 실행됩니다.  
Type a number in the chat to run your code.

준비가 되었다면 **확인**을 눌러 시작하세요!  
Press **OK** when you are ready to begin!

## Step 1

### 준비: 길 모드 변수 만들기 | Prepare: Make a Trail Mode Variable

먼저 `길모드` 변수를 만들고 0으로 시작하세요. 0은 멈춤이라는 뜻입니다.  
First, make a variable called `길모드` and start it at 0. 0 means stop.

```blocks
let 길모드 = 0
```

### 테스트 | Test

변수 블록이 만들어졌는지 확인하세요.  
Check that your variable block is ready.

## Step 2

### 1번: 꽃길 모드 | Number 1: Flower Trail Mode

`1`을 입력하면 꽃길 모드가 켜지게 만드세요.  
Type `1` to turn on flower trail mode.

```blocks
player.onChat("1", function () {
    길모드 = 1
    player.say("꽃길 모드!")
})
```

### 테스트 | Test

`1`을 입력하면 메시지가 나오는지 확인하세요.  
Type `1` and check the message.

## Step 3

### 2, 3, 4번: 다른 길 모드 | Numbers 2, 3, 4: Other Trail Modes

케이크길, 금길, 파란길 모드를 만드세요.  
Create cake, gold, and blue trail modes.

```blocks
player.onChat("2", function () {
    길모드 = 2
    player.say("케이크길 모드!")
})

player.onChat("3", function () {
    길모드 = 3
    player.say("금길 모드!")
})

player.onChat("4", function () {
    길모드 = 4
    player.say("파란길 모드!")
})
```

### 테스트 | Test

`2`, `3`, `4`를 입력해 메시지가 각각 다른지 확인하세요.  
Type `2`, `3`, and `4` and check the messages.

## Step 4

### 0번: 멈춤 버튼 | Number 0: Stop Button

길 만들기는 꼭 멈출 수 있어야 합니다. `0`을 입력하면 길모드가 0이 되게 만드세요.  
The trail must be able to stop. Type `0` to set trail mode to 0.

```blocks
player.onChat("0", function () {
    길모드 = 0
    player.say("길 만들기를 멈춥니다.")
})
```

### 테스트 | Test

`0`을 입력하면 멈춤 메시지가 나오는지 확인하세요.  
Type `0` and check the stop message.

## Step 5

### 걸으면 길이 생기게 하기 | Make Trails When You Walk

걷기 이벤트를 사용해서 길모드에 따라 다른 블록이 발밑에 생기게 만드세요.  
Use the walking event to place different blocks under your feet depending on the trail mode.

```blocks
player.onTravelled(WALK, function () {
    if (길모드 == 1) {
        blocks.place(POPPY, positions.add(player.position(), pos(0, -1, 0)))
    } else if (길모드 == 2) {
        blocks.place(CAKE, positions.add(player.position(), pos(0, -1, 0)))
    } else if (길모드 == 3) {
        blocks.place(GOLD_BLOCK, positions.add(player.position(), pos(0, -1, 0)))
    } else if (길모드 == 4) {
        blocks.place(BLUE_CARPET, positions.add(player.position(), pos(0, -1, 0)))
    }
})
```

### 테스트 | Test

`1`, `2`, `3`, `4`를 바꿔 입력하며 걸어 보세요. 끝나면 꼭 `0`을 입력하세요.  
Try walking after typing `1`, `2`, `3`, and `4`. Type `0` when you finish.

## Step 6

### 나만의 길 만들기 | Create Your Own Trail

블록 하나를 내가 좋아하는 블록으로 바꿔 보세요.  
Change one trail block to a block you like.

```ghost
blocks.place(EMERALD_BLOCK, positions.add(player.position(), pos(0, -1, 0)))
blocks.place(WHITE_WOOL, positions.add(player.position(), pos(0, -1, 0)))
```

### 테스트 | Test

친구와 서로 다른 길을 만들어 비교하세요.  
Make different trails and compare them with a friend.
