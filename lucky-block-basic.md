# Lucky Block Mini Game

```template
//
```

## Step 1

### 럭키블록 만들기 | Make a Lucky Block

채팅창에 `lucky`를 입력하면 내 앞에 금 블록이 나타나게 만드세요.  
Type `lucky` in the chat to make a gold block appear in front of you.

```blocks
player.onChat("lucky", function () {
    blocks.place(GOLD_BLOCK, pos(0, 0, 2))
})
```