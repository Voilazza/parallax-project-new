<template>
    <div>
        <svg
                :width="xEnd+50"
                height="50%"
        >

            <line
                    :x1="x0"
                    y1="80"
                    :x2="xEnd"
                    y2="80"
                    style="stroke:rgb(0,0,0);stroke-width:2"/>

            <line
                    v-for="line in marksArr"
                    :key="line.x"
                    :x1="line.x"
                    y1="80"
                    :x2="line.x"
                    :y2="line.y"
                    style="stroke:rgb(0,0,0);stroke-width:1"/>

            <text
                    v-for="(mark, index) in signsArr"
                    :key="index"
                    :x="mark.x"
                    y="95"
                    fill="black"
            >
                {{ mark.value }}
            </text>

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
            ratio: Number
        },
        data() {
            return {
                wpx: window.screen.availWidth,
                x0: 50,
                xEnd: 0,
                marksArr: [],
                signsArr: [],
                scaleLength: 0,
            }
        },

        created() {
           this.calculateScale()
           this.$emit('returnScaleLength', this.scaleLength)
        },

        mounted() {

        },

        methods: {
            calculateScale() {
                console.log('0)', this.wpx); // убрать
                
                this.wpx = Math.floor(this.wpx / 100) * 100;  // округление до сотен в меньшую сторону

                this.xEnd = (this.wpx * 1.3) - 50;
                this.scaleLength = ((this.xEnd - this.x0) * this.ratio)
                console.log('1)', this.wpx, this.xEnd, this.scaleLength, this.x0); // убрать

                const minMarkStep = (this.wpx / 10);
                console.log('2)', minMarkStep); // убрать

                let markQnt = ((this.endDate - this.startDate) / this.step);
                let markStep = (this.scaleLength / markQnt);
                console.log('3)', markQnt, markStep); // убрать
                console.log('4)', markStep, ' >?< ', minMarkStep); // убрать

                if (markStep < minMarkStep) {
                    this.xEnd = minMarkStep * markQnt;
                    this.scaleLength = ((this.xEnd - this.x0) * this.ratio)
                    markStep = minMarkStep;                    
                }
                console.log('5)', markQnt, ' лет; конец: ', this.xEnd, '; сама шкала: ', this.scaleLength); // убрать

                let sign = this.startDate;
                let bigMark = 12;
                if (this.step !== 1) {
                    bigMark = this.step
                }

                let smallMarkQnt = 12 * markQnt;
                if (this.step !== 1) {
                    smallMarkQnt = this.step * markQnt
                }
                console.log('6)', bigMark, 'месяцев x ', markQnt, 'лет = ', smallMarkQnt); // убрать

                const shift = ((this.xEnd - this.x0) * (1 - this.ratio) / 2)               
                this.x0 += shift
                //console.log('7)', shift, this.x0); // убрать

                const smallMArkStep = Math.floor(this.scaleLength / smallMarkQnt)
                console.log('8)', smallMArkStep, ' округленный шаг между мелкими рисками'); // убрать

                this.scaleLength = (smallMArkStep * smallMarkQnt) // пересчитаем scaleLength
                console.log('9)', this.scaleLength, ' новый размер самой шкалы = ', smallMArkStep, 'ширина деления х ', smallMarkQnt, 'кол-во рисок', ' + 100 = ', this.scaleLength + 100, ' scaleFullWidth'); // убрать
                
                this.xEnd = this.x0 + this.scaleLength // пересчитаем конец шкалы
                console.log('10)', this.x0, this.xEnd); // убрать

                let counter = 0;
                for (let x = this.x0; x <= this.xEnd; x += smallMArkStep) {
                    if (counter % bigMark === 0) {
                        this.marksArr.push({x, y: 30})
                        this.signsArr.push({
                            x: x - 17,
                            value: String(sign)
                        })
                        sign += this.step                        
                    }
                    else {

                        this.marksArr.push({x, y: 60})
                    }
                    counter++
                }                
                console.log('11)', this.marksArr); // убрать
            }
        }

    };


</script>

<style scoped>
</style>
