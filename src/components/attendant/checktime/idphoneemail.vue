<template>
  <div>
    <Transition name="fade" >
      <div v-if="transitionHelper" class="p-16 " >
          <div v-if="organization != null && organization != undefined" class="p-8 w-full leading-5 flex flex-wrap relative cursor-pointer shadow border border-gray-200" >
            <div class="w-full text-center m-8 relative" >
              <div class="w-20 h-20 mx-auto bg-contain bg-no-repeat bg-center" style="background-image: url('/src/assets/logo.png')" ></div>
              <div class="w-full font-moul leading-6 text-xs" >{{ store.state.system.organization.name }}</div>
              <div class="w-full font-tacteing text-xs " style="font-size: 3rem; line-height:10px; " >6</div>
              <div class="w-full font-moul mb-4 leading-6 text-xs " >{{ organization.name }}</div>
              <div class="w-full font-moul mb-4 leading-6 text-xs" >{{ store.state.system.name }}</div>
              <div class="w-full font-moul mb-4 leading-6 text-xs" >ចុះវត្តមានមន្ត្រី</div>
              
              <div class="w-full text-left text-xs " >
                សូមបញ្ចូលលេខកូដសម្គាល់ខ្លួន
                <n-tooltip trigger="hover">
                  <template #trigger>
                    <n-input 
                      v-model:value="staffId"
                      :allow-input="onlyAllowNumberAndNoSideSpace"
                      placeholder="លេខសម្គាល់"
                      class="m-2 mx-auto "
                      >
                      <template #prefix>
                        <svg class="w-6 h-6"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M10 9h2v2h-2z" fill="currentColor"></path><path d="M18 23h-4V9h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4zm-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2z" fill="currentColor"></path><path d="M10 13h2v10h-2z" fill="currentColor"></path></svg>
                      </template>
                    </n-input>
                  </template> 
                  សូមបញ្ចូលលេខសម្កាល់ខ្លួនរបស់អ្នក។ 
                </n-tooltip>
                លេខទូរសព្ទ
                <n-tooltip trigger="hover">
                  <template #trigger>
                    <n-input 
                      v-model:value="staffPhone"
                      :allow-input="onlyAllowNumberAndNoSideSpace"
                      placeholder="លេខសម្គាល់"
                      class="m-2 mx-auto "
                      >
                      <template #prefix>
                        <svg class="w-4 h-4"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><path d="M335.7,32H177.1C158.8,32,144,46.6,144,64.9v381c0,18.4,14.8,34.1,33.1,34.1h158.5c18.3,0,32.3-15.7,32.3-34.1v-381 C368,46.6,354,32,335.7,32z M241,55h30c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4h-30c-2.2,0-4-1.8-4-4C237,56.8,238.8,55,241,55z M256.5,465c-9.6,0-17.4-7.8-17.4-17.4c0-9.6,7.8-17.4,17.4-17.4c9.6,0,17.4,7.8,17.4,17.4C273.9,457.2,266.1,465,256.5,465z M350,416H162c-1.1,0-2-0.9-2-2V85c0-1.1,0.9-2,2-2h188c1.1,0,2,0.9,2,2v329C352,415.1,351.1,416,350,416z"></path></g></svg>
                      </template>
                    </n-input>
                  </template> 
                  សូមបញូលលេខទូរស័ព្ទដែលអ្នកប្រើក្នុងប្រព័ន្ធ 
                </n-tooltip>
                អ៉ីមែល
                <n-tooltip trigger="hover">
                  <template #trigger>
                    <n-input 
                      v-model:value="staffEmail"
                      placeholder="លេខសម្គាល់"
                      class="m-2 mx-auto "
                      >
                      <template #prefix>
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z" fill="currentColor"></path></svg>
                      </template>
                    </n-input>
                  </template> 
                  សូមបញូលអសយដ្ឋានអេឡិចត្រូនិច (អ៉ីមែល) ដែលអ្នកប្រើក្នុងប្រព័ន្ធ  
                </n-tooltip>
                <div class="text-yellow-800 w-full py-2 leading-5 text-xs " >* អ៉ីមែល និង លេខទូរសព្ទ អាចបញ្ចូលមួយណាក៏បាន ឬ ទាំង ២។</div>
              </div>
              <n-button type="success" class="mx-auto mt-4 text-xs " >ចុះវត្តមាន</n-button>
            </div>
            <Frame4Corner />
          </div>
      </div>
    </Transition>
    <div class="fixed bottom-0 left-0 right-0" ><Footer /></div>
  </div>
</template>
<script>
import { reactive ,ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter , useRoute } from 'vue-router'
import QrcodeVue from 'qrcode.vue'
import Vue3Barcode from 'vue3-barcode'
import { useDialog, useMessage, useNotification } from 'naive-ui'
import dateFormat from "dateformat";
import Frame4Corner from './../../widgets/frame/corner4.vue'
import Footer from './../../footer/copy-right.vue'
/**
 * CRUD component form
 */
export default {
  name: "QRCode" ,
  components: {
    QrcodeVue ,
    Vue3Barcode ,
    Frame4Corner ,
    Footer
  },
  setup(){
    const store = useStore()
    const dialog = useDialog()
    const message = useMessage()
    const router = useRouter()
    const route = useRoute()
    const notify = useNotification()
    const organization = ref(null)
    const staffId = ref(null)
    const staffPhone = ref(null)
    const staffEmail = ref(null)
    const transitionHelper = ref(false)
    /**
     * Variables
     */    
    var model = reactive( {
      name: "organization" ,
      title: "QR វត្តមាន នៃក្រសួងស្ថាប័ន"
    })

    function getOrganization(){
      store.dispatch( model.name + '/read' , { id: route.params.id } ).then(
        res => {
          organization.value = res.data.record
        }
      ).catch( 
        err => {
          console.log( err )
        }
      )
    }

    onMounted( () => {
      setTimeout( function(){
        transitionHelper.value = true
      } , 300 )
    })
    getOrganization()

    return {
      /**
       * Variables
       */
      store ,
      model ,
      organization ,
      staffId ,
      staffPhone ,
      staffEmail ,
      transitionHelper ,
      /**
       * Functions
       */
      onlyAllowNumberAndNoSideSpace: (value) => !value || ( /^\d+$/.test(value) && !/ /g.test(value) ),
    }
  }
}

</script>

<style scoped >
  .vcb-table-cell {
    @apply p-2 ;
  }
</style>