# Superpower Academy

```template
player.onChat("speed", function () {
})
```

## 소개 | Introduction @showdialog

오늘은 나만의 특별한 능력을 가진 **히어로**를 만들어 봅시다!  
Today, you will create your own **superhero powers**!

이번 수업에서 만들 능력:  
Powers you will create today:

- 빠르게 달리기 | Run Fast
- 높이 점프하기 | Jump High
- 어둠 속 보기 | See in the Dark
- 두 가지 능력 합치기 | Combine Two Powers
- 친구들과 능력 나누기 | Share Powers with Friends

준비가 되었다면 **확인**을 눌러 시작하세요!  
Press **OK** when you are ready to begin!

## Step 1

### 초고속 히어로 만들기 | Create a Speed Hero

채팅창에 `speed`를 입력하면 빠르게 달릴 수 있는 히어로가 되게 만드세요.  
Type `speed` in the chat to become a hero who can run super fast.

```blocks
player.onChat("speed", function () {
    mobs.applyEffect(Effect.Speed, mobs.target(LOCAL_PLAYER), 20, 2)
    player.say("Speed Hero!")
})
```

### 테스트 | Test

채팅창에 `speed`를 입력한 뒤 앞으로 달려 보세요!  
Type `speed` in the chat, then try running forward!

## Step 2

### 슈퍼 점프 히어로 만들기 | Create a Jump Hero

이번에는 채팅창에 `jump`를 입력하면 높이 점프할 수 있는 히어로가 되게 만드세요.  
This time, type `jump` in the chat to become a hero who can jump high.

```blocks
player.onChat("jump", function () {
    mobs.applyEffect(Effect.JumpBoost, mobs.target(LOCAL_PLAYER), 20, 2)
    player.say("Jump Hero!")
})
```

### 테스트 | Test

채팅창에 `jump`를 입력한 뒤 점프해 보세요!  
Type `jump` in the chat, then try jumping!

## Step 3

### 어둠을 보는 히어로 만들기 | Create a Night Vision Hero

어두운 장소에서도 잘 볼 수 있는 히어로를 만들어 봅시다.  
Let's create a hero who can see clearly in dark places.

채팅창에 `night`를 입력하면 야간 투시 능력을 받게 만드세요.  
Type `night` in the chat to get night vision power.

```blocks
player.onChat("night", function () {
    mobs.applyEffect(Effect.NightVision, mobs.target(LOCAL_PLAYER), 30, 1)
    player.say("Night Vision Hero!")
})
```

### 테스트 | Test

어두운 장소로 이동한 다음 `night`를 입력해 보세요.  
Move to a dark place, then type `night`.

## Step 4

### 나만의 히어로 만들기 | Create Your Own Hero

지금까지 배운 능력 중 하나를 골라, 나만의 히어로 이름을 만들어 봅시다.  
Choose one of the powers you learned and create your own hero name.

예를 들어 `rabbit`을 입력하면 높이 점프하는 Rabbit Hero를 만들 수 있습니다.  
For example, type `rabbit` to become a jumping Rabbit Hero.

```blocks
player.onChat("rabbit", function () {
    mobs.applyEffect(Effect.JumpBoost, mobs.target(LOCAL_PLAYER), 20, 2)
    player.say("Rabbit Hero!")
})
```

### 나만의 아이디어 | Your Idea

아래 중 하나를 선택하거나 직접 새로운 이름을 만들어 보세요.  
Choose one of the ideas below, or make your own name.

- `cheetah` = 빠른 히어로 | Speed Hero
- `rabbit` = 점프 히어로 | Jump Hero
- `owl` = 야간 투시 히어로 | Night Vision Hero

## Step 5

### 궁극의 능력 만들기 | Create an Ultimate Power

이번에는 두 가지 능력을 한 번에 사용하는 궁극의 히어로를 만들어 봅시다.  
Now, create an ultimate hero who can use two powers at the same time.

채팅창에 `ultimate`를 입력하면 빠르게 달리고 높이 점프하게 만드세요.  
Type `ultimate` in the chat to run fast and jump high.

```blocks
player.onChat("ultimate", function () {
    mobs.applyEffect(Effect.Speed, mobs.target(LOCAL_PLAYER), 20, 2)
    mobs.applyEffect(Effect.JumpBoost, mobs.target(LOCAL_PLAYER), 20, 2)
    player.say("Ultimate Hero Power!")
})
```

### 테스트 | Test

