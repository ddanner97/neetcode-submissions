class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {

        const row: Map<number, Set<string>> = new Map()
        const column: Map<number, Set<string>> = new Map()
        const box: Map<string, Set<string>> = new Map()

        for (let i = 0; i < board.length; i++) {

            for (let j = 0; j < board[i].length; j++) {

                const val: string = board[i][j]

                if (val === '.') continue

                // check row
                const currRow: Set<string> = row.get(i)

                if (currRow) {
                    if (currRow.has(val)) {
                        return false 
                    } else {
                        row.set(i, currRow.add(val))
                    }
                } else {
                    row.set(i, new Set(val))
                }

                // check column
                const currCol: Set<string> = column.get(j)

                if (currCol) {
                    if (currCol.has(val)) {
                        return false 
                    } else {
                        column.set(j, currCol.add(val))
                    }
                } else {
                    column.set(j, new Set(val))
                }

                // check box
                const key: string = [Math.floor(i/3), Math.floor(j/3)].toString()
                const currBox: Set<string> = box.get(key)

                if (currBox) {
                    if (currBox.has(val)) {
                        return false 
                    } else {
                        box.set(key, currBox.add(val))
                    }
                } else {
                    box.set(key, new Set(val))
                }

            }

        }

        return true

    }
}
