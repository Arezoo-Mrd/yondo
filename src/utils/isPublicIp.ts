export function isPublicIp(ip: string): boolean {
    // Basic check for common private/reserved ranges
    const privateRanges = [
        /^10\./,
        /^192\.168\./,
        /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
        /^127\./,
        /^::1$/, // IPv6 loopback
        /^fc00:/, // IPv6 unique local
        /^fe80:/, // IPv6 link-local
        /^169\.254\./, // IPv4 link-local
    ];

    return !privateRanges.some(range => range.test(ip));
}