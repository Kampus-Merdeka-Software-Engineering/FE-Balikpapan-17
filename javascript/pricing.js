function displayResult() {
    const dropdown = document.getElementById('dropdown');
    const result = document.getElementById('result');
    const selectedOption = dropdown.options[dropdown.selectedIndex].text;
    result.innerText = `Anda memilih: ${selectedOption}`;
}