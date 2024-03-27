import { watch } from "vue"

export function useWatchCharacters(valueToWatch, maxChar = 100) {
    watch(valueToWatch, (newValue) => {
        if(newValue.length === maxChar) {
            alert(`Oh no ${maxChar}`)
        }
    })
}