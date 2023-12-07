const input = $("input");
const result = $("#result");
const convert = $("#convert");

convert.click(function () {
    const inputValue = input.val();
    const binaryValue = parseInt(inputValue, 2);
    const hexaValue = parseInt(inputValue, 16);
    result.val(binaryValue);
    result.val(hexaValue);
});