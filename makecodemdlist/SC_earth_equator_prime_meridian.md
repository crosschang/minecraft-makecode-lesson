# Earth, Equator, and Prime Meridian

```template
let center: Position = null
```

## Introduction | 소개 @showdialog

Today, we will create a simple **Earth model** in Minecraft using MakeCode!  
오늘은 MakeCode로 마인크래프트 안에 간단한 **지구 모형**을 만들어 봅니다!

You will make:  
오늘 만들 것:

- Earth shape | 지구 모양
- Equator | 적도
- Prime Meridian | 본초자오선
- Practice Mission | 실습 미션

Important idea:  
중요한 생각:

The Earth will be built **30 blocks away** from your player, so it does not cover you.  
지구는 플레이어를 덮지 않도록 **플레이어 위치에서 30칸 떨어진 곳**에 만들어집니다.

Press **OK** to begin!  
준비가 되었다면 **확인**을 눌러 시작하세요!

## Step 1

### Make the Earth | 지구 만들기

First, create the center point of the Earth.  
먼저 지구의 중심 위치를 정합니다.

When you type `earth`, the computer will save a center point 30 blocks away from you and make a blue sphere.  
채팅창에 `earth`를 입력하면, 내 위치에서 30칸 떨어진 곳을 중심으로 저장하고 파란색 구를 만듭니다.

```blocks
let center: Position = null
player.onChat("earth", function () {
    center = positions.add(
        player.position(),
        pos(30, 0, 0)
    )
    shapes.sphere(
        LIGHT_BLUE_WOOL,
        center,
        10,
        ShapeOperation.Replace
    )
})
```

### Test | 테스트

Type `earth` in the chat.  
채팅창에 `earth`를 입력하세요.

You should see a light blue sphere far away from you.  
내 위치에서 조금 떨어진 곳에 하늘색 구가 보이면 성공입니다.

## Step 2

### Draw the Equator | 적도 그리기

The **Equator** is the middle line around the Earth.  
**적도**는 지구 가운데를 둘러싸는 선입니다.

When you type `equator`, a black circle will appear around the middle of the Earth.  
채팅창에 `equator`를 입력하면 지구 가운데에 검은색 원이 생깁니다.

```blocks
let center: Position = null
player.onChat("earth", function () {
    center = positions.add(
        player.position(),
        pos(30, 0, 0)
    )
    shapes.sphere(
        LIGHT_BLUE_WOOL,
        center,
        10,
        ShapeOperation.Replace
    )
})

player.onChat("equator", function () {
    shapes.circle(
        BLACK_WOOL,
        center,
        11,
        Axis.Y,
        ShapeOperation.Replace
    )
    gameplay.title(mobs.target(LOCAL_PLAYER), "Equator", "Latitude 0")
})
```

### Test | 테스트

1. Type `earth` first.  
   먼저 `earth`를 입력하세요.

2. Then type `equator`.  
   그다음 `equator`를 입력하세요.

A black line should go around the middle of the Earth.  
지구 가운데를 둘러싸는 검은색 선이 보이면 성공입니다.

## Step 3

### Draw the Prime Meridian | 본초자오선 그리기

The **Prime Meridian** is the line for longitude 0.  
**본초자오선**은 경도 0도를 나타내는 선입니다.

When you type `pm`, another black circle will appear in a different direction.  
채팅창에 `pm`을 입력하면 다른 방향의 검은색 원이 생깁니다.

```blocks
let center: Position = null
player.onChat("earth", function () {
    center = positions.add(
        player.position(),
        pos(30, 0, 0)
    )
    shapes.sphere(
        LIGHT_BLUE_WOOL,
        center,
        10,
        ShapeOperation.Replace
    )
})

player.onChat("equator", function () {
    shapes.circle(
        BLACK_WOOL,
        center,
        11,
        Axis.Y,
        ShapeOperation.Replace
    )
    gameplay.title(mobs.target(LOCAL_PLAYER), "Equator", "Latitude 0")
})

player.onChat("pm", function () {
    shapes.circle(
        BLACK_WOOL,
        center,
        11,
        Axis.X,
        ShapeOperation.Replace
    )
    gameplay.title(mobs.target(LOCAL_PLAYER), "Prime Meridian", "Longitude 0")
})
```

### Test | 테스트

Type the commands in this order:  
아래 순서대로 입력하세요.

1. `earth`
2. `equator`
3. `pm`

You should see the Earth, the Equator, and the Prime Meridian.  
지구, 적도, 본초자오선이 모두 보이면 성공입니다.

## Step 4

### Practice Mission: Mark the Poles | 실습 미션: 북극과 남극 표시하기

Now add two special points to your Earth model.  
이제 지구 모형에 특별한 두 지점을 추가해 봅시다.

Mission:  
미션:

- Type `poles` to mark the North Pole and South Pole.  
  `poles`를 입력하면 북극과 남극이 표시되게 만드세요.

- North Pole should be above the center.  
  북극은 중심보다 위에 있어야 합니다.

- South Pole should be below the center.  
  남극은 중심보다 아래에 있어야 합니다.

### Blocks You Can Use | 사용할 수 있는 블록

Use these block ideas.  
아래 블록들을 사용해 보세요.

- `on chat command` block | 채팅 명령어 블록
- `place block` block | 블록 놓기 블록
- `positions.add` block | 위치 더하기 블록
- `center` variable | 중심 변수
- `pos(0, 10, 0)` for the top | 위쪽 위치
- `pos(0, -10, 0)` for the bottom | 아래쪽 위치

### Challenge Rule | 도전 규칙

Try to build this mission by yourself first.  
먼저 스스로 만들어 보세요.

Do not look at the answer unless your teacher says it is okay.  
선생님이 허락하기 전에는 정답을 보지 마세요.

```ghost
player.onChat("poles", function () {
    blocks.place(WHITE_WOOL, positions.add(center, pos(0, 10, 0)))
    blocks.place(RED_WOOL, positions.add(center, pos(0, -10, 0)))
    gameplay.title(mobs.target(LOCAL_PLAYER), "Poles", "North and South")
})
```

## Step 5

### Final Check | 최종 확인

Run all commands in order.  
모든 명령어를 순서대로 실행해 보세요.

1. `earth` = Make the Earth  
   지구 만들기

2. `equator` = Draw the Equator  
   적도 그리기

3. `pm` = Draw the Prime Meridian  
   본초자오선 그리기

4. `poles` = Mark the North Pole and South Pole  
   북극과 남극 표시하기

### Mission Complete | 미션 완료

Great job! You created a simple Earth model with important geography lines.  
잘했습니다! 중요한 지리 선이 있는 간단한 지구 모형을 만들었습니다.
