<template>
  <div>
    <svg :width="xEnd+50" height="50%">
      <line :x1="x0" y1="80" :x2="xEnd" y2="80" style="stroke:rgb(0,0,0); stroke-width:2" />

      <line
        v-for="line in marksArr"
        :key="line.x"
        :x1="line.x"
        y1="80"
        :x2="line.x"
        :y2="line.y"
        style="stroke:rgb(0,0,0); stroke-width:1"
      />

      <text
        v-for="(mark, index) in signsArr"
        :key="index"
        :x="mark.x"
        y="95"
        fill="black"
      >{{ mark.value }}</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Scale",
  props: {
    startDate: Number,
    endDate: Number,
    step: Number,
    ratio: Number,
    order: Number
  },
  data() {
    return {
      wpx: window.screen.availWidth,
      x0: 50,
      xEnd: 0,
      marksArr: [],
      signsArr: [],
      scaleLength: 0
    };
  },

  created() {
    this.calculateScale();
    this.$store.commit('setScaleLength', this.scaleLength);
  },

  mounted() {},

  methods: {
    calculateScale() {
      //console.log("0)", this.wpx, " px"); // смотрим ширину экрана
      this.wpx = Math.floor(this.wpx / 100) * 100; // округление до сотен в меньшую сторону

      this.xEnd = this.wpx * 1.3 - 50;
      this.scaleLength = (this.xEnd - this.x0) * this.ratio;
      //console.log("1)", this.wpx, this., this.scaleLength, this.x0); // находим предполагаемые конец шкалы и длину шкалы

      let minMarkStep = this.wpx / 10;
      if (minMarkStep < 130) {
        minMarkStep = 130;
      }
      //console.log("2)", minMarkStep, "px это ~ 1/10 экрана"); // находим минимальный шаг между большими рисками (1 год), но не менее 130px

      let markQnt = (this.endDate - this.startDate) / this.step;
      let markStep = Math.floor(this.scaleLength / markQnt);
      //console.log("3)", markQnt, "лет", markStep); // находим кол-во лет (кол-во шагов) и разбиваем длину предполагаемой шкалы на шаги
      //console.log("4)", markStep, " >?< ", minMarkStep); // сравниваем шаг с минимальным шагом

      if (markStep < minMarkStep) {
        markStep = minMarkStep;
      }
      this.scaleLength = markStep * markQnt;
      this.xEnd = this.scaleLength + this.x0;
      //console.log("5)", markQnt, " лет. Шкала:", this.scaleLength, "; конец: ", this.xEnd); // убрать
      // шаг меньше минимального шага, то минимальный шаг умножаем на кол-во лет (шагов) и находим длину нашей реальной шкалы
      // в итоге у нас есть начало шкалы (50px по умолчанию) + длина шкалы; так мы находим конец шкалы

      let sign = this.startDate;
      let bigMark = 12;
      if (this.step !== 1) {
        bigMark = this.step;
      }

      let smallMarkQnt = 12 * markQnt;
      if (this.step !== 1) {
        smallMarkQnt = this.step * markQnt;
      }
      //console.log("6)", bigMark, "месяцев x ", markQnt, "лет = ", smallMarkQnt, " рисок"); // находим кол-во рисок на шкале

      const shift = ((this.xEnd - this.x0) * (1 - this.ratio)) / 2;
      this.x0 += shift;
      //console.log('7)', shift, this.x0); // убрать

      const smallMArkStep = Math.floor(this.scaleLength / smallMarkQnt);
      //console.log("8)", smallMArkStep, "px - округленный шаг между мелкими рисками"); // находим и округляем расстояние между рисками

      this.scaleLength = smallMArkStep * smallMarkQnt; // пересчитаем длину шкалы scaleLength
      //console.log("9)", this.scaleLength, "px новый размер самой шкалы = ", smallMArkStep, "px между рисками х ", smallMarkQnt, "кол-во рисок", " + 2*50 = ", this.scaleLength + 100, " scaleFullWidth"); // убрать

      this.xEnd = this.x0 + this.scaleLength; // пересчитаем конец шкалы
      //console.log("10)", this.x0, this.xEnd, "начало и конец самой шкалы без отступов"); // убрать

      let counter = 0;
      for (let x = this.x0; x <= this.xEnd; x += smallMArkStep) {
        if (counter % bigMark === 0) {
          this.marksArr.push({ x, y: 30 });
          this.signsArr.push({
            x: x - 17,
            value: String(sign)
          });
          sign += this.step;
        } else {
          this.marksArr.push({ x, y: 60 });
        }
        counter++;
      }
      //console.log("11)", this.marksArr); // убрать
    }
  }
};
</script>

<style scoped>
</style>
