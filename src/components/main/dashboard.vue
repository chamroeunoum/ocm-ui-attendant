<template >
    <Transition name="fade" >
        <div v-if="toggleDashboardWidgets"  class="relative min-h-full bg-gray-100 border border-gray-300 rounded shadow p-8" >
            <div class="w-full h-12 leading-10 font-moul text-lg border-b border-gray-200" >សង្ខេបព័ត៌មាន</div>
        </div>
    </Transition>
</template>
<script >
import { Icon } from '@vicons/utils'
import { useDialog, useMessage, useNotification } from 'naive-ui'
import { DocumentPdf24Regular } from '@vicons/fluent'
import { PersonCircleOutline } from '@vicons/ionicons5'
import { ParentChild } from '@vicons/carbon'
import { FolderOpenOutlined , SupervisedUserCircleRound } from  "@vicons/material"
import { ref , reactive, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { isAdmin } from './../../plugins/authentication'


export default {
    name: 'Dashboard',
    components: {

    },
    setup() {
        const router = useRouter()
        const store = useStore()
        const notify = useNotification()

        const toggleDashboardWidgets = ref(false)
        onMounted( () => {
            toggleDashboardWidgets.value = true
        })

        function isBackendManagement(){
            return isAdmin()
        }

        return {
            toggleDashboardWidgets ,
            isBackendManagement
        }
    }
}
</script>
<style scoped>
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>