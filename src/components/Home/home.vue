<template>
  <div>
    <div class="h-3/5 bg-neutral-100" >
        <h1 class="text-xl text-black font-bold pt-28 pb-6 w-6/12 mx-auto md:text-4xl md:leading-10">
            ¡Es momento de despertar tu máximo potencial!
        </h1>
        <p class="text-xs text-black font-bold pb-6 w-5/12 mx-auto md:text-xl">
            Una plataforma educativa centrada en la formación del SER y el desarrollo del potencial humano
        </p>
        <div class="pb-28">
            <button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
                <router-link to="/sing-up">Registrate</router-link>
            </button>
        </div>
    </div>
    <div class="h-3/5 bg-white" >
        <h1 class="text-xl text-black font-bold pt-28 pb-6 w-6/12 mx-auto md:text-4xl md:leading-10">
        Tenemos el poder de transformarlo todo
        </h1>
        <p class="text-xs text-black font-bold pb-28 w-5/12 mx-auto md:text-xl">
        Una plataforma educativa centrada en la formación del SER y el desarrollo del potencial humano
        </p>
    </div>

  </div>
</template>

<script>
export default {
    name:'HomeComponent'

}
</script>

<style>

</style>