# NLCS Composter Advanced Missions

```template
let compostCharge = 0
```

## Introduction | 소개 @showdialog

You finished the basic composter lesson. Great work!  
기본 퇴비통 수업을 끝냈다면 이제 심화 미션에 도전해 봅시다.

In this challenge, the composter becomes an **energy machine**.  
이번 심화에서는 퇴비통을 **에너지 충전 장치**처럼 사용합니다.

You will practice:  
오늘 연습할 내용:

- Variables | 변수
- Conditions | 조건문
- Random numbers | 랜덤 숫자
- Win and fail rules | 성공 조건과 실패 조건
- Block data values | 블록 데이터값
- Creating and removing blocks | 블록 생성과 제거

The composter position is always:

```text
pos(1, 0, 0)
```

That means the composter appears one block to the right of the player.  
즉, 플레이어 기준 오른쪽 한 칸 위치에 퇴비통이 생깁니다.

---

## Advanced 1 | 심화 1

### Composter Charge Game | 퇴비통 충전 게임

In this mission, type `7` to start the game.  
이번 미션에서는 `7`을 입력하면 게임이 시작됩니다.

Then type `8` again and again to charge the composter.  
그다음 `8`을 여러 번 입력해서 퇴비통을 충전합니다.

Goal: Reach charge level `8`.  
목표: 충전 레벨 `8`에 도착하기.

When you reach level `8`:  
레벨 `8`이 되면:

- You get 8 bone meal. | 뼛가루 8개를 받습니다.
- The composter disappears. | 퇴비통이 사라집니다.
- An emerald block appears above the player. | 플레이어 위에 에메랄드 블록이 나타납니다.

---

## Step 1

### Start the Charge Game | 충전 게임 시작하기

Create command `7`.  
`7` 명령어를 만들어 봅시다.

When you type `7`, the game should:  
`7`을 입력하면 다음 일이 일어나야 합니다.

1. Place an empty composter. | 빈 퇴비통을 놓습니다.
2. Clear the block above the player. | 플레이어 위쪽 블록을 비웁니다.
3. Set `compostCharge` to `0`. | `compostCharge`를 `0`으로 만듭니다.
4. Show start messages. | 시작 안내 메시지를 보여줍니다.

```blocks
let compostCharge = 0

player.onChat("7", function () {
    blocks.place(blocks.blockWithData(COMPOSTER, 0), pos(1, 0, 0))
    blocks.place(AIR, pos(0, 1, 0))
    compostCharge = 0
    player.say("Advanced 1: Composter charge game started!")
    player.say("Type 8 to charge the composter.")
})
```

### Test | 테스트

Type `7`.  
`7`을 입력해 보세요.

Check that the composter appears at `pos(1, 0, 0)`.  
`pos(1, 0, 0)` 위치에 퇴비통이 생기는지 확인하세요.

---

## Step 2

### Charge the Composter | 퇴비통 충전하기

Now create command `8`.  
이제 `8` 명령어를 만들어 봅시다.

Important rule:  
중요한 규칙:

The code must work **only when a composter exists**.  
퇴비통이 있을 때만 코드가 작동해야 합니다.

If there is no composter, show this message:  
퇴비통이 없다면 이렇게 말하게 만드세요.

```text
No composter found. Type 7 first.
```

If the composter exists, increase the charge by 1.  
퇴비통이 있다면 충전값을 1씩 올립니다.

```blocks
player.onChat("8", function () {
    let composterCheck = false

    if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 0), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 1), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 2), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 3), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 4), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 5), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 6), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 7), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 8), pos(1, 0, 0))) {
        composterCheck = true
    }

    if (composterCheck == false) {
        player.say("No composter found.")
        player.say("Type 7 first.")
    } else {
        if (compostCharge < 8) {
            compostCharge += 1
            blocks.place(blocks.blockWithData(COMPOSTER, compostCharge), pos(1, 0, 0))
            player.say("Charge level: " + compostCharge)
        }

        if (compostCharge == 8) {
            player.say("Charge complete! Compost energy MAX!")
            mobs.give(mobs.target(LOCAL_PLAYER), BONE_MEAL, 8)
            blocks.place(AIR, pos(1, 0, 0))
            blocks.place(EMERALD_BLOCK, pos(0, 1, 0))
            player.say("Reward unlocked: Emerald block!")
        }
    }
})
```

### Test | 테스트

1. Type `8` before typing `7`.  
   `7`을 입력하기 전에 `8`을 먼저 입력해 보세요.

2. You should see a warning message.  
   경고 메시지가 나와야 합니다.

3. Type `7`, then type `8` eight times.  
   `7`을 입력한 뒤 `8`을 8번 입력해 보세요.

4. Check the reward.  
   보상이 나오는지 확인하세요.

---

## Advanced 2 | 심화 2

### Overcharge Danger Game | 과충전 위험 게임

In this mission, type `9` to start the game.  
이번 미션에서는 `9`를 입력하면 게임이 시작됩니다.

Then type `10` to charge the composter randomly by `1`, `2`, or `3`.  
그다음 `10`을 입력하면 퇴비통이 랜덤으로 `1`, `2`, `3`만큼 충전됩니다.

Goal: Reach exactly `8`.  
목표: 정확히 `8`에 도착하기.

