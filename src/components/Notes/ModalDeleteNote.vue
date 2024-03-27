<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Note?</p>
                <button 
                    @click="closeModal"
                    class="delete" 
                    aria-label="close"
                    >
                </button>
            </header>
            <section class="modal-card-body">
                Are you shure you want to delete this card?
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <div class="buttons">
                    <button
                        @click="closeModal"
                        class="button"
                    >Cancel
                    </button>
                    <button class="button is-danger">
                        Delete
                    </button>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
    emit('update:modelValue', false)
}

</script>