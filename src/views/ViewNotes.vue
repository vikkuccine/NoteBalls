<template>
    <div class="notes">
        <AddEditNote v-model="newNote" placeholder="Add a new note" ref="addEditNoteRef">
            <template #buttons>
                <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">
                    Add new Note
                </button>
            </template>
        </AddEditNote>

        <progress class="progress is-large is-success" max="100" v-if="!storeNotes.notesLoaded" />

        <template
            v-else
        >
            <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
            <div v-if="!storeNotes.notes.length" class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6">No notes here yet...</div>
        </template>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const storeNotes = useStoreNotes()
const newNote = ref('')
const newNoteRef = ref(null)
const addEditNoteRef = ref(null)

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote)


</script>