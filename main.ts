let soilMoisture = 0
basic.forever(function () {
    // 读取土壤湿度传感器的数值
    soilMoisture = pins.analogReadPin(AnalogPin.P1)
    // 当土壤湿度低于某个阈值时，点亮LED灯提示用户浇水
    if (soilMoisture < 500) {
        Microbit.ledRBrightness(DigitalPin.P0, true)
    } else {
        Microbit.ledRBrightness(DigitalPin.P0, false)
    }
    // 等待一段时间再进行下一次检测，以免频繁检测
    basic.pause(1000)
})
