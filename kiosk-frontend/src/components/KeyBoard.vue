<template>
  <div class="button-container">
    <div>
      <textarea
        :value="hangulData"
        @input="inputChange"
        placeholder="주소를 적어주세요!"
        type="text"
        class="input-data"
        @click="clickInput"
      >
      </textarea>
    </div>
    <div class="number-line">
      <b-button
        v-for="(number, index) in numberLine"
        variant="outline-dark"
        @click="insertData(number)"
        :key="index"
      >
        {{ number }}
      </b-button>
    </div>
    <div class="ko" v-show="!isChangeLanguage">
      <div class="first-line">
        <span class="shift-mode" v-show="isShift">
          <b-button
            v-for="(shiftHangul, index) in shiftHangulLine"
            :key="index"
            variant="outline-dark"
            @click="insertData(shiftHangul)"
            >{{ shiftHangul }}</b-button
          >
        </span>
        <span class="normal-mode" v-show="!isShift">
          <b-button
            v-for="(firstHangul, index) in firstHangulLine"
            :key="index"
            variant="outline-dark"
            @click="insertData(firstHangul)"
            >{{ firstHangul }}</b-button
          >
        </span>
      </div>
      <div class="second-line">
        <b-button
          v-for="(secondHangul, index) in secondHangulLine"
          :key="index"
          variant="outline-dark"
          @click="insertData(secondHangul)"
          >{{ secondHangul }}</b-button
        >
      </div>
      <div class="third-line">
        <b-button
          v-for="(thirdHangul, index) in thirdHangulLine"
          :key="index"
          variant="outline-dark"
          @click="insertData(thirdHangul)"
          >{{ thirdHangul }}</b-button
        >
      </div>
    </div>

    <div class="eng" v-show="isChangeLanguage">
      <div class="uppercase" v-show="isShift">
        <div class="first-line">
          <b-button
            v-for="(firstUpperEng, index) in firstUpperEngLine"
            :key="index"
            variant="outline-dark"
            @click="insertData(firstUpperEng)"
            >{{ firstUpperEng }}</b-button
          >
        </div>
        <div class="second-line">
          <b-button
            v-for="(secondUpperEng, index) in secondUpperEngLine"
            :key="index"
            variant="outline-dark"
            @click="insertData(secondUpperEng)"
            >{{ secondUpperEng }}</b-button
          >
        </div>
        <div class="third-line">
          <b-button
            v-for="(thirdUpperEng, index) in thirdUpperEngLine"
            :key="index"
            variant="outline-dark"
            @click="insertData(thirdUpperEng)"
            >{{ thirdUpperEng }}</b-button
          >
        </div>
      </div>
      <div class="lowercase" v-show="!isShift">
        <div class="first-line">
          <b-button
            v-for="(firstLowerEng, index) in firstLowerEngLine"
            :key="index"
            variant="outline-dark"
            @click="insertData(firstLowerEng)"
            >{{ firstLowerEng }}</b-button
          >
        </div>
        <div class="second-line">
          <b-button
            v-for="(secondLowerEng, index) in secondLowerEngLine"
            :key="index"
            variant="outline-dark"
            @click="insertData(secondLowerEng)"
            >{{ secondLowerEng }}</b-button
          >
        </div>
        <div class="third-line">
          <b-button
            v-for="(thirdLowerEng, index) in thirdLowerEngLine"
            :key="index"
            variant="outline-dark"
            @click="insertData(thirdLowerEng)"
            >{{ thirdLowerEng }}</b-button
          >
        </div>
      </div>
    </div>
    <div class="special-key">
      <b-button
        variant="secondary"
        @click="changeShiftMode()"
        class="shift-key"
        :pressed="isShift"
        >쌍자음</b-button
      >
      <b-button
        variant="secondary"
        @click="changeLanguageMode()"
        class="laguage-key"
        :pressed="isChangeLanguage"
        >한/영</b-button
      >
      <b-button
        variant="outline-dark"
        @click="insertData(' ')"
        class="space-key"
        >space</b-button
      >
      <b-button variant="secondary" @click="deleteData()" class="delete-key"
        >지우기</b-button
      >
      <b-button
        variant="secondary"
        @click="deleteAllData()"
        class="delete-all-key"
      >
        전체삭제</b-button
      >
    </div>
  </div>
