import React from 'react';
import { Scale, Gavel, Shield, FileText, Building, Users, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Service } from '../types';

// --- Services Section ---
const servicesList: Service[] = [
  {
    title: '公司法律顾问',
    description: '为企业提供设立、治理、并购重组、破产清算等全生命周期的法律服务。',
    iconName: 'Building'
  },
  {
    title: '民商事诉讼',
    description: '代理各类合同纠纷、侵权纠纷、股权争议等复杂民商事诉讼案件。',
    iconName: 'Gavel'
  },
  {
    title: '知识产权保护',
    description: '商标、专利、著作权的申请、保护及侵权诉讼，商业秘密保护体系建设。',
    iconName: 'Shield'
  },
  {
    title: '房地产与建设工程',
    description: '土地使用权出让、项目开发建设、融资、预售、物业管理等法律业务。',
    iconName: 'Users'
  },
  {
    title: '合同审查与起草',
    description: '各类商业合同的起草、审查、修改，防范商业风险，保障交易安全。',
    iconName: 'FileText'
  },
  {
    title: '刑事合规与辩护',
    description: '企业刑事合规审查，以及经济犯罪、职务犯罪的刑事辩护。',
    iconName: 'Scale'
  }
];

const IconMap = {
  Scale, Gavel, Shield, FileText, Building, Users
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">专业领域</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-slate-600">我们深耕法律行业多年，在以下领域积累了丰富的实战经验，致力于为客户提供高效、精准的法律服务。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = IconMap[service.iconName];
            return (
              <div key={index} className="group p-8 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-800 mb-6 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- About Section ---
export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-200 rounded-tl-3xl z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-200 rounded-br-3xl z-0"></div>
            {/* Placeholder for professional headshot */}
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2340&auto=format&fit=crop" 
              alt="Li Mingzhe" 
              className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-900">
              关于李明哲律师
            </h2>
            <h3 className="text-xl text-accent-600 font-medium">资深合伙人 | 15年+ 执业经验</h3>
            <p className="text-slate-600 leading-relaxed">
              李明哲律师毕业于中国政法大学，获法学硕士学位。自2008年执业以来，专注于处理复杂的商事诉讼与非诉业务。
            </p>
            <p className="text-slate-600 leading-relaxed">
              他曾担任多家上市公司的常年法律顾问，不仅在法庭上具有出色的辩护能力，更擅长从商业角度为客户规避风险。李律师坚持“受人之托，忠人之事”的执业理念，以严谨的逻辑和专业的素养赢得了客户的广泛信赖。
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-accent-500 pl-4">
                <div className="text-3xl font-bold text-primary-900">500+</div>
                <div className="text-sm text-slate-500">成功案例</div>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <div className="text-3xl font-bold text-primary-900">50+</div>
                <div className="text-sm text-slate-500">常年顾问单位</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---
export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">联系我们</h2>
              <p className="text-primary-100">
                如果您有任何法律问题，欢迎随时与我们联系。我们将尽快回复您的咨询。
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-accent-500 mt-1" />
                <div>
                  <h4 className="font-medium text-white">办公地址</h4>
                  <p className="text-primary-200 text-sm">北京市朝阳区建国门外大街1号国贸写字楼1座</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-accent-500 mt-1" />
                <div>
                  <h4 className="font-medium text-white">联系电话</h4>
                  <p className="text-primary-200 text-sm">+86 10 8888 6666</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-accent-500 mt-1" />
                <div>
                  <h4 className="font-medium text-white">电子邮箱</h4>
                  <p className="text-primary-200 text-sm">contact@mingzhelaw.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-accent-500 mt-1" />
                <div>
                  <h4 className="font-medium text-white">工作时间</h4>
                  <p className="text-primary-200 text-sm">周一至周五: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 text-primary-900">在线留言</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">姓名</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" placeholder="您的姓名" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">电话</label>
                  <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" placeholder="联系电话" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">邮箱</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">咨询内容</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" placeholder="请简要描述您的法律问题..."></textarea>
              </div>
              <button className="w-full py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors shadow-md">
                发送留言
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer Section ---
export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-serif font-bold text-white">李明哲律师</span>
            <p className="text-sm mt-2">以法为盾，护您周全。</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">免责声明</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; {new Date().getFullYear()} Mingzhe Law Firm. All rights reserved.
        </div>
      </div>
    </footer>
  );
};