Rules:  
규칙:

- Exactly `8` = success | 정확히 `8` = 성공
- More than `8` = fail | `8`보다 크면 실패

When you succeed:  
성공하면:

- You get 1 diamond. | 다이아몬드 1개를 받습니다.
- The composter disappears. | 퇴비통이 사라집니다.
- A gold block appears above the player. | 플레이어 위에 금 블록이 나타납니다.

When you fail:  
실패하면:

- The charge goes back to 0. | 충전값이 0으로 돌아갑니다.
- The composter returns to level 0. | 퇴비통이 0레벨로 돌아갑니다.
- Fire appears above the composter. | 퇴비통 위에 불이 생깁니다.

---

## Step 3

### Start the Overcharge Game | 과충전 게임 시작하기

Create command `9`.  
`9` 명령어를 만들어 봅시다.

```blocks
player.onChat("9", function () {
    blocks.place(blocks.blockWithData(COMPOSTER, 0), pos(1, 0, 0))
    blocks.place(AIR, pos(0, 1, 0))
    compostCharge = 0
    player.say("Advanced 2: Overcharge danger game started!")
    player.say("Type 10 to charge randomly by 1 to 3.")
    player.say("Reach exactly 8 to win!")
})
```

### Test | 테스트

Type `9`.  
`9`를 입력해 보세요.

The composter should reset to level `0`.  
퇴비통이 0레벨로 다시 시작해야 합니다.

---

## Step 4

### Random Charge | 랜덤 충전하기

Create command `10`.  
`10` 명령어를 만들어 봅시다.

This command checks if the composter exists.  
이 명령어도 퇴비통이 있는지 먼저 확인합니다.

Then it chooses a random power from `1` to `3`.  
그다음 `1`부터 `3`까지 랜덤 충전량을 뽑습니다.

```blocks
player.onChat("10", function () {
    let composterCheck = false

    if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 0), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 1), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 2), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 3), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 4), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 5), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 6), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 7), pos(1, 0, 0))) {
        composterCheck = true
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 8), pos(1, 0, 0))) {
        composterCheck = true
    }

    if (composterCheck == false) {
        player.say("No composter found.")
        player.say("Type 9 first.")
    } else {
        let power = randint(1, 3)
        compostCharge += power

        player.say("Power: +" + power)
        player.say("Energy: " + compostCharge)

        if (compostCharge == 8) {
            player.say("Perfect 8! Success!")
            mobs.give(mobs.target(LOCAL_PLAYER), DIAMOND, 1)
            blocks.place(AIR, pos(1, 0, 0))
            blocks.place(GOLD_BLOCK, pos(0, 1, 0))
            player.say("Reward unlocked: Gold block!")
        } else if (compostCharge > 8) {
            compostCharge = 0
            blocks.place(blocks.blockWithData(COMPOSTER, 0), pos(1, 0, 0))
            blocks.place(FIRE, pos(1, 1, 0))
            player.say("Overcharged! Energy reset!")
        } else {
            blocks.place(blocks.blockWithData(COMPOSTER, compostCharge), pos(1, 0, 0))
            player.say("Keep charging!")
        }
    }
})
```

### Test | 테스트

1. Type `10` before typing `9`.  
   `9`를 입력하기 전에 `10`을 먼저 입력해 보세요.

2. You should see a warning message.  
   경고 메시지가 나와야 합니다.

3. Type `9`, then type `10` until you win or fail.  
   `9`를 입력한 뒤 `10`을 반복해서 성공 또는 실패를 확인하세요.

---

## Step 5

### Challenge Ideas | 도전 아이디어

You finished both advanced missions.  
두 개의 심화 미션을 모두 완성했습니다.

Now try changing the rules.  
이제 게임 규칙을 직접 바꿔 봅시다.

### Challenge 1 | 도전 1

Change the emerald block reward in Advanced 1 to a diamond block.  
심화 1의 에메랄드 블록 보상을 다이아몬드 블록으로 바꿔 보세요.

```ghost
blocks.place(DIAMOND_BLOCK, pos(0, 1, 0))
```

### Challenge 2 | 도전 2

Change the random power from `1~3` to `1~4`.  
랜덤 충전량을 `1~3`에서 `1~4`로 바꿔 보세요.

Will the game become easier or harder?  
게임이 쉬워질까요, 어려워질까요?

```ghost
let power = randint(1, 4)
```

### Challenge 3 | 도전 3

When you fail, change fire into lava.  
실패했을 때 불 대신 용암이 나오게 바꿔 보세요.

```ghost
blocks.place(LAVA, pos(1, 1, 0))
```

---

## Wrap Up | 정리 @showdialog

Great job! You completed the composter advanced missions.  
잘했습니다! 퇴비통 심화 미션을 완료했습니다.

Today you practiced:  
오늘 연습한 내용:

- Variables | 변수
- Conditions | 조건문
- Random numbers | 랜덤 숫자
- Success rules | 성공 조건
- Failure rules | 실패 조건
- Block data values | 블록 데이터값

Advanced 1 was a careful charging game.  
심화 1은 차근차근 충전하는 게임이었습니다.

Advanced 2 was a random danger game.  
심화 2는 랜덤과 위험이 있는 게임이었습니다.
