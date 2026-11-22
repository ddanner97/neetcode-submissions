class LRUCache {
    /**
     * @param {number} capacity
     */
    private capacity: number
    private cache: Map<number, number>
    private total: number

    constructor(capacity: number) {
        
        this.capacity = capacity
        this.cache = new Map();
        this.total = 0

    }

    // Note: when getting a key or updating a key - also have to remove old key then add again

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {

        if (this.cache.has(key)) {
            const value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value)
            return this.cache.get(key)
        } else {
            return -1
        }

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {

        if (this.cache.has(key)) {
            this.cache.delete(key)
        }

        this.cache.set(key, value)

        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value!)
        }
    }
}
