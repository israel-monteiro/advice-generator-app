import { fetchAdvice } from "./api.js";
import { generateAdviceBtn, renderAdvice } from "./ui.js";
async function updateAdvice() {
    try {
        const adviceData = await fetchAdvice();
        renderAdvice(adviceData);
    }
    catch (error) {
        console.error("Erro ao buscar conselho:", error);
    }
}
generateAdviceBtn.addEventListener("click", updateAdvice);
//# sourceMappingURL=main.js.map