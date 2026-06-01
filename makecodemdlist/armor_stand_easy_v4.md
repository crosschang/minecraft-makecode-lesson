# 🛡️ 갑옷 거치대 조립하기 | Armor Stand Builder

```template
player.onChat("1", function () {
})
```

## 시작하기 | Introduction @showdialog

이번 수업에서는 Minecraft Education MakeCode에서 **커스텀 블록 CommandParts**를 사용해 갑옷 거치대를 꾸며 봅니다.  
In this lesson, we will use the **CommandParts custom blocks** to decorate an armor stand.

오늘은 긴 영어 명령어를 직접 치지 않습니다.  
Today, we will not type long English commands directly.

대신 아래와 같은 조각 블록을 연결해서 명령어를 완성합니다.  
Instead, we will connect command part blocks to build a command.

- `replaceitem`
- `entity`
- `가장 가까운 갑옷 거치대`
- `머리 슬롯`, `흉갑 슬롯`, `바지 슬롯`, `신발 슬롯`
- `다이아몬드 헬멧`, `다이아몬드 흉갑`, `다이아몬드 바지`, `다이아몬드 신발`
- `명령어 실행`

중요한 규칙 | Important Rule:

> 조각 블록을 각각 따로 실행하면 안 됩니다.  
> Do not run each command part separately.

> 조각 블록을 모두 `+`로 연결한 뒤, **명령어 실행** 블록 안에 넣어야 합니다.  
> Connect all parts with `+`, then put them inside the **run command** block.

---

## 커스텀 블록 준비 | Custom Block Setup

아래 블록들이 왼쪽 메뉴의 **CommandParts** 카테고리에 보이면 준비 완료입니다.  
If you can see these blocks in the **CommandParts** category, you are ready.

```blocks
commandParts.summonArmorStand()
commandParts.runCommand(
    commandParts.replaceitem() +
    commandParts.entity() +
    commandParts.nearestArmorStand() +
    commandParts.headSlot() +
    commandParts.slotZero() +
    commandParts.diamondHelmet()
)
```

---

## Step 1. 갑옷 거치대 만들기 | Create an Armor Stand

먼저 채팅창에 `1`을 입력하면 갑옷 거치대가 1개 만들어지게 합니다.  
First, make one armor stand appear when you type `1` in chat.

```blocks
player.onChat("1", function () {
    commandParts.summonArmorStand()
})
```

### 확인하기 | Check

채팅창에 `1`을 입력했을 때 갑옷 거치대가 나오나요?  
When you type `1`, does an armor stand appear?

---

## Step 2. 머리에 다이아몬드 헬멧 입히기 | Put on a Diamond Helmet

이번에는 갑옷 거치대를 만든 뒤, 머리에 다이아몬드 헬멧을 입혀 봅니다.  
Now create an armor stand and put a diamond helmet on its head.

명령어 조각은 아래 순서로 연결합니다.  
Connect the command parts in this order:

```text
replaceitem + entity + 가장 가까운 갑옷 거치대 + 머리 슬롯 + 슬롯 번호 0 + 다이아몬드 헬멧
```

```blocks
player.onChat("1", function () {
    commandParts.summonArmorStand()
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.headSlot() +
        commandParts.slotZero() +
        commandParts.diamondHelmet()
    )
})
```

### 실제로 만들어지는 명령어 | Final Command

위 블록은 아래 명령어를 만듭니다.  
The blocks create this command:

```text
replaceitem entity @e[type=armor_stand,c=1] slot.armor.head 0 diamond_helmet
```

---

## Step 3. 몸에 다이아몬드 흉갑 입히기 | Put on a Diamond Chestplate

이번에는 몸통 슬롯에 다이아몬드 흉갑을 입혀 봅니다.  
Now put a diamond chestplate in the chest slot.

바뀌는 조각은 두 가지입니다.  
Two parts change:

| 바꾸는 부분 | 사용할 블록 |
|---|---|
| 슬롯 | `흉갑 슬롯` |
| 아이템 | `다이아몬드 흉갑` |

```blocks
player.onChat("2", function () {
    commandParts.summonArmorStand()
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.chestSlot() +
        commandParts.slotZero() +
        commandParts.diamondChestplate()
    )
})
```

### 확인하기 | Check

채팅창에 `2`를 입력하면 다이아몬드 흉갑을 입은 갑옷 거치대가 나오나요?  
When you type `2`, does the armor stand wear a diamond chestplate?

---

## Step 4. 다리에 다이아몬드 바지 입히기 | Put on Diamond Leggings

이번에는 다리 슬롯에 다이아몬드 바지를 넣습니다.  
Now put diamond leggings in the legs slot.

```blocks
player.onChat("3", function () {
    commandParts.summonArmorStand()
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.legsSlot() +
        commandParts.slotZero() +
        commandParts.diamondLeggings()
    )
})
```

