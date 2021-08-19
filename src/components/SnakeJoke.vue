<template>
    <div>
        <Button @click="passToParent"> Click for A Snake Joke</Button>
    </div>
</template>

<script>
    export default {
        name : 'SnakeJoke',
        methods: {
            passToParent() {
                this.$emit("updateJoke", this.snakeJoke)
            }
        },
        computed: {
            snakeJoke() {
                return this.$store.getters.getSnake

            }
        }
    }
</script>

<style scoped>

</style>