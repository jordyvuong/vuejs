<template>
    <main>
        <h1>Page d'Inscription</h1>
        <section>
            <form>
                <section>
                    <FieldComponent class="input" v-for="field in fields" :key="field.id" :data="field" />
                </section>
                <section>
                    <ButtonComponent class="button" v-for="button in buttons" :key="button.id" :data="button" />
                </section>
            </form>
            <section class="login-section">
                <button @click="goToLogin" class="login-button">Déjà un compte ? Se connecter</button>
            </section>
        </section>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import FieldComponent from '../components/FieldComponent.vue';
import ButtonComponent from '../components/ButtonComponent.vue';

const router = useRouter(); 

const fields = [
    {
        id: 'username',
        type: 'text',
        placeholder: 'Entre ton pseudo'
    },
    {
        id: 'email',
        type: 'email',
        placeholder: 'Entre ton email'
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Choisis un mot de passe'
    },
    {
        id: 'confirm-password',
        type: 'password',
        placeholder: 'Confirme ton mot de passe'
    }
];

const buttons = [
    {
        id: 'register-button',
        type: 'submit',
        textContent: "S'inscrire"
    },
    {
        id: 'reset-button',
        type: 'reset',
        textContent: 'Réinitialiser'
    } as any
]; 


const goToLogin = () => {
    router.push('/login');
};
</script>