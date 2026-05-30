# 🐔 색이 다른 닭 만들기 |

```template
let 랜덤숫자 = 0
let 흰색닭수 = 0
let 갈색닭수 = 0
let 보라색닭수 = 0
```

## 시작하기 | Introduction @showdialog

이번 수업에서는 닭을 소환하고, 명령어를 사용해 닭의 색을 바꾸어 봅니다.  
In this lesson, we will spawn chickens and use commands to change their colors.

오늘 배울 내용 | What we will learn:

- 닭 1마리 소환하기 / Spawn one chicken
- 기다리기 블록 사용하기 / Use pause
- `player.execute` 명령어 사용하기 / Use player.execute commands
- 따뜻한 닭과 차가운 닭 만들기 / Make warm and cold chickens
- 랜덤과 조건문으로 닭 100마리 만들기 / Use random numbers and if statements to spawn 100 chickens
- 흰색 닭, 갈색 닭, 보라색 닭 수 세기 / Count white, brown, and purple chickens

---

## Step 1. 닭 1마리 소환하기 | Spawn One Chicken

채팅창에 `1`을 입력하면 닭 1마리가 소환되게 합니다.  
When you type `1` in chat, one chicken will spawn.

```blocks
player.onChat("1", function () {
    mobs.spawn(CHICKEN, pos(0, 0, 0))
})
```

### 확인하기 | Check

채팅창에 `1`을 입력했을 때 닭이 1마리 나오나요?  
When you type `1`, does one chicken appear?

---

## Step 2. 1초 기다렸다가 닭 한 마리 더 소환하기 | Spawn Another Chicken After 1 Second

이번에는 닭을 소환한 뒤 1초 기다렸다가 닭을 한 마리 더 소환합니다.  
Now spawn one chicken, wait 1 second, and spawn another chicken.

`loops.pause(1000)`은 1000ms, 즉 1초 기다리기입니다.  
`loops.pause(1000)` means wait for 1000ms, or 1 second.

```blocks
player.onChat("1", function () {
    mobs.spawn(CHICKEN, pos(0, 0, 0))
    loops.pause(1000)
    mobs.spawn(CHICKEN, pos(0, 0, 0))
})
```

### 확인하기 | Check

첫 번째 닭이 나오고 1초 뒤에 두 번째 닭이 나오나요?  
Does the second chicken appear 1 second after the first chicken?

---

## Step 3. 갈색 닭 만들기 | Make a Brown Chicken

이번에는 닭을 소환한 뒤 명령어를 실행해서 다른 색의 닭을 만들어 봅니다.  
Now spawn a chicken and run a command to change its color.

갈색 닭을 만들 때는 `minecraft:hatch_warm` 이벤트를 사용합니다.  
To make a brown chicken, use the `minecraft:hatch_warm` event.

```blocks
player.onChat("brown", function () {
    mobs.spawn(CHICKEN, pos(0, 0, 0))
    player.execute(
    "event " + "entity " + "@e[type=chicken,c=1] " + "minecraft:hatch_warm"
    )
})
```

### 띄어쓰기 확인 | Spacing Check

`player.execute` 안에서 만들어지는 명령어는 아래와 같아야 합니다.  
The command made inside `player.execute` should look like this:

```text
event entity @e[type=chicken,c=1] minecraft:hatch_warm
```

꼭 필요한 띄어쓰기:

```text
event[띄어쓰기]entity[띄어쓰기]@e[type=chicken,c=1][띄어쓰기]minecraft:hatch_warm
```

주의할 점:

- `event` 뒤에는 띄어쓰기 1칸이 필요합니다.
- `entity` 뒤에는 띄어쓰기 1칸이 필요합니다.
- `@e[type=chicken,c=1]` 뒤에는 띄어쓰기 1칸이 필요합니다.
- `@e[type=chicken,c=1]` 안의 `chicken,c=1` 사이에는 띄어쓰기를 넣지 않는 것이 좋습니다.

---

## Step 4. 보라색 닭 만들기 | Make a Purple Chicken

