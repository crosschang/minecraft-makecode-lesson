# 자동 작물 농장 만들기 | Automatic Crop Farm

## 소개 | Introduction @showdialog

오늘은 MakeCode로 **자동 작물 농장**을 만들어 봅니다.  
Today, we will build an **automatic crop farm** with MakeCode.

채팅창에 숫자를 입력하면 농장이 단계별로 만들어집니다.  
Type numbers in the chat to build the farm step by step.

- `1` = 기초 농장 | Basic Farm
- `2` = 중급 농장 | Middle Farm
- `3` = 고급 패턴 농장 | Advanced Pattern Farm
- `4` = 농장 꾸미기 | Farm Decoration

오늘 코드에서 채팅 메시지는 한국어로 나옵니다.  
The chat messages in today’s code will appear in Korean.

```template
player.onChat("1", function () {

})
```

---

## Step 1. 기초 농장 만들기 | Build the Basic Farm

먼저 `1`을 입력하면 기본 농장이 만들어지게 해 봅시다.  
First, let’s make command `1` build a basic farm.

이 단계에서는 `blocks.fill`을 사용합니다.  
In this step, we use `blocks.fill`.

`blocks.fill`은 넓은 공간을 한 번에 채우는 블록입니다.  
`blocks.fill` fills a large area at once.

이번 기초 농장은 이렇게 만들어집니다.  
The basic farm will look like this:

```text
왼쪽 밭 전체 = 비트
오른쪽 밭 전체 = 밀
가운데 = 물

Left field = Beetroot
Right field = Wheat
Middle = Water
```

```blocks
player.onChat("1", function () {
    blocks.fill(
        LOG_OAK,
        pos(1, 0, 0),
        pos(7, 0, 7),
        FillOperation.Replace
    )
    blocks.fill(
        WATER,
        pos(4, 0, 1),
        pos(4, 0, 6),
        FillOperation.Replace
    )
    blocks.fill(
        FARMLAND,
        pos(2, 0, 1),
        pos(3, 0, 6),
        FillOperation.Replace
    )
    blocks.fill(
        FARMLAND,
        pos(5, 0, 1),
        pos(6, 0, 6),
        FillOperation.Replace
    )
    blocks.fill(
        BEETROOT,
        pos(2, 1, 1),
        pos(3, 1, 6),
        FillOperation.Replace
    )
    blocks.fill(
        CROPS,
        pos(5, 1, 1),
        pos(6, 1, 6),
        FillOperation.Replace
    )
    player.say("기초 농장 완성!")
})
```

실행해 봅시다.  
Let’s test it.

```text
채팅창에 1 입력
Type 1 in the chat
```

확인할 것:  
Check:

- 나무 바닥이 만들어졌나요? | Did the wooden base appear?
- 가운데 물길이 생겼나요? | Is there a water line in the middle?
- 왼쪽은 비트, 오른쪽은 밀인가요? | Is beetroot on the left and wheat on the right?

---

## Step 2. 중급 농장 만들기 | Build the Middle Farm

이번에는 `2`를 입력하면 중급 농장이 만들어지게 해 봅시다.  
Now, let’s make command `2` build a middle-level farm.

중급 농장은 기초 농장보다 더 세밀합니다.  
The middle farm is more detailed than the basic farm.

이번 단계에서 추가할 것:  
Things we will add:

1. 물 위를 나뭇잎으로 덮기 | Cover the water with leaves
2. 퇴비통 설치하기 | Add a composter
3. 작물을 한 줄씩 다르게 심기 | Plant a different crop in each line

작물 줄은 이렇게 만듭니다.  
The crop lines will be:

```text
x = 2 : 비트 | Beetroot
x = 3 : 감자 | Potato
x = 4 : 물 + 나뭇잎 | Water + Leaves
x = 5 : 당근 | Carrot
x = 6 : 밀 | Wheat
```

```blocks
player.onChat("2", function () {
    blocks.fill(
        LOG_OAK,
        pos(1, 0, 0),
        pos(7, 0, 7),
        FillOperation.Replace
    )
    blocks.fill(
        WATER,
        pos(4, 0, 1),
        pos(4, 0, 6),
        FillOperation.Replace
    )
    blocks.fill(
        FARMLAND,
        pos(2, 0, 1),
        pos(3, 0, 6),
        FillOperation.Replace
    )
    blocks.fill(
        FARMLAND,
        pos(5, 0, 1),
        pos(6, 0, 6),
        FillOperation.Replace
    )
    blocks.fill(
        LEAVES_OAK,
        pos(4, 1, 1),
        pos(4, 1, 6),
        FillOperation.Replace
    )
    blocks.place(
        COMPOSTER,
        pos(1, 1, 8)
    )
    blocks.fill(
        BEETROOT,
        pos(2, 1, 1),
        pos(2, 1, 6),
        FillOperation.Replace
    )
    blocks.fill(
        POTATOES,
        pos(3, 1, 1),
        pos(3, 1, 6),
        FillOperation.Replace
    )
    blocks.fill(
        CARROTS,
        pos(5, 1, 1),
        pos(5, 1, 6),
        FillOperation.Replace
    )
    blocks.fill(
        CROPS,
        pos(6, 1, 1),
        pos(6, 1, 6),
        FillOperation.Replace
    )
    player.say("중급 농장 완성!")
})
```

