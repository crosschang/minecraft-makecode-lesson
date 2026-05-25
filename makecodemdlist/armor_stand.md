# 갑옷거치대 만들기

```template
player.onChat("1", function () {
    player.execute(
    "" + ""
    )
})

```

## Step 1

### 기본 만들기 | Make a Gold Block

채팅창에 `lucky`를 입력하면 내 앞에 금 블록이 나타나게 만들어 봅시다.  
Type `lucky` in the chat to make a gold block appear in front of you.

```blocks
player.onChat("lucky", function () {
    blocks.place(GOLD_BLOCK, pos(0, 0, 2))
})
```