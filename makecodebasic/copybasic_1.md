# Copy Builder Mission

```template
let pos1: Position = null
let pos2: Position = null
```

## 소개 | Introduction @showdialog

오늘은 내가 선택한 두 위치 사이의 건물을 복사해서, **현재 내가 서 있는 위치**에 붙여 넣는 코드를 만들어 봅니다.  
Today, we will make code that copies the area between two saved positions and pastes it at **your current player position**.

사용할 채팅 명령어:  
Chat commands we will use:

- `1` = 첫 번째 위치 저장 | Save the first position
- `2` = 두 번째 위치 저장 | Save the second position
- `copy` = 현재 위치에 복사하기 | Copy to your current position

먼저 복사하고 싶은 건물의 양쪽 모서리에 서서 `1`, `2`를 입력하세요.  
First, stand at the two corners of the build you want to copy and type `1`, then `2`.

## Step 1

### 첫 번째 위치 저장하기 | Save the First Position

복사할 구역의 첫 번째 모서리로 이동한 뒤, 채팅창에 `1`을 입력하면 그 위치를 저장하게 만드세요.  
Move to the first corner of the area you want to copy. Type `1` in the chat to save that position.

```blocks
let pos1: Position = null
let pos2: Position = null

player.onChat("1", function () {
    pos1 = player.position()
    player.say("First position saved!")
})
```

### 테스트 | Test

복사하고 싶은 건물의 한쪽 모서리에 서서 `1`을 입력하세요.  
Stand at one corner of your build and type `1`.

## Step 2

### 두 번째 위치 저장하기 | Save the Second Position

이제 복사할 구역의 반대쪽 모서리로 이동한 뒤, 채팅창에 `2`를 입력하면 두 번째 위치를 저장하게 만드세요.  
Now move to the opposite corner of the area. Type `2` in the chat to save the second position.

```blocks
let pos1: Position = null
let pos2: Position = null

player.onChat("1", function () {
    pos1 = player.position()
    player.say("First position saved!")
})

player.onChat("2", function () {
    pos2 = player.position()
    player.say("Second position saved!")
})
```

### 위치 저장 순서 | Position Saving Order

1. 첫 번째 모서리에서 `1` 입력  
   Type `1` at the first corner.

2. 두 번째 모서리에서 `2` 입력  
   Type `2` at the second corner.

## Step 3

### 현재 위치에 복사하기 | Copy to Your Current Position

이제 `copy`를 입력하면, `pos1`부터 `pos2`까지의 구역이 현재 내가 서 있는 위치로 복사되게 만드세요.  
Now make the `copy` command. When you type `copy`, the area from `pos1` to `pos2` will be copied to your current position.

```blocks
let pos1: Position = null
let pos2: Position = null

player.onChat("1", function () {
    pos1 = player.position()
    player.say("First position saved!")
})

player.onChat("2", function () {
    pos2 = player.position()
    player.say("Second position saved!")
})

player.onChat("copy", function () {
    blocks.clone(
        pos1,
        pos2,
        player.position(),
        CloneMask.Replace,
        CloneMode.Normal
    )
    player.say("Copied to your current position!")
})
```

### 테스트 | Test

1. 복사할 건물의 첫 번째 모서리에 서서 `1`을 입력하세요.  
   Stand at the first corner of the build and type `1`.

2. 두 번째 모서리에 서서 `2`를 입력하세요.  
   Stand at the second corner and type `2`.

3. 복사본을 붙여 넣고 싶은 위치로 이동하세요.  
   Move to the place where you want to paste the copy.

4. 채팅창에 `copy`를 입력하세요.  
   Type `copy` in the chat.

## Step 4

### 안전 장치 추가하기 | Add a Safety Check

만약 `1`번이나 `2`번 위치를 저장하지 않고 `copy`를 입력하면 오류가 날 수 있습니다.  
If you type `copy` before saving position `1` or position `2`, an error can happen.

이번에는 위치가 저장되지 않았을 때 경고 메시지가 나오도록 만들어 봅시다.  
This time, add a warning message when the positions are not saved yet.

```blocks
let pos1: Position = null
let pos2: Position = null

player.onChat("1", function () {
    pos1 = player.position()
    player.say("First position saved!")
})

player.onChat("2", function () {
    pos2 = player.position()
    player.say("Second position saved!")
})

player.onChat("copy", function () {
    if (pos1 == null || pos2 == null) {
        player.say("Please save positions 1 and 2 first!")
    } else {
        blocks.clone(
            pos1,
            pos2,
            player.position(),
            CloneMask.Replace,
            CloneMode.Normal
        )
        player.say("Copy complete!")
    }
})
```

### 왜 필요할까요? | Why Do We Need This?

`if`는 “만약 ~라면”이라는 뜻입니다.  
`if` means “if something is true.”

여기서는 이렇게 생각하면 됩니다.  
Think about it like this:

- 위치가 저장되지 않았다면 → 경고 메시지 보여주기  
  If the positions are not saved → show a warning message.

- 위치가 저장되어 있다면 → 복사하기  
  If the positions are saved → copy the build.

## Step 5

### 최종 미션 | Final Mission

이제 내가 만든 작은 건물, 나무, 장식, 무대를 다른 위치로 복사해 봅시다.  
Now try copying your small building, tree, decoration, or stage to a new location.

### 미션 순서 | Mission Steps

1. 작은 건물을 하나 만드세요.  
   Build a small structure.

2. 첫 번째 모서리에서 `1`을 입력하세요.  
   Type `1` at the first corner.

3. 두 번째 모서리에서 `2`를 입력하세요.  
   Type `2` at the second corner.

4. 복사본을 만들 위치로 이동하세요.  
   Move to the place where you want to paste the copy.

5. `copy`를 입력하세요.  
   Type `copy`.

### 성공 조건 | Success Check

- 내가 고른 구역이 현재 위치로 복사되었나요?  
  Was your selected area copied to your current position?

- `1`, `2`를 저장하지 않고 `copy`를 입력했을 때 경고가 나오나요?  
  Do you see a warning if you type `copy` before saving positions `1` and `2`?

## Plus Mission

### 플러스 미션: 복사 위치 바꾸기 | Bonus Mission: Change the Paste Position

기본 미션을 완료했다면, 복사본이 내 바로 앞에 나타나도록 바꿔 보세요.  
If you finished the main mission, try changing the code so the copy appears in front of you.

힌트: `player.position()` 대신 아래 위치를 사용할 수 있습니다.  
Hint: You can use this position instead of `player.position()`.

```ghost
positions.add(player.position(), pos(0, 0, 3))
```

### 생각해 보기 | Think About It

- `pos(0, 0, 3)`에서 `3`은 어느 방향으로 이동하는 숫자일까요?  
  In `pos(0, 0, 3)`, which direction does the number `3` move?

- `pos(3, 0, 0)`으로 바꾸면 어디에 복사될까요?  
  What happens if you change it to `pos(3, 0, 0)`?

### 완료 | Complete

축하합니다! 이제 여러분은 위치를 저장하고, 선택한 구역을 원하는 곳에 복사할 수 있습니다.  
Congratulations! You can now save positions and copy a selected area to a new place.
