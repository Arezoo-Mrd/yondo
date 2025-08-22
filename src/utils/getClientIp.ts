export function getClientIp(req: Request & { ip: string; connection: { remoteAddress: string }, socket: { remoteAddress: string } }): string | null {
    const forwarded = req.headers['x-forwarded-for'];
    const ip = (Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(',')[0])?.trim()
        || req.socket.remoteAddress
        || null;

    return ip;
}