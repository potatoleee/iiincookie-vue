<template>
  <div class="title my-10 my-lg-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      ref="splitAbout"
      >About iiin
    </span>
    <h1
      class="title-main font-serifTc fw-black fs-xl fs-lg-3xl"
      ref="splitAboutCh"
    >
      關於我們
    </h1>
  </div>

  <div class="container mb-17">
    <div class="row justify-content-end mb-12 mb-md-0">
      <div class="col-12 col-lg-5 d-flex flex-row gap-10 mb-10">
        <p class="vertical-rl lines letter-spacing-4">品牌由來</p>
        <div>
          <h3 class="fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7">
            品牌的小故事
          </h3>
          <p>
            製造夾餡餅乾的過程一個步驟接著一個步驟，很像製造的生產線，藉此取了諧音＿餅乾生產餡。並在Logo右下角放上招牌栗子造型～
            品牌英文名稱iiicookie的小巧思：iiin跟男友兩位名字都有穎，以英文諧音in為發想，覺得三個i有拉長音可愛的感覺，所以唸法為「穎～穎～cookie
            」。
          </p>
        </div>
      </div>
      <div class="col-11 col-lg-7 ps-11">
        <div class="mask">
          <div class="mask-bg"></div>
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678806137926.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bLNjkCW8gCTf9YLVS2b3S6pLJwRhGw4DdjtnKZwSqApzsghT%2Bl3kj%2BVIN6LELfhqOSGh3GV3birPpVGVA5EF5%2BeqORIPt2LPhAXYZvtDFzLWYr%2BLefglqk1k%2F%2FRn64TNXbcV4PWr%2BF%2Bk7LW%2BFWXK2Vhb6XPZw0SrlJZSUNwbkZjuBc7%2FgmOMeFlW0i6lgNT2hagkJ7DuN2ZUttn5h3%2B%2BEh16r6SSKOl8VVfuPKgrNVQvE2euuCEymIVLqaRWs2T7oGk1uWl1%2FW5Zqvy%2FOGed7QJVlmEHwD7gTiUmDK7sF4E%2FeGMOX126VJc1mpBWUkX%2FczDH2fHtXRGLBX%2FhJU%2B8IA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container py-17">
    <p class="font-english fs-3xl fs-lg-5xl text-center">Contact</p>
    <a
      class="fs-xl fs-lg-5xl text-center font-serifTc"
      href="https://www.instagram.com/iiin.cookies/"
      target="_blank"
    >
      聯絡我們請往 instagram
    </a>
  </div>
</template>

<script>
import { gsap, ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
gsap.registerPlugin(SplitType);

export default {
  emits: ["split-index-products"],
  mounted() {
    const splitAbout = this.$refs.splitAbout;
    const splitAboutCh = this.$refs.splitAboutCh;
    new SplitType(splitAbout);
    new SplitType(splitAboutCh);

    splitAboutCh.querySelectorAll(".line").forEach((line) => {
      line.style.textAlign = "end";
    });
    this.$nextTick(() => {
      gsap.fromTo(
        splitAboutCh.querySelectorAll(".char"),
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          stagger: 0.05,
          delay: 1.5,
          duration: 0.2,
        }
      );

      gsap.fromTo(
        splitAbout.querySelectorAll(".char"),
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          stagger: 0.05,
          delay: 1.5,
          duration: 0.2,
        }
      );
      const maskBgElements = document.querySelectorAll(".mask-bg");

      maskBgElements.forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            refreshPositions: true,
          },
          duration: 1,
          width: "0%",
          ease: "power3.inOut",
        });
      });
      gsap.to(".mask-bg", {
        duration: 1,
        width: "0%",
        ease: "power3.inOut",
        delay: 2,
      });
    });
  },
  updated() {
    ScrollTrigger.refresh();
  },
};
</script>
