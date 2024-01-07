/*
 * @lc app=leetcode.cn id=535 lang=typescript
 *
 * [535] TinyURL 的加密与解密
 */

// @lc code=start
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    if (!this.urlMap) this.urlMap = {}
	const short = Math.random().toString(36).slice(2, 8)
    this.urlMap[short] = longUrl
    return short
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    return this.urlMap ? this.urlMap[shortUrl] : ''
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end
