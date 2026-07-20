//================ ATENCAO ===================
// ESTA PAGINA CONTEM TODAS AS RESPOSTAS DOS ENIGMAS
// PARA EVITAR SPOILERS, NAO ENTRE NESSA PAGINA
// ISSO *NAO* FAZ PARTE DO RP!
// qu3c0m3cem0sjo6os.com --- aicnalem
// 3spert1nh0.com

const answers = {
    1: "aicnalem",
    2: "six seven"
};

const pages = [
    "qu3c0m3cem0sjo6os.com",
    "3spert1nh0.com"
];


function verify(element) {
    const answerInput = element.parentElement.querySelector(".answer-input");

    if (answerInput.value.trim() === "") {
        alert("P3lo men0S t3Nt4!");
        return;
    }

    const stageClass = [...answerInput.classList].find(c => /\d/.test(c));
    const stage = parseInt(stageClass.replace(/\D/g, ""), 10);

    if (answerInput.value.toLowerCase() === answers[stage]) {
        alert(pages[stage])
    }
}