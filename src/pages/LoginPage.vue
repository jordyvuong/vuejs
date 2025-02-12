<template>
    <main class="login_main">
        <h1>Login Page</h1>
        <form v-on:submit.prevent.stop.once="submitHandler">
            <section>
                <article>
                    <label for="email"></label>
                    <input
                    v-model="data.email" 
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    class="input"
                    />
                </article>
                <article>
                    <label for="password"></label>
                    <input 
                    v-model="data.password"
                    id="password"
                    placeholder="Entrez votre mot de passe"
                    type="password"
                    class="input"
                    />
                </article>
            </section>
            <section>
                <button type="submit" class="button is-primary">Se connecter</button>
                <button type ="reset" class="button is-danger">Réinitialiser</button>
            </section>
        </form>
    </main>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';


const data = reactive({
    email: '',
    password: ''
});

watch(data, (val) => {
    console.log('Changement dans la variable data')
});

const isUserInputValid = (input:string): boolean => {
    
    const pattern = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$');
    return pattern.test(input);
}


const submitHandler = () => {
    if (!isUserInputValid(data.email)){
        alert('Email invalide');
        return;
    }
    console.log ('Email valide');
}

</script>