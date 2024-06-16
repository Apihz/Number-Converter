<template>
  <div class="w-full bg-gray-800 rounded-md  shadow-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
    <div class="overflow-x-auto h-full">
      <table class="table-auto bg-gray-800 border-gray-500 rounded-md text-xs w-full text-gray-100 h-full">
        <thead>
          <tr class="border-b border-gray-500">
            <th class="text-center p-2 text-lg" colspan="4">Number Conversion Table</th>
          </tr>
          <tr class="border-b border-gray-500 tran ">
            <th class="border-r border-gray-500 p-2 ">Binary</th>
            <th class="border-r border-gray-500 p-2">Decimal</th>
            <th class="border-r border-gray-500 p-2">Octal</th>
            <th class="p-2">Hexadecimal</th>
          </tr>
        </thead>
        <tbody class="text-center ">
          <tr class="border-b border-gray-500 hover:bg-gray-700 ">
            <td class="border-r border-gray-500 p-2">0001</td>
            <td class="border-r border-gray-500 p-2">1</td>
            <td class="border-r border-gray-500 p-2">1</td>
            <td class="p-2">1</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">0010</td>
            <td class="border-r border-gray-500 p-2">2</td>
            <td class="border-r border-gray-500 p-2">2</td>
            <td class="p-2">2</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">0011</td>
            <td class="border-r border-gray-500 p-2">3</td>
            <td class="border-r border-gray-500 p-2">3</td>
            <td class="p-2">3</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">0100</td>
            <td class="border-r border-gray-500 p-2">4</td>
            <td class="border-r border-gray-500 p-2">4</td>
            <td class="p-2">4</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">0101</td>
            <td class="border-r border-gray-500 p-2">5</td>
            <td class="border-r border-gray-500 p-2">5</td>
            <td class="p-2">5</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">0110</td>
            <td class="border-r border-gray-500 p-2">6</td>
            <td class="border-r border-gray-500 p-2">6</td>
            <td class="p-2">6</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">0111</td>
            <td class="border-r border-gray-500 p-2">7</td>
            <td class="border-r border-gray-500 p-2">7</td>
            <td class="p-2">7</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">1000</td>
            <td class="border-r border-gray-500 p-2">8</td>
            <td class="border-r border-gray-500 p-2">10</td>
            <td class="p-2">8</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">1001</td>
            <td class="border-r border-gray-500 p-2">9</td>
            <td class="border-r border-gray-500 p-2">11</td>
            <td class="p-2">9</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">1010</td>
            <td class="border-r border-gray-500 p-2">10</td>
            <td class="border-r border-gray-500 p-2">12</td>
            <td class="p-2">A</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">1011</td>
            <td class="border-r border-gray-500 p-2">11</td>
            <td class="border-r border-gray-500 p-2">13</td>
            <td class="p-2">B</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">1100</td>
            <td class="border-r border-gray-500 p-2">12</td>
            <td class="border-r border-gray-500 p-2">14</td>
            <td class="p-2">C</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">1101</td>
            <td class="border-r border-gray-500 p-2">13</td>
            <td class="border-r border-gray-500 p-2">15</td>
            <td class="p-2">D</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">1110</td>
            <td class="border-r border-gray-500 p-2">14</td>
            <td class="border-r border-gray-500 p-2">16</td>
            <td class="p-2">E</td>
          </tr>
          <tr class="border-b border-gray-500 hover:bg-gray-700">
            <td class="border-r border-gray-500 p-2">1111</td>
            <td class="border-r border-gray-500 p-2">15</td>
            <td class="border-r border-gray-500 p-2">17</td>
            <td class="p-2">F</td>
          </tr>
          <tr class=" hover:bg-gray-700 ">
            <td class="border-r border-gray-500 p-2">10000</td>
            <td class="border-r border-gray-500 p-2">16</td>
            <td class="border-r border-gray-500 p-2">20</td>
            <td class="p-2">10</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
