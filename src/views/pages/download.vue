<template>
  <layout>
    <section class="scmainblog">
      <div class="container --small">

        <div class="scmainblog__texttop">
          <label class="labelmain">Faster and Safer</label>
          <h1 class="--h2 heading">Download Desktop Wallet</h1>
        </div>

        <div class="scmainblog__post">
          <div class="scmainblog__post-list">
            <div class="scmainblog__item scmaindownload__item --fadeInTop is-inview">
              <div class="contentblog">
                <h2 class="heading --h3">Windows</h2>
                <div class="info-div">
                  <div class="info">
                    <a class="btnlink"
                       href="https://github.com/pandora-cash/pandorapay-electron-js/releases/download/0.1.1-alpha/pandora-cash-electron-js.0.1.1-alpha.exe"
                       target="_blank">Windows Portable </a>
                    <div class="info__date"><p>78 MB</p></div>
                  </div>
                  <div class="info">
                    <a class="btnlink"
                       href="https://github.com/pandora-cash/pandorapay-electron-js/releases/download/0.1.1-alpha/pandora-cash-electron-js.Setup.0.1.1-alpha.exe"
                       target="_blank">Windows Installer </a>
                    <div class="info__date"><p>79 MB</p></div>
                  </div>
                </div>
              </div>
              <div class="imgdownload">
                <img  src="/static/img/windows.png" alt="" draggable="false" loading="lazy">
              </div>
            </div>

            <div class="scmainblog__item scmaindownload__item --fadeInTop is-inview">
              <div class="contentblog">
                <h2 class="heading --h3">Linux</h2>
                <div class="info-div">
                  <div class="info">
                    <a class="btnlink"
                       href="https://github.com/pandora-cash/pandorapay-electron-js/releases/download/0.1.1-alpha/pandora-cash-electron-js-0.1.1-alpha.AppImage"
                       target="_blank">Linux AppImage</a>
                    <div class="info__date"><p>110 MB</p></div>
                  </div>
                  <div class="info">
                    <a class="btnlink"
                       href="https://github.com/pandora-cash/pandorapay-electron-js/releases/download/0.1.1-alpha/pandora-cash-electron-js-0.1.1-alpha.tar.gz"
                       target="_blank">Linux tar.gz</a>
                    <div class="info__date"><p>105 MB</p></div>
                  </div>
                </div>
              </div>
              <div class="imgdownload">
                <img  src="/static/img/linux.png" alt="" draggable="false" loading="lazy">
              </div>
            </div>

            <div class="scmainblog__item scmaindownload__item --fadeInTop is-inview">
              <div class="contentblog">
                <h2 class="heading --h3">Mac</h2>
                <div class="info-div">
                  <div class="info">
                    <a class="btnlink"
                       href="https://github.com/pandora-cash/pandorapay-electron-js/releases/download/0.1.1-alpha/pandora-cash-electron-js-0.1.1-alpha-mac.zip"
                       target="_blank">Mac zip</a>
                    <div class="info__date"><p>103 MB</p></div>
                  </div>
                </div>
              </div>
              <div class="imgdownload">
                <img  src="/static/img/macos.png" alt="" draggable="false" loading="lazy">
              </div>
            </div>


          </div>

          <p>
            To retain your anonymity use Tor when using the wallet! You just need to
            <a href="https://www.torproject.org/download/"><strong>install Tor</strong></a> and <strong>edit
            .env </strong> file.
          </p>

        </div>

      </div>

    </section>

  </layout>
</template>

<script>
import layout from "../layout"
import Meta from "../../meta";

export default {
  components: {layout},

  beforeCreate(){
    Meta.SetTitle("Download Desktop Privacy Coin Wallet - untraceable money app")
    Meta.SetDescription("Pandora Cash Desktop Privacy Coin Wallet is available for download. Download and install untraceable money transfer app for free. Download wallet now!")
    Meta.SetKeywords("download, binary, desktop wallet, download wallet, privacy coin wallet, download privacy coin, install wallet")
    Meta.SetImage()
    Meta.SetUrl("/download")
    Meta.SetType()
  }

}
</script>


<style scoped>

.scmaindownload__item {
  display: grid;
  grid-template-columns: 1fr 200px;
  column-gap: 56px;
}

.scmaindownload__item .contentblog{
  order: 0;
  text-align: left;
}

.scmaindownload__item .btnlink{
  display: block !important;
}
.scmaindownload__item .info{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.imgdownload img{
  max-width: 200px;
  max-height: 200px;
  min-width: 0;
  min-height: 0;
  float:right;
}


@media (max-width: 991px) {
  .scmaindownload__item {
    grid-template-columns: 1fr 150px;
  }
  .imgdownload img {
    max-width: 150px;
    max-height: 150px;
  }
}

@media (max-width: 767px) {
  .scmaindownload__item  {
    grid-template-columns: 1fr 80px;
    column-gap: 40px;
  }
  .imgdownload img {
    max-width: 80px;
    max-height: 80px;
  }
}

@media (max-width: 481px) {
  .scmaindownload__item  {
    grid-template-columns: 1fr ;
  }
  .imgdownload img {
    display: none;
  }
}

</style>