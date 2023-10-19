import sharingan from './sharingan.png';


function Homepage(props){
    return (
        <>
        <head>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
        </head>

        <body class="w3-light-grey">
        <div class="w3-content">
        <header class="w3-container w3-center w3-padding-32">
        <h1><b>Uchiha Family</b></h1>
        <p>Welcome to the blog of <span class="w3-tag">Uchiha Encylopedia</span></p>
        </header>
        <h1 style={{ color: "red" }}> Mangekyou Sharingan </h1>
        <p>
        Mangekyō Sharingan (万華鏡写輪眼) adalah sebuah bentuk peningkatan dari Sharingan yang hanya dapat diaktifkan oleh sebagian anggota Klan Uchiha. Mata ini tercatat menjadi "mata surgawi yang melihat kebenaran dari seluruh ciptaan tanpa halangan" (天壌の理を掌せし瞳, tenjō no kotowari o shōaku seshi hitomi)
        </p>

        <div class= "w3-row">
            <div class="w3-col 18 s12">
                <div class="w3-card-4 w3-margin w3-white">
                <img src={sharingan} style={{height: "20px", width:"20px"}}/>
                <div class="w3-container">
                <h3><b>{props.title}</b></h3>
      <h5>{props.deskripsi}<span class="w3-opacity">{props.tanggal}</span></h5>
                </div>
                <div class="w3-container">
                    <p>
                    Mangekyō Sharingan memiliki perbedaan dari Sharingan normal dari segi penampilannya, yang mengubah bentuk tomoe. Desain pasti berbeda dari satu pengguna dengan pengguna yang lain, meskipun pada dasarnya semua menyerupai bentuk kincir angin. Mata ini awalnya bangkit oleh trauma pengguna stelah menyaksikan kematian seseorang yang dekat dengan pengguna. Uchiha secara historis salah memahami kondisi ini sebagai pengguna perlu bertanggung jawab atas kematian seseorang itu, dan untuk alasan itu mereka mengembangkan praktek membunuh teman terdekat mereka untuk mendapatkan Mangekyō Sharingan.[3] Mangekyō milik Obito diaktifkan segera setelah traumanya, sedangkan di Naruto Jinraiden, Mangekyō milik Sasuke baru dapat diaktifkan beberapa minggu setelah kematian Itachi.
                    </p>
                    <div class="w3-row">
                    <div class="w3-col m8 s12">
                    <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>

        </div>
        </body>
        
        
        </>
    )
}

export default Homepage;