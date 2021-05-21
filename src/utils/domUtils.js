const domUtils = {
    addClassName(el, cls) {
        if (!domUtils.hasClassName(el, cls)) {
            el.classList.add(cls);
        }
    },

    browserDetect() {
        // https://github.com/mbasso/react-browser-detection/blob/master/src/index.js
        const isOpera =
            (!!window.opr && !!window.opr.addons) ||
            !!window.opera ||
            navigator.userAgent.indexOf(' OPR/') >= 0;
        const isFirefox = typeof InstallTrigger !== 'undefined';
        const isChrome =
            !!window.chrome &&
            !!window.chrome.webstore &&
            navigator.userAgent.toLowerCase().indexOf('googlebot') === -1;
        const isSafari = !isChrome && navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
        const isIE = /* @cc_on!@ */false || !!document.documentMode;
        const isEdge = !(isIE) && !!window.StyleMedia;
        const isBlink = (isChrome || isOpera) && !!window.CSS;
        const isGoogleBot = navigator.userAgent.toLowerCase().indexOf('googlebot') !== -1;

        if (isOpera) {
            return 'opera';
        }

        if (isFirefox) {
            return 'firefox';
        }

        if (isSafari) {
            return 'safari';
        }

        if (isIE) {
            return 'ie';
        }

        if (isEdge) {
            return 'edge';
        }

        if (isChrome) {
            return 'chrome';
        }

        if (isBlink) {
            return 'blink';
        }

        if (isGoogleBot) {
            return 'googlebot';
        }

        return 'unknown';
    },

    cssAnimationType(element) {
        const animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'animationend',
            WebkitAnimation: 'webkitAnimationEnd',
        };
        let propValue;

        Object.keys(animations).forEach((key) => {
            if (!propValue && element && element.style[key] !== undefined) {
                propValue = animations[key];
            }
        });

        return propValue;
    },

    cssTransitionType(element) {
        const transitions = {
            transition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd',
        };

        let propValue;

        Object.keys(transitions).forEach((key) => {
            if (!propValue && element && element.style[key] !== undefined) {
                propValue = transitions[key];
            }
        });

        return propValue;
    },

    hasClassName(el, cls) {
        return el.classList.contains(cls);
    },

    isInViewport(el, parentEl) {
        if (el) {
            const elRect = el.getBoundingClientRect();
            const parentElRect = parentEl.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth;
            let isInTop; let isInRight; let isInBottom; let isInLeft; let topBias; let
                bottomBias;

            if (!parentEl) {
                isInTop = elRect.top >= 0;
                isInRight = elRect.right <= windowWidth;
                isInBottom = elRect.bottom <= windowHeight;
                isInLeft = elRect.left >= 0;
                topBias = elRect.top;
                bottomBias = elRect.bottom;
            } else {
                isInTop = parentElRect.top >= elRect.height;
                isInRight = windowWidth - parentElRect.right >= elRect.width;
                isInBottom = windowHeight - parentElRect.bottom >= elRect.height;
                isInLeft = parentElRect.left >= elRect.width;
                topBias = parentElRect.top;
                bottomBias = windowHeight - parentElRect.bottom;
            }

            return {
                isInTop, isInRight, isInBottom, isInLeft, topBias, bottomBias,
            };
        }
        return false;
    },

    removeClassName(el, cls) {
        el.classList.remove(cls);
    },

    scrollPos(el) {
        if (el) {
            return el.scrollTop;
        }

        return window.scrollY || window.pageYOffset;
    },

    scrollTo(to, duration, parentEl) {
        // Defaults
        const o = {
            duration: duration || duration === 0 ? 0 : 250,
            parentEl: parentEl || null,
            to: to || 0,
        };
        const scrollIncrementMS = 10;

        let currentViewPortPosistion = !o.parentEl ?
            document.body.scrollTop || document.documentElement.scrollTop :
            o.parentEl.scrollTop;
        // console.log('currentViewPortPosistion: ' + currentViewPortPosistion);
        let difference = o.to - currentViewPortPosistion;
        const numSteps = o.duration / scrollIncrementMS;
        const increment = difference / numSteps;

        // const startTime = Date.now();
        // console.log('start: ' + startTime);

        const scrollInterval = setInterval(() => {
            currentViewPortPosistion = !o.parentEl ?
                document.body.scrollTop || document.documentElement.scrollTop :
                o.parentEl.scrollTop;
            difference = o.to - currentViewPortPosistion;
            const interval = Math.abs(difference) < Math.abs(increment) ? difference : increment;
            const newViewPortPosistion = currentViewPortPosistion + interval;
            let newParentEl = parentEl;

            if (!newParentEl) {
                document.body.scrollTop = newViewPortPosistion;
                document.documentElement.scrollTop = newViewPortPosistion;
            } else {
                newParentEl = {
                    ...newParentEl,
                    scrollTop: newViewPortPosistion,
                };
            }

            if (
                newViewPortPosistion === o.to ||
                (!newParentEl &&
                    (window.innerHeight +
                        (window.scrollY || window.pageYOffset) >= document.body.scrollHeight)
                )
            ) {
                // console.log('ellapsed: ' + parseInt(startTime - Date.now()));
                clearInterval(scrollInterval);
            }
        }, scrollIncrementMS);
    },
};

export default domUtils;
