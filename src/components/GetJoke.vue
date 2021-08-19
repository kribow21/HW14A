<template>
    <div>
        <Button @click="getJoke"> Click A Joke</Button>
    </div>
</template>

<script>
    export default {
        name : 'GetJoke',
        computed: {
            joke() {
                return this.$store.state.joke
            }
        },
        methods: {
            getJoke() {
                this.$store.dispatch('requestJoke');
        }
    }
    }
</script>

<style scoped>

</style>