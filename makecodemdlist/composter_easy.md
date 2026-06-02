# ♻️ 퇴비통 레드스톤 실험 | Composter Redstone Lab

```template
player.onChat("1", function () {
})
```

## 시작하기 | Introduction @showdialog

이번 수업에서는 **퇴비통**이 레드스톤 신호를 만들 수 있다는 것을 실험합니다.  
In this lesson, we will test how a **composter** can create a redstone signal.

오늘 배울 내용 | What we will learn:

- 퇴비통 설치하기 / Place a composter
- 씨앗으로 퇴비통 채우기 / Fill the composter with seeds
- 레드스톤 회로 만들기 / Build a redstone circuit
- 퇴비통 레벨 바꾸기 / Change the composter level
- 랜덤 레벨 만들기 / Create a random level
- 조건문으로 레벨 확인하기 / Check the level with if statements
- 레벨 0부터 8까지 자동으로 보여주기 / Show levels 0 to 8 automatically

중요한 실험 포인트 | Important experiment point:

> 퇴비통의 안이 얼마나 차 있는지에 따라 레드스톤 신호가 달라집니다.  
> The redstone signal changes depending on how full the composter is.

---

## Step 1. 퇴비통 설치하고 씨앗 받기 | Place a Composter and Get Seeds

채팅창에 `1`을 입력하면 퇴비통이 설치되고, 씨앗 64개를 받습니다.  
When you type `1` in chat, a composter is placed and you receive 64 wheat seeds.

씨앗을 퇴비통에 넣어 보세요.  
Try putting the seeds into the composter.

퇴비통이 차면 뼛가루가 나올 수 있습니다.  
When the composter becomes full, it can produce bone meal.

```blocks
player.onChat("1", function () {
    blocks.place(COMPOSTER, pos(1, 0, 0))
    mobs.give(mobs.target(LOCAL_PLAYER), WHEAT_SEEDS, 64)
    player.say("Step 1: Composter placed.")
    player.say("You received 64 wheat seeds.")
    player.say("Put seeds into the composter and check if bone meal appears.")
})
```

### 확인하기 | Check

- 퇴비통이 생겼나요? / Did the composter appear?
- 씨앗 64개를 받았나요? / Did you receive 64 seeds?
- 씨앗을 넣으면 퇴비통이 차오르나요? / Does the composter fill up when you add seeds?

---

## Step 2. 레드스톤 테스트 회로 만들기 | Build a Redstone Test Circuit

채팅창에 `2`를 입력하면 퇴비통, 레드스톤 가루, 레드스톤 램프가 설치됩니다.  
When you type `2` in chat, a composter, redstone dust, and a redstone lamp are placed.

단, **비교기**는 학생이 직접 놓습니다.  
However, students should place the **comparator** by themselves.

비교기를 놓을 때는 방향이 중요합니다.  
The direction of the comparator is important.

> 비교기의 뒤쪽이 퇴비통을 향해야 합니다.  
> The back of the comparator should face the composter.

```blocks
player.onChat("2", function () {
    blocks.place(COMPOSTER, pos(1, 0, 0))

    blocks.place(REDSTONE_WIRE, pos(3, 0, 0))
    blocks.place(REDSTONE_WIRE, pos(4, 0, 0))
    blocks.place(REDSTONE_WIRE, pos(5, 0, 0))
    blocks.place(REDSTONE_WIRE, pos(6, 0, 0))
    blocks.place(REDSTONE_WIRE, pos(7, 0, 0))
    blocks.place(REDSTONE_WIRE, pos(8, 0, 0))

    blocks.place(REDSTONE_LAMP, pos(9, 0, 0))

    player.say("Step 2: Redstone test circuit created.")
    player.say("Place a comparator between the composter and the redstone dust.")
    player.say("The back of the comparator should face the composter.")
})
```

### 비교기 놓는 위치 | Where to Place the Comparator

퇴비통과 레드스톤 가루 사이에 비교기를 놓습니다.  
Place the comparator between the composter and the redstone dust.

