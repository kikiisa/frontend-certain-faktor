<template>
    <div v-if="idModal" class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Penyakit {{ idModal ? idModal[0] : '' }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-start">
                    <div v-html="idModal[1] ? idModal[1] : ''"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn primary-old text-light" data-bs-dismiss="modal">kembali</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, reactive } from 'vue'
export default {
    props:{
        idModal:Array
    },
    setup(props)
    {
        const data_modal = reactive({
            nama_penyakit:null,
            description:null
        })
    }
}
</script>