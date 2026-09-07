class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {

        const cars: number[][] = position.map((pos, idx) => [pos, speed[idx]]).sort((a, b) => b[0] - a[0])

        let fleet: number = 0
        let maxTime: number = 0

        for (const car of cars) {

            const time = (target - car[0]) / car[1]

            if (time > maxTime) {
                fleet++
                maxTime = time
            }


        }

        return fleet

    }
}