```text
퇴비통 → 비교기 → 레드스톤 가루 → 레드스톤 램프
Composter → Comparator → Redstone Dust → Redstone Lamp
```

---

## Step 3. 퇴비통 레벨 바꾸기 | Change the Composter Level

채팅창에 `3`을 입력하면 퇴비통 레벨이 순서대로 바뀝니다.  
When you type `3` in chat, the composter level changes in order.

- 레벨 0 / Level 0
- 레벨 4 / Level 4
- 레벨 8 / Level 8

각 레벨마다 레드스톤 신호가 어떻게 달라지는지 관찰하세요.  
Observe how the redstone signal changes at each level.

```blocks
player.onChat("3", function () {
    blocks.place(blocks.blockWithData(COMPOSTER, 0), pos(1, 0, 0))
    player.say("Step 3: Composter level 0.")
    loops.pause(1000)

    blocks.place(blocks.blockWithData(COMPOSTER, 4), pos(1, 0, 0))
    player.say("Step 3: Composter level 4.")
    loops.pause(1000)

    blocks.place(blocks.blockWithData(COMPOSTER, 8), pos(1, 0, 0))
    player.say("Step 3: Composter level 8.")
})
```

### 생각하기 | Think

레벨이 높아지면 레드스톤 신호는 어떻게 바뀌나요?  
What happens to the redstone signal when the level gets higher?

---

## Step 4. 랜덤 퇴비통 레벨 만들기 | Create a Random Composter Level

채팅창에 `4`를 입력하면 퇴비통 레벨이 0부터 8 사이에서 랜덤으로 정해집니다.  
When you type `4` in chat, the composter level is randomly chosen from 0 to 8.

랜덤 레벨을 여러 번 만들어 보고, 레드스톤 신호가 얼마나 가는지 확인하세요.  
Try several random levels and check how far the redstone signal travels.

```blocks
player.onChat("4", function () {
    let level = randint(0, 8)
    blocks.place(blocks.blockWithData(COMPOSTER, level), pos(1, 0, 0))
    player.say("Step 4: Random composter level is " + level + ".")
    player.say("Check how far the redstone signal travels.")
})
```

### 확인하기 | Check

- 랜덤 숫자가 0부터 8 사이로 나오나요? / Is the random number between 0 and 8?
- 레벨이 높을수록 신호가 더 멀리 가나요? / Does the signal travel farther when the level is higher?
- 레드스톤 램프가 켜질 때와 안 켜질 때가 있나요? / Are there times when the redstone lamp turns on or stays off?

---

## Step 5. 퇴비통 레벨 확인하기 | Check the Composter Level

이번 단계는 학생 화면에 정답처럼 바로 공개하지 않습니다.  
This step is not shown directly as an answer to students.

필요한 블록은 `ghost`로 준비되어 있습니다.  
The needed blocks are prepared as `ghost`.

이 코드는 현재 퇴비통 레벨을 확인하고, 레벨에 따라 다른 결과를 보여줍니다.  
This code checks the current composter level and shows a different result depending on the level.

```ghost
player.onChat("5", function () {
    if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 8), pos(1, 0, 0))) {
        player.say("Step 5: Level 8! Maximum signal.")
        mobs.give(mobs.target(LOCAL_PLAYER), BONE_MEAL, 5)
        blocks.place(EMERALD_BLOCK, pos(1, 1, 0))
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 7), pos(1, 0, 0))) {
        player.say("Step 5: Level 7! Almost maximum signal.")
        mobs.give(mobs.target(LOCAL_PLAYER), BONE_MEAL, 2)
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 6), pos(1, 0, 0))) {
        player.say("Step 5: Level 6! Strong signal.")
        mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 5, 1)
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 5), pos(1, 0, 0))) {
        player.say("Step 5: Level 5! Good signal.")
        blocks.place(GOLD_BLOCK, pos(1, 1, 0))
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 4), pos(1, 0, 0))) {
        player.say("Step 5: Level 4! Medium signal.")
        blocks.place(IRON_BLOCK, pos(1, 1, 0))
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 3), pos(1, 0, 0))) {
        player.say("Step 5: Level 3! Weak signal.")
        mobs.give(mobs.target(LOCAL_PLAYER), APPLE, 1)
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 2), pos(1, 0, 0))) {
        player.say("Step 5: Level 2! Very weak signal.")
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 1), pos(1, 0, 0))) {
        player.say("Step 5: Level 1! Almost empty.")
    } else if (blocks.testForBlock(blocks.blockWithData(COMPOSTER, 0), pos(1, 0, 0))) {
        player.say("Step 5: Level 0! No signal.")
    } else {
        player.say("No composter found. Type 1 or 2 first.")
    }
})
```

