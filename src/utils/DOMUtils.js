'use strict';

class DOMUtils {
    static addClassName(el, cls) {
        if (!this.hasClassName(el, cls)) {
            el.classList.add(cls);
        }
    }

    static browserDetect() {
        // https://github.com/mbasso/react-browser-detection/blob/master/src/index.js
        const isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        const isFirefox = typeof InstallTrigger !== 'undefined';
        const isChrome = !!window.chrome && !!window.chrome.webstore && navigator.userAgent.toLowerCase().indexOf('googlebot') === -1;
        const isSafari = !isChrome && navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
        const isIE = /*@cc_on!@*/false || !!document.documentMode;
        const isEdge = !(isIE) && !!window.StyleMedia;
        const isBlink = (isChrome || isOpera) && !!window.CSS;
        const isGoogleBot = navigator.userAgent.toLowerCase().indexOf('googlebot') !== -1;

        if (isOpera) {
            return 'opera';
        } else if (isFirefox) {
            return 'firefox';
        } else if (isSafari) {
            return 'safari';
        } else if (isIE) {
            return 'ie';
        } else if (isEdge) {
            return 'edge';
        } else if (isChrome) {
            return 'chrome';
        } else if (isBlink) {
            return 'blink';
        } else if (isGoogleBot) {
            return 'googlebot';
        } else {
            return 'unknown';
        }
    }

    static cssAnimationType(el) {
        let a;
        const animations = {
            'animation': 'animationend',
            'OAnimation': 'oAnimationEnd',
            'MozAnimation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd'
        };

        for (a in animations) {
            if (el.style[a] !== undefined) {
                return animations[a];
            }
        }
    }

    static cssTransitionType(el) {
        let t;
        const transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd otransitionend',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }

    static hasClassName(el, cls) {
        return el.classList.contains(cls);
    }

    static isInViewport(el, parentEl) {
        if (el) {
            const elRect = el.getBoundingClientRect();
            const parentElRect = parentEl.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth;
            let isInTop, isInRight, isInBottom, isInLeft;

            if (!parentEl) {
                isInTop = elRect.top >= 0;
                isInRight = elRect.right <= windowWidth;
                isInBottom = elRect.bottom <= windowHeight;
                isInLeft = elRect.left >= 0;
            } else {
                isInTop = parentElRect.top >= elRect.height;
                isInRight = windowWidth - parentElRect.right >= elRect.width;
                isInBottom = windowHeight - parentElRect.bottom >= elRect.height;
                isInLeft = parentElRect.left >= elRect.width;;
            }

            return { isInTop, isInRight, isInBottom, isInLeft }
        } else {
            return false;
        }
    }

    static removeClassName(el, cls) {
        el.classList.remove(cls);
    }

    static scrollPos(el) {
        if (el) {
            return el.scrollTop;
        } else {
            return window.scrollY || window.pageYOffset;
        }
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
        // console.log('currentViewPortPosistion: ' + currentViewPortPosistion);
        let difference = o.to - currentViewPortPosistion;
        let numSteps = o.duration / SCROLL_INCREMENT_MS;
        let increment = difference / numSteps;

        let startTime = Date.now();
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
