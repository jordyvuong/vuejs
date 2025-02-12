<template>
    <main class="login_main">
        <h1>Login Page</h1>
        <form v-on:submit.prevent.stop.once="submitHandler">
            <section>
                <article>
                    <label for="email"></label>
                    <input
                    v-model="email" 
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    class="input"
                    />
                </article>
                <article>
                    <label for="password"></label>
                    <input 
                    v-model="password"
                    id="password"
                    placeholder="Entrez votre mot de passe"
                    type="password"
                    class="input"
                    />
                </article>
            </section>
            <section>
                <button type="submit" class="button is-primary">Se connecter</button>
                <button type ="reset" class="button is-danger" @click="resetForm">Réinitialiser</button>
            </section>
        </form>
    </main>
</template>

<script setup lang="ts">
import { reactive, watch, ref } from 'vue';
import inputValidator from '../utils/input-validator';
import { useRouter } from 'vue-router';

const router = useRouter();


/*const data = reactive({
    email: '',
    password: ''
});
*/

const email = ref('');
const password = ref('');

watch(email, (val) => {
    console.log(val, inputValidator(val, 'email'))
});
watch(password, (val) => {
    console.log(val, inputValidator(val, 'password'))
});


/*const isUserInputValid = (input:string): boolean => {
    
    const pattern = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$');
    return pattern.test(input);
}

const isPasswordInputValid = (input:string): boolean => {
    const pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    return pattern.test(input);
}
*/

const submitHandler = async () => {
    const result = await fetch('users.json')
    const users = await result.json()
    console.log(users)

    const user = users.find((user:any) => user.email === email.value)
    if(!user){
        alert('User not found')
        return  
    }
    if(!(user.password === password.value)){
        alert('Password incorrect')
        return
    }

console.log('User connected')
router.push('/session/' + user.id)




};
const resetForm = () => {
    email.value = '';
    password.value = '';
}

</script>