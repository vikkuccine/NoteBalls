<template>
    <div class="edit-note">
        <AddEditNote 
            v-model="noteContent"
            bgColor="link"
            placeholder="Edit text"
            label="Edit note"
            ref="addEditNoteRef"
        >
            <template #buttons>
                <button 
                    class="button is-link has-background-link mr-2"
                    @click="handelSaveClicked"
                    :disabled="!noteContent"
                    >
                    Save Note
                </button>
                <RouterLink 
                    to="/"
                    class="button is-link is-light"
                    >
                    Cansel
                </RouterLink>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>

import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStoreNotes } from '@/stores/storeNotes'


const storeNotes = useStoreNotes()
const route = useRoute() 
const router = useRouter()
const noteContent = ref('')


noteContent.value = storeNotes.getNoteContent(route.params.id)

const handelSaveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
}
</script>