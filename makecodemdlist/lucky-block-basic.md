# Lucky Block Mini Game

```template
player.onChat("", function () {
})
```

## Step 1

### 럭키블록 만들기 | Make a Lucky Block

채팅창에 `lucky`를 입력하면 내 앞에 금 블록이 나타나게 만드세요.  
Type `lucky` in the chat to make a gold block appear in front of you.

```blocks
player.onChat("lucky", function () {
    blocks.place(GOLD_BLOCK, pos(0, 0, 2))
})
```

## Step 2

### 럭키블록 열기 | Open the Lucky Block

이번에는 럭키블록을 열고 보상을 받아 봅시다.  
채팅창에 `open`을 입력하면 다이아몬드 1개를 받게 만드세요.  

Now, let's open the Lucky Block and get a reward.  
Type `open` in the chat to receive one diamond.

💡 **힌트 | Hint**  
새로운 채팅 명령어 `open`을 만들고, 플레이어에게 다이아몬드를 주는 블록을 넣으세요.  
Create a new chat command called `open`, and add the block that gives a diamond to the player.

```blocks
player.onChat("open", function () {
    mobs.give(
        mobs.target(LOCAL_PLAYER),
        DIAMOND,
        1
    )
})

```

## Step 3

### 랜덤 숫자 만들기 | Make a Random Number

이제 럭키블록의 결과를 랜덤으로 만들어 봅시다.  
`open` 명령어 안의 다이아몬드 지급 블록을 잠시 빼고, `number` 변수를 만들어 주세요.  
`number`에는 `1`부터 `4`까지의 랜덤 숫자가 들어갑니다.

Now, let's make the Lucky Block result random.  
Temporarily remove the diamond reward block inside the `open` command and create a variable called `number`.  
The variable `number` will choose a random number from `1` to `4`.

💡 **힌트 | Hint**  
채팅창에 `open`을 입력할 때마다 다른 숫자가 나오는지 확인하세요.  
Type `open` several times and check whether a different number appears each time.
```blocks
player.onChat("open", function () {
    let number = randint(1, 4)
    player.say("Number: " + number)
})
```

## Step 4

### 두 가지 랜덤 결과 만들기 | Make Two Random Results

이제 럭키블록에서 두 가지 결과가 나오게 만들어 봅시다.  
`number`가 `1`이면 다이아몬드를 받고, 그렇지 않으면 닭이 나타나게 만드세요.

Now, let's make two different results for the Lucky Block.  
If `number` is `1`, receive a diamond. Otherwise, make a chicken appear.

💡 **힌트 | Hint**  
`if`는 "만약 ~라면", `else`는 "그렇지 않다면"이라는 뜻입니다.  
`if` means "if this happens," and `else` means "otherwise."

```blocks
player.onChat("open", function () {
    let number = randint(1, 2)
    if (number == 1) {
        mobs.give(
            mobs.target(LOCAL_PLAYER),
            DIAMOND,
            1
        )
        player.say("Diamond!")
    } else {
        mobs.spawn(CHICKEN, pos(0, 0, 2))
        player.say("Chicken!")
    }
})
```

## Step 5

### 네 가지 랜덤 결과 만들기 | Make Four Random Results

럭키블록을 더 재미있게 만들어 봅시다!  
이번에는 결과를 네 가지로 늘려 보세요.

Let's make the Lucky Block more exciting!  
This time, increase the number of possible results to four.

| Number | Result |
| --- | --- |
| 1 | Diamond |
| 2 | Chicken |
| 3 | TNT |
| 4 | Speed Power |

💡 **힌트 | Hint**  
새로운 결과를 추가할 때는 `else if` 블록을 사용합니다.  
Use an `else if` block when you want to add another possible result.

```blocks
player.onChat("open", function () {
    let number = randint(1, 4)
    if (number == 1) {
        mobs.give(
            mobs.target(LOCAL_PLAYER),
            DIAMOND,
            1
        )
        player.say("Diamond!")
    } else if (number == 2) {
        mobs.spawn(CHICKEN, pos(0, 0, 2))
        player.say("Chicken!")
    } else if (number == 3) {
        blocks.place(TNT, pos(0, 0, 2))
        player.say("TNT!")
    } else {
        mobs.applyEffect(
            SPEED,
            mobs.target(LOCAL_PLAYER),
            10,
            1
        )
        player.say("Speed Power!")
    }
})

```
## Step 6

### 나만의 럭키블록 만들기 | Create Your Own Lucky Block

이제 여러분만의 특별한 럭키블록을 만들어 봅시다!  
Step 5의 결과 중 하나를 골라서 새로운 결과로 바꾸세요.

Now, create your own special Lucky Block!  
Choose one result from Step 5 and replace it with a new result.

### 선택할 수 있는 결과 | Choose a New Result

| Choice | New Result |
| --- | --- |
| A | Pig Surprise |
| B | Emerald Bonus |
| C | Jump Power |

💡 **힌트 | Hint**  
먼저 `TNT` 결과나 `Speed Power` 결과 중 하나를 지우고, 아래 예시 중 하나로 바꾸어 보세요.  
First, remove either the `TNT` result or the `Speed Power` result, and replace it with one of the examples below.

### A. 돼지 서프라이즈 | Pig Surprise

```blocks
mobs.spawn(PIG, pos(0, 0, 2))
player.say("Pig Surprise!")
```

### B. 에메랄드 보너스 | Emerald Bonus

```blocks
mobs.give(
    mobs.target(LOCAL_PLAYER),
    EMERALD,
    3
)
player.say("Emerald Bonus!")
```

### C. 점프 파워 | Jump Power

```blocks
mobs.applyEffect(
    JUMP_BOOST,
    mobs.target(LOCAL_PLAYER),
    10,
    2
)
player.say("Jump Power!")
```

## Final Test

채팅창에 `lucky`를 입력하여 럭키블록을 만들고,  
`open`을 여러 번 입력하여 여러분의 새로운 결과가 나오는지 확인하세요!

Type `lucky` in the chat to create your Lucky Block.  
Then type `open` several times and check whether your new result appears!