### 확인하기 | Check

채팅창에 `3`을 입력하면 다이아몬드 바지를 입은 갑옷 거치대가 나오나요?  
When you type `3`, does the armor stand wear diamond leggings?

---

## Step 5. 발에 다이아몬드 신발 신기기 | Put on Diamond Boots

이번에는 신발 슬롯에 다이아몬드 신발을 넣습니다.  
Now put diamond boots in the feet slot.

```blocks
player.onChat("4", function () {
    commandParts.summonArmorStand()
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.feetSlot() +
        commandParts.slotZero() +
        commandParts.diamondBoots()
    )
})
```

### 확인하기 | Check

채팅창에 `4`를 입력하면 다이아몬드 신발을 신은 갑옷 거치대가 나오나요?  
When you type `4`, does the armor stand wear diamond boots?

---

## Step 6. 다이아몬드 풀세트 입히기 | Equip a Full Diamond Set

이제 갑옷 거치대에 다이아몬드 장비를 모두 입혀 봅니다.  
Now equip the armor stand with a full diamond set.

필요한 명령어 실행 블록은 4개입니다.  
You need four run command blocks.

1. 머리 슬롯 + 다이아몬드 헬멧  
2. 흉갑 슬롯 + 다이아몬드 흉갑  
3. 바지 슬롯 + 다이아몬드 바지  
4. 신발 슬롯 + 다이아몬드 신발  

```blocks
player.onChat("5", function () {
    commandParts.summonArmorStand()
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.headSlot() +
        commandParts.slotZero() +
        commandParts.diamondHelmet()
    )
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.chestSlot() +
        commandParts.slotZero() +
        commandParts.diamondChestplate()
    )
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.legsSlot() +
        commandParts.slotZero() +
        commandParts.diamondLeggings()
    )
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.feetSlot() +
        commandParts.slotZero() +
        commandParts.diamondBoots()
    )
})
```

### 확인하기 | Check

채팅창에 `5`를 입력하면 다이아몬드 풀세트를 입은 갑옷 거치대가 나오나요?  
When you type `5`, does the armor stand wear a full diamond set?

---

## Step 7. 랜덤 헬멧 입히기 | Equip a Random Helmet

이번에는 헬멧을 랜덤으로 골라 입혀 봅니다.  
Now choose a helmet randomly.

`randomHelmet()` 블록은 여러 헬멧 중 하나를 랜덤으로 골라 줍니다.  
The `randomHelmet()` block randomly chooses one helmet.

```blocks
player.onChat("6", function () {
    commandParts.summonArmorStand()
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.headSlot() +
        commandParts.slotZero() +
        commandParts.randomHelmet()
    )
})
```

### 확인하기 | Check

채팅창에 `6`을 여러 번 입력해 보세요.  
Type `6` several times.

헬멧 종류가 달라지나요?  
Does the helmet change?

---

## Step 8. 랜덤 갑옷 풀세트 만들기 | Create a Random Armor Set

마지막으로 머리, 몸, 다리, 발 장비를 모두 랜덤으로 만들어 봅니다.  
Finally, randomly choose armor for head, chest, legs, and feet.

```blocks
player.onChat("7", function () {
    commandParts.summonArmorStand()
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.headSlot() +
        commandParts.slotZero() +
        commandParts.randomHelmet()
    )
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.chestSlot() +
        commandParts.slotZero() +
        commandParts.randomChestplate()
    )
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.legsSlot() +
        commandParts.slotZero() +
        commandParts.randomLeggings()
    )
    commandParts.runCommand(
        commandParts.replaceitem() +
        commandParts.entity() +
        commandParts.nearestArmorStand() +
        commandParts.feetSlot() +
        commandParts.slotZero() +
        commandParts.randomBoots()
    )
})
```

### 확인하기 | Check

채팅창에 `7`을 여러 번 입력해 보세요.  
Type `7` several times.

갑옷 조합이 매번 달라지나요?  
Does the armor set change each time?

---

## 정리 | Summary

오늘은 CommandParts 커스텀 블록으로 긴 명령어를 조립했습니다.  
Today, we built long commands using CommandParts custom blocks.

꼭 기억할 규칙:

```text
조각 블록은 따로 실행하지 않는다.
모두 + 로 연결한다.
명령어 실행 블록 안에 넣는다.
```

Remember:

```text
Do not run parts separately.
Connect all parts with +.
Put the connected command inside run command.
```

### 미션 완료 | Mission Complete

축하합니다!  
Congratulations!

이제 여러분은 커스텀 블록을 사용해 갑옷 거치대에 갑옷과 무기를 입힐 수 있습니다.  
Now you can use custom blocks to equip armor and weapons on an armor stand.

commandparts=github:crosschang/minecraft_makecode_lesson_extends#v0.0.5