<template>
  <div class="relative h-screen justify-center p-10" >
    <Transition name="slide-fade" >
      <div v-if="toggleLoginForm"  class="w-full h-40 font-moul text-4xl " >
        <div class="w-20 mx-auto mt-4">
          <img src="./../../assets/logo.svg" class="w-full" >
        </div>
        <div class="text-center mb-8 " >
          <div class="mb-2 font-moul text-yellow-500 leading-9">{{ store.state.system.organization.name }}</div>
          <div class="mb-2 text-4xl font-tacteing leading-7" >3</div>
          <div class="mt-2 mb-8 font-moul">{{ store.state.system.name }}</div>
          <div class="mb-2">សូមជ្រើសរើស វិធីសាស្ត្រងាយស្រួលសម្រាប់អ្នក ដើម្បីចុះវត្តមាន</div>
        </div>
        <div class="flex flex-wrap w-full justify-center" >
          <div @click="$router.push('/login')" class="m-4 cursor-pointer text-center border border-gray-300 rounded p-4 hover:border-green-600 duration-300" >
            <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M8.5 11.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5zM11 3.5a.5.5 0 0 0-.576-.494l-7 1.07A.5.5 0 0 0 3 4.57v10.86a.5.5 0 0 0 .424.494l7 1.071a.5.5 0 0 0 .576-.494V10h5.172l-.997.874a.5.5 0 0 0 .658.752l1.996-1.75a.5.5 0 0 0 0-.752l-1.996-1.75a.499.499 0 1 0-.658.752l.997.874H11V3.5zm-1 .582V15.92L4 15V4.999l6-.917zM12.5 16H12v-5h1v4.5a.5.5 0 0 1-.5.5zM12 8V4h.5a.5.5 0 0 1 .5.5V8h-1z" fill="currentColor"></path></g></svg>
            ចូលប្រើប្រព័ន្ធ
          </div>
          <div @click="$router.push('/login')" class="m-4 cursor-pointer text-center border border-gray-300 rounded p-4 hover:border-green-600 duration-300" >
            <svg class="w-6 h-6 mx-auto" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><path d="M335.7,32H177.1C158.8,32,144,46.6,144,64.9v381c0,18.4,14.8,34.1,33.1,34.1h158.5c18.3,0,32.3-15.7,32.3-34.1v-381
		C368,46.6,354,32,335.7,32z M241,55h30c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4h-30c-2.2,0-4-1.8-4-4C237,56.8,238.8,55,241,55z
		 M256.5,465c-9.6,0-17.4-7.8-17.4-17.4c0-9.6,7.8-17.4,17.4-17.4c9.6,0,17.4,7.8,17.4,17.4C273.9,457.2,266.1,465,256.5,465z
		 M350,416H162c-1.1,0-2-0.9-2-2V85c0-1.1,0.9-2,2-2h188c1.1,0,2,0.9,2,2v329C352,415.1,351.1,416,350,416z"></path></g></svg>លេខកូតមន្ត្រី និង លេខទូរសព្ទ</div>
          <div @click="$router.push('/login')" class="m-4 cursor-pointer text-center border border-gray-300 rounded p-4 hover:border-green-600 duration-300" >
            <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z" fill="currentColor"></path></svg>
            លេខកូតមន្ត្រី និង អ៊ីមែល
          </div>
          <div @click="$router.push('/login')" class="m-4 cursor-pointer text-center border border-gray-300 rounded p-4 hover:border-green-600 duration-300" >
            <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41c-.24.13-.54.04-.68-.2a.506.506 0 0 1 .2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52c.25.13.34.43.21.67a.49.49 0 0 1-.44.28zM3.5 9.72a.499.499 0 0 1-.41-.79c.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25a.5.5 0 0 1-.12.7c-.23.16-.54.11-.7-.12a9.388 9.388 0 0 0-3.39-2.94c-2.87-1.47-6.54-1.47-9.4.01c-1.36.7-2.5 1.7-3.4 2.96c-.08.14-.23.21-.39.21zm6.25 12.07a.47.47 0 0 1-.35-.15c-.87-.87-1.34-1.43-2.01-2.64c-.69-1.23-1.05-2.73-1.05-4.34c0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39s-4.66 1.97-4.66 4.39c0 1.44.32 2.77.93 3.85c.64 1.15 1.08 1.64 1.85 2.42c.19.2.19.51 0 .71c-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89c-1.49-1.01-2.38-2.65-2.38-4.39c0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56c.71.48 1.54.71 2.54.71c.24 0 .64-.03 1.04-.1c.27-.05.53.13.58.41c.05.27-.13.53-.41.58c-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02c-1.59-.44-2.63-1.03-3.72-2.1a7.297 7.297 0 0 1-2.17-5.22c0-1.62 1.38-2.94 3.08-2.94s3.08 1.32 3.08 2.94c0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83c-2.84 0-5.44 1.58-6.61 4.03c-.39.81-.59 1.76-.59 2.8c0 .78.07 2.01.67 3.61c.1.26-.03.55-.29.64c-.26.1-.55-.04-.64-.29a11.14 11.14 0 0 1-.73-3.96c0-1.2.23-2.29.68-3.24c1.33-2.79 4.28-4.6 7.51-4.6c4.55 0 8.25 3.51 8.25 7.83c0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51c.95.94 1.86 1.46 3.27 1.85c.27.07.42.35.35.61c-.05.23-.26.38-.47.38z" fill="currentColor"></path></svg>
            ប្រើម្រាមដៃ
          </div>
          <div @click="$router.push('/login')" class="m-4 cursor-pointer text-center border border-gray-300 rounded p-4 hover:border-green-600 duration-300" >
            <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V6a2 2 0 0 1 2-2h2"></path><path d="M4 16v2a2 2 0 0 0 2 2h2"></path><path d="M16 4h2a2 2 0 0 1 2 2v2"></path><path d="M16 20h2a2 2 0 0 0 2-2v-2"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path></g></svg>
            ប្រើផ្ទៃមុខ
          </div>
        </div>
      </div>
    </Transition>
    <div class="fixed bottom-0 left-0 right-0">
      <FooterComponent />
    </div>
    <FrameCorner4Component />
  </div>
</template>
<script>

import { getUser } from './../../plugins/authentication'
import { getRoutes } from './../../plugins/route'
import FooterComponent from './../../components/footer/copy-right.vue'
import FrameCorner4Component from './../../components/widgets/frame/corner4.vue'
import { ref, reactive , onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useNotification , useMessage } from 'naive-ui'

export default {
  name: 'LoginTemplate' ,
  components: {
    FooterComponent,
    FrameCorner4Component
  },
  setup(){
    /**
     * Components to use
     */
    const store = useStore()
    const router = useRouter()
    const notify = useNotification()
    const message = useMessage()
    const toggleLoginForm = ref(false)

    // if( getUser() !== undefined && getUser() !== null ){
    //   router.push('/welcome')  
    // }

    onMounted( () => {
      setTimeout( function(){
        toggleLoginForm.value = true
      } , 200 )
    })

    return {
      toggleLoginForm ,
      store      
    }
  },
  mounted(){
    // console.log( this.credentials )
  }
}
</script>
<style scoped >
</style>
