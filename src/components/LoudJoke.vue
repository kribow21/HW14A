<template>
    <div>
        <Button @click="passToParent"> Click for A Loud Joke</Button>
    </div>
</template>

<script>
    export default {
        name : 'LoudJoke',
        methods: {
            passToParent() {
                this.$emit("updateJoke", this.loudJoke)
            }
        },
            computed: {
                loudJoke() {
                return this.$store.getters.getLoud
            },

        }
    }
</script>

<style scoped>

</style>