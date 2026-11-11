# 🐔 마인크래프트 MakeCode: 치킨 조키 만들기!

**오늘의 목표:** 블록을 이어 명령어를 만들고, 몹이 다른 몹을 타는 **조키(Jockey)**를 소환해 봅시다.

**준비물:** Minecraft Education, MakeCode, 선생님이 준 `minecraft_chikenjokey.mkcd` 프로젝트  
**권장 시간:** 35~45분 | **실습 방법:** 블록 코딩 (JavaScript 입력 불필요)

---

## 1. 프로젝트를 열어 봐요

1. MakeCode에서 선생님이 준 `.mkcd` 프로젝트를 가져옵니다.
2. **블록** 화면을 엽니다. 게임과 MakeCode가 연결되어 있는지 확인합니다.
3. 다음 두 개의 **채팅 명령** 블록을 찾아보세요.
   - **채팅 명령 `1`**: 배리어(보이지 않는 벽)로 실험 공간을 만듭니다. *선택 사항입니다.*
   - **채팅 명령 `2`**: 오늘 완성할 **게임 명령 실행** 블록이 네 개 있습니다. 첫 번째 뒤에는 **1초 기다리기**가 있습니다.

> **중요!** MakeCode의 **게임 명령 실행** 블록에는 앞에 `/`를 쓰지 않습니다. 게임 채팅창에 직접 명령어를 입력할 때만 `/`를 붙입니다.

## 2. 미션 ①: 명령어 조각을 맞춰 치킨 조키 만들기

화면에 흩어진 **글자 조각**을 순서대로 **텍스트 합치기** 블록에 끼워 넣으세요.  
첫 번째 블록의 `Hello`와 `World`는 지우고 바꿉니다.

| 순서 | 텍스트 합치기에 넣을 조각 (왼쪽부터) | 완성되는 명령어 |
|---|---|---|
| ① 닭 소환 | `summon ` + `chicken` | `summon chicken` |
| ② 좀비 태우기 | `ride ` + `@e[type=chicken,c=1] ` + `summon_rider ` + `zombie` | `ride @e[type=chicken,c=1] summon_rider zombie` |
| ③ 좀비 이벤트 | `event ` + `entity ` + `@e[type=zombie,c=1] ` + `minecraft:as_baby` | `event entity @e[type=zombie,c=1] minecraft:as_baby` |
| ④ 닭 이벤트 | `event ` + `entity ` + `@e[type=chicken,c=1] ` + `minecraft:entity_born` | `event entity @e[type=chicken,c=1] minecraft:entity_born` |

**블록 찾기 힌트**

- **플레이어 → 게임 명령 실행**: 완성한 명령어를 실행하는 블록
- **텍스트 → 텍스트 합치기**: 여러 글자 조각을 하나의 명령어로 만드는 블록
- **1,000ms 기다리기**: 1초 동안 기다리는 블록 (*이미 들어 있어요*)

**실행해 보기:** 코드를 실행한 뒤, 마인크래프트 **채팅창에 `2`**를 입력하세요.

**관찰하기:** 닭이 나왔나요? 좀비가 닭 위에 있나요? 좀비와 닭의 크기는 어떻게 되었나요?

> **실험 주의:** `event`를 이미 생성한 성체 몹에 사용한다고 해서 반드시 아기로 바뀌는 것은 아닙니다. 크기가 바뀌지 않더라도 틀린 코드라고 단정하지 말고, 실제 결과를 기록해 보세요. 여러 마리가 있으면 `@e[...,c=1]`이 예상과 다른 개체를 선택할 수도 있습니다.

## 3. 미션 ②: 더 쉬운 방법! 아기 좀비가 스스로 타게 하기 ⭐

이번에는 `/ride`가 필요하지 않습니다. **소환 이벤트**를 이용합니다.

1. 채팅 명령 `2`의 **첫 번째 명령**을 닭 소환으로 설정합니다.
2. **두 번째 명령**을 아래와 같이 바꿉니다.
3. 이전 미션의 **세 번째·네 번째 게임 명령 실행 블록은 잠시 분리**하고, 두 명령만 실행합니다.

| 순서 | 텍스트 합치기 조각 | 완성되는 명령어 |
|---|---|---|
| ① 성체 닭 | `summon ` + `chicken ~ ~ ~` | `summon chicken ~ ~ ~` |
| ② 자동 탑승 아기 좀비 | `summon ` + `zombie ` + `~ ~ ~ ~ ~ ` + `minecraft:as_baby_jockey` | `summon zombie ~ ~ ~ ~ ~ minecraft:as_baby_jockey` |

채팅창에 다시 **`2`**를 입력하고 조금 관찰해 보세요. 아기 좀비가 주변의 탈 수 있는 몹을 찾아 올라탑니다.

