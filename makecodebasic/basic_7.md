# 7일차. 랜덤 동물비 | Day 7. Random Animal Rain
```template
//
```
## 오늘의 미션 | Today's Mission @showdialog

오늘은 랜덤 좌표를 사용해서 하늘에서 동물이 비처럼 떨어지는 코드를 만들어요.  
Today, we will use random positions to make animals fall from the sky like rain.

채팅창에 숫자를 입력하면 코드가 실행됩니다.  
Type a number in the chat to run your code.

준비가 되었다면 **확인**을 눌러 시작하세요!  
Press **OK** when you are ready to begin!

## Step 1

### 1번: 한 마리 하늘닭 | Number 1: One Sky Chicken

먼저 내 위에 닭 한 마리를 소환하세요.  
First, spawn one chicken above you.

```blocks
player.onChat("1", function () {
    mobs.spawn(CHICKEN, positions.add(player.position(), pos(0, 15, 0)))
})
```

### 테스트 | Test

`1`을 입력하고 닭이 위에서 나오는지 확인하세요.  
Type `1` and check the chicken above you.

## Step 2

### 2번: 랜덤 위치 닭 | Number 2: Chicken at Random Position

X와 Z를 랜덤으로 바꾸면 닭이 내 주변 여러 곳에서 나옵니다.  
Use random X and Z positions so the chicken appears around you.

```blocks
player.onChat("2", function () {
    mobs.spawn(CHICKEN, positions.add(
        player.position(),
        pos(randint(-5, 5), 15, randint(-5, 5))
    ))
})
```

### 테스트 | Test

`2`를 여러 번 입력하고 닭 위치가 달라지는지 확인하세요.  
Type `2` several times and check if the position changes.

## Step 3

### 3번: 랜덤 동물비 | Number 3: Random Animal Rain

반복문을 넣어 닭 15마리가 하늘에서 랜덤으로 나오게 만드세요.  
Add a loop to spawn 15 chickens randomly in the sky.

```blocks
player.onChat("3", function () {
    player.say("랜덤 동물비 시작!")
    for (let i = 0; i < 15; i++) {
        mobs.spawn(CHICKEN, positions.add(
            player.position(),
            pos(randint(-5, 5), 15, randint(-5, 5))
        ))
    }
})
```

### 테스트 | Test

`3`을 입력하고 동물비가 내리는지 보세요.  
Type `3` and watch the animal rain.

## Step 4

### 4번: 동물 바꾸기 | Number 4: Change the Animal

닭 대신 돼지나 양이 떨어지게 바꾸어 보세요.  
Change the animal from chicken to pig or sheep.

```blocks
player.onChat("4", function () {
    player.say("양 비 시작!")
    for (let i = 0; i < 10; i++) {
        mobs.spawn(SHEEP, positions.add(
            player.position(),
            pos(randint(-5, 5), 15, randint(-5, 5))
        ))
    }
})
```

### 테스트 | Test

`4`를 입력하고 어떤 동물이 떨어지는지 확인하세요.  
Type `4` and check which animal falls.

## Step 5

### 나만의 동물비 | My Own Animal Rain

반복 횟수, 높이, 동물 종류를 직접 바꾸어 나만의 동물비를 만드세요.  
Change the loop number, height, and animal type to create your own animal rain.

```ghost
randint(-10, 10)
mobs.spawn(PIG, positions.add(player.position(), pos(randint(-5, 5), 20, randint(-5, 5))))
```

### 테스트 | Test

너무 많이 소환하지 않도록 처음에는 10~15마리만 사용하세요.  
Use only 10 to 15 animals at first.