실행해 봅시다.  
Let’s test it.

```text
채팅창에 2 입력
Type 2 in the chat
```

중요한 좌표 이해:  
Important position idea:

```text
물은 y = 0
나뭇잎은 y = 1

Water is at y = 0
Leaves are at y = 1
```

같은 `x`, `z` 위치라도 `y`값이 달라지면 위아래 위치가 달라집니다.  
Even with the same `x` and `z`, changing `y` changes the height.

---

## Step 3. 고급 패턴 농장 만들기 | Build the Advanced Pattern Farm

이번에는 `3`을 입력하면 고급 패턴 농장이 만들어지게 해 봅시다.  
Now, let’s make command `3` build an advanced pattern farm.

이번 단계에서는 작물을 한 줄씩 채우지 않습니다.  
In this step, we do not fill a whole line with one crop.

대신 `blocks.place`를 사용해서 작물을 **한 칸씩 직접 심습니다.**  
Instead, we use `blocks.place` to plant crops **one by one**.

`blocks.fill`과 `blocks.place`의 차이:  
Difference between `blocks.fill` and `blocks.place`:

```text
blocks.fill  = 여러 칸을 한 번에 채우기
blocks.place = 한 칸에 블록 하나 놓기

blocks.fill  = fill many blocks at once
blocks.place = place one block at one position
```

```blocks
player.onChat("3", function () {
    blocks.fill(
        LOG_OAK,
        pos(1, 0, 0),
        pos(7, 0, 7),
        FillOperation.Replace
    )
    blocks.fill(
        WATER,
        pos(4, 0, 1),
        pos(4, 0, 6),
        FillOperation.Replace
    )
    blocks.fill(
        FARMLAND,
        pos(2, 0, 1),
        pos(3, 0, 6),
        FillOperation.Replace
    )
    blocks.fill(
        FARMLAND,
        pos(5, 0, 1),
        pos(6, 0, 6),
        FillOperation.Replace
    )
    blocks.fill(
        LEAVES_OAK,
        pos(4, 1, 1),
        pos(4, 1, 6),
        FillOperation.Replace
    )
    blocks.place(
        COMPOSTER,
        pos(1, 1, 8)
    )

    blocks.place(CARROTS, pos(2, 1, 1))
    blocks.place(POTATOES, pos(3, 1, 1))
    blocks.place(BEETROOT, pos(5, 1, 1))
    blocks.place(CROPS, pos(6, 1, 1))

    blocks.place(CARROTS, pos(2, 1, 2))
    blocks.place(POTATOES, pos(3, 1, 2))
    blocks.place(CARROTS, pos(5, 1, 2))
    blocks.place(BEETROOT, pos(6, 1, 2))

    blocks.place(POTATOES, pos(2, 1, 3))
    blocks.place(CROPS, pos(3, 1, 3))
    blocks.place(CARROTS, pos(5, 1, 3))
    blocks.place(POTATOES, pos(6, 1, 3))

    blocks.place(BEETROOT, pos(2, 1, 4))
    blocks.place(CARROTS, pos(3, 1, 4))
    blocks.place(CROPS, pos(5, 1, 4))
    blocks.place(POTATOES, pos(6, 1, 4))

    blocks.place(CARROTS, pos(2, 1, 5))
    blocks.place(BEETROOT, pos(3, 1, 5))
    blocks.place(POTATOES, pos(5, 1, 5))
    blocks.place(CROPS, pos(6, 1, 5))

    blocks.place(CROPS, pos(2, 1, 6))
    blocks.place(POTATOES, pos(3, 1, 6))
    blocks.place(CARROTS, pos(5, 1, 6))
    blocks.place(BEETROOT, pos(6, 1, 6))

    player.say("고급 패턴 농장 완성!")
})
```

실행해 봅시다.  
Let’s test it.

```text
채팅창에 3 입력
Type 3 in the chat
```

고급 패턴은 이런 느낌입니다.  
The advanced pattern looks like this:

```text
C P L B W
C P L C B
P W L C P
B C L W P
C B L P W
W P L C B
```

```text
C = Carrot 당근
P = Potato 감자
B = Beetroot 비트
W = Wheat 밀
L = Leaves over water 물 위 나뭇잎
```

---

## Step 4. 나만의 작물 패턴 바꾸기 | Change Your Crop Pattern

이제 고급 농장의 작물 순서를 바꿔 봅시다.  
Now, let’s change the crop order in the advanced farm.

아래 코드는 연습용입니다.  
The code below is for practice.

`pos(2, 1, 5)`, `pos(3, 1, 5)`, `pos(5, 1, 5)`, `pos(6, 1, 5)` 위치의 작물을 바꿔 보세요.  
Try changing the crops at `pos(2, 1, 5)`, `pos(3, 1, 5)`, `pos(5, 1, 5)`, and `pos(6, 1, 5)`.