**바꿔 보기:** 첫 번째 명령의 `chicken`을 `pig`, 그다음에는 `cow`로 바꿔 보세요.  
직접 확인한 결과, 성체 **닭·돼지·소**에서 자동 탑승이 관찰되었습니다. **아기 닭**에서는 탑승하지 않았습니다.

> `~ ~ ~`은 소환할 위치이고, 그 뒤의 `~ ~`은 바라보는 방향입니다. 그다음에 이벤트 이름을 적습니다. **단어 사이 띄어쓰기**를 꼭 확인하세요.

## 4. 미션 ③: 스켈레톤이 거미를 타게 하기 🕷️

이번에는 **거미를 소환하면서 스켈레톤도 함께** 나오게 해 봅시다.

1. 채팅 명령 `2`에서 **첫 번째 게임 명령 실행 블록 하나만** 사용합니다. 나머지는 잠시 분리합니다.
2. 그 블록의 텍스트를 아래 명령어로 바꿉니다. (텍스트 합치기를 써도 됩니다.)

```text
summon spider ~ ~ ~ ~ ~ minecraft:entity_spawned_with_default_jockey
```

3. 게임 채팅창에서 `/time set night`를 입력하거나 **지하**에서 시험합니다.
4. 채팅창에 **`2`**를 입력해 거미 위에 스켈레톤이 나오는지 관찰하세요.

**도전!** 아래 이벤트로 바꿔서 어떤 차이가 있는지 확인해 보세요.

```text
summon spider ~ ~ ~ ~ ~ minecraft:entity_spawned_with_biome_specific_jockey
```

이 이벤트는 **생물군계(바이옴)**에 따라 결과가 달라질 수 있습니다. 원하는 스켈레톤 종류가 항상 나오지는 않습니다.

## 5. 더 해 보고 싶다면 (선택)

아래 명령어 중 **하나씩만** 게임 명령 실행 블록에 넣어 시험해 보세요.

```text
summon zombie ~ ~ ~ ~ ~ minecraft:as_adult
summon zombie ~ ~ ~ ~ ~ minecraft:as_baby
summon strider ~ ~ ~ ~ ~ spawn_adult_piglin_jockey
summon strider ~ ~ ~ ~ ~ spawn_adult_parent_jockey
```

- `as_adult`: 성체 좀비로 소환하기
- `as_baby`: 아기 좀비로 소환하기
- `spawn_adult_piglin_jockey`: 스트라이더와 기수 조합 실험하기
- `spawn_adult_parent_jockey`: 성체와 아기 스트라이더 조합 실험하기

**참고:** 위의 선택 미션은 게임 버전에 따라 다를 수 있습니다. 수업에서는 실제 성공 여부를 직접 확인합니다.

## 6. 오늘의 확인표 ✅

- [ ] `채팅 명령 2`에 준비된 네 개의 게임 명령 실행 블록을 찾았다.
- [ ] `텍스트 합치기`에서 띄어쓰기를 맞췄다.
- [ ] 기존의 **소환 → 탑승 → 이벤트** 방식을 실행하고 결과를 관찰했다.
- [ ] `minecraft:as_baby_jockey`로 **자동 탑승**을 실험했다.
- [ ] 거미 조키 명령을 실행하고 결과를 확인했다.

**생각해 보기:** `/ride`로 태우는 방법과 `as_baby_jockey`로 스스로 타게 하는 방법은 무엇이 다를까요?

---

### 잘 안될 때

- **아무 일도 안 일어나요:** MakeCode와 게임이 연결됐는지, 코드가 실행 중인지, 채팅창에 **숫자 `2`**를 입력했는지 확인하세요.
- **명령어 오류가 나요:** `summon `처럼 **공백이 포함된 글자 조각**을 확인하고, MakeCode 안에서는 `/`를 빼세요.
- **좀비가 타지 않아요:** 성체 닭을 가까이 두고 잠시 관찰하세요. 이미 다른 몹이 타고 있거나 주변 몹이 너무 많으면 새 공간에서 시험하세요.
- **거미만 나와요:** **밤 또는 지하**에서 다시 시험하고, 이벤트 이름 철자를 확인하세요.
- **몹이 사라져요:** 월드 난이도와 낮 시간의 햇빛을 확인하고, 실험용 새 월드에서 진행하세요.

**참고 자료:** [MakeCode 명령 실행](https://minecraft.makecode.com/reference/player/execute) · [Minecraft `/summon` 공식 문서](https://learn.microsoft.com/en-us/minecraft/creator/commands/commands/summon?view=minecraft-bedrock-stable) · [Minecraft `/event` 공식 문서](https://learn.microsoft.com/en-us/minecraft/creator/commands/commands/event?view=minecraft-bedrock-stable)
