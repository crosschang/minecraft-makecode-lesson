# Minecraft Jockey Summoning Experiments

### @explicitHints true

```validation.global
# BlocksExistValidator
* markers: validate-exists
```

```template
//
```

## Getting Started @showdialog

A **jockey** is a mob that **rides another mob**. In this activity, you will create chat commands from `1` to `6` and compare different ways to summon **baby zombies**, **chickens**, **spiders**, and **striders**.

- Use **Code Builder → MakeCode** in Minecraft Education to build your program with blocks.
- You will use the `||player:on chat command||`, `||player:execute command||`, `||mobs:spawn mob||`, and `||positions:position||` blocks.
- Use a practice world where cheats and commands are enabled, and make sure you have plenty of open space.
- **Build the blocks and test each chat command** before moving on to the next step.

## Step 1 · Summon a Baby Zombie (`1`)

Add an `||player:on chat command||` block and set the command name to `1`. Place an `||player:execute command||` block inside it, then complete the command using **`minecraft:as_baby`**.

```blocks
// @validate-exists
player.onChat("1", function () {
    // @validate-exists
    player.execute(
    "summon " + "zombie " + "~ ~ ~ " + "~ ~ " + "minecraft:as_baby"
    )
})
```

**Check your result:** Type `1` in chat. Compare the zombie with a normal adult zombie. Is it smaller? The coordinates `~ ~ ~` are relative to the command's execution position.

## Step 2 · Potential Baby Zombie Jockey + Chicken (`2`)

Add another `||player:on chat command||` block and name it `2`. Use an execute-command block with the **`minecraft:as_baby_jockey`** event, then add a **spawn chicken** block.

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

**Check your result:** Type `2` in chat. Observe whether a baby zombie and a chicken appear, and whether the baby zombie actually rides the chicken. **Summoning both mobs does not guarantee that one will ride the other.**

## Step 3 · Compare a Normal Zombie and a Potential Baby Jockey (`3`)

Create chat command `3` and use **two** `||player:execute command||` blocks. The first summons a normal zombie, while the second summons a zombie using a jockey event.

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

**Check your result:** Type `3` in chat and compare the two results. Notice that **command `3` does not include a chicken-spawning block**.

## Step 4 · Summon a Spider Jockey (`4`)

Create chat command `4` and summon a spider (`spider`) using the **`minecraft:entity_spawned_with_default_jockey`** event.

```blocks
// @validate-exists
player.onChat("4", function () {
    // @validate-exists
    player.execute(
    "summon " + "spider " + pos(0, 0, 0) + " " + "minecraft:entity_spawned_with_default_jockey"
    )
})
```

**Check your result:** Type `4` in chat and see whether a skeleton appears riding the spider. Depending on the world conditions, time of day, and game version, you may not see a rider.

## Step 5 · Strider with a Piglin Jockey Event (`5`)

Create chat command `5` and apply the **`spawn_adult_piglin_jockey`** event to a strider (`strider`). **Do not add `minecraft:` to the beginning of this event name.**

```blocks
// @validate-exists
player.onChat("5", function () {
    // @validate-exists
    player.execute(
    "summon " + "strider " + pos(0, 0, 0) + " " + "spawn_adult_piglin_jockey"
    )
})
```

**Check your result:** Type `5` in chat and observe the strider's saddle and any riders. This event is intended for a Piglin-related jockey, but **some Bedrock versions have been reported to spawn the strider without a rider**. Record whether the strider spawned and whether it had a rider as two separate observations.

## Step 6 · Parent Strider and Baby Strider (`6`)

Create the final chat command, `6`, and apply the **`spawn_adult_parent_jockey`** event. Notice that the event name is different from the one used in Step 5.

```blocks
// @validate-exists
player.onChat("6", function () {
    // @validate-exists
    player.execute(
    "summon " + "strider " + pos(0, 0, 0) + " " + "spawn_adult_parent_jockey"
    )
})
```