이번에는 `minecraft:hatch_cold` 이벤트를 사용합니다.  
Now use the `minecraft:hatch_cold` event.

```blocks
player.onChat("purple", function () {
    mobs.spawn(CHICKEN, pos(0, 0, 0))
    player.execute(
    "event " + "entity " + "@e[type=chicken,c=1] " + "minecraft:hatch_cold"
    )
})
```

### 띄어쓰기 확인 | Spacing Check

`player.execute` 안에서 만들어지는 명령어는 아래와 같아야 합니다.  
The command made inside `player.execute` should look like this:

```text
event entity @e[type=chicken,c=1] minecraft:hatch_cold
```

꼭 필요한 띄어쓰기:

```text
event[띄어쓰기]entity[띄어쓰기]@e[type=chicken,c=1][띄어쓰기]minecraft:hatch_cold
```

---

## Step 5. 흰색, 갈색, 보라색 닭 순서대로 만들기 | Spawn White, Brown, and Purple Chickens

이제 닭을 3마리 소환합니다.  
Now spawn three chickens.

1. 첫 번째 닭은 그냥 소환합니다. / The first chicken is spawned normally.
2. 두 번째 닭은 갈색 닭으로 바꿉니다. / The second chicken changes into a brown chicken.
3. 세 번째 닭은 보라색 닭으로 바꿉니다. / The third chicken changes into a purple chicken.

```blocks
player.onChat("1", function () {
    mobs.spawn(CHICKEN, pos(0, 0, 0))
    loops.pause(1000)
    mobs.spawn(CHICKEN, pos(0, 0, 0))
    player.execute(
    "event " + "entity " + "@e[type=chicken,c=1] " + "minecraft:hatch_warm"
    )
    loops.pause(1000)
    mobs.spawn(CHICKEN, pos(0, 0, 0))
    player.execute(
    "event " + "entity " + "@e[type=chicken,c=1] " + "minecraft:hatch_cold"
    )
})
```

### 확인하기 | Check

채팅창에 `1`을 입력하면 세 가지 닭이 순서대로 나오나요?  
When you type `1`, do three different chickens appear in order?

---

## Step 6. 닭 수를 세는 변수 만들기 | Make Variables to Count Chickens

이번에는 닭이 몇 마리 나왔는지 세어 봅니다.  
Now count how many chickens appear.

흰색 닭, 갈색 닭, 보라색 닭 수를 저장할 변수를 만듭니다.  
Create variables to store the number of white, brown, and purple chickens.

```blocks
let 랜덤숫자 = 0
let 흰색닭수 = 0
let 갈색닭수 = 0
let 보라색닭수 = 0
```

### 확인하기 | Check

변수 4개가 보이나요?  
Can you see the four variables?

- `랜덤숫자`
- `흰색닭수`
- `갈색닭수`
- `보라색닭수`

---

## Step 7. 랜덤으로 닭 1마리 만들기 | Spawn One Random Chicken

이번에는 랜덤 숫자를 사용합니다.  
Now use a random number.

`randint(1, 3)`은 1, 2, 3 중 하나를 랜덤으로 고릅니다.  
`randint(1, 3)` randomly chooses 1, 2, or 3.

- 1이면 흰색 닭 / If it is 1, spawn a white chicken.
- 2이면 갈색 닭 / If it is 2, spawn a brown chicken.
- 3이면 보라색 닭 / If it is 3, spawn a purple chicken.

```blocks
let 랜덤숫자 = 0
let 흰색닭수 = 0
let 갈색닭수 = 0
let 보라색닭수 = 0
player.onChat("random1", function () {
    랜덤숫자 = randint(1, 3)
    if (랜덤숫자 == 1) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
        흰색닭수 += 1
    } else if (랜덤숫자 == 2) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
        player.execute(
        "event " + "entity " + "@e[type=chicken,c=1] " + "minecraft:hatch_warm"
        )
        갈색닭수 += 1
    } else {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
        player.execute(
        "event " + "entity " + "@e[type=chicken,c=1] " + "minecraft:hatch_cold"
        )
        보라색닭수 += 1
    }
    player.say("흰색 닭: " + 흰색닭수)
    player.say("갈색 닭: " + 갈색닭수)
    player.say("보라색 닭: " + 보라색닭수)
})
```

