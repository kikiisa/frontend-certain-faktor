<template>
    <div class="container" v-if="flashing.load == true" >
        <div class="row justify-content-center mb-4">
            <div class="col-md-8">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="text-center">Sistem Pakar Penyakit Kelamin</h5>
                        <hr>
                        <div class="alert alert-danger alert-dismissible fade show" v-if="this.flashing.status == true" role="alert">
                            Harap Lengkapi Form <strong>Gender,Alamat,Rentan Usia</strong>
                        </div>
                        <div class="form-group">
                            <input type="text" hidden v-model="form.nama" placeholder="Nama Lengkap" :class="this.flashing.status == true ? 'is-invalid form-control w-75' : 'form-control w-75' ">
                        </div>
                        <div class="form-group mt-3">
                            <select :class="this.flashing.status == true ? 'is-invalid form-control w-75' : 'form-control w-75' " v-model="form.gender">
                                <option value="">Pilih Gender</option>
                                <option value="pria">Pria</option>
                                <option value="wanita">Wanita</option>
                            </select>
                        </div>
                        <div class="form-group mt-3">
                            <select :class="this.flashing.status == true ? 'is-invalid form-control w-75' : 'form-control w-75' " v-model="form.umur">
                                <option value="">Pilih Rentan Usia</option>
                                <option value="15-20">15-20</option>
                                <option value="15-20">21-25</option>
                                <option value="25-30">26-30</option>
                                <option value="35-40">31-35</option>
                                <option value="35-40">36-40</option>
                                <option value="40">40</option>
                            </select>
                        </div>
                        <div class="form-group mt-3">
                            <input type="text" hidden :class="this.flashing.status == true ? 'is-invalid form-control w-75' : 'form-control w-75'" v-model="form.telepon" placeholder="No Telepon">
                        </div>
                        <div class="form-group mt-3">
                            <textarea v-model="form.alamat" placeholder="Masukan Alamat Lengkap" :class="this.flashing.status == true ? 'is-invalid form-control' : 'form-control'"></textarea>
                        </div>    
                    </div>
                </div>
                <div class="card shadow mt-3" v-if="penyakit.length > 0">
                    
                    <div class="card-body text-start" v-if="this.penyakit.length != this.hasil1.length">
                        <hr>
                        <div class="open-question" v-if="core == null">
                            <h5 v-if="penyakit.length > 0">Pilih <strong>Ya atau Tidak</strong> Pada pertanyaan berikut ini</h5>
                            <p>Apakah anda pelaku seks aktif ? {{core}}</p>
                             <button class="btn btn-primary" @click="questionCore('ya')">Ya</button>
                             <button class="btn btn-danger ms-1" @click="questionCore('tidak')">Tidak</button>
                        </div>
                        <div class="alert alert-danger text-center" v-if="core == 'tidak'"><strong>Anda Tidak Mengalami Penyakit Menular Seksual</strong></div>
                        <div class="open-question" v-if="core == 'ya'">
                            <h5 v-if="penyakit.length > 0">Pilih <strong>Ya atau Tidak</strong> Pada pertanyaan berikut ini</h5>
                            <p>{{ penyakit[counter].nama_gejala }}</p>
                            <div class="form-check">
                                <input type="radio" value="ya" required name="question" v-model="form.question" class="form-check-input" id="question">
                                <label for="ya"  class="form-check-label">Ya</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" value="tidak" required name="question" v-model="form.question" class="form-check-input" id="question">
                                <label for="ya" class="form-check-label">Tidak</label>
                            </div>
                            <a v-if="counter+1 < penyakit.length"  v-on:click="pushData(penyakit[counter].nama_gejala,form.question,form.nama,form.alamat,form.gender,form.telepon)" class="btn btn-outline-primary mt-1">Next <i class="fas fa-arrow-right"></i></a>
                            <button @click="getDiagnosa(penyakit[counter].nama_gejala,form.question,form.nama,form.alamat,form.gender,form.telepon)" v-if="counter+1 >= penyakit.length" class="btn btn-outline-primary">Lihat Hasil Diagnosa <i class="fas fa-print"></i></button>
                        </div>
                    </div>
                    <div class="card-body text-start" v-else id="cetak">
                        <h3 class="text-center">Sistem Pakar Penyakit Kelamin</h3>
                        <hr>
                        <h5>Berikut ini Hasil Diagnosa anda : </h5>
                        <div class="row justify-content-center">
                            <p>Alamat       : <strong>{{ this.form.alamat}}</strong></p>
                            <p>Gender       : <strong>{{ this.form.gender}}</strong></p>
                            <p>Rentan Usia       : <strong>{{ this.form.umur}}</strong></p>
                            <div class="col-md-12 justify-content-center">
                                <table class="table">
                                    <thead class="bg-primary text-light">
                                        <tr>
                                            <th>Penyakit</th>
                                            <th>Presentase</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{ this.result_diagnosa[0].penyakit_diagnosa }}</td>
                                            <td>{{this.result_diagnosa[0].nilai_diagnosa}} %</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>Keterangan : <strong>Segera lakukan konsultasi berlanjut ke Dokter Kulit dan Kelamin terdekat</strong></p>
                                <hr>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-start" v-if="this.result_diagnosa[0].nilai_diagnosa > 0">
                        <button class="btn btn-outline-success" v-on:click="cetak(this.form.nama,this.form.alamat,this.form.gender,this.form.telepon)">cetak PDF <i class="fas fa-print"></i></button>
                    </div>
                </div>
            </div>    
        </div>
    </div>
    <div class="load" v-else>
        <div class="spinner-grow ms-3  text-primary" role="status">
            <span class="visually-hidden">Sedang mengambil data dari server.....</span>
        </div>
        <div class="spinner-grow ms-3  text-danger" role="status">
            <span class="visually-hidden">Sedang mengambil data dari server.....</span>
        </div>
        <div class="spinner-grow ms-3  text-warning" role="status">
            <span class="visually-hidden">Sedang mengambil data dari server.....</span>
        </div>
        <div class="spinner-grow ms-3  text-success" role="status">
            <span class="visually-hidden">Sedang mengambil data dari server.....</span>
        </div>
    </div>