```ghost
player.onChat("3", function () {
    blocks.place(CARROTS, pos(2, 1, 5))
    blocks.place(POTATOES, pos(3, 1, 5))
    blocks.place(BEETROOT, pos(5, 1, 5))
    blocks.place(CROPS, pos(6, 1, 5))
})
```

도전해 볼 패턴:  
Try these patterns:

```text
당근, 당근, 감자, 비트
Carrot, Carrot, Potato, Beetroot

비트, 밀, 당근, 감자
Beetroot, Wheat, Carrot, Potato

밀, 감자, 당근, 비트
Wheat, Potato, Carrot, Beetroot
```

---

## Step 5. 농장 꾸미기 업그레이드 | Farm Decoration Upgrade

이제 농장은 작동합니다. 하지만 아직 조금 단순해 보입니다.  
Now the farm works, but it still looks a little simple.

이번에는 `4`를 입력하면 농장 주변을 꾸며 봅시다.  
This time, command `4` will decorate the farm.

이번 단계에서는 다음을 만듭니다.  
In this step, we will build:

1. 농장 주변 울타리 | Fence around the farm
2. 농장 입구 길 | Entrance path
3. 네 모서리 조명 기둥 | Four light posts
4. 허수아비 | Scarecrow

이번 단계는 `for` 반복문을 사용합니다.  
This step uses a `for` loop.

반복문은 같은 일을 여러 번 할 때 사용합니다.  
A loop is used when we want to do the same action many times.

```blocks
player.onChat("4", function () {
    for (let i = 0; i <= 8; i++) {
        blocks.place(OAK_FENCE, pos(i, 1, -1))
        blocks.place(OAK_FENCE, pos(i, 1, 8))
    }

    for (let i = 0; i <= 8; i++) {
        blocks.place(OAK_FENCE, pos(0, 1, i))
        blocks.place(OAK_FENCE, pos(8, 1, i))
    }

    blocks.fill(
        GRAVEL,
        pos(3, 0, 8),
        pos(5, 0, 11),
        FillOperation.Replace
    )

    blocks.place(LOG_OAK, pos(0, 1, -1))
    blocks.place(LOG_OAK, pos(0, 2, -1))
    blocks.place(TORCH, pos(0, 3, -1))

    blocks.place(LOG_OAK, pos(8, 1, -1))
    blocks.place(LOG_OAK, pos(8, 2, -1))
    blocks.place(TORCH, pos(8, 3, -1))

    blocks.place(LOG_OAK, pos(0, 1, 8))
    blocks.place(LOG_OAK, pos(0, 2, 8))
    blocks.place(TORCH, pos(0, 3, 8))

    blocks.place(LOG_OAK, pos(8, 1, 8))
    blocks.place(LOG_OAK, pos(8, 2, 8))
    blocks.place(TORCH, pos(8, 3, 8))

    blocks.place(OAK_FENCE, pos(4, 1, 9))
    blocks.place(HAY_BLOCK, pos(4, 2, 9))
    blocks.place(PUMPKIN, pos(4, 3, 9))
    blocks.place(OAK_FENCE, pos(3, 2, 9))
    blocks.place(OAK_FENCE, pos(5, 2, 9))

    player.say("농장 꾸미기 완성!")
})
```

실행해 봅시다.  
Let’s test it.

```text
채팅창에 4 입력
Type 4 in the chat
```

반복문을 살펴봅시다.  
Look at the loop:

```javascript
for (let i = 0; i <= 8; i++) {
    blocks.place(OAK_FENCE, pos(i, 1, -1))
}
```

`i`가 0부터 8까지 바뀌면서 울타리가 한 칸씩 놓입니다.  
The variable `i` changes from 0 to 8, placing fences one by one.

---

## 마지막 도전 | Final Challenges

빠르게 끝낸 친구들은 아래 미션에 도전해 보세요.  
If you finish early, try these challenges.

### Challenge 1

울타리 크기를 더 크게 바꿔 보세요.  
Make the fence bigger.

### Challenge 2

조명 기둥의 위치를 바꿔 보세요.  
Move the light posts.

### Challenge 3

허수아비를 2개 만들어 보세요.  
Build two scarecrows.

### Challenge 4

자갈 길을 다른 블록으로 바꿔 보세요.  
Change the gravel path to another block.

### Challenge 5

고급 농장의 작물 패턴을 자기만의 규칙으로 바꿔 보세요.  
Change the advanced farm crop pattern using your own rule.

---

## 오늘의 핵심 정리 | Today’s Key Ideas

```text
1. blocks.fill은 넓은 공간을 한 번에 채운다.
   blocks.fill fills a large area at once.

2. blocks.place는 한 칸에 블록 하나를 놓는다.
   blocks.place places one block at one position.

3. y값은 높이를 뜻한다.
   The y value means height.

4. 반복문은 같은 일을 여러 번 할 때 사용한다.
   A loop repeats the same action many times.

5. 좌표를 바꾸면 농장의 모양이 바뀐다.
   Changing positions changes the farm design.
```

