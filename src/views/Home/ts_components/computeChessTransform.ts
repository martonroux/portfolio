export function computeChessTransform(chessBoardSize: string, chessLeft: boolean): string {
    // WHEN NORMAL: transform: translate(calc(100vw / 2 - 50%), calc(50vh - 50% - var(--grid-size) / 2));
    // WHEN LEFT: transform: translate(var(--grid-size), calc((100vh - var(--grid-size)) / 2 - 50%));
    // WHEN LEFT, WIDTH < 1150px: transform: translate(calc(100vw - 30vw), calc((100vh - var(--grid-size)) / 2 - 50%));

    const width: number = window.innerWidth;
    const boardSize: string = chessBoardSize.substring(5, chessBoardSize.length - 1);
    const boardOrientation: string = boardSize.includes('height') ? 'height' : 'width';
    const chessBoardSmallHeight: number = 0.0947 * window.innerHeight * 8;
    const chessBoardSmallWidth: number = 0.099 * width * 8;
    const chessBoardNormal: number = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-size').substring(0, 2)) * 8;

    if (chessLeft === true) { // If chessLeft is true, chessBoard goes to the left of the screen
        if (width < 1150) { // If width too small, chessLeft goes to the right of the screen
            switch (boardOrientation) {
                case 'height': // If chessBoard size is defined by --chess-board-small-height
                    if (chessBoardNormal < chessBoardSmallHeight) {
                        return `translate(calc(100vw - 30vw), calc((100vh - var(--grid-size)) / 2 - var(--grid-size) * 8 / 2))`;
                    } else {
                        return `translate(calc(100vw - 30vw), calc((100vh - var(--grid-size)) / 2 - ${boardSize} / 2))`;
                    }
                case 'width': // If chessBoard size is defined by --chess-board-small-width
                    if (chessBoardNormal < chessBoardSmallWidth) {
                        return `translate(calc(100vw - 30vw), calc((100vh - var(--grid-size)) / 2 - var(--grid-size) * 8 / 2))`;
                    } else {
                        return `translate(calc(100vw - 30vw), calc((100vh - var(--grid-size)) / 2 - ${boardSize} / 2))`;
                    }
            }
        } else { // Any other case, chessLeft goes to the left of the screen
            switch (boardOrientation) {
                case 'height': // If chessBoard size is defined by --chess-board-small-height
                    if (chessBoardNormal < chessBoardSmallHeight) {
                        return `translate(var(--grid-size), calc((100vh - var(--grid-size)) / 2 - var(--grid-size) * 8 / 2))`;
                    } else {
                        return `translate(var(--grid-size), calc((100vh - var(--grid-size)) / 2 - ${boardSize} / 2))`;
                    }
                case 'width': // If chessBoard size is defined by --chess-board-small-width
                    if (chessBoardNormal < chessBoardSmallWidth) {
                        return `translate(var(--grid-size), calc((100vh - var(--grid-size)) / 2 - var(--grid-size) * 8 / 2))`;
                    } else {
                        return `translate(var(--grid-size), calc((100vh - var(--grid-size)) / 2 - ${boardSize} / 2))`;
                    }
            }
        }
    } else { // If chessLeft is false, chessBoard goes to the center of the screen
        switch (boardOrientation) {
            case 'height': // If chessBoard size is defined by --chess-board-small-height
                if (chessBoardNormal < chessBoardSmallHeight) {
                    return `translate(calc(100vw / 2 - var(--grid-size) * 8 / 2), calc(50vh - var(--grid-size) * 8 / 2 - var(--grid-size) / 2))`;
                } else {
                    return `translate(calc(100vw / 2 - ${boardSize} / 2), calc(50vh - ${boardSize} / 2 - var(--grid-size) / 2))`;
                }
            case 'width': // If chessBoard size is defined by --chess-board-small-width
                if (chessBoardNormal < chessBoardSmallWidth) {
                    return `translate(calc(100vw / 2 - var(--grid-size) * 8 / 2), calc(50vh - var(--grid-size) * 8 / 2 - var(--grid-size) / 2))`;
                } else {
                    return `translate(calc(100vw / 2 - ${boardSize} / 2), calc(50vh - ${boardSize} / 2 - var(--grid-size) / 2))`;
                }
        }
    }
}
