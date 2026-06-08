import type { AdviceData } from "./api";

export const adviceId = document.getElementById("advice-id") as HTMLParagraphElement;
export const adviceText = document.getElementById("advice-text") as HTMLElement;
export const generateAdviceBtn = document.getElementById("generate-advice") as HTMLButtonElement;

export function renderAdvice(adviceData: AdviceData) {
    adviceId.textContent = `Advice #${adviceData.slip.id}`;
    adviceText.textContent = adviceData.slip.advice;
}
