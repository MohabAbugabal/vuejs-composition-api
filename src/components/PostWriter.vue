<template>
    <div class="columns">
        <div class="column">
            <div class="field">
                <div class="label">New Post</div>
                <input type="text" class="input" v-model="title" />

            
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column">
                <div contenteditable ref="contentEditable" @input="handleInput" />
        </div>
         <div class="column">
             <div v-html= 'html' />
         </div>

    </div>

</template>

<script lang="ts">
import { Post, thisWeek } from "../mocks";
import { defineComponent, onMounted, ref, watch, watchEffect } from "vue";
import {parse} from 'marked';


export default defineComponent({
    name: "App",
    props: {
        post: {
            type: Object as () => Post,
            required: true,
        }
    },
    components: {

    },

    setup(props) {

        const title = ref(props.post.title)
        const content = ref('## Title\n Enter your post content')
        const contentEditable = ref<HTMLDivElement | null>(null)
        const html = ref("");

        watchEffect(() => {
            html.value = parse(content.value)

        })

    //    watch(content, (newContent) => {
    //        html.value = parse(newContent)
    //        console.log(html.value)
    //    }, {immediate: true})


        const handleInput = () => {
            if(!contentEditable.value) {
                throw Error ("This should never happen")
            }
            content.value = contentEditable.value.textContent || ''
        }

        onMounted(() => {
            if(!contentEditable.value) {
                throw Error ("This should never happen")
            }
            contentEditable.value.textContent = content.value;
        })
        return { title, content, contentEditable, handleInput, html }
    },
});
</script>

<style>
</style>
