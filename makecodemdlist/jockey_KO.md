# 마인크래프트 조키(Jockey) 소환 실험

### @explicitHints true

```validation.global
# BlocksExistValidator
* markers: validate-exists
```

```template
//
```

## 시작하기 @showdialog

조키(Jockey)는 **다른 몹을 타고 있는 몹**을 뜻해요. 이번 실습에서는 채팅 명령어 `1`부터 `6`까지를 직접 만들어 **아기 좀비**, **닭**, **거미**, **스트라이더**의 특별한 소환 방식을 비교해 봅니다.

- Minecraft Education의 **코드 작성기 → MakeCode**에서 블록으로 코딩하세요.
- `||player:채팅 명령어||`, `||player:명령어 실행||`, `||mobs:몹 소환||`, `||positions:위치||` 블록을 사용합니다.
- 치트·명령어를 실행할 수 있는 실습 월드에서, 주변에 충분한 공간을 확보하세요.
- **각 단계에서 블록을 먼저 만들고 채팅으로 실행한 뒤** 다음 단계로 넘어가세요.

## 1단계 · 아기 좀비 소환 (`1`)

`||player:채팅 명령어||`를 만들고 이름을 `1`로 정하세요. 안에 `||player:명령어 실행||` 블록을 넣고, **`minecraft:as_baby`**가 있는 명령어를 완성하세요.

```blocks
// @validate-exists
player.onChat("1", function () {
    // @validate-exists
    player.execute(
    "summon " + "zombie " + "~ ~ ~ " + "~ ~ " + "minecraft:as_baby"
    )
})
```

**실습 확인:** 채팅에 `1`을 입력하세요. 일반적인 어른 좀비와 비교해 크기가 작은지 확인하세요. `~ ~ ~`은 실행 위치를 기준으로 하는 상대 좌표입니다.

## 2단계 · 아기 좀비 조키 후보 + 닭 (`2`)

새로운 `||player:채팅 명령어||`를 추가하고 이름을 `2`로 정하세요. 명령어 실행으로 **`minecraft:as_baby_jockey`** 이벤트를 사용하고, 이어서 **닭 소환 블록**을 추가하세요.

```blocks
// @validate-exists
player.onChat("2", function () {
    // @validate-exists
    player.execute(
    "summon " + "zombie " + pos(0, 0, 0) + " " + "minecraft:as_baby_jockey"
    )
    // @validate-exists
    mobs.spawn(CHICKEN, pos(0, 0, 0))
})
```

**실습 확인:** 채팅에 `2`를 입력하세요. 아기 좀비와 닭이 생성되는지, 실제로 아기 좀비가 닭에 타는지 관찰하세요. **두 몹을 소환하는 것 자체가 탑승을 보장하지는 않습니다.**

## 3단계 · 일반 좀비와 아기 조키 후보 비교 (`3`)

채팅 명령어 `3`을 만들고 `||player:명령어 실행||` 블록을 **2개** 사용하세요. 첫 번째는 일반 좀비를, 두 번째는 조키 이벤트가 포함된 좀비를 소환합니다.

```blocks
// @validate-exists
player.onChat("3", function () {
    // @validate-exists
    player.execute(
    "summon " + "zombie "
    )
    // @validate-exists
    player.execute(
    "summon " + "zombie " + pos(0, 0, 0) + " " + "minecraft:as_baby_jockey"
    )
})
```

**실습 확인:** 채팅에 `3`을 입력하세요. 두 소환 결과를 비교하고, **`3`에는 닭 소환 코드가 없다는 점**을 찾아보세요.

## 4단계 · 거미 조키 (`4`)

채팅 명령어 `4`를 추가하고 거미(`spider`)를 **`minecraft:entity_spawned_with_default_jockey`** 이벤트와 함께 소환하세요.

```blocks
// @validate-exists
player.onChat("4", function () {
    // @validate-exists
    player.execute(
    "summon " + "spider " + pos(0, 0, 0) + " " + "minecraft:entity_spawned_with_default_jockey"
    )
})
```

**실습 확인:** 채팅에 `4`를 입력하고 거미 위에 스켈레톤이 있는지 확인하세요. 월드의 시간·환경 및 게임 버전에 따라 탑승자가 보이지 않을 수 있습니다.

## 5단계 · 스트라이더와 피글린 조키 이벤트 (`5`)

채팅 명령어 `5`를 만들고 스트라이더(`strider`)에 **`spawn_adult_piglin_jockey`** 이벤트를 적용하세요. 이벤트 이름 앞에 `minecraft:`를 **임의로 덧붙이지 마세요.**

```blocks
// @validate-exists
player.onChat("5", function () {
    // @validate-exists
    player.execute(
    "summon " + "strider " + pos(0, 0, 0) + " " + "spawn_adult_piglin_jockey"
    )
})
```

**실습 확인:** 채팅에 `5`를 입력하고 스트라이더의 안장·탑승자를 관찰하세요. 이 이벤트는 피글린 계열 조키용으로 정의되어 있지만 **일부 Bedrock 버전에서는 탑승자가 생성되지 않는 것으로 보고되어 있습니다.** 따라서 스트라이더가 나왔다는 사실과 탑승 여부를 구분해 기록하세요.

## 6단계 · 부모 스트라이더와 아기 스트라이더 (`6`)

마지막 채팅 명령어 `6`을 만들고 **`spawn_adult_parent_jockey`** 이벤트를 적용하세요. 5단계와 이벤트 문자열이 다른 점에 주목하세요.

```blocks
// @validate-exists
player.onChat("6", function () {
    // @validate-exists
    player.execute(
    "summon " + "strider " + pos(0, 0, 0) + " " + "spawn_adult_parent_jockey"
    )
})
```
