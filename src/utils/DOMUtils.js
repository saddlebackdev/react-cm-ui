'use strict';

class DOMUtils {
    static addClassName(el, cls) {
        if (!this.hasClassName(el, cls)) {
            el.classList.add(cls);
        }
    }

    static browserDetect() {
        let ua = window.navigator.userAgent;

        if (ua.indexOf('Chrome/') > -1 && ua.indexOf('Safari/') > -1 && ua.indexOf('Edge/') <= -1) {
            // "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36"
            return 'ua-chrome';
        } else if (ua.indexOf('Trident/') > -1) {
            // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko"
            return 'ua-ie-11';
        } else if (ua.indexOf('Edge/') > -1) {
            // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586"
            return 'ua-ie-edge';
        } else if (ua.indexOf('Firefox') > -1) {
            // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:54.0) Gecko/20100101 Firefox/54.0"
            return 'ua-firefox';
        } else if (ua.indexOf('Safari/') > -1 && ua.indexOf('Chrome/') <= -1) {
            // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/601.5.17 (KHTML, like Gecko) Version/9.1 Safari/601.5.17"
            return 'ua-safari';
        } else {
            return false;
        }
    }

    static hasClassName(el, cls) {
        return el.classList.contains(cls);
    }

    static isInViewport(el) {
        const rect = el.getBoundingClientRect();
        const isInTop = rect.top >= 0;
        const isInRight = rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        const isInBottom = rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        const isInLeft = rect.left >= 0;

        return {
            isInTop: isInTop,
            isInRight: isInRight,
            isInBottom: isInBottom,
            isInLeft: isInLeft
        }
    }

    static removeClassName(el, cls) {
        el.classList.remove(cls);
    }

    static scrollPos() {
        return (window.scrollY || window.pageYOffset);
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

export default DOMUtils;
