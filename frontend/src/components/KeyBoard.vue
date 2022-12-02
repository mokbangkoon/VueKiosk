<template>
  <div class="button-container">
    <div class="number-line">
      <b-button variant="outline-dark" @click="insertData('1')">1</b-button>
      <b-button variant="outline-dark" @click="insertData('2')">2</b-button>
      <b-button variant="outline-dark" @click="insertData('3')">3</b-button>
      <b-button variant="outline-dark" @click="insertData('4')">4</b-button>
      <b-button variant="outline-dark" @click="insertData('5')">5</b-button>
      <b-button variant="outline-dark" @click="insertData('6')">6</b-button>
      <b-button variant="outline-dark" @click="insertData('7')">7</b-button>
      <b-button variant="outline-dark" @click="insertData('8')">8</b-button>
      <b-button variant="outline-dark" @click="insertData('9')">9</b-button>
      <b-button variant="outline-dark" @click="insertData('0')">0</b-button>
    </div>
    <div class="ko" v-show="!isChangeLanguage">
      <div class="first-line">
        <span class="shift-mode" v-show="isShift">
          <b-button variant="outline-dark" @click="insertData('ㅃ')"
            >ㅃ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅉ')"
            >ㅉ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㄸ')"
            >ㄸ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㄲ')"
            >ㄲ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅆ')"
            >ㅆ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅛ')"
            >ㅛ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅕ')"
            >ㅕ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅑ')"
            >ㅑ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅒ')"
            >ㅒ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅖ')"
            >ㅖ</b-button
          >
        </span>
        <span class="normal-mode" v-show="!isShift">
          <b-button variant="outline-dark" @click="insertData('ㅂ')"
            >ㅂ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅈ')"
            >ㅈ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㄷ')"
            >ㄷ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㄱ')"
            >ㄱ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅅ')"
            >ㅅ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅛ')"
            >ㅛ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅕ')"
            >ㅕ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅑ')"
            >ㅑ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅐ')"
            >ㅐ</b-button
          >
          <b-button variant="outline-dark" @click="insertData('ㅔ')"
            >ㅔ</b-button
          >
        </span>
      </div>
      <div class="second-line">
        <b-button variant="outline-dark" @click="insertData('ㅁ')">ㅁ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㄴ')">ㄴ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅇ')">ㅇ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㄹ')">ㄹ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅎ')">ㅎ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅗ')">ㅗ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅓ')">ㅓ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅏ')">ㅏ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅣ')">ㅣ</b-button>
      </div>
      <div class="third-line">
        <b-button variant="outline-dark" @click="insertData('ㅋ')">ㅋ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅌ')">ㅌ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅊ')">ㅊ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅍ')">ㅍ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅠ')">ㅠ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅜ')">ㅜ</b-button>
        <b-button variant="outline-dark" @click="insertData('ㅡ')">ㅡ</b-button>
      </div>
    </div>

    <div class="eng" v-show="isChangeLanguage">
      <div class="uppercase" v-show="isShift">
        <div class="first-line">
          <b-button variant="outline-dark" @click="insertData('Q')">Q</b-button>
          <b-button variant="outline-dark" @click="insertData('W')">W</b-button>
          <b-button variant="outline-dark" @click="insertData('E')">E</b-button>
          <b-button variant="outline-dark" @click="insertData('R')">R</b-button>
          <b-button variant="outline-dark" @click="insertData('T')">T</b-button>
          <b-button variant="outline-dark" @click="insertData('Y')">Y</b-button>
          <b-button variant="outline-dark" @click="insertData('U')">U</b-button>
          <b-button variant="outline-dark" @click="insertData('I')">I</b-button>
          <b-button variant="outline-dark" @click="insertData('O')">O</b-button>
          <b-button variant="outline-dark" @click="insertData('P')">P</b-button>
        </div>
        <div class="second-line">
          <b-button variant="outline-dark" @click="insertData('A')">A</b-button>
          <b-button variant="outline-dark" @click="insertData('S')">S</b-button>
          <b-button variant="outline-dark" @click="insertData('D')">D</b-button>
          <b-button variant="outline-dark" @click="insertData('F')">F</b-button>
          <b-button variant="outline-dark" @click="insertData('G')">G</b-button>
          <b-button variant="outline-dark" @click="insertData('H')">H</b-button>
          <b-button variant="outline-dark" @click="insertData('J')">J</b-button>
          <b-button variant="outline-dark" @click="insertData('K')">K</b-button>
          <b-button variant="outline-dark" @click="insertData('L')">L</b-button>
        </div>
        <div class="third-line">
          <b-button variant="outline-dark" @click="insertData('Z')">Z</b-button>
          <b-button variant="outline-dark" @click="insertData('X')">X</b-button>
          <b-button variant="outline-dark" @click="insertData('C')">C</b-button>
          <b-button variant="outline-dark" @click="insertData('V')">V</b-button>
          <b-button variant="outline-dark" @click="insertData('B')">B</b-button>
          <b-button variant="outline-dark" @click="insertData('N')">N</b-button>
          <b-button variant="outline-dark" @click="insertData('M')">M</b-button>
        </div>
      </div>
      <div class="lowercase" v-show="!isShift">
        <div class="first-line">
          <b-button variant="outline-dark" @click="insertData('q')">q</b-button>
          <b-button variant="outline-dark" @click="insertData('w')">w</b-button>
          <b-button variant="outline-dark" @click="insertData('e')">e</b-button>
          <b-button variant="outline-dark" @click="insertData('r')">r</b-button>
          <b-button variant="outline-dark" @click="insertData('t')">t</b-button>
          <b-button variant="outline-dark" @click="insertData('y')">y</b-button>
          <b-button variant="outline-dark" @click="insertData('u')">u</b-button>
          <b-button variant="outline-dark" @click="insertData('i')">i</b-button>
          <b-button variant="outline-dark" @click="insertData('o')">o</b-button>
          <b-button variant="outline-dark" @click="insertData('p')">p</b-button>
        </div>
        <div class="second-line">
          <b-button variant="outline-dark" @click="insertData('a')">a</b-button>
          <b-button variant="outline-dark" @click="insertData('s')">s</b-button>
          <b-button variant="outline-dark" @click="insertData('d')">d</b-button>
          <b-button variant="outline-dark" @click="insertData('f')">f</b-button>
          <b-button variant="outline-dark" @click="insertData('g')">g</b-button>
          <b-button variant="outline-dark" @click="insertData('h')">h</b-button>
          <b-button variant="outline-dark" @click="insertData('j')">j</b-button>
          <b-button variant="outline-dark" @click="insertData('k')">k</b-button>
          <b-button variant="outline-dark" @click="insertData('l')">l</b-button>
        </div>
        <div class="third-line">
          <b-button variant="outline-dark" @click="insertData('z')">z</b-button>
          <b-button variant="outline-dark" @click="insertData('x')">x</b-button>
          <b-button variant="outline-dark" @click="insertData('c')">c</b-button>
          <b-button variant="outline-dark" @click="insertData('v')">v</b-button>
          <b-button variant="outline-dark" @click="insertData('b')">b</b-button>
          <b-button variant="outline-dark" @click="insertData('n')">n</b-button>
          <b-button variant="outline-dark" @click="insertData('m')">m</b-button>
        </div>
      </div>
    </div>
    <div class="special-key">
      <b-button
        variant="outline-dark"
        @click="changeShiftMode()"
        class="shift-key"
        :pressed="isShift"
        >쌍자음</b-button
      >
      <b-button
        variant="outline-dark"
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
      <b-button variant="outline-dark" @click="deleteData()" class="delete-key"
        >지우기</b-button
      >
      <b-button
        variant="outline-dark"
        @click="deleteAllData()"
        class="delete-all-key"
      >
        전체삭제</b-button
      >
    </div>
    <div>
      <textarea
        :value="hangulData"
        @input="inputChange"
        placeholder="주소를 적어주세요."
        type="text"
        class="input-data"
        @click="clickInput"
      >
      </textarea>
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