채팅창에 `ultimate`를 입력하고 달리면서 점프해 보세요!  
Type `ultimate`, then try running and jumping!

## Step 6

### 능력 해제 버튼 만들기 | Create a Power Off Button

히어로 능력을 사용한 뒤에는 다시 평범한 모습으로 돌아오는 버튼도 필요합니다.  
After using hero powers, we also need a button to return to normal.

채팅창에 `normal`을 입력하면 모든 능력이 사라지게 만드세요.  
Type `normal` in the chat to remove all powers.

```blocks
player.onChat("normal", function () {
    mobs.clearEffect(mobs.target(LOCAL_PLAYER))
    player.say("Back to Normal!")
})
```

### 최종 테스트 | Final Test

아래 명령어를 사용해서 여러분의 히어로 능력을 시험해 보세요.  
Test your hero powers using the commands below.

1. `speed`를 입력하고 빠르게 달려 보세요.  
   Type `speed` and run fast.

2. `jump`를 입력하고 높이 점프해 보세요.  
   Type `jump` and jump high.

3. `night`를 입력하고 어두운 장소를 탐험해 보세요.  
   Type `night` and explore a dark place.

4. `ultimate`를 입력하고 달리기와 점프를 함께 사용해 보세요.  
   Type `ultimate` and use running and jumping together.

5. 마지막으로 `normal`을 입력해 원래 모습으로 돌아오세요.  
   Finally, type `normal` to return to normal.

여기까지 완성했다면 기본 미션 성공입니다!  
Complete this step to finish the basic mission!

## Step 7

### 플러스 미션: 나만의 팀 히어로 능력 만들기 | Bonus Mission: Create Your Own Team Power

기본 미션을 모두 완료했다면, 이제 여러분이 직접 새로운 히어로 능력을 설계해 보세요!  
If you completed the basic mission, design a brand-new hero power by yourself!

이번 미션에서는 정답 힌트 블록이 없습니다.  
There are no answer hint blocks in this mission.

### 미션 목표 | Mission Goal

친구들과 함께 사용할 수 있는 **팀 히어로 명령어**를 하나 만드세요.  
Create one **team hero command** that you can use with your friends.

조건은 다음과 같습니다.  
Your command must follow these rules:

1. 새로운 채팅 명령어 이름을 만드세요.  
   Create a new chat command name.

2. 능력을 두 가지 이상 조합하세요.  
   Combine two or more powers.

3. 능력을 받을 대상을 직접 선택하세요.  
   Choose who will receive the powers.

4. 마지막에 나만의 메시지가 나오게 만드세요.  
   Show your own message at the end.

### 아이디어 | Ideas

아래 아이디어 중 하나를 골라도 되고, 직접 새로운 팀을 만들어도 됩니다.  
Choose one idea below, or invent your own team.

| 팀 이름 | Command Idea | Power Idea |
| --- | --- | --- |
| Rescue Team | `rescue` | 빠르게 달리기 + 어둠 속 보기 |
| Rabbit Team | `rabbitteam` | 빠르게 달리기 + 높이 점프하기 |
| Explorer Team | `explorer` | 어둠 속 보기 + 원하는 능력 |
| My Own Team | 직접 정하기 | 직접 정하기 |

### 생각해 보기 | Think Before You Build

- 어떤 명령어 이름을 사용할까요?  
  What command name will you use?

- 어떤 능력 두 가지를 합칠까요?  
  Which two powers will you combine?

- 나에게만 적용할까요, 친구들과 함께 사용할까요?  
  Will it work only for you, or for your friends too?

- 실행되었을 때 어떤 메시지가 나오면 좋을까요?  
  What message should appear when it runs?

### 테스트 | Test

1. 만든 채팅 명령어를 입력하세요.  
   Type the chat command you created.

2. 선택한 능력들이 모두 작동하는지 확인하세요.  
   Check whether all of your chosen powers work.

3. 친구들과 함께 사용할 수 있다면 함께 테스트하세요.  
   If your command can work with friends, test it together.

4. 테스트가 끝나면 `normal`을 입력해 원래 모습으로 돌아오세요.  
   When the test is finished, type `normal` to return to normal.

```ghost

player.onChat("team", function () {
    mobs.applyEffect(Effect.Speed, mobs.target(ALL_PLAYERS), 30, 2)
    mobs.applyEffect(Effect.NightVision, mobs.target(LOCAL_PLAYER), 30, 1)
    player.say("Team Power!")
})

```