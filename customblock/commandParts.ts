/**
 * 명령어 조립 블록
 */
//% weight=100 color=#7B61FF icon="\uf121"
//% groups=['명령어 실행', '기본 조각', '갑옷 슬롯', '헬멧', '흉갑', '바지', '신발', '무기']
namespace commandParts {

    // -----------------------------
    // 명령어 실행
    // -----------------------------

    //% block="명령어 실행 %command"
    //% group="명령어 실행"
    export function runCommand(command: string) {
        player.execute(command)
    }

    //% block="갑옷 거치대 만들기"
    //% group="명령어 실행"
    export function summonArmorStand() {
        player.execute("summon armor_stand")
    }

    // -----------------------------
    // 기본 조각
    // -----------------------------

    //% block="replaceitem"
    //% group="기본 조각"
    export function replaceitem(): string {
        return "replaceitem "
    }

    //% block="entity"
    //% group="기본 조각"
    export function entity(): string {
        return "entity "
    }

    //% block="가장 가까운 갑옷 거치대"
    //% group="기본 조각"
    export function nearestArmorStand(): string {
        return "@e[type=armor_stand,c=1] "
    }

    //% block="슬롯 번호 0"
    //% group="기본 조각"
    export function slotZero(): string {
        return "0 "
    }

    // -----------------------------
    // 갑옷 슬롯
    // -----------------------------

    //% block="머리 슬롯"
    //% group="갑옷 슬롯"
    export function headSlot(): string {
        return "slot.armor.head "
    }

    //% block="흉갑 슬롯"
    //% group="갑옷 슬롯"
    export function chestSlot(): string {
        return "slot.armor.chest "
    }

    //% block="바지 슬롯"
    //% group="갑옷 슬롯"
    export function legsSlot(): string {
        return "slot.armor.legs "
    }

    //% block="신발 슬롯"
    //% group="갑옷 슬롯"
    export function feetSlot(): string {
        return "slot.armor.feet "
    }

    //% block="오른손 슬롯"
    //% group="갑옷 슬롯"
    export function mainHandSlot(): string {
        return "slot.weapon.mainhand "
    }

    //% block="왼손 슬롯"
    //% group="갑옷 슬롯"
    export function offHandSlot(): string {
        return "slot.weapon.offhand "
    }

    // -----------------------------
    // 헬멧
    // -----------------------------

    //% block="가죽 헬멧"
    //% group="헬멧"
    export function leatherHelmet(): string {
        return "leather_helmet"
    }

    //% block="사슬 헬멧"
    //% group="헬멧"
    export function chainmailHelmet(): string {
        return "chainmail_helmet"
    }

    //% block="철 헬멧"
    //% group="헬멧"
    export function ironHelmet(): string {
        return "iron_helmet"
    }

    //% block="금 헬멧"
    //% group="헬멧"
    export function goldenHelmet(): string {
        return "golden_helmet"
    }

    //% block="다이아몬드 헬멧"
    //% group="헬멧"
    export function diamondHelmet(): string {
        return "diamond_helmet"
    }

    //% block="네더라이트 헬멧"
    //% group="헬멧"
    export function netheriteHelmet(): string {
        return "netherite_helmet"
    }

    //% block="거북 등딱지"
    //% group="헬멧"
    export function turtleHelmet(): string {
        return "turtle_helmet"
    }

    // -----------------------------
    // 흉갑
    // -----------------------------

    //% block="가죽 흉갑"
    //% group="흉갑"
    export function leatherChestplate(): string {
        return "leather_chestplate"
    }

    //% block="사슬 흉갑"
    //% group="흉갑"
    export function chainmailChestplate(): string {
        return "chainmail_chestplate"
    }

    //% block="철 흉갑"
    //% group="흉갑"
    export function ironChestplate(): string {
        return "iron_chestplate"
    }

    //% block="금 흉갑"
    //% group="흉갑"
    export function goldenChestplate(): string {
        return "golden_chestplate"
    }

    //% block="다이아몬드 흉갑"
    //% group="흉갑"
    export function diamondChestplate(): string {
        return "diamond_chestplate"
    }

    //% block="네더라이트 흉갑"
    //% group="흉갑"
    export function netheriteChestplate(): string {
        return "netherite_chestplate"
    }

    //% block="겉날개"
    //% group="흉갑"
    export function elytra(): string {
        return "elytra"
    }

    // -----------------------------
    // 바지
    // -----------------------------

    //% block="가죽 바지"
    //% group="바지"
    export function leatherLeggings(): string {
        return "leather_leggings"
    }

    //% block="사슬 바지"
    //% group="바지"
    export function chainmailLeggings(): string {
        return "chainmail_leggings"
    }

    //% block="철 바지"
    //% group="바지"
    export function ironLeggings(): string {
        return "iron_leggings"
    }

    //% block="금 바지"
    //% group="바지"
    export function goldenLeggings(): string {
        return "golden_leggings"
    }

    //% block="다이아몬드 바지"
    //% group="바지"
    export function diamondLeggings(): string {
        return "diamond_leggings"
    }

    //% block="네더라이트 바지"
    //% group="바지"
    export function netheriteLeggings(): string {
        return "netherite_leggings"
    }

    // -----------------------------
    // 신발
    // -----------------------------

    //% block="가죽 신발"
    //% group="신발"
    export function leatherBoots(): string {
        return "leather_boots"
    }

    //% block="사슬 신발"
    //% group="신발"
    export function chainmailBoots(): string {
        return "chainmail_boots"
    }

    //% block="철 신발"
    //% group="신발"
    export function ironBoots(): string {
        return "iron_boots"
    }

    //% block="금 신발"
    //% group="신발"
    export function goldenBoots(): string {
        return "golden_boots"
    }

    //% block="다이아몬드 신발"
    //% group="신발"
    export function diamondBoots(): string {
        return "diamond_boots"
    }

    //% block="네더라이트 신발"
    //% group="신발"
    export function netheriteBoots(): string {
        return "netherite_boots"
    }

    // -----------------------------
    // 무기
    // -----------------------------

    //% block="다이아몬드 검"
    //% group="무기"
    export function diamondSword(): string {
        return "diamond_sword"
    }

    //% block="다이아몬드 도끼"
    //% group="무기"
    export function diamondAxe(): string {
        return "diamond_axe"
    }

    //% block="다이아몬드 괭이"
    //% group="무기"
    export function diamondHoe(): string {
        return "diamond_hoe"
    }

    //% block="다이아몬드 곡괭이"
    //% group="무기"
    export function diamondPickaxe(): string {
        return "diamond_pickaxe"
    }

    //% block="다이아몬드 삽"
    //% group="무기"
    export function diamondShovel(): string {
        return "diamond_shovel"
    }

    //% block="방패"
    //% group="무기"
    export function shield(): string {
        return "shield"
    }
}