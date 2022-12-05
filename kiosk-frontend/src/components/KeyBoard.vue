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
    <div class="keyboard-container">
      <div class="number-delete">
        <div class="number-line">
          <b-button
            v-for="(number, index) in numberLine"
            variant="outline-dark"
            @click="insertData(number)"
            :key="index"
            class="custom-font"
          >
            <div class="number-element">
              {{ number }}
            </div>
          </b-button>
        </div>
        <div class="special-key">
          <b-button variant="outline-dark" @click="deleteData()"
            ><div class="delete-element">지우기</div></b-button
          >
        </div>
      </div>
      <div class="ko" v-show="!isChangeLanguage">
        <div class="first-line">
          <span class="shift-mode" v-show="isShift">
            <b-button
              v-for="(shiftHangul, index) in shiftHangulLine"
              :key="index"
              variant="outline-dark"
              @click="insertData(shiftHangul)"
              ><div class="element">{{ shiftHangul }}</div></b-button
            >
          </span>
          <span class="normal-mode" v-show="!isShift">
            <b-button
              v-for="(firstHangul, index) in firstHangulLine"
              :key="index"
              variant="outline-dark"
              @click="insertData(firstHangul)"
              ><div class="element">{{ firstHangul }}</div></b-button
            >
          </span>
        </div>
        <div class="second-line">
          <b-button
            v-for="(secondHangul, index) in secondHangulLine"
            :key="index"
            variant="outline-dark"
            @click="insertData(secondHangul)"
            ><div class="element">{{ secondHangul }}</div></b-button
          >
        </div>
        <div class="third-line">
          <b-button
            v-for="(thirdHangul, index) in thirdHangulLine"
            :key="index"
            variant="outline-dark"
            @click="insertData(thirdHangul)"
            ><div class="element">{{ thirdHangul }}</div></b-button
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
              ><div class="element">{{ firstUpperEng }}</div></b-button
            >
          </div>
          <div class="second-line">
            <b-button
              v-for="(secondUpperEng, index) in secondUpperEngLine"
              :key="index"
              variant="outline-dark"
              @click="insertData(secondUpperEng)"
              ><div class="element">{{ secondUpperEng }}</div></b-button
            >
          </div>
          <div class="third-line">
            <b-button
              v-for="(thirdUpperEng, index) in thirdUpperEngLine"
              :key="index"
              variant="outline-dark"
              @click="insertData(thirdUpperEng)"
              ><div class="element">{{ thirdUpperEng }}</div></b-button
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
              ><div class="element">{{ firstLowerEng }}</div></b-button
            >
          </div>
          <div class="second-line">
            <b-button
              v-for="(secondLowerEng, index) in secondLowerEngLine"
              :key="index"
              variant="outline-dark"
              @click="insertData(secondLowerEng)"
              ><div class="element">{{ secondLowerEng }}</div></b-button
            >
          </div>
          <div class="third-line">
            <b-button
              v-for="(thirdLowerEng, index) in thirdLowerEngLine"
              :key="index"
              variant="outline-dark"
              @click="insertData(thirdLowerEng)"
              ><div class="element">{{ thirdLowerEng }}</div></b-button
            >
          </div>
        </div>
      </div>
      <div class="special-key ko-eng">
        <b-button
          variant="outline-dark"
          @click="changeShiftMode()"
          :pressed="isShift"
          ><div
            :class="[isShift ? 'special-element-active' : 'special-element']"
          >
            쌍자음
          </div></b-button
        >
        <b-button
          variant="outline-dark"
          @click="insertData(' ')"
          class="space-key"
          ><div class="space-element"></div
        ></b-button>
        <b-button
          variant="outline-dark"
          @click="changeLanguageMode()"
          :pressed="isChangeLanguage"
          ><div
            :class="[
              isChangeLanguage ? 'special-element-active' : 'special-element',
            ]"
          >
            영문
          </div></b-button
        >
        <!-- 
      <b-button
        variant="secondary"
        @click="deleteAllData()"
        class="delete-all-key"
      >
        전체삭제</b-button
      > -->
      </div>
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
      thirdHangulLine: ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', '-'],
      firstLowerEngLine: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      secondLowerEngLine: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      thirdLowerEngLine: ['z', 'x', 'c', 'v', 'b', 'n', 'm', '-'],
      firstUpperEngLine: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      secondUpperEngLine: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      thirdUpperEngLine: ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '-'],
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
    // deleteAllData() {
    //   this.clickData = [];
    //   this.hangulData = null;
    //   this.firstCaretData = [];
    //   this.lastCaretData = [];
    //   this.isCaret = false;
    // },
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.button-container {
  display: flex;
  gap: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.keyboard-container {
  background: #ffffff;
  border: 4px solid #c9c4c2;
  border-radius: 24px;
  height: 696px;
  width: 960px;
  padding: 56px 40px 0px 34px;
}

.ko .btn {
  font-size: 40px;
  width: 84px;
  height: 100px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  letter-spacing: -0.025em;
  color: #222222;
  background: #e0e0e0;
  border: none;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.eng .btn {
  font-size: 40px;
  width: 84px;
  height: 100px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  letter-spacing: -0.025em;
  color: #222222;
  background: #e0e0e0;
  border: none;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.number-delete {
  display: flex;
  justify-content: center;
  gap: 12px;
}
.number-line {
  display: flex;
  gap: 8px;
}

.number-line .btn {
  font-size: 40px;
  width: 68px;
  height: 100px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.025em;
  color: #222222;
  background: #e0e0e0;
  border: none;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.number-line .btn :hover {
  background: #e0e0e0;
  transition: 0.2s;
}
.number-element {
  width: 60px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: none;
  border-radius: 14px;
  margin-bottom: 4px;
}

.special-key .btn {
  font-size: 28px !important;
  width: 132px;
  height: 100px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.025em;
  color: #222222;
  background: #e0e0e0;
  border: none;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.special-key .btn :hover {
  background: #e0e0e0;
  transition: 0.2s;
}
.special-element {
  width: 124px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: none;
  border-radius: 14px;
  margin-bottom: 4px;
}
.special-element-active {
  width: 124px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e0e0e0;
  border: none;
  border-radius: 14px;
  margin-bottom: 4px;
}
.delete-element {
  width: 124px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: none;
  border-radius: 14px;
  margin-bottom: 4px;
}
.element {
  width: 76px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: none;
  border-radius: 14px;
  margin-bottom: 4px;
}
.normal-mode {
  display: flex;
  justify-content: center;
  flex-wrap: wrap !important;
  gap: 4px !important;
}
.shift-mode {
  display: flex;
  justify-content: center;
  flex-wrap: wrap !important;
  gap: 4px !important;
}

.first-line {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  flex-wrap: wrap !important;
  gap: 4px !important;
}

.first-line .btn :hover {
  background: #e0e0e0;
  transition: 0.2s;
}

.second-line {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  flex-wrap: wrap !important;
  gap: 4px !important;
}

.second-line .btn :hover {
  background: #e0e0e0;
  transition: 0.2s;
}
.third-line {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  flex-wrap: wrap !important;
  gap: 4px !important;
}
.third-line .btn :hover {
  background: #e0e0e0;
  transition: 0.2s;
}

.space-key {
  display: flex;
  justify-content: center;
  width: 608px !important;
  height: 100px !important;
  background: #e0e0e0;
  border: none;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.space-key .btn :hover {
  background: #e0e0e0;
  transition: 0.2s;
}
.space-element {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: none;
  border-radius: 14px;
  margin-bottom: 4px;
  width: 600px;
  height: 88px;
}

.btn.active {
  background-color: #e0e0e0 !important;
  color: #222222 !important;
}
.btn:hover {
  background-color: #e0e0e0 !important;
  color: #222222 !important;
}

.input-data {
  width: 960px;
  height: 150px;
  border: 4px solid #c9c4c2;
  border-radius: 24px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 70px;
  letter-spacing: -0.025em;

  color: #222222;
}
.input-data::placeholder {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 70px;
  /* identical to box height, or 125% */
  padding-top: 40px;
  padding-left: 60px;
  letter-spacing: -0.025em;

  /* Line/800 */

  color: #c9c4c2;
}

.ko-eng {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 8px;
}
</style>
