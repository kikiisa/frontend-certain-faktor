const datas = [
    {
        nama_gejala: "Keluarnya nanah dari penis/Vagina (tetesan cairan) berwarna putih, kuning,krem dan kehijau-hijauan",
        penyakit: "Gonore",
        nilai_cf: 0.6,
        question: "ya",
        gt: 3.08
    },
    {
        nama_gejala: "Keluarnya nanah dari penis/Vagina (tetesan cairan) berwarna putih, kuning,krem dan kehijau-hijauan",
        penyakit: "Klamidia",
        nilai_cf: 0.58,
        question: "ya",
        gt: 4.290000000000001
    },
    {
        nama_gejala: "Bengkak dan kemerahan pada bukaan penis.",
        penyakit: "Gonore",
        nilai_cf: 0.68,
        question: "ya",
        gt: 3.08
    },
    {
        nama_gejala: "Sakit tenggorokan yang datang terus-menerus.",
        penyakit: "Gonore",
        nilai_cf: 0.2,
        question: "ya",
        gt: 3.08
    },
    {
        nama_gejala: "Rasa nyeri dan panas ketika buang air kecil atau ejakulasi.",
        penyakit: "Gonore",
        nilai_cf: 0.4,
        question: "ya",
        gt: 3.08
    },
    {
        nama_gejala: "Rasa nyeri dan panas ketika buang air kecil atau ejakulasi.",
        penyakit: "Klamidia",
        nilai_cf: 0.2,
        question: "ya",
        gt: 4.290000000000001
    },
    {
        nama_gejala: "Munculnya rasa sakit dan bengkak di area sekitar testis.",
        penyakit: "Gonore",
        nilai_cf: 0.55,
        question: "ya",
        gt: 3.08
    },
    {
        nama_gejala: "Munculnya rasa sakit dan bengkak di area sekitar testis.",
        penyakit: "Klamidia",
        nilai_cf: 0.6,
        question: "ya",
        gt: 4.290000000000001
    },
    {
        nama_gejala: "Demam",
        penyakit: "Gonore",
        nilai_cf: 0.2,
        question: "ya",
        gt: 3.08
    },
    {
        nama_gejala: "Demam",
        penyakit: "Klamidia",
        nilai_cf: 0.37,
        question: "ya",
        gt: 4.290000000000001
    },
    {
        nama_gejala: "Rasa terbakar atau panas di tenggorokan (ketika sudah melakukan oral seks).",
        penyakit: "Gonore",
        nilai_cf: 0.45,
        question: "ya",
        gt: 3.08
    },
    {
        nama_gejala: "Rasa gatal atau rasa tidak nyaman di daerah penis atau Vagina",
        penyakit: "Klamidia",
        nilai_cf: 0.49,
        question: "ya",
        gt: 4.290000000000001
    },
    {
        nama_gejala: "Pembengkakan kelenjar getah bening",
        penyakit: "Klamidia",
        nilai_cf: 0.66,
        question: "ya",
        gt: 4.290000000000001
    },
    {
        nama_gejala: "Rasa nyeri ketika melakukan hubungan seksual",
        penyakit: "Klamidia",
        nilai_cf: 0.6,
        question: "ya",
        gt: 4.290000000000001
    },
    {
        nama_gejala: "Keputihan yang tidak biasa",
        penyakit: "Klamidia",
        nilai_cf: 0.79,
        question: "ya",
        gt: 4.290000000000001
    }
]
const items = [
    {
        penyakit:"aa",
        nilai_cf:90
    },
    {
        penyakit:"aa",
        nilai_cf:90
    },
    {
        penyakit:"bb",
        nilai_cf:90
    },
    {
        penyakit:"bb",
        nilai_cf:90
    }
]
const result = [
    {
        nilai:5,
    },
    {
        nilai:10,
    },
    {
        nilai:3,
    },
    {
        nilai:9,
    },
    {
        nilai:7,
    },
]
const temp = []
result.map((res,value) => {
   if(res.nilai > res.nilai[value])
   {
        console.log(res.nilai)
   }
})
//items.reduce((acc,curr) => {
//    if(!acc[curr.penyakit])
//    {
//        acc[curr.penyakit] = {
//            nama_penyakit:curr.penyakit,
//            nilai_cf:0,
//        }
//        result.push(acc[curr.penyakit])
//    }
//    acc[curr.penyakit].nilai_cf+=curr.nilai_cf
//    return acc
//},{})
//datas.reduce((acc,curr) => {
//    if(!acc[curr.penyakit])
//    {
//        acc[curr.penyakit] = {
//            nama_penyakit:curr.penyakit,
//            nilai_cf:0
//        }
//        result.push(acc[curr.penyakit])
//    }
//    acc[curr.penyakit].nilai_cf+=curr.nilai_cf
//    return acc
//})



