<template>
  <div class="bg-gray-800 w-full rounded-md p-4 text-white  shadow-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
    <div>
      <p class="text-xl font-bold text-center">Number Converter</p>
    </div>
    <div class="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
      <div class="flex-1">
        <span class="block font-semibold">From</span>
        <select v-model="fromBase" class="mt-1 block w-full p-2 bg-gray-700 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="10">Decimal</option>
          <option value="2">Binary</option>
          <option value="8">Octal</option>
          <option value="16">Hexadecimal</option>
        </select>
      </div>
      <div class="flex-1">
        <span class="block font-semibold">To</span>
        <select v-model="toBase" class="mt-1 block w-full p-2 bg-gray-700 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="10">Decimal</option>
          <option value="2">Binary</option>
          <option value="8">Octal</option>
          <option value="16">Hexadecimal</option>
        </select>
      </div>
      <div class="mt-7 md:mt-7">
        <button @click="swapBases" class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 mt-7 rounded-md">
          Swap
        </button>
      </div>
    </div>
    <div class="mt-4">
      <input v-model="inputNumber" type="text" placeholder="Enter number here" class="mt-1 block w-full p-2 bg-gray-700 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>
    <div class="mt-4">
      <textarea v-model="convertedNumber" readonly class="mt-1 block w-full p-2  bg-gray-700 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Converted number will appear here"></textarea>
    </div>
    <div class="mt-4 text-center space-y-4">
      <button @click="convertNumber" class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded">
        Convert
      </button>
      <button @click="toggleAutoConvert" :class="{'bg-emerald-500 hover:bg-emerald-600': autoConvert, 'bg-rose-500 hover:bg-rose-600': !autoConvert}" class=" text-white w-full font-bold py-2 px-4 rounded">
        {{ autoConvert ? 'Auto-Convert: ON' : 'Auto-Convert: OFF' }}
      </button>
      <button @click="resetForm" class="bg-gray-500 hover:bg-gray-700 text-white font-bold w-full py-2 px-4 rounded">Reset</button>
    </div>
    <div v-if="conversionSteps" class="mt-4">
      <p class="text-lg font-bold">Steps to Convert</p>
      <div class="bg-gray-700 p-4 mt-2 rounded-md overflow-auto " style="max-height: 300px;">
        <pre class="whitespace-pre-wrap w-full">{{ conversionSteps }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromBase: "10",
      toBase: "10",
      inputNumber: "",
      convertedNumber: "",
      conversionSteps: "",
      autoConvert: true
    };
  },
  watch: {
    inputNumber(newVal) {
      if (this.autoConvert) {
        if (newVal.length > 0) {
          this.convertNumber();
        } else {
          this.convertedNumber = "";
          this.conversionSteps = "";
        }
      }
    },
    fromBase(newVal) {
      if (this.autoConvert) {
        this.convertNumber();
      }
    },
    toBase(newVal) {
      if (this.autoConvert) {
        this.convertNumber();
      }
    }
  },
  methods: {
    toggleAutoConvert() {
      this.autoConvert = !this.autoConvert;
    },
    convertNumber() {
      const { fromBase, toBase, inputNumber } = this;
      if (!inputNumber) {
        this.convertedNumber = "Please enter a number";
        this.conversionSteps = "";
        return;
      }

      if (!this.isValidInput(inputNumber, fromBase)) {
        this.convertedNumber = `Invalid input number for base ${fromBase}`;
        this.conversionSteps = "";
        return;
      }

      let base10Number;
      try {
        base10Number = parseInt(inputNumber, fromBase);
        if (isNaN(base10Number)) throw new Error("Invalid input number");
      } catch (error) {
        this.convertedNumber = "Invalid input number";
        this.conversionSteps = "";
        return;
      }

      let converted;
      switch (toBase) {
        case "2":
          converted = base10Number.toString(2);
          break;
        case "8":
          converted = base10Number.toString(8);
          break;
        case "10":
          converted = base10Number.toString(10);
          break;
        case "16":
          converted = base10Number.toString(16);
          break;
        default:
          converted = "Invalid conversion base";
      }

      this.convertedNumber = converted;
      this.conversionSteps = this.getConversionSteps(inputNumber, base10Number, fromBase, toBase);
    },
    isValidInput(input, base) {
      const validChars = {
        "2": /^[01]+$/,
        "8": /^[0-7]+$/,
        "10": /^[0-9]+$/,
        "16": /^[0-9A-Fa-f]+$/
      };
      return validChars[base].test(input);
    },
    getConversionSteps(inputNumber, base10Number, fromBase, toBase) {
      let steps = "";
      if (fromBase !== "10") {
        steps += `Steps to Convert Base ${fromBase} to Decimal:\n`;
        const digits = inputNumber.split('').reverse();
        let decimalValue = 0;
        digits.forEach((digit, index) => {
          const digitValue = parseInt(digit, fromBase);
          decimalValue += digitValue * Math.pow(fromBase, index);
          steps += `(${digitValue} × ${fromBase}^${index}) `;
          if (index < digits.length - 1) {
            steps += "+ ";
          }
        });
        steps += `= ${decimalValue}\n`;
      }
      if (toBase !== "10") {
        steps += `Steps to Convert Decimal to Base ${toBase}:\n`;
        let num = base10Number;
        let result = "";
        const baseChars = "0123456789ABCDEF";
        while (num > 0) {
          const remainder = num % toBase;
          result = baseChars[remainder] + result;
          steps += `${num} ÷ ${toBase} = ${Math.floor(num / toBase)} R ${remainder}\n`; //R is the remainder
          num = Math.floor(num / toBase);
        }
        steps += `Reading the remainders from the bottom up: ${result}\n`;
      }
      return steps;
    },
    swapBases() {
      const temp = this.fromBase;
      this.fromBase = this.toBase;
      this.toBase = temp;
    },
    resetForm() {
      this.fromBase = "10";
      this.toBase = "10";
      this.inputNumber = "";
      this.convertedNumber = "";
      this.conversionSteps = "";
    }
  }
};
</script>

<style scoped>

</style>