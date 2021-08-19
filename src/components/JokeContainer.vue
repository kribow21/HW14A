<template>
    <div>
        <h1>{{modifiedJoke}}</h1>
    <GetJoke/>
    <NormalJoke @updateJoke="handleChildUpdate"/>
    <LoudJoke @updateJoke="handleChildUpdate"/>
    <SnakeJoke @updateJoke="handleChildUpdate"/>
    </div>
</template>

<script>
import LoudJoke from './LoudJoke.vue'
import GetJoke from './GetJoke.vue'
import SnakeJoke from './SnakeJoke.vue'
import NormalJoke from './NormalJoke.vue'
    export default {
        name : 'JokeContainer',
        components: {
            LoudJoke,
            GetJoke,
            SnakeJoke,
            NormalJoke
        },
        computed: {
            joke() {
                return this.$store.state.joke
            }
        },
            data() {
            return {
                modifiedJoke: ""
            }
        },
        methods: {
            handleChildUpdate(data) {
                console.log(data);
                this.modifiedJoke = data;
                

            },
        }
    }
</script>

<style scoped>

</style>