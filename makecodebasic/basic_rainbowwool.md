#  무한 무지개 양털 생성기 | Infinite Rainbow Wool Machine
```template
//
```
## 오늘의 미션 | Today's Mission @showdialog

오늘은 시작, 속도 조절, 멈춤이 있는 무지개 양털 생성기를 만들어요.  
Today, we will make a rainbow wool machine with start, speed control, and stop commands.

채팅창에 숫자를 입력하면 코드가 실행됩니다.  
Type a number in the chat to run your code.

준비가 되었다면 **확인**을 눌러 시작하세요!  
Press **OK** when you are ready to begin!

## Step 1

### 준비: 변수와 양털 목록 | Prepare: Variables and Wool List

먼저 시작 여부, 번호, 속도, 양털 목록을 준비하세요.  
First, prepare start, number, speed, and the wool list.

```blocks
let 양털시작 = false
let 양털번호 = 0
let 속도 = 500
let 양털목록 = [
    WHITE_WOOL,
    ORANGE_WOOL,
    MAGENTA_WOOL,
    LIGHT_BLUE_WOOL,
    YELLOW_WOOL,
    LIME_WOOL,
    PINK_WOOL,
    GRAY_WOOL,
    LIGHT_GRAY_WOOL,
    CYAN_WOOL,
    PURPLE_WOOL,
    BLUE_WOOL,
    BROWN_WOOL,
    GREEN_WOOL,
    RED_WOOL,
    BLACK_WOOL
]
```

### 테스트 | Test

변수와 목록이 만들어졌는지 확인하세요.  
Check that the variables and list are ready.

## Step 2

### 8번: 시작 버튼 | Number 8: Start Button

`8`을 입력하면 무지개 양털 생성이 시작되게 만드세요.  
Type `8` to start the rainbow wool machine.

```blocks
player.onChat("8", function () {
    양털시작 = true
    양털번호 = 0
    player.say("무지개 양털 시작!")
})
```

### 테스트 | Test

`8`을 입력하면 시작 메시지가 나오는지 확인하세요.  
Type `8` and check the start message.

## Step 3

### 9번과 6번: 속도 조절 | Numbers 9 and 6: Speed Control

`9`는 빠르게, `6`은 느리게 만드는 버튼입니다.  
`9` makes it faster, and `6` makes it slower.

```blocks
player.onChat("9", function () {
    속도 = 100
    player.say("빠른 속도!")
})

player.onChat("6", function () {
    속도 = 1000
    player.say("느린 속도!")
})
```

### 테스트 | Test

`9`와 `6`을 입력하고 메시지가 다른지 확인하세요.  
Type `9` and `6` and check the messages.

## Step 4

### 0번: 멈춤 버튼 | Number 0: Stop Button

무한으로 계속되는 코드는 반드시 멈춤 버튼이 필요합니다.  
A forever code must always have a stop button.

```blocks
player.onChat("0", function () {
    양털시작 = false
    player.say("멈춤!")
})
```

### 테스트 | Test

`0`을 입력하면 멈춤 메시지가 나오는지 확인하세요.  
Type `0` and check the stop message.

## Step 5

### 무한 반복 만들기 | Make the Forever Loop

양털시작이 true일 때만 양털이 한 칸씩 생기게 만드세요.  
Place one wool block at a time only when 양털시작 is true.

```blocks
loops.forever(function () {
    if (양털시작) {
        blocks.place(
            양털목록[양털번호 % 양털목록.length],
            positions.add(player.position(), pos(양털번호, -1, 0))
        )
        양털번호 += 1
        loops.pause(속도)
    }
})
```

### 테스트 | Test

`8`로 시작하고, `9`와 `6`으로 속도를 바꾸고, 마지막에는 꼭 `0`으로 멈추세요.  
Start with `8`, change speed with `9` and `6`, and always stop with `0`.

## Step 6

### 안전한 테스트 | Safe Testing

이 코드는 계속 블록을 만들 수 있습니다. 넓은 곳에서 테스트하고, 끝나면 반드시 `0`을 입력하세요.  
This code can keep placing blocks. Test it in a wide area and always type `0` when you finish.

```ghost
loops.pause(500)
blocks.place(WHITE_WOOL, positions.add(player.position(), pos(0, -1, 0)))
```

### 테스트 | Test

친구와 함께 안전한 테스트 공간을 정하세요.  
Choose a safe testing area with your friend.