### 관찰하기 | Observe

`5`를 입력하기 전에 `4`를 여러 번 실행해 보세요.  
Run `4` several times before typing `5`.

레벨에 따라 결과가 달라집니다.  
The result changes depending on the level.

---

## Step 6. 퇴비통 레드스톤 쇼 만들기 | Create a Composter Redstone Show

이번 단계도 학생 화면에 정답처럼 바로 공개하지 않습니다.  
This step is also not shown directly as an answer to students.

필요한 블록은 `ghost`로 준비되어 있습니다.  
The needed blocks are prepared as `ghost`.

이 코드는 퇴비통 레벨을 0부터 8까지 차례대로 바꾸어 보여줍니다.  
This code changes the composter level from 0 to 8 in order.

```ghost
player.onChat("6", function () {
    player.say("Step 6: Composter redstone show starts!")

    blocks.place(blocks.blockWithData(COMPOSTER, 0), pos(1, 0, 0))
    loops.pause(1000)

    blocks.place(blocks.blockWithData(COMPOSTER, 1), pos(1, 0, 0))
    loops.pause(1000)

    blocks.place(blocks.blockWithData(COMPOSTER, 2), pos(1, 0, 0))
    loops.pause(1000)

    blocks.place(blocks.blockWithData(COMPOSTER, 3), pos(1, 0, 0))
    loops.pause(1000)

    blocks.place(blocks.blockWithData(COMPOSTER, 4), pos(1, 0, 0))
    loops.pause(1000)

    blocks.place(blocks.blockWithData(COMPOSTER, 5), pos(1, 0, 0))
    loops.pause(1000)

    blocks.place(blocks.blockWithData(COMPOSTER, 6), pos(1, 0, 0))
    loops.pause(1000)

    blocks.place(blocks.blockWithData(COMPOSTER, 7), pos(1, 0, 0))
    loops.pause(1000)

    blocks.place(blocks.blockWithData(COMPOSTER, 8), pos(1, 0, 0))
    player.say("Step 6: Level 8! Maximum signal.")
})
```

### 관찰하기 | Observe

레벨이 0에서 8까지 올라갈 때 레드스톤 신호가 어떻게 변하는지 확인하세요.  
Observe how the redstone signal changes as the level rises from 0 to 8.

---

## 정리 | Summary

오늘은 퇴비통과 레드스톤 신호를 연결해 보았습니다.  
Today, we connected a composter to a redstone signal.

기억할 내용 | Remember:

- 퇴비통은 레벨을 가질 수 있습니다. / A composter can have levels.
- 레벨은 0부터 8까지 있습니다. / The level can be from 0 to 8.
- 비교기를 사용하면 퇴비통 레벨을 레드스톤 신호로 확인할 수 있습니다. / A comparator can read the composter level as a redstone signal.
- 랜덤 숫자를 사용하면 매번 다른 퇴비통 레벨을 만들 수 있습니다. / A random number can create a different composter level each time.
- 조건문을 사용하면 레벨에 따라 다른 결과를 만들 수 있습니다. / If statements can create different results depending on the level.

### 미션 완료 | Mission Complete

축하합니다!  
Congratulations!

퇴비통을 이용한 레드스톤 실험을 완료했습니다.  
You completed the composter redstone experiment.


