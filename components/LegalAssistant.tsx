import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, RefreshCw, MessageSquare } from 'lucide-react';
import { generateLegalResponseStream } from '../services/ai';
import { ChatMessage, LoadingState } from '../types';

export const LegalAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '您好，我是李律师的 AI 法律助手。请问有什么法律问题我可以帮您初步解答吗？' }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, status]);

  const handleSend = async () => {
    if (!input.trim() || status === LoadingState.LOADING || status === LoadingState.STREAMING) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setStatus(LoadingState.LOADING);

    try {
      // Prepare history for context
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      
      // Create a placeholder for the model response
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      setStatus(LoadingState.STREAMING);

      const streamResult = await generateLegalResponseStream(history, userMsg);
      
      let fullText = '';
      
      for await (const chunk of streamResult) {
        const chunkText = chunk.text();
        fullText += chunkText;
        
        setMessages(prev => {
          const newMsgs = [...prev];
          const lastMsg = newMsgs[newMsgs.length - 1];
          // Update the last message
          if (lastMsg.role === 'model') {
             lastMsg.text = fullText;
          }
          return newMsgs;
        });
      }
      
      setStatus(LoadingState.IDLE);

    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev, 
        { role: 'model', text: '抱歉，系统暂时繁忙，请稍后再试或直接联系律所。', isError: true }
      ]);
      setStatus(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-assistant" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-accent-100 rounded-xl">
              <Sparkles className="h-8 w-8 text-accent-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary-900">
              智能法律助手
              <span className="block text-lg font-sans font-normal text-slate-500 mt-2">Powered by Gemini AI</span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              无论白天还是黑夜，我们的 AI 助手随时为您提供初步的法律咨询引导。它经过专业训练，可以解答常见的基础法律疑问。
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-bold text-primary-900 flex items-center mb-3">
                <MessageSquare className="w-4 h-4 mr-2" />
                常见咨询话题
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="cursor-pointer hover:text-accent-600 transition-colors" onClick={() => setInput("注册公司需要什么材料？")}>• 注册公司需要什么材料？</li>
                <li className="cursor-pointer hover:text-accent-600 transition-colors" onClick={() => setInput("合同违约如何索赔？")}>• 合同违约如何索赔？</li>
                <li className="cursor-pointer hover:text-accent-600 transition-colors" onClick={() => setInput("知识产权侵权判定标准？")}>• 知识产权侵权判定标准？</li>
              </ul>
            </div>
            <div className="text-xs text-slate-400 mt-4 border-t pt-4">
              *免责声明：AI 助手的回答仅供参考，不构成正式的法律意见。复杂案件请务必预约线下咨询。
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2 h-[600px] flex flex-col bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* Header */}
            <div className="bg-primary-900 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Bot size={24} />
                  </div>
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-primary-900"></span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Mingzhe AI Assistant</h3>
                  <p className="text-primary-100 text-xs">在线中</p>
                </div>
              </div>
              <button 
                onClick={() => setMessages([{ role: 'model', text: '您好，我是李律师的 AI 法律助手。请问有什么法律问题我可以帮您初步解答吗？' }])}
                className="text-primary-200 hover:text-white transition-colors"
                title="重置对话"
              >
                <RefreshCw size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start space-x-3 ${
                    msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.role === 'user' ? 'bg-accent-600 text-white' : 'bg-primary-800 text-white'
                  }`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-accent-600 text-white rounded-tr-none'
                        : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
                    } ${msg.isError ? 'border-red-300 bg-red-50 text-red-800' : ''}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="请输入您的法律问题..."
                  disabled={status === LoadingState.LOADING || status === LoadingState.STREAMING}
                  className="w-full pl-4 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all text-sm disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || status === LoadingState.LOADING || status === LoadingState.STREAMING}
                  className="absolute right-2 p-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 disabled:opacity-50 disabled:hover:bg-primary-900 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};