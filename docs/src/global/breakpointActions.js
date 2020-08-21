
import { appReduxStore } from './configureReduxStore';

export default class BreakpointActions {
    static update() {
        const { clientHeight } = document.documentElement;
        const { clientWidth } = document.documentElement;
        const winWidth = window.innerWidth;

        const isMedium = winWidth >= 768 && winWidth <= 1023;
        const isMobile = winWidth <= 767;
        const isLarge = winWidth >= 1024 && winWidth <= 1439;
        const isSmall = winWidth >= 425 && winWidth <= 767;
        const isXLarge = winWidth >= 1440;
        const isXSmall = winWidth >= 375 && winWidth <= 424;
        const isXXSmall = winWidth <= 374;

        appReduxStore.dispatch({
            result: {
                clientHeight,
                clientWidth,
                isLarge,
                isMedium,
                isMobile,
                isSmall,
                isXLarge,
                isXSmall,
                isXXSmall,
                winWidth,
            },
            type: 'BreakpointActions.ON_UPDATE',
        });
    }
}
