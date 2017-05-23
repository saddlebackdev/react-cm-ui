'use strict';

export default class DOMUtils {
    static addClassName(el, cls) {
        if (!this.hasClassName(el, cls)) {
            el.classList.add(cls);
        }
    }

    static hasClassName(el, cls) {
        return el.classList.contains(cls);
    }

    static removeClassName(el, cls) {
        el.classList.remove(cls);
    }

    static scrollTo(to, duration, parentEl) {
        // Defaults
        let o = {
            duration: duration || duration === 0 ? 0 : 250,
            parentEl: parentEl || null,
            to: to || 0
        };

        const SCROLL_INCREMENT_MS = 10;

        let currentViewPortPosistion = !o.parentEl ? document.body.scrollTop || document.documentElement.scrollTop : o.parentEl.scrollTop;
        console.log('currentViewPortPosistion: ' + currentViewPortPosistion);
        let difference = o.to - currentViewPortPosistion;
        let numSteps = o.duration / SCROLL_INCREMENT_MS;
        let increment = difference / numSteps;

        // let startTime = Date.now();
        // console.log('start: ' + startTime);

        let scrollInterval = setInterval(() => {
            currentViewPortPosistion = !o.parentEl ? document.body.scrollTop || document.documentElement.scrollTop : o.parentEl.scrollTop;
            difference = o.to - currentViewPortPosistion;

            let interval = Math.abs(difference) < Math.abs(increment) ? difference : increment;
            let newViewPortPosistion = currentViewPortPosistion + interval;

            if (!parentEl) {
                document.body.scrollTop = newViewPortPosistion;
                document.documentElement.scrollTop = newViewPortPosistion;
            } else {
                parentEl.scrollTop = newViewPortPosistion;
            }

            if (newViewPortPosistion === o.to || (!parentEl && (window.innerHeight + (window.scrollY || window.pageYOffset) >= document.body.scrollHeight))) {
                // console.log('ellapsed: ' + parseInt(startTime - Date.now()));
                clearInterval(scrollInterval);
            }
        }, SCROLL_INCREMENT_MS);
    }
}
