# 1일차. 숫자 명령어와 동물 소환 | Day 1. Number Commands and Animals
```template
//
```
## 오늘의 미션 | Today's Mission @showdialog

오늘은 채팅창에 숫자를 입력해서 인사하고, 동물을 소환하는 코드를 만들어 봅니다.  
Today, we will type numbers in the chat to say hello and spawn animals.

채팅창에 숫자를 입력하면 코드가 실행됩니다.  
Type a number in the chat to run your code.

준비가 되었다면 **확인**을 눌러 시작하세요!  
Press **OK** when you are ready to begin!

## Step 1

### 1번: 인사하기 | Number 1: Say Hello

채팅창에 `1`을 입력하면 내 캐릭터가 인사하게 만드세요.  
Type `1` in the chat to make your player say hello.

```blocks
player.onChat("1", function () {
    player.say("안녕하세요!")
})
```

### 테스트 | Test

채팅창에 `1`을 입력해 보세요.  
Type `1` in the chat.

## Step 2

### 2번: 닭 소환하기 | Number 2: Spawn a Chicken

채팅창에 `2`를 입력하면 내 위치에 닭이 나오게 만드세요.  
Type `2` to spawn a chicken at your position.

```blocks
player.onChat("2", function () {
    mobs.spawn(CHICKEN, player.position())
})
```

### 테스트 | Test

`2`를 입력하고 닭이 나오는지 확인하세요.  
Type `2` and check for a chicken.

## Step 3

### 3번: 돼지 소환하기 | Number 3: Spawn a Pig

이번에는 `3`을 입력하면 돼지가 나오게 만드세요.  
This time, type `3` to spawn a pig.

```blocks
player.onChat("3", function () {
    mobs.spawn(PIG, player.position())
})
```

### 테스트 | Test

`3`을 입력하고 돼지가 나오는지 확인하세요.  
Type `3` and check for a pig.

## Step 4

### 4번: 동물쇼 만들기 | Number 4: Animal Show

`4`를 입력하면 닭, 돼지, 양이 함께 나오게 만드세요.  
Type `4` to make a chicken, pig, and sheep appear together.

```blocks
player.onChat("4", function () {
    player.say("동물쇼 시작!")
    mobs.spawn(CHICKEN, player.position())
    mobs.spawn(PIG, player.position())
    mobs.spawn(SHEEP, player.position())
})
```

### 테스트 | Test

`4`를 입력하고 세 동물이 모두 나오는지 확인하세요.  
Type `4` and check whether all three animals appear.

## Step 5

### 나만의 동물쇼 | My Animal Show

이번 단계는 정답 힌트가 없습니다. `4`번 동물쇼에 내가 좋아하는 동물을 1마리 더 추가해 보세요.  
There is no answer hint in this step. Add one more animal you like to the animal show.

```ghost
mobs.spawn(COW, player.position())
mobs.spawn(RABBIT, player.position())
player.say("My Animal Show!")
```

### 테스트 | Test

친구에게 내가 만든 동물쇼를 보여주세요.  
Show your animal show to a friend.
