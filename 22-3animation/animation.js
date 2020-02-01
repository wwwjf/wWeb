function getStyle(element, property) {
    if (getComputedStyle) {
        return getComputedStyle(element)[property];
    } else {
        return element.currentStyle[property]
    }
}

function animate(element, properties) {
    clearInterval(element.timerId)
    element.timerId = setInterval(() => {
        for (let property in properties) {
            let current
            let target = properties[property]
            if (property === 'opacity') {
                current = Math.round(parseFloat(getStyle(element, 'opacity')) * 100)
            } else {
                current = parseInt(getStyle(element, property))
            }

            let speed = (target - current) / 30
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
            if (property === 'opacity') {
                element.style.opacity = (current + speed) / 100
            } else {
                element.style[property] = current + speed + 'px'
            }
        }


    }, 20);
}