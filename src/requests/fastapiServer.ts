export const fastapiServer = (request: string = ""): string => {
    if (request[0] === '/') {
        return 'https://api.martonroux.com' + request;
    }
    return 'https://api.martonroux.com/' + request;
}