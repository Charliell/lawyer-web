import { GoogleGenAI } from "@google/genai";

// Initialize the client
// NOTE: process.env.API_KEY is automatically injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
你是李明哲律师事务所的 AI 法律助手。李明哲律师是一位资深的女性律师，以知性、干练、专业著称。
你的职责是为访客提供基本的法律信息引导和初步的咨询回答。

请遵守以下原则：
1. **专业形象**：使用专业、礼貌、知性且有温度的语气。回答问题时要逻辑严密，同时保持亲和力。
2. **免责声明**：在回答任何具体法律问题时，必须在回答末尾强调：“以上回答仅供参考，不构成正式法律意见。具体案件请预约李明哲律师进行线下咨询。”
3. **简洁性**：回答要条理清晰，要点明确，避免冗长晦涩。
4. **服务范围**：主要回答关于公司法、合同纠纷、知识产权、婚姻家事与财富传承以及民商事诉讼相关的问题。如果超出范围，礼貌地建议直接联系律师。
5. **引导联系**：在适当的时候，引导用户使用网站底部的联系方式或表单。

不要编造法律条文。如果不知道，请诚实回答并建议咨询律师。
`;

export const generateLegalResponseStream = async (
  history: { role: string; text: string }[],
  newMessage: string
) => {
  try {
    // Construct the chat history for the API
    // Note: The API expects specific roles. We map our internal 'model' to 'model' and 'user' to 'user'.
    // We'll start a fresh chat or use generateContent with history manually if we wanted stateless, 
    // but chat.sendMessageStream is best for conversation.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 }, // Minimize latency for chat
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessageStream({
      message: newMessage
    });

    return result;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};