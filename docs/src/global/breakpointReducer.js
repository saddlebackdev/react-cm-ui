
export const DEFAULT_STATE = {
    clientHeight: null,
    clientWidth: null,
    isLarge: false,
    isMedium: false,
    isMobile: false,
    isSmall: false,
    isXLarge: false,
    isXSmall: false,
    isXXSmall: false,
    winWidth: null,
};

const breakpoint = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'BreakpointActions.ON_UPDATE':
            return {
                ...state,
                clientHeight: action.result.clientHeight,
                clientWidth: action.result.clientWidth,
                isLarge: action.result.isLarge,
                isMedium: action.result.isMedium,
                isMobile: action.result.isMobile,
                isSmall: action.result.isSmall,
                isXLarge: action.result.isXLarge,
                isXSmall: action.result.isXSmall,
                isXXSmall: action.result.isXXSmall,
                winWidth: action.result.winWidth,
            };
    }

    return state;
};

export default breakpoint;
