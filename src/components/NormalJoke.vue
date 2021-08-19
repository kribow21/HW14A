<template>
    <div>
        <button @click="passToParent">Get Normal Joke</button>
    </div>
</template>

<script>
    export default {
        name : 'NormalJoke',
        methods: {
            passToParent() {
                this.$emit('updateJoke', this.normalJoke)
            }
        },
        computed: {
            normalJoke() {
                return this.$store.state.joke
            }
        },
    }
</script>

<style scoped>

</style>