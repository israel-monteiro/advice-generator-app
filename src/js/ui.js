export const adviceId = document.getElementById("advice-id");
export const adviceText = document.getElementById("advice-text");
export const generateAdviceBtn = document.getElementById("generate-advice");
export function renderAdvice(adviceData) {
    adviceId.textContent = `Advice #${adviceData.slip.id}`;
    adviceText.textContent = adviceData.slip.advice;
}
//# sourceMappingURL=ui.js.map