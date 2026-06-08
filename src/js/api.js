const API_URL = "https://api.adviceslip.com/advice";
export async function fetchAdvice() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Erro ao buscar conselho.");
    }
    return response.json();
}
//# sourceMappingURL=api.js.map