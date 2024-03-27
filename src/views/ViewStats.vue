<template>
    <div class="stats mt-4">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ storeNotes.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of Character (of all Notes)</td>
                    <td>{{ storeNotes.totalCharacterCount }}</td>
                </tr>
            </tbody>
        </table>
        <input 
            v-model="loveNoteballs"
            class="input"
            type="text"
            placeholder="Do you like noteballs?"
            v-autofocus
        >
    </div>
</template>

<script setup>

import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const storeNotes = useStoreNotes()
const loveNoteballs = ref('')
useWatchCharacters(loveNoteballs, 50)
</script>