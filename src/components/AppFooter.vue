<script>
export default {
    
}
</script>
<template>
    <div class="foot-wrap bg-azure p-5 d-flex flex-column align-items-center justifyy-content-center">
        <div class="container-fluid top-foot">
            <div class="row d-flex">
                <div class="col-12 col-md-6 d-flex flex-column p-5">
                    <a href="">
                        <h5 class="foot-title text-dsgrey mb-5 text-center">
                            PARLIAMONE
                        </h5>
                    </a>
                    <p class="text-center text-dsgrey">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus repellat rem consequatur doloremque itaque explicabo ex nam voluptatum? Iure illum dolorum suscipit architecto totam cupiditate nostrum ea ipsam quam sint.
                    </p>
                </div>
                <div class="col-12 col-md-6 d-flex flex-column p-5">
                    <a href="">
                        <h5 class="foot-title text-dsgrey mb-5 text-center">
                            SERVIZI
                        </h5>
                    </a>
                    <p class="text-center text-dsgrey">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus repellat rem consequatur doloremque itaque explicabo ex nam voluptatum? Iure illum dolorum suscipit architecto totam cupiditate nostrum ea ipsam quam sint.
                    </p>
                </div>
            </div>
        </div>

        <div class="foot-menu container d-flex p-5 justify-content-between align-items-center">
            <a href="" class="text-dsgrey fs-2">HOME</a>
            <a href="" class="text-dsgrey fs-2">ABOUT</a>
            <div class="d-flex flex-column logo-cont text-center align-items-center justify-content-center bg-ash p-5">
                <div class="head-title text-dsgrey p-0">Laura Rossi</div>
                <h2 class="text-dsgrey">Logopedista</h2>
            </div>
            <a href="" class="text-dsgrey fs-2">SERVIZI</a>
            <a href="" class="text-dsgrey fs-2">CONTATTI</a>
        </div>
    </div>
    <div class="bottom-foot bg-dsgrey p-5">
        <div class="gap-3 d-flex flex-row p-5 text-pink align-items-center justify-content-center">
            <span>Email: laura.rossi@example.com |</span>
            <span>2021 Richard Jones Rd, Ste 210C |</span>
            <span>Palermo, PA 37215 |</span>
            <span>© 2024 Laura Rossi | Website: Giacomo Accardi</span>
        </div>
    </div>
</template>
<style lang="scss">
    .foot-wrap{
        a{
            text-decoration: none;
        }
        .foot-title{
            font-size: 2.5rem;
            font-weight: 100;
        }
        p{
            font-size: 1.8rem;
            font-style: italic;
        }
    }
    .foot-menu{
        margin-top: 150px;
        scroll-snap-align: center;
        a{
            text-decoration: underline;
        }
        .bg-ash{
            font-size: 3.5rem;
        }
    }
    .bottom-foot{
        scroll-snap-align: center;
        span{
            font-size: 1.2rem;
        }
    }
    .top-foot{
        scroll-snap-align: center;
    }
</style>