</template>

<script>
import * as hangul from 'hangul-js';
export default {
  data() {
    return {
      clickData: [],
      hangulData: '',
      isShift: false,
      isChangeLanguage: false,
      disassembleData: null,
      startPosition: null,
      endPosition: null,
      firstCaretData: [],
      lastCaretData: [],
      isCaret: false,
      numberLine: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      firstHangulLine: [
        'ㅂ',
        'ㅈ',
        'ㄷ',
        'ㄱ',
        'ㅅ',
        'ㅛ',
        'ㅕ',
        'ㅑ',
        'ㅐ',
        'ㅔ',
      ],
      secondHangulLine: ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
      thirdHangulLine: ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'],
      firstLowerEngLine: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      secondLowerEngLine: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      thirdLowerEngLine: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
      firstUpperEngLine: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      secondUpperEngLine: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      thirdUpperEngLine: ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
      shiftHangulLine: [
        'ㅃ',
        'ㅉ',
        'ㄸ',
        'ㄲ',
        'ㅆ',
        'ㅛ',
        'ㅕ',
        'ㅑ',
        'ㅒ',
        'ㅖ',
      ],
    };
  },
  methods: {
    insertData(str) {
      if (this.isCaret) {
        this.firstCaretData.push(str);
        this.clickData = this.firstCaretData.concat(this.lastCaretData);

        this.hangulData = hangul.assemble(this.clickData);

        return;
      }
      this.clickData.push(str);
      this.hangulData = hangul.assemble(this.clickData);
    },
    deleteData() {
      if (this.isCaret) {
        this.firstCaretData.pop();
        this.clickData = this.firstCaretData.concat(this.lastCaretData);
        this.hangulData = hangul.assemble(this.clickData);
        return;
      } else {
        this.clickData.pop();
        this.hangulData = hangul.assemble(this.clickData);
        return;
      }
    },
    changeShiftMode() {
      this.isShift = !this.isShift;
    },
    changeLanguageMode() {
      this.isChangeLanguage = !this.isChangeLanguage;
    },
    deleteAllData() {
      this.clickData = [];
      this.hangulData = null;
      this.firstCaretData = [];
      this.lastCaretData = [];
      this.isCaret = false;
    },
    inputChange(e) {
      this.disassembleData = hangul.disassemble(e.target.value);
      this.clickData = this.disassembleData;
      this.hangulData = hangul.assemble(this.disassembleData);
    },
    clickInput() {
      let inputElement = document.querySelector('.input-data');
      this.startPosition = inputElement.selectionStart;
      this.endPosition = inputElement.selectionEnd;

      if (this.startPosition == this.endPosition) {
        this.isCaret = true;
        this.firstCaretData = hangul.disassemble(
          this.hangulData.slice(0, this.startPosition),
        );
        this.lastCaretData = hangul.disassemble(
          this.hangulData.slice(this.startPosition),
        );
      }
      if (this.startPosition === this.hangulData.length) {
        this.isCaret = false;
      }
    },
  },
};
</script>

<style>
.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.ko {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.eng {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.number-line {
  display: flex;
  gap: 5px;
}
.first-line {
  display: flex;
  gap: 5px;
}
.second-line {
  display: flex;
  gap: 5px;
}
.third-line {
  display: flex;
  gap: 5px;
}
.special-key {
  display: flex;
  gap: 5px;
}
.space-key {
  width: 20rem;
}
.btn.active {
  background-color: black !important;
}

.input-data {
  display: flex;
  width: 30rem;
}
.shift-mode {
  display: flex;
  gap: 5px;
}
.normal-mode {
  display: flex;
  gap: 5px;
}
.uppercase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.lowercase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>
