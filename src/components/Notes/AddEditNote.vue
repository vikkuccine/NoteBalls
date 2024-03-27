<template>
    <div 
        class="card p-4 my-5"
        :class="`has-background-${ bgColor }-dark`"
        >

        <label 
            v-if="label"
            class="label has-text-white"
        >{{ label }}
        </label>

        <div class="field">
            <div class="control">
                <textarea 
                    :value="modelValue" 
                    @input="updateModelValue" 
                    ref="textareaRef" 
                    :placeholder="placeholder" 
                    v-autofocus
                    maxlength="100"
                    class="textarea"
                    />
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control ">
                <slot name="buttons"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus'

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'success'
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    },
    label: {
        type: String
    }
})

const emits = defineEmits(['update:modelValue']);

const updateModelValue = (event) => {
    emits('update:modelValue', event.target.value);
};


const textareaRef = ref(null)
const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})



</script>