### 확인하기 | Check

`random1`을 여러 번 입력하면 닭 색과 숫자가 바뀌나요?  
When you type `random1` several times, do the chicken colors and numbers change?

---

## Step 8. 랜덤으로 닭 100마리 만들기 | Spawn 100 Random Chickens

이번에는 자동으로 닭 100마리를 소환합니다.  
Now automatically spawn 100 chickens.

각 닭은 랜덤으로 흰색, 갈색, 보라색 중 하나가 됩니다.  
Each chicken randomly becomes white, brown, or purple.

```blocks
let 랜덤숫자 = 0
let 흰색닭수 = 0
let 갈색닭수 = 0
let 보라색닭수 = 0
player.onChat("100", function () {
    흰색닭수 = 0
    갈색닭수 = 0
    보라색닭수 = 0
    for (let index = 0; index < 100; index++) {
        랜덤숫자 = randint(1, 3)
        if (랜덤숫자 == 1) {
            mobs.spawn(CHICKEN, pos(0, 0, 0))
            흰색닭수 += 1
        } else if (랜덤숫자 == 2) {
            mobs.spawn(CHICKEN, pos(0, 0, 0))
            player.execute(
            "event " + "entity " + "@e[type=chicken,c=1] " + "minecraft:hatch_warm"
            )
            갈색닭수 += 1
        } else {
            mobs.spawn(CHICKEN, pos(0, 0, 0))
            player.execute(
            "event " + "entity " + "@e[type=chicken,c=1] " + "minecraft:hatch_cold"
            )
            보라색닭수 += 1
        }
        loops.pause(50)
    }
    player.say("흰색 닭: " + 흰색닭수)
    player.say("갈색 닭: " + 갈색닭수)
    player.say("보라색 닭: " + 보라색닭수)
})
```

### 확인하기 | Check

채팅창에 `100`을 입력하면 닭 100마리가 자동으로 나오나요?  
When you type `100`, do 100 chickens appear automatically?

마지막에 흰색 닭, 갈색 닭, 보라색 닭 수가 표시되나요?  
At the end, are the numbers of white, brown, and purple chickens shown?

---

## Step 9. 명령어 띄어쓰기 정리 | Command Spacing Summary

닭 색을 바꾸는 명령어는 띄어쓰기가 중요합니다.  
Spacing is important when changing chicken colors.

### 갈색 닭 명령어 | Brown Chicken Command

```text
event entity @e[type=chicken,c=1] minecraft:hatch_warm
```

### 보라색 닭 명령어 | Purple Chicken Command

```text
event entity @e[type=chicken,c=1] minecraft:hatch_cold
```

### 잘못 쓰기 쉬운 부분 | Common Mistakes

아래처럼 `chicken, c=1` 사이에 띄어쓰기를 넣지 마세요.  
Do not put a space between `chicken,` and `c=1`.

```text
@e[type=chicken, c=1]
```

아래처럼 쓰는 것이 좋습니다.  
Use this form instead.

```text
@e[type=chicken,c=1]
```

또한 `@e[type=chicken,c=1]` 뒤에는 반드시 띄어쓰기 1칸이 있어야 합니다.  
Also, there must be one space after `@e[type=chicken,c=1]`.

```text
@e[type=chicken,c=1] minecraft:hatch_warm
@e[type=chicken,c=1] minecraft:hatch_cold
```

### 미션 완료 | Mission Complete

축하합니다!  
Congratulations!

이제 여러분은 닭을 소환하고, 색을 바꾸고, 랜덤으로 100마리를 만든 뒤 종류별 개수까지 셀 수 있습니다.  
Now you can spawn chickens, change their colors, randomly create 100 chickens, and count each type.
