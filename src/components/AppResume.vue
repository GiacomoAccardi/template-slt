
<script>
export default {
    
}
</script>
<template>
    <div class="resume-wrap bg-resume">
        <div class="container-fluid d-flex">
            <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center p-5">
                <p class="resume-txt text-center p-5">
                    La mia missione è supportare bambini, adolescenti e adulti a superare le difficoltà legate alla parola, alla voce e alla comprensione <br>
                    <span>.</span>
                </p>
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center p-5">
                <div class="photobox d-flex align-items-center justify-content-center p-5">
                    <img src="../assets/d11abf90100fdda247d2576be8aa3f79.png" alt="ph1">
                </div>
            </div>
        </div>
    </div>
    <div class="scnd-wrap bg-pink p-5">
        <div class="container-fluid">
            <div class="col-12 p-5 d-flex flex-column">
                <p>
                    Ogni percorso terapeutico che propongo è personalizzato, in base alle esigenze specifiche del paziente. Utilizzo approcci basati su evidenze scientifiche, integrando tecniche tradizionali con nuove metodologie per garantire i migliori risultati.
                </p>
            </div>
        </div>
    </div>
    <div class="trd-wrap bg-dsgrey p-5 d-flex align-items-center justify-content-center">
        <div class="cont p-5">
            <img src="../assets/cc.jpg" alt="ph2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Deserunt aspernatur.</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.resume-wrap{
    .resume-txt{
        font-weight:600;
        font-size: 2.5rem;
        span{
            font-size: 4rem;
        }
    }
    .photobox{
        background-color: white;
        width: 500px;
        img{
            width: 100%;
        }
    }
}
.scnd-wrap{
    p{
        font-size: 2.8rem;
        font-weight: 900;
        text-align: center;
    }
}
.trd-wrap{
    .cont{
        position: relative;
        img{
            opacity: 0.4;
        }
        p{
            color: white;
            font-size: 4rem;
            font-weight: 900;
            text-align: center;
            position: absolute;
            top: 37%;
            left: 0;
        }
    }
}
</style>