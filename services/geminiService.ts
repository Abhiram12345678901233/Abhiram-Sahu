
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAnalyticalInsight = async (projectTitle: string, description: string) => {
  const prompt = `As a senior data analyst, provide a brief technical methodology insight for a project titled "${projectTitle}". 
  The project is described as: "${description}". 
  Format your response as a JSON object with two fields: 'insight' (a 2-sentence perspective on the analytical approach) and 'principles' (a list of 3 key data techniques or tools likely used, e.g., "Regression", "Pandas", "Hypothesis Testing").`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            insight: { type: Type.STRING },
            principles: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["insight", "principles"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      insight: "Data analysis uncovers hidden truths through rigorous validation. This project focuses on clarity through quantification.",
      principles: ["Statistical Significance", "Data Integrity", "EDA"]
    };
  }
};
