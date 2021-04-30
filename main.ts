let counter = 0
basic.forever(function () {
    counter = 24
    for (let index = 0; index < 25; index++) {
        for (let index = 0; index <= counter; index++) {
            led.toggle(index % 5, index / 5)
            basic.pause(100)
            if (index != counter) {
                led.toggle(index % 5, index / 5)
            }
        }
        counter += -1
    }
})
