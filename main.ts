input.onButtonPressed(Button.A, function () {
    doSomething4(1, true)
})
input.onButtonPressed(Button.B, function () {
    doSomething2(1)
    basic.pause(70)
})
// 這是先跑在倒跑的
// 原理:讓x變大之後再讓y變大之後再讓x變小然後再讓y變小 這樣就一圈了 之後依此類推
function doSomething2 (num: number) {
    led.plot(0, 0)
    for (let index = 0; index < 4; index++) {
        a += 1
        basic.pause(70)
        led.plot(a, b)
    }
    for (let index = 0; index < 4; index++) {
        led.plot(a, b)
        b += 1
        basic.pause(70)
    }
    for (let index = 0; index < 4; index++) {
        led.plot(a, b)
        a += -1
        basic.pause(70)
    }
    for (let index = 0; index < 3; index++) {
        led.plot(a, b)
        b += -1
        basic.pause(70)
    }
    for (let index = 0; index < 3; index++) {
        led.plot(a, b)
        a += 1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.plot(a, b)
        b += 1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.plot(a, b)
        a += -1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.plot(a, b)
        b += -1
        basic.pause(70)
    }
    led.plot(2, 2)
    basic.pause(70)
    b = 0
    a = 0
    led.unplot(a, b)
    basic.pause(70)
    for (let index = 0; index < 4; index++) {
        a += 1
        basic.pause(70)
        led.unplot(a, b)
    }
    for (let index = 0; index < 4; index++) {
        led.unplot(a, b)
        b += 1
        basic.pause(70)
    }
    for (let index = 0; index < 4; index++) {
        led.unplot(a, b)
        a += -1
        basic.pause(70)
    }
    for (let index = 0; index < 3; index++) {
        led.unplot(a, b)
        b += -1
        basic.pause(70)
    }
    for (let index = 0; index < 3; index++) {
        led.unplot(a, b)
        a += 1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.unplot(a, b)
        b += 1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.unplot(a, b)
        a += -1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.unplot(a, b)
        b += -1
        basic.pause(70)
    }
    led.unplot(2, 2)
    basic.pause(70)
}
// 這是先跑在倒跑的
// 原理:讓x變大之後再讓y變大之後再讓x變小然後再讓y變小 這樣就一圈了 之後依此類推
function doSomething4 (num: number, bool: boolean) {
    led.plot(0, 0)
    for (let index = 0; index < 4; index++) {
        a += 1
        basic.pause(70)
        led.plot(a, b)
    }
    for (let index = 0; index < 4; index++) {
        led.plot(a, b)
        b += 1
        basic.pause(70)
    }
    for (let index = 0; index < 4; index++) {
        led.plot(a, b)
        a += -1
        basic.pause(70)
    }
    for (let index = 0; index < 3; index++) {
        led.plot(a, b)
        b += -1
        basic.pause(70)
    }
    for (let index = 0; index < 3; index++) {
        led.plot(a, b)
        a += 1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.plot(a, b)
        b += 1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.plot(a, b)
        a += -1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.plot(a, b)
        b += -1
        basic.pause(70)
    }
    led.plot(2, 2)
    basic.pause(70)
    b = 0
    a = 0
    led.unplot(a, b)
    basic.pause(70)
    for (let index = 0; index < 4; index++) {
        a += 1
        basic.pause(70)
        led.unplot(a, b)
    }
    for (let index = 0; index < 4; index++) {
        led.unplot(a, b)
        b += 1
        basic.pause(70)
    }
    for (let index = 0; index < 4; index++) {
        led.unplot(a, b)
        a += -1
        basic.pause(70)
    }
    for (let index = 0; index < 3; index++) {
        led.unplot(a, b)
        b += -1
        basic.pause(70)
    }
    for (let index = 0; index < 3; index++) {
        led.unplot(a, b)
        a += 1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.unplot(a, b)
        b += 1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.unplot(a, b)
        a += -1
        basic.pause(70)
    }
    for (let index = 0; index < 2; index++) {
        led.unplot(a, b)
        b += -1
        basic.pause(70)
    }
    led.unplot(2, 2)
    basic.pause(70)
    if (false) {
        led.unplot(a - 1, b - 1)
    }
}
let b = 0
let a = 0
let aaa = 0
basic.forever(function () {
    aaa += 1
    basic.pause(70)
    if (aaa % 2 == 0) {
        doSomething4(1, false)
    } else {
        doSomething4(1, true)
    }
})
