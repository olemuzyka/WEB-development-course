<template>
    <div>
        <h3>Dashboard</h3>
        <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    </div>
</template>

<script>
    import {firebaseApp} from "../firebaseApp";

    export default {
        name: 'Dashboard',
        data () {
            return {

            }
        },
        methods: {
            signOut(){
                this.$store.dispatch('signOut')
                firebaseApp.auth().signOut();
            }
        }
    }
</script>