</template>
<script>
import axios from '../url/base_url'
import lodash from "lodash"
export default {
    name:"Form",
    data()
    {
        return{
            flashing:{
                status:false,
                load:false
            },
            counter:0,
            core:null,
            form:{
                nama:"unknown",
                gender:"",
                alamat:"",
                umur:"",
                telepon:"unknown",
                nama_penyakit:null,
                nama_gejala:null,
                nilai_cf:null,
                question:null
            },
            data_penyakit:[],
            penyakit:[{
                nama_penyakit:"",
                nama_gejala:"",
                nilai_cf:"",
                question:""
            }],
            // hasil dari data passien
            hasil1:[],
            // hasil dari mendapatkan data nilai cf
            hasil2:[],
            // hasil perhitungan akhir
            final_result:[],
            // diagnosa_full
            result_diagnosa:[
                {
                    nama_passien:"",
                    gender:"",
                    telepon:"",
                    alamat_passien:"",
                    penyakit_diagnosa:"",
                    nilai_diagnosa:0,
                    desc:""
                }
            ],
            result_gonore:null,
        }
    }, 
    mounted()
    {
        this.getData()
        this.getPenyakit()
    },
    methods:{
        questionCore(status)
        {
            this.core = status
        },
        reGroup(list,key)
        {
            const newGroup = {};
            list.forEach(item => {
                const newItem = Object.assign({}, item);
                delete newItem[key];
                newGroup[item[key]] = newGroup[item[key]] || [];
                newGroup[item[key]].push(newItem);
            });
            return newGroup
        },
        async getPenyakit()
        {
            await axios.get("data_penyakit").then((r)=>{
                this.data_penyakit = r.data
            }).catch((e)=>{
                console.log(e)
            })
        },
        async pushData(gejala,ask,nama,alamat,gender,telepon)
        {
            if(nama == "" || alamat == "" || gender == "" || telepon == "")
            {
                this.flashing.status = true
            }else{
                this.flashing.status = false
                this.counter+=1
                const send  = {
                    gejala:gejala,
                    question:ask
                }
                this.form.question = ""
                this.hasil1.push(send)
            }
            
        },
        //async getDiagnosa(gejala1,ask1,nama,alamat,gender,telepon)
        //{
        //    if(nama == "" || alamat == "" || gender == "" || telepon == "")
        //    {
        //        this.flashing.status = true
        //    }else{
        //        this.flashing.status = false
        //        const send = {
        //            gejala:gejala1,
        //            question:ask1
        //        }
        //        this.hasil1.push(send)
        //        const sendRequest = new FormData()
        //        sendRequest.append('data',JSON.stringify(this.hasil1));
        //        await axios.post('',sendRequest).then((response) => {
        //            this.hasil2 = response.data
        //            this.hasil2.reduce((acc,curr) => {
        //                if(!acc[curr.penyakit])
        //                {
        //                    acc[curr.penyakit] = {
        //                        nama_penyakit:curr.penyakit,
        //                        description:curr.description,
        //                        nilai_cf:0,
        //                    }
        //                    this.final_result.push(acc[curr.penyakit])
        //                }
        //                // rumus certain faktor
        //                acc[curr.penyakit].nilai_cf+=curr.nilai_cf / parseFloat(curr.gt) * 100
        //                return acc
        //            },{})
        //            console.table(this.final_result)

        //            // push ke data cetak
        //            const result_final = (lodash.maxBy(this.final_result,'nilai_cf'))
        //            this.result_diagnosa[0].nama_passien = this.form.nama
        //            this.result_diagnosa[0].alamat_passien = this.form.alamat
        //            this.result_diagnosa[0].telepon = this.form.telepon
        //            this.result_diagnosa[0].gender = this.form.gender
        //            this.result_diagnosa[0].penyakit_diagnosa = result_final.nama_penyakit
        //            this.result_diagnosa[0].nilai_diagnosa = Math.round(result_final.nilai_cf)
        //            this.result_diagnosa[0].desc = result_final.description
        //            console.log(this.result_diagnosa)
        //        }).catch((error) => {
        //            console.log(error)
        //        })
        //    }
        //},
        async getDiagnosa(gejala1,ask1,nama,alamat,gender,telepon)
        {
            if(nama == "" || alamat == "" || gender == "" || telepon == "")
            {
                this.flashing.status = true
            }else{
                this.flashing.status = false
                const send = {
                    gejala:gejala1,
                    question:ask1
                }
                this.hasil1.push(send)
                const sendRequest = new FormData()
                sendRequest.append('data',JSON.stringify(this.hasil1));
                await axios.post('',sendRequest).then((response) => {
                    this.hasil2 = response.data
                    this.hasil2.reduce((acc,curr) => {
                        if(!acc[curr.penyakit])
                        {
                            acc[curr.penyakit] = {
                                nama_penyakit:curr.penyakit,
                                description:curr.description,
                                nilai_cf:0,
                            }
                            this.final_result.push(acc[curr.penyakit])
                        }
                        // rumus certain faktor
                        acc[curr.penyakit].nilai_cf+=curr.nilai_cf / parseFloat(curr.gt) * 100
                        return acc
                    },{})
                    console.table(this.final_result)
                    // push ke data cetak
                    const result_final = (lodash.maxBy(this.final_result,'nilai_cf'))
                    this.result_diagnosa[0].nama_passien = this.form.nama
                    this.result_diagnosa[0].alamat_passien = this.form.alamat
                    this.result_diagnosa[0].telepon = this.form.telepon
                    this.result_diagnosa[0].gender = this.form.gender
                    this.result_diagnosa[0].penyakit_diagnosa = result_final.nama_penyakit
                    this.result_diagnosa[0].nilai_diagnosa = Math.round(result_final.nilai_cf)
                    this.result_diagnosa[0].desc = result_final.description
                    console.log(this.result_diagnosa)
                }).catch((error) => {
                    console.log(error)
                })
                let data = lodash.maxBy(this.final_result,'nilai_cf')
                const newForm = new FormData()
                newForm.append("nama",this.form.nama)
                newForm.append("penyakit",data.nama_penyakit)
                newForm.append("alamat",this.form.alamat)
                newForm.append("telepon",this.form.telepon)
                newForm.append("gender",this.form.gender)
                newForm.append("presentase",Math.round(data.nilai_cf))
                newForm.append("umur",this.form.umur)
                await axios.post('post_passien',newForm).then((response) => {  
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        //async cetak(nama,alamat,gender,telepon)
        //{
        //    if(nama == "" || alamat == "" || gender == "" || telepon == "")
        //    {
        //        this.flashing.status = true
        //    }else{
        //        let data = lodash.maxBy(this.final_result,'nilai_cf')
        //        this.flashing.status = false
        //        const newForm = new FormData()
        //        newForm.append("nama",this.form.nama)
        //        newForm.append("penyakit",data.nama_penyakit)
        //        newForm.append("alamat",this.form.alamat)
        //        newForm.append("telepon",this.form.telepon)
        //        newForm.append("gender",this.form.gender)
        //        newForm.append("presentase",Math.round(data.nilai_cf))
        //        await axios.post('post_passien',newForm).then((response) => {
        //            var getId = document.querySelector('#cetak').innerHTML;
        //            var a = window.open('','','height=500,width=500')
        //            a.document.write('<html>')
        //            a.document.write('<body>')
        //            a.document.write(getId)
        //            a.document.write('</body></html>')
        //            a.print()
        //            a.document.close()
        //        }).catch((error) => {
        //            console.log(error)
        //        })
        //    }    

        //},
        async cetak(nama,alamat,gender,telepon)
        {
            if(nama == "" || alamat == "" || gender == "" || telepon == "")
            {
                this.flashing.status = true
            }else{
                
                this.flashing.status = false
                 var getId = document.querySelector('#cetak').innerHTML;
                    var a = window.open('','','height=500,width=500')
                    a.document.write('<html>')
                    a.document.write('<body>')
                    a.document.write(getId)
                    a.document.write('</body></html>')
                    a.print()
                    a.document.close()
            }    

        },
        async getData()
        {
            await axios.get("data_pertanyaan").then((response) => {
                this.penyakit = response.data
                setTimeout(()=>{
                    this.flashing.load = true
                },1000)
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
    .container{
        margin-top: 80px;
    }
    .load{
        margin-top: 250px;
    }
    .card{
        border-radius: 20px;
    }
</style>