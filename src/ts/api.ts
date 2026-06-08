export interface AdviceData {
    slip: {
        id: number;
        advice: string;
    };
}

const API_URL = "https://api.adviceslip.com/advice";

export async function fetchAdvice(): Promise<AdviceData> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Erro ao buscar conselho.");
    }

    return response.json();
}
