<template>
  <div>
    <div class="ko">
      <b-button @click="insertData('ㄱ')">ㄱ</b-button>
      <b-button @click="insertData('ㄴ')">ㄴ</b-button>
      <b-button @click="insertData('ㄷ')">ㄷ</b-button>
      <b-button @click="insertData('ㄹ')">ㄹ</b-button>
      <b-button @click="insertData('ㅁ')">ㅁ</b-button>
      <b-button @click="insertData('ㅂ')">ㅂ</b-button>
      <b-button @click="insertData('ㅅ')">ㅅ</b-button>
      <b-button @click="insertData('ㅇ')">ㅇ</b-button>
      <b-button @click="insertData('ㅈ')">ㅈ</b-button>
      <b-button @click="insertData('ㅊ')">ㅊ</b-button>
      <b-button @click="insertData('ㅋ')">ㅋ</b-button>
      <b-button @click="insertData('ㅌ')">ㅌ</b-button>
      <b-button @click="insertData('ㅍ')">ㅍ</b-button>
      <b-button @click="insertData('ㅎ')">ㅎ</b-button>
      <b-button @click="insertData('ㅏ')">ㅏ</b-button>
      <b-button @click="insertData('ㅑ')">ㅑ</b-button>
      <b-button @click="insertData('ㅓ')">ㅓ</b-button>
      <b-button @click="insertData('ㅕ')">ㅕ</b-button>
      <b-button @click="insertData('ㅗ')">ㅗ</b-button>
      <b-button @click="insertData('ㅛ')">ㅛ</b-button>
      <b-button @click="insertData('ㅜ')">ㅜ</b-button>
      <b-button @click="insertData('ㅠ')">ㅠ</b-button>
      <b-button @click="insertData('ㅡ')">ㅡ</b-button>
      <b-button @click="insertData('ㅣ')">ㅣ</b-button>
      <b-button @click="insertData('ㅔ')">ㅔ</b-button>
      <b-button @click="insertData('ㅖ')">ㅖ</b-button>
      <b-button @click="insertData('ㅐ')">ㅐ</b-button>
      <b-button @click="insertData('ㅒ')">ㅒ</b-button>
    </div>
    <div class="special">
      <b-button @click="insertData('shift')">shift</b-button>
      <b-button @click="deleteData()">delete</b-button>
      <b-button @click="insertData('한/영')">한/영</b-button>
    </div>
    <div class="ssang">
      <b-button @click="insertData('ㅃ')">ㅃ</b-button>
      <b-button @click="insertData('ㅉ')">ㅉ</b-button>
      <b-button @click="insertData('ㄸ')">ㄸ</b-button>
      <b-button @click="insertData('ㄲ')">ㄲ</b-button>
      <b-button @click="insertData('ㅆ')">ㅆ</b-button>
    </div>
    <div class="eng">
      <b-button @click="insertData('a')">a</b-button>
      <b-button @click="insertData('b')">b</b-button>
      <b-button @click="insertData('c')">c</b-button>
      <b-button @click="insertData('d')">d</b-button>
      <b-button @click="insertData('e')">e</b-button>
      <b-button @click="insertData('f')">f</b-button>
      <b-button @click="insertData('g')">g</b-button>
      <b-button @click="insertData('h')">h</b-button>
      <b-button @click="insertData('i')">i</b-button>
      <b-button @click="insertData('j')">j</b-button>
      <b-button @click="insertData('k')">k</b-button>
      <b-button @click="insertData('l')">l</b-button>
      <b-button @click="insertData('m')">m</b-button>
      <b-button @click="insertData('n')">n</b-button>
      <b-button @click="insertData('o')">o</b-button>
      <b-button @click="insertData('p')">p</b-button>
      <b-button @click="insertData('q')">q</b-button>
      <b-button @click="insertData('r')">r</b-button>
      <b-button @click="insertData('s')">s</b-button>
      <b-button @click="insertData('t')">t</b-button>
      <b-button @click="insertData('u')">u</b-button>
      <b-button @click="insertData('v')">v</b-button>
      <b-button @click="insertData('w')">w</b-button>
      <b-button @click="insertData('x')">x</b-button>
      <b-button @click="insertData('y')">y</b-button>
      <b-button @click="insertData('z')">z</b-button>
    </div>
    <div>
      <input v-model="hanguldata" type="text" class="input-data" />
    </div>
  </div>
</template>

<script>
import * as hangul from 'hangul-js';
export default {
  data() {
    return {
      clickData: [],
      hanguldata: null,
    };
  },
  methods: {
    insertData(str) {
      this.clickData.push(str);
      this.hanguldata = hangul.assemble(this.clickData);
    },
    deleteData() {
      this.clickData.pop();
      this.hanguldata = hangul.assemble(this.clickData);
    },
  },
};
</script>

<style>
.input-data {
  width: 100%;
}
</style>
