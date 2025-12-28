import React, { useState } from 'react';
import { Mail, MapPin, FileText, Calendar, Briefcase, Award, Github, BookOpen, Film, Globe, ExternalLink, GraduationCap, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AcademicProfile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [language, setLanguage] = useState('en');
  const [imgError, setImgError] = useState(false);

  const highlightAuthor = (authors, name) => {
    const parts = authors.split(name);
    if (parts.length === 1) return authors;
    return parts.map((part, i) => (<span key={i}>{part}{i < parts.length - 1 && <strong className="font-bold text-purple-700">{name}</strong>}</span>));
  };

  const content = {
    en: {
      tabs: { about: 'About', news: 'News', research: 'Research', projects: 'Projects', portfolio: 'Portfolio', experience: 'Internship' },
      tabIcons: { about: '👤', news: '📰', research: '📚', projects: '💼', portfolio: '🎬', experience: '🏢' },
      profile: {
        name: "Rongyi Chen", title: "M.A. Student in Computational Communication",
        institution: "Center for Intelligent Media & Communication Research",
        university: "Central South University", expected: "Expected 2026", email: "rongyi@csu.edu.cn",
        nextStep: { title: "Incoming Ph.D. Student", school: "Peking University", field: "Communication Studies", direction: "Big Data & AI Marketing", time: "Starting September 2026" },
        bio: "I'm a researcher focusing on computational communication and communication technology studies, with particular interests in how sociotechnical systems—including generative AI, algorithms, virtual reality, and digital platforms—reshape media industries and everyday communication. I adopt a multi-method interdisciplinary approach that combines ethnographic fieldwork, experimental design, and computational analysis.",
        researchAreas: ["Communication Technology", "Social Computing", "Human-Computer Interaction", "Computer-Supported Cooperative Work"],
        education: [
          { school: "Central South University", period: "2023-2026", degree: "M.A. in Computational Communication" },
          { school: "Communication University of China", period: "2019-2023", degrees: ["B.A. in Communication", "B.A. in Broadcasting & Hosting Arts"], minors: ["Human-Centered Design"] },
          { school: "University of Missouri-Columbia", period: "2019-2023", degree: "International Communication Certificate" }
        ],
        training: [
          { school: "University of Chicago", program: "Data & Policy Summer Scholar", course: "R Programming", year: "2023" },
          { school: "University of California, Davis", program: "Computational Social Science", course: "Computer Simulations", year: "2024" },
          { school: "University of Oxford", program: "Digital Humanities", course: "St Anne's College", year: "2024" }
        ],
        awards: [
          { icon: "🏆", title: "National Scholarship", org: "Ministry of Education, 2025" },
          { icon: "🎖️", title: "First Class Scholarship & GEM Award", org: "Central South University, 2025" },
          { icon: "🏆", title: "First Prize Radio/TV Programs", org: "Hunan Province, 2025 & 2024" },
          { icon: "🎖️", title: "Best Paper & Outstanding Student", org: "CSU Humanities, 2024" },
          { icon: "🏆", title: "Outstanding Thesis Award", org: "CUC, 2023" },
          { icon: "🎖️", title: "Best Filming Award", org: "Hebei TV, 2022" }
        ]
      },
      sections: { education: "Education", training: "Extra Training", awards: "Awards", featuredResearch: "Selected Publications", academicNews: "Academic News", industryNews: "Industry News", preprints: "Preprints", publications: "Publications", conferences: "Conferences", grants: "Grants", researchProjects: "Projects", videoProductions: "Videos", watchVideo: "Watch", lastUpdated: "Created by Rongyi | Dec 2025" }
    },
    zh: {
      tabs: { about: '关于', news: '动态', research: '研究', projects: '项目', portfolio: '作品', experience: '经历' },
      tabIcons: { about: '👤', news: '📰', research: '📚', projects: '💼', portfolio: '🎬', experience: '🏢' },
      profile: {
        name: "陈荣毅", title: "计算传播方向硕士研究生",
        institution: "智媒传播研究中心", university: "中南大学", expected: "预计2026年毕业", email: "rongyi@csu.edu.cn",
        nextStep: { title: "即将攻读博士", school: "北京大学新闻与传播学院", field: "传播学博士", direction: "大数据与人工智能营销传播", time: "2026年9月入学" },
        bio: "我专注于计算传播学和传播技术研究，关注社会技术系统——包括生成式AI、算法、虚拟现实和数字平台——如何重塑媒体产业和日常传播。我采用跨学科方法，结合民族志田野调查、实验设计和计算分析。",
        researchAreas: ["传播技术", "社会计算", "人机交互", "计算机支持协同工作"],
        education: [
          { school: "中南大学", period: "2023-2026", degree: "新闻与传播硕士" },
          { school: "中国传媒大学", period: "2019-2023", degrees: ["传播学学士", "播音与主持艺术双学位"], minors: ["人本设计"] },
          { school: "密苏里大学", period: "2019-2023", degree: "国际传播证书" }
        ],
        training: [
          { school: "芝加哥大学", program: "数据与政策学者", course: "R语言", year: "2023" },
          { school: "UC Davis", program: "计算社会科学", course: "网络分析", year: "2024" },
          { school: "牛津大学", program: "数字人文", course: "圣安妮学院", year: "2024" }
        ],
        awards: [
          { icon: "🏆", title: "国家奖学金", org: "教育部, 2025" },
          { icon: "🎖️", title: "一等奖学金 & GEM奖", org: "中南大学, 2025" },
          { icon: "🏆", title: "优秀广播电视作品一等奖", org: "湖南省, 2025 & 2024" },
          { icon: "🎖️", title: "最佳论文 & 优秀学生", org: "人文学院, 2024" },
          { icon: "🏆", title: "优秀毕业论文", org: "中传, 2023" },
          { icon: "🎖️", title: "最佳拍摄奖", org: "河北台, 2022" }
        ]
      },
      sections: { education: "教育", training: "培训", awards: "荣誉", featuredResearch: "精选研究", academicNews: "学术动态", industryNews: "行业动态", preprints: "预印本", publications: "期刊", conferences: "会议", grants: "基金", researchProjects: "项目", videoProductions: "作品", watchVideo: "观看", lastUpdated: "Created by Rongyi | 2025年12月" }
    }
  };

  const t = content[language];
  const socialMedia = [
    { name: "Scholar", icon: Award, url: "https://scholar.google.com/citations?user=aFi4Wd0AAAAJ" },
    { name: "RedNote", icon: BookOpen, url: "https://www.xiaohongshu.com/user/profile/6633970e000000000303278d" },
    { name: "GitHub", icon: Github, url: "https://github.com/Likunnan" }
  ];

  const newsData = {
    academic: [
      { date: "2025-12-24", title: "🎓 Admitted to Peking University Ph.D. Program!", titleZh: "🎓 北京大学博士预录取！", content: "I have been pre-admitted to the Ph.D. program in Communication Studies at the School of Journalism and Communication, Peking University, with a research focus on Big Data & AI Marketing Communication. Starting September 2026.", contentZh: "我已被北京大学新闻与传播学院传播学博士项目预录取，研究方向为大数据与人工智能营销传播，将于2026年9月入学。" },
      { date: "2025-09-10", title: "📄 Paper Published in Cultural Trends!", titleZh: "📄 论文发表于Cultural Trends！", content: "Our paper 'Artists and their poor: economic and symbolic inequality in distorted China's post-pandemic art subsidy policies' has been published in Cultural Trends (SSCI).", contentZh: "论文《艺术家及其贫困：中国后疫情时代艺术补贴政策中的经济与符号不平等》发表于Cultural Trends (SSCI)。" },
      { date: "2025-06-20", title: "🎉 SSCI Q1 Paper Accepted!", titleZh: "🎉 SSCI Q1论文录用！", content: "My co-authored paper 'Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users' Information Trust' has been accepted by the International Journal of Human–Computer Interaction (IJHCI), a prestigious SSCI Q1 journal.", contentZh: "合作论文《增强信任还是助长误判？社交媒体地理信息展示对用户信息信任的影响》被SSCI Q1期刊《国际人机交互期刊》(IJHCI)录用。" },
      { date: "2025-05-20", title: "🏆 AEJMC Second Place Paper Award!", titleZh: "🏆 AEJMC论文二等奖！", content: "My co-authored paper has been accepted to the Mass Communication and Society Division at the 2025 AEJMC 108th Annual Conference (as first author), winning the Second Place Faculty Paper Award.", contentZh: "作为第一作者的合作论文被第108届AEJMC年会大众传播与社会分会录用，并获得论文二等奖。" },
      { date: "2025-03-13", title: "📧 4 Conference Papers Accepted!", titleZh: "📧 4篇会议论文录用！", content: "Four co-authored papers accepted to ICA Annual Conference (2 papers as first author), ICA Pre-Conference, and IAMCR Annual Conference.", contentZh: "四篇合作论文分别被ICA年会（2篇为第一作者）、ICA前会和IAMCR年会录用。" }
    ],
    industry: [
      { date: "2025-06-19", title: "🤖 AI Robot System for Chinese Restaurant", titleZh: "🤖 《中餐厅》AI机器人系统上线", content: "Developed multi-modal AI robot system for Mango TV's 'Chinese Restaurant: African Entrepreneurship Season', integrating LLMs with mechanical control for multilingual voice interaction and real-time visual processing.", contentZh: "为芒果TV《中餐厅·非洲创业季》开发多模态AI机器人系统，集成大语言模型与机械控制，实现多语言语音交互和实时视觉处理。" },
      { date: "2025-05-30", title: "🏆 Hunan Outstanding Radio & TV Program Award!", titleZh: "🏆 湖南省优秀广播电视作品奖！", content: "Second-time winner of First Prize for Outstanding Radio and Television Programs by the Hunan Province Radio and Television Association as sole author.", contentZh: "第二次以独立作者身份获得湖南省广播电视协会优秀广播电视作品一等奖。" },
      { date: "2025-05-16", title: "🎤 AI Virtual Audience in Singer 2025", titleZh: "🎤 《歌手2025》AI虚拟观众系统", content: "Co-designed AI-powered 'Virtual Audience' for 'Singer 2025' live broadcast, featuring real-time facial expression analysis and emoji visualization for 500+ audience members.", contentZh: "为《歌手2025》直播联合设计AI虚拟观众系统，实现500+观众的实时面部表情分析和表情可视化。" },
      { date: "2025-05-15", title: "🎧 Interactive AI System for Ride the Wind 2025", titleZh: "🎧 《乘风破浪2025》AI交互系统", content: "Led design of advanced AI interaction system for 'Sisters Who Make Life Better', featuring celebrity personality simulation with reduced latency.", contentZh: "主导《乘风2025·姐姐的美好生活》AI交互系统设计，实现明星人格模拟与低延迟响应。" },
      { date: "2025-05-14", title: "😊 AI Comedy Evaluation System Goes Live", titleZh: "😊 AI喜剧评分系统上线", content: "Co-developed AI comedy scoring system using real-time facial expression analysis, debuted on Mango TV's 'Ha Ha No Worries'.", contentZh: "联合开发基于实时面部表情分析的AI喜剧评分系统，在芒果TV《哈哈哈哈哈》首播。" }
    ]
  };

  const featuredResearch = [
    { icon: "📄", year: "2025", title: "Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users’ Information Trust", titleZh: "增强信任还是助长误判？新兴地理信息显示功能对社交媒体用户信息信任的影响评估", venue: "International Journal of Human–Computer Interaction (HIHC)", authors: "Yalong Xiao, Rongyi Chen, Qing Xiao, Chengzhang Zhu, Jie Feng", link: "https://doi.org/10.1080/10447318.2025.2524493" },
    { icon: "📄", year: "2025", title: "Artists and their poor: economic and symbolic inequality in distorted China's post-pandemic art subsidy policies", titleZh: "艺术家及其贫困者：后疫情时代中国艺术补贴政策中的经济与符号不平等", venue: "Cultural Trends", authors: "Jingjia Xiao, Qing Xiao, Rongyi Chen", link: "https://doi.org/10.1080/09548963.2025.2557215" },
    { icon: "📄", year: "2025", title: "Institutionalizing Folk Theories of Algorithms: How Multi-Channel Networks (MCNs) Govern Algorithmic Labor in Chinese Live-Streaming Industry", titleZh: "算法民间理论的制度化：MCN公司如何塑造中国直播行业的算法劳动", venue: "arXiv", authors: "Qing Xiao, Rongyi Chen, Jingjia Xiao, Tianyang Fu, Alice Qian Zhang, Xianzhe Fan, Bingbing Zhang, Zhicong Lu, Hong Shen", link: "https://arxiv.org/abs/2505.20623" },
    { icon: "📄", year: "2025", title: "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube", titleZh: "神圣的数字图景：YouTube宗教视频的叙事策略、视觉呈现与观众互动研究", venue: "arXiv", authors: "Rongyi Chen, Ziyan Xin, Qing Xiao, Ruiwei Xiao, Jingjia Xiao, Bingbing Zhang, Hong Shen, Zhicong Lu", link: "https://arxiv.org/abs/2509.10957" },
    { icon: "📄", year: "2024", title: "Exploring Influencers' and Users' Experiences in Douyin's Virtual Reality Live-Streaming", titleZh: "抖音虚拟现实直播中主播与用户体验探究", venue: "Proceedings of the 30th ACM Symposium on Virtual Reality Software and Technology", authors: "Rongyi Chen, Jingjia Xiao, Zilu Wang, Menghan Yin, Xianzhe Fan, Zihe Ran, Qing Xiao", link: "https://doi.org/10.1145/3641825.3689519" }
  ];

  const researchData = {
    preprints: [
      { year: "2025", title: "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube", authors: "Rongyi Chen, Ziyan Xin, Qing Xiao, Ruiwei Xiao, Jingjia Xiao, Bingbing Zhang, Hong Shen, Zhicong Lu", venue: "arXiv", link: "https://arxiv.org/abs/2505.20623" },
      { year: "2025", title: "Institutionalizing Folk Theories of Algorithms: How MCNs Govern Algorithmic Labor in Chinese Live-Streaming", authors: "Qing Xiao, Rongyi Chen, Jingjia Xiao, Tianyang Fu, Alice Qian Zhang, Xianzhe Fan, Bingbing Zhang, Zhicong Lu, Hong Shen", venue: "arXiv", link: "https://arxiv.org/abs/2505.20623" }
    ],
    publications: [
      { year: "2025", title: "Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users' Information Trust", authors: "Yalong Xiao, Rongyi Chen, Qing Xiao, Chengzhang Zhu, Jie Feng", venue: "International Journal of Human–Computer Interaction", doi: "https://doi.org/10.1080/10447318.2025.2524493" },
      { year: "2025", title: "Artists and their poor: economic and symbolic inequality in distorted China's post-pandemic art subsidy policies", authors: "Jingjia Xiao, Qing Xiao, Rongyi Chen", venue: "Cultural Trends", doi: "https://doi.org/10.1080/09548963.2025.2557215" },
      { year: "2024", title: "Exploring Influencers' and Users' Experiences in Douyin's Virtual Reality Live-Streaming", authors: "Rongyi Chen, Jingjia Xiao, Zilu Wang, Menghan Yin, Xianzhe Fan, Zihe Ran, Qing Xiao", venue: "ACM VRST 2024", doi: "https://doi.org/10.1145/3641825.3689519" },
      { year: "2024", title: "The power of the civilian hero: Effective strategies for local media coverage in response to information epidemics", authors: "Chuchu Zhao, Rongyi Chen*", venue: "LabCom Books", doi: "https://ecrea.eu/page-18206/13312675" },
      { year: "2024", title: "Migrant youth aged 16 to 19 during social crises: Stress, deviant behavior, and identification with mainstream society", authors: "Hua Zhong, Qing Xiao, Rongyi Chen, Jingjia Xiao", venue: "Huxiang Law Review", doi: "https://mp.weixin.qq.com/s/fjACER5Um7StLb4HSPKXpA" }
    ],
    conferences: [
      { year: "2025", title: "When Memes Become Mean: Discrimination Recognition and Group Norms in Adolescent Bullying", authors: "Rongyi Chen, Qing Xiao, Shike Lin, Menghan Yin, Jingjia Xiao, Hua Zhong, Bingbing Zhang", venue: "AEJMC 2025", location: "San Francisco, USA", award: "Second Place Faculty Paper Award" },
      { year: "2025", title: "Responsible LLMs in Persuasive Health Message: Comparing Language Biases in General LLMs and Healthcare LLMs", authors: "Rongyi Chen, Honghua Pan, Ni Yuan, Yalong Xiao, Jie Feng", venue: "ICA 2025", location: "Denver, USA" },
      { year: "2025", title: "The Artists and Their Poor: Economic Inequality in China's Post-Pandemic Art Subsidy Policies", authors: "Jingjia Xiao, Qing Xiao, Rongyi Chen", venue: "ICA 2025", location: "Denver, USA" },
      { year: "2025", title: "How AI Constructs Disaster Narratives: A Comparative Analysis of LLMs in Multimodal Disaster News Production", authors: "Rui Zhang, Rongyi Chen", venue: "IAMCR 2025", location: "Singapore" },
      { year: "2025", title: "An Emerging Platform Entertainment Model in China: Algorithms Regulation and the Composite Interaction of Live Streaming and Short Videos", authors: "Rongyi Chen, Chuyi Guo", venue: "ICA 2025 Pre-Conference", location: "Singapore" },
      { year: "2024", title: "Have you seen the lovers in the game? Are they like us? Online Games and Game-Mediated Romantic Relationships", authors: "Jingrong Xu, Rongyi Chen, Haoran Dai", venue: "NCA 2024", location: "New Orleans, USA" },
      { year: "2024", title: "Gresham's Law in Language Education: How Short Video Buzzwords Reshapes Adolescents' Expression Habits", authors: "Rongyi Chen, Shike Lin, Haoran Dai", venue: "IAMCR 2024", location: "Christchurch, New Zealand" },
      { year: "2024", title: "The illusion of pluralistic and neutrality: How Twitter social bots show their opinion in Chinese political issue", authors: "Rongyi Chen, Qing Xiao, Haoran Dai", venue: "ECREA 2024", location: "Ljubljana, Slovenia" },
      { year: "2024", title: "Urban voice: LLM-based public opinion visualization for human-centered urban planning", authors: "Rongyi Chen, Jingjia Xiao, Zilu Wang, Qing Xiao", venue: "ICSC 2024", location: "Guangzhou, China" },
      { year: "2024", title: "Queering Sexual Desires through Recommendation Algorithms: Douyin, Soft-core Pornography Male Influencers, and Female/Male Homosexual Fans", authors: "Rongyi Chen, Qing Xiao, Jingjia Xiao", venue: "Cambridge Queer Studies 2024", location: "Cambridge, UK" },
      { year: "2023", title: "Focus on Supporting Roles in TikTok's Live-streaming E-commerce: How Do Assistant Anchors Affect Audiences' Purchase Intention?", authors: "Rongyi Chen, Shike Lin, Huiying Zhang", venue: "TikTok Symposium 2023", location: "London, UK" },
      { year: "2023", title: "Distorted emotional labor: an ethnography of a commercial live-streaming assistant anchor group", authors: "Rongyi Chen, Shike Lin", venue: "IAMCR 2023", location: "Lyon, France" }
    ]
  };

  const projectsData = {
    grants: [
      { year: "2025", title: "Research on AI-driven Transformation of News Production and Dissemination Models", titleZh: "人工智能驱动新闻生产与传播模式转型研究", role: "Co-PI", program: "Hunan Broadcasting System Research Fellowship", programZh: "湖南广播电视台研究资助项目", amount: "CN¥100,000" },
      { year: "2023-2024", title: "Social Media Crisis Communication amid Disasters and Emergencies", titleZh: "灾害与突发事件中的社交媒体危机传播", role: "Co-PI", program: "Hunan Daily Research Fellowship", programZh: "湖南日报研究资助项目", amount: "CN¥30,000" }
    ],
    projects: [
      { title: "Intelligent Early Warning of International Public Opinion Based on Multimodal Data Fusion", titleZh: "基于多模态数据融合的国际舆情智能预警", meta: "2024-2025, Central South University", metaZh: "2024-2025, 中南大学计算机学院", role: "RA", funding: "Hunan Education Dept: 24B0023" },
      { title: "Key Multimodal AI Technologies for Precision International Communication", titleZh: "面向精准国际传播的多模态AI关键技术研究与示范", meta: "2024-2025, Central South University", metaZh: "2024-2025, 中南大学计算机学院", role: "RA", funding: "Hunan Key R&D: 2024JK2023" },
      { title: "International Public Opinion Dynamics in Major Emergencies on Social Media", titleZh: "社交媒体重大突发事件国际舆情动态研究", meta: "2024-2025, Central South University", metaZh: "2024-2025, 中南大学人文学院", role: "RA", funding: "MOE Youth Fund: 22YJC860007" },
      { title: "Live Stream Host Professional Ethics and Industry Standards Development", titleZh: "直播主播职业道德提升与行业标准制定", meta: "2021, Communication University of China", metaZh: "2021, 中国传媒大学传播研究院", role: "RA", funding: "National Standard: HW21144" },
      { title: "Representation of Chinese Ethnicities in Global Social Media", titleZh: "全球社交媒体中中国各民族形象及相关话语研究", meta: "2022-2023, Communication University of China", metaZh: "2022-2023, 中国传媒大学传播研究院", role: "RA", funding: "Ethnic Affairs Commission: 2021-GMC-052" },
      { title: "Adolescents' Digital Literacy in Media Convergence Environment", titleZh: "媒介融合环境下青少年数字素养与价值取向培育", meta: "2020-2021, Communication University of China", metaZh: "2020-2021, 中国传媒大学传播研究院", role: "RA", funding: "NSF China: 19BXW087" }
    ]
  };

  const portfolioData = [
    { title: "Food Safety Beijing Campaign", titleZh: "食安北京专题片", desc: "Cinematography & Editing", descZh: "摄影与剪辑", org: "Beijing Market Regulation", year: "2024", emoji: "🥛", url: "https://mp.weixin.qq.com/s/AEDOdbB2HCHjRcE0gEUDaQ" },
    { title: "20th Shanghai Film Festival Documentary", titleZh: "第20届上海电影节幕后纪录片", desc: "Cinematography & Editing", descZh: "摄影与剪辑", org: "Bazaar Men", year: "2023", emoji: "🎬", url: "https://mp.weixin.qq.com/s/AEDOdbB2HCHjRcE0gEUDaQ" },
    { title: "Our Days: Spring Retro Fashion Movie", titleZh: "《我们的日子》春日复古时尚大片", desc: "Cinematography & Editing", descZh: "摄影与剪辑", org: "Bazaar Men", year: "2023", emoji: "👜", url: "https://mp.weixin.qq.com/s/AEDOdbB2HCHjRcE0gEUDaQ" },
    { title: "Mogao Grottoes Monitoring & Early Warning System", titleZh: "莫高窟文物监测预警系统", desc: "Planning, VFX & Editing", descZh: "策划、特效与剪辑", org: "Xinhua Net", year: "2022", emoji: "🏛️", url: "http://www.anhuinews.com/ahkj/kjsj/202210/t20221018_6458799.html" },
    { title: "Super Mirror: Green Solar Energy", titleZh: "“超级镜子”追日点亮绿色能源", desc: "Planning, VFX & Editing", descZh: "策划、特效与剪辑", org: "Xinhua Net", year: "2022", emoji: "☀️", url: "https://www.news.cn/science/2022-08/19/c_1310654117.htm" },
    { title: "Ancient Poems Blessing 2022 Graduates", titleZh: "古诗词祝福2022届毕业生", desc: "Planning, VFX & Editing", descZh: "策划、特效与剪辑", org: "People's Daily", year: "2022", emoji: "🎓", url: "https://weibo.com/2803301701/LxWIfBX6y" },
    { title: "10 BGMs for Graduation Season", titleZh: "毕业季循环播放的10首BGM", desc: "Planning, VFX & Editing", descZh: "策划、特效与剪辑", org: "People's Daily", year: "2022", emoji: "🎵", url: "https://weibo.com/2803301701/LvOvmiK1s" }
  ];

  const experienceData = [
    { period: "2025", title: "AI Product Manager Intern", titleZh: "AI产品经理实习生", org: "Mango TV, Intelligent Research Center", orgZh: "芒果TV 智能研究中心", desc: "Led AI entertainment systems for 'Singer 2025' and 'Ride the Wind 2025', including facial expression analysis and celebrity personality simulation.", descZh: "主导《歌手2025》《乘风破浪2025》等综艺AI系统，包括面部表情分析和明星人格模拟。", logo: "/images/logos/mangotv.png" },
    { period: "2023 - 2025", title: "Multimedia Content Editor Intern", titleZh: "多媒体内容编辑实习生", org: "University of Chicago, Harris School", orgZh: "芝加哥大学哈里斯公共政策学院", desc: "China region enrollment, video production, and Chinese social media operations for academic programs.", descZh: "负责中国区招生、视频制作及学术项目的中文社交媒体运营。", logo: "/images/logos/uchicago.png" },
    { period: "2023", title: "Cinematography Intern", titleZh: "摄影实习生", org: "BAZAAR Men", orgZh: "芭莎男士", desc: "Video production for celebrity interviews and CCTV-6 film promotion projects.", descZh: "明星访谈视频制作及CCTV-6电影宣传项目。", logo: "/images/logos/bazaar.png" },
    { period: "2022 - 2023", title: "Assistant Director Intern", titleZh: "助理导演实习生", org: "CCTV-6, 1905 Movie Network", orgZh: "电影频道(CCTV-6) 1905电影网", desc: "Executive director for the 35th Golden Rooster Awards and '5G+360°' immersive live broadcast.", descZh: "第35届金鸡奖颁奖典礼执行导演及5G+360°沉浸式直播。", logo: "/images/logos/cctv6.png" },
    { period: "2022", title: "Multimedia Content Editor Intern", titleZh: "多媒体内容编辑实习生", org: "People's Daily, Weibo Department", orgZh: "人民日报微博部", desc: "Produced viral content reaching #2 and #3 on Weibo hot search with millions of views.", descZh: "制作微博热搜第2、3名爆款内容，获数百万播放量。", logo: "/images/logos/peopledaily.png" },
    { period: "2021", title: "Live-streaming Tech Specialist Intern", titleZh: "直播技术专员实习生", org: "Alibaba Entertainment, Youku/Laifeng", orgZh: "阿里大文娱 优酷/来疯", desc: "Testing digital humans and interactive gaming features for live streaming products.", descZh: "测试数字人及直播互动游戏功能。", logo: "/images/logos/alibaba.png" },
    { period: "2021", title: "Marketing Intern", titleZh: "市场营销实习生", org: "Ximalaya Technology", orgZh: "喜马拉雅科技", desc: "Established Campus Partner Program with partnerships across 200+ universities.", descZh: "建立校园合伙人计划，与200+高校建立合作。", logo: "/images/logos/ximalaya.png" },
    { period: "2020 - 2021", title: "Journalist Intern", titleZh: "记者实习生", org: "Zhanjiang Radio and Television", orgZh: "湛江广播电视台", desc: "Produced news segments and documentary content for local television broadcasts.", descZh: "制作本地电视新闻片段和纪录片内容。", logo: "/images/logos/zhanjiang.png" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-200/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-fuchsia-200/40 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex min-h-screen">
        <aside className="w-80 lg:w-96 flex-shrink-0 p-6 fixed top-0 left-0 h-screen overflow-y-auto z-30">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-white/50">
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-violet-200 p-1 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  {imgError ? <div className="w-full h-full bg-gradient-to-br from-purple-200 to-violet-300 flex items-center justify-center"><span className="text-4xl font-bold text-white">{t.profile.name[0]}</span></div> : <img src="/images/IMG_1783.jpg" alt={t.profile.name} className="w-full h-full object-cover" onError={() => setImgError(true)} />}
                </div>
              </div>
            </div>
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{t.profile.name}</h1>
              <p className="text-purple-600 font-medium text-base">{t.profile.title}</p>
              <p className="text-sm text-gray-600 mt-1">{t.profile.institution}</p>
              <p className="text-sm text-gray-500">{t.profile.university} · {t.profile.expected}</p>
            </div>
            <div className="my-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
              <div className="flex items-center gap-2 mb-1"><GraduationCap size={16} className="text-red-600" /><span className="font-bold text-red-700 text-base">{t.profile.nextStep.title}</span></div>
              <p className="text-sm font-medium text-gray-800">{t.profile.nextStep.school}</p>
              <p className="text-xs text-gray-700">{t.profile.nextStep.field}</p>
              <p className="text-xs text-red-600">{t.profile.nextStep.direction}</p>
              <p className="text-sm text-gray-500">{t.profile.nextStep.time}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">{t.profile.researchAreas.map((area, i) => <span key={i} className="px-2 py-1 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 rounded-full text-sm">{area}</span>)}</div>
            <div className="flex justify-center gap-3 pb-4 border-b border-purple-100">
              <a href={`mailto:${t.profile.email}`} className="w-9 h-9 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center transition-colors"><Mail size={16} className="text-purple-600" /></a>
              {socialMedia.map((s, i) => { const Icon = s.icon; return <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center transition-colors"><Icon size={16} className="text-purple-600" /></a>; })}
            </div>
            <div className="pt-4"><button onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')} className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-lg shadow hover:from-purple-600 hover:to-violet-600 transition-all text-base"><Globe size={14} /><span>{language === 'en' ? '中文' : 'EN'}</span></button></div>
          </motion.div>
        </aside>

        <main className="flex-1 p-6 lg:p-8 ml-80 lg:ml-96">
          <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-3 mb-10 sticky top-6 z-40 border border-white/50">
            <div className="flex flex-wrap gap-2">
              {Object.entries(t.tabs).map(([key, label]) => (
                <button key={key} onClick={() => setActiveTab(key)} className={`px-8 py-2.5 rounded-xl font-bold text-base transition-all flex items-center gap-2 ${activeTab === key ? 'bg-white/60 backdrop-blur-lg bg-gradient-to-r from-purple-500/90 to-violet-400/90 text-white shadow-lg border border-white/40' : 'text-gray-600 hover:bg-purple-50'}`}>
                  <span>{t.tabIcons[key]}</span>{label}
                </button>
              ))}
            </div>
          </motion.nav>

          <AnimatePresence mode="wait">
          {activeTab === 'about' && (
            <motion.div key="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50"><p className="text-gray-700 leading-relaxed text-base">{t.profile.bio}</p></div>
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-white/50">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><span className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center"><Award size={14} className="text-purple-600" /></span>{t.sections.education}</h3>
                    <div className="space-y-3">{t.profile.education.map((edu, i) => <div key={i} className="border-l-2 border-purple-300 pl-3"><p className="font-semibold text-gray-800 text-base">{edu.school}</p><p className="text-sm text-purple-600">{edu.period}</p>{edu.degree && <p className="text-sm text-gray-600">{edu.degree}</p>}{edu.degrees && edu.degrees.map((d, j) => <p key={j} className="text-sm text-gray-600">{d}</p>)}{edu.minors && <p className="text-sm text-gray-500">Minors: {edu.minors.join(', ')}</p>}</div>)}</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-white/50">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><span className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center"><BookOpen size={14} className="text-purple-600" /></span>{t.sections.training}</h3>
                    <div className="grid grid-cols-3 gap-2">{t.profile.training.map((tr, i) => <div key={i} className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-lg p-3 flex flex-col border border-purple-100"><div className="text-2xl mb-2">{tr.emoji}</div><div><p className="font-bold text-gray-800 text-sm">{tr.school}</p><p className="text-sm text-purple-600">{tr.program}</p></div><div className="mt-2"><p className="text-sm text-gray-500">{tr.course}</p><p className="text-sm text-gray-400">{tr.year}</p></div></div>)}</div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-white/50">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Star size={16} className="text-purple-600" />{t.sections.featuredResearch}</h3>
                  <div className="space-y-2">{featuredResearch.map((item, i) => <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="block group"><div className={`p-2.5 rounded-lg border transition-all hover:shadow-md ${i === 0 ? 'bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200' : 'bg-gray-50/50 border-gray-100 hover:bg-purple-50/50'}`}><div className="flex items-start gap-2"><span className="text-lg">{item.icon}</span><div className="flex-1 min-w-0"><div className="flex items-center gap-1.5 mb-0.5"><span className="text-sm font-medium text-white bg-purple-500 px-1.5 py-0.5 rounded">{item.year}</span><span className="text-sm text-purple-600">{item.venue}</span>{item.award && <span className="text-sm">🏆</span>}</div><h4 className="text-sm font-medium text-gray-800 line-clamp-2">{language === 'en' ? item.title : item.titleZh}</h4><p className="text-sm text-gray-500 truncate mt-0.5">{highlightAuthor(item.authors, 'Rongyi Chen')}</p></div><ExternalLink size={12} className="text-gray-400 group-hover:text-purple-500 flex-shrink-0" /></div></div></a>)}</div>
                </div>
              </div>
            </motion.div>
          )}

            {activeTab === 'news' && (
              <motion.div key="news" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-white/50 h-[550px] flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2"><Calendar size={16} className="text-purple-600" />{t.sections.academicNews}</h3>
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                      <div className="relative"><div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-purple-200"></div>
                        {newsData.academic.map((item, i) => <div key={i} className="relative pl-8 mb-5"><div className="absolute left-0 top-1 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div></div><span className="text-sm text-purple-600">{item.date}</span><h4 className="font-semibold text-gray-800 mt-0.5 text-base">{language === 'en' ? item.title : item.titleZh}</h4><p className="text-sm text-gray-600 mt-0.5">{language === 'en' ? item.content : item.contentZh}</p></div>)}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-white/50 h-[260px] flex flex-col">
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2"><Briefcase size={16} className="text-violet-600" />{t.sections.industryNews}</h3>
                      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        <div className="relative"><div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-violet-200"></div>
                          {newsData.industry.map((item, i) => <div key={i} className="relative pl-8 mb-4"><div className="absolute left-0 top-1 w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div></div><span className="text-sm text-violet-600">{item.date}</span><h4 className="font-semibold text-gray-800 mt-0.5 text-base">{language === 'en' ? item.title : item.titleZh}</h4><p className="text-sm text-gray-600 mt-0.5">{language === 'en' ? item.content : item.contentZh}</p></div>)}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-white/50 h-[260px] flex flex-col">
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">🏆 {t.sections.awards}</h3>
                      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        <div className="space-y-2">{t.profile.awards.map((aw, i) => <div key={i} className="flex items-start gap-2 p-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-100"><span className="text-lg">{aw.icon}</span><div><p className="font-medium text-gray-800 text-base">{aw.title}</p><p className="text-sm text-gray-600">{aw.org}</p></div></div>)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'research' && (
              <motion.div key="research" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
                <div><h3 className="text-lg font-bold text-gray-800 mb-3">{t.sections.preprints}</h3>
                  <div className="space-y-3">{researchData.preprints.map((p, i) => <div key={i} className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-white/50 shadow"><div className="flex items-start gap-3"><div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"><span className="text-purple-600 font-bold text-sm">P{i+1}</span></div><div className="flex-1"><div className="flex items-center gap-2 mb-1"><span className="text-sm font-medium text-white bg-purple-500 px-1.5 py-0.5 rounded">{p.year}</span></div><h4 className="font-semibold text-gray-800 text-base">{p.title}</h4><p className="text-sm text-gray-600 mt-1">{highlightAuthor(p.authors, 'Rongyi Chen')}</p><a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-purple-600 hover:underline mt-1">{p.venue} <ExternalLink size={10} /></a></div></div></div>)}</div>
                </div>
                <div><h3 className="text-lg font-bold text-gray-800 mb-3">{t.sections.publications}</h3>
                  <div className="space-y-3">{researchData.publications.map((p, i) => <div key={i} className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-white/50 shadow"><div className="flex items-start gap-3"><div className="flex-shrink-0 w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center"><span className="text-violet-600 font-bold text-sm">J{i+1}</span></div><div className="flex-1"><div className="flex items-center gap-2 mb-1"><span className="text-sm font-medium text-white bg-violet-500 px-1.5 py-0.5 rounded">{p.year}</span></div><h4 className="font-semibold text-gray-800 text-base">{p.title}</h4><p className="text-sm text-gray-600 mt-1">{highlightAuthor(p.authors, 'Rongyi Chen')}</p><p className="text-sm text-purple-600 mt-1">{p.venue}</p><a href={p.doi} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 mt-1">DOI <ExternalLink size={10} /></a></div></div></div>)}</div>
                </div>
                <div><h3 className="text-lg font-bold text-gray-800 mb-3">{t.sections.conferences}</h3>
                  <div className="space-y-3">{researchData.conferences.map((c, i) => <div key={i} className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-white/50 shadow"><div className="flex items-start gap-3"><div className="flex-shrink-0 w-8 h-8 bg-fuchsia-100 rounded-lg flex items-center justify-center"><span className="text-fuchsia-600 font-bold text-sm">C{i+1}</span></div><div className="flex-1"><div className="flex items-center gap-2 mb-1"><span className="text-sm font-medium text-white bg-fuchsia-500 px-1.5 py-0.5 rounded">{c.year}</span>{c.award && <span className="text-sm bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full">🏆 {c.award}</span>}</div><h4 className="font-semibold text-gray-800 text-base">{c.title}</h4><p className="text-sm text-gray-600 mt-1">{highlightAuthor(c.authors, 'Rongyi Chen')}</p><div className="flex items-center gap-2 mt-1"><span className="text-sm text-purple-600">{c.venue}</span><span className="text-sm text-gray-500">· {c.location}</span></div></div></div></div>)}</div>
                </div>
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div key="projects" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
                <div>
                  <div className="flex items-center mb-4"><div className="w-2 h-6 bg-gradient-to-b from-yellow-400 to-orange-500 rounded mr-2"></div><h3 className="text-lg font-bold text-gray-800">{t.sections.grants}</h3></div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">{projectsData.grants.map((g, i) => <div key={i} className="bg-gradient-to-br from-white to-yellow-50 rounded-xl p-4 border-2 border-yellow-100 shadow relative overflow-hidden"><div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-30 -translate-y-6 translate-x-6"></div><div className="relative z-10"><div className="flex items-center justify-between mb-2"><span className="px-2 py-0.5 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 rounded-full text-sm font-medium">{g.year}</span><div className="flex items-center"><span className="text-base mr-1">💰</span><span className="font-bold text-gray-700 text-base">{g.amount}</span></div></div><h4 className="font-semibold text-gray-800 mb-1 text-base">{language === 'en' ? g.title : g.titleZh}</h4><p className="text-sm text-gray-600 italic">{language === 'en' ? g.program : g.programZh}</p><span className="text-sm font-medium text-yellow-700 bg-yellow-100 px-1.5 py-0.5 rounded mt-2 inline-block">{g.role}</span></div></div>)}</div>
                </div>
                <div><h3 className="text-lg font-bold text-gray-800 mb-3">{t.sections.researchProjects}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">{projectsData.projects.map((p, i) => <div key={i} className="bg-white/80 backdrop-blur-md rounded-xl p-3 border border-white/50 shadow"><h4 className="font-semibold text-gray-800 text-base">{language === 'en' ? p.title : p.titleZh}</h4><p className="text-sm text-gray-600 mt-1"><span className="text-purple-600 font-bold">{p.role}</span> · {language === 'en' ? p.meta : p.metaZh}</p>{p.funding && <span className="text-sm bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-700 px-1.5 py-0.5 rounded border border-yellow-200 mt-1 inline-block">{p.funding}</span>}</div>)}</div>
                </div>
              </motion.div>
            )}

            {activeTab === 'portfolio' && (
              <motion.div key="portfolio" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{t.sections.videoProductions}</h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">{portfolioData.map((v, i) => <motion.a key={i} href={v.url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.02 }} className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/50 shadow hover:shadow-lg transition-all group block"><div className="h-14 bg-gradient-to-br from-purple-100 via-violet-100 to-fuchsia-100 flex items-center justify-center"><span className="text-2xl group-hover:scale-110 transition-transform">{v.emoji}</span></div><div className="p-2.5"><div className="flex items-center gap-1.5 mb-1"><span className="text-sm text-purple-600 bg-purple-100 px-1 py-0.5 rounded">{v.year}</span><span className="text-sm text-gray-500 truncate">{v.org}</span></div><h4 className="font-medium text-gray-800 text-sm line-clamp-2">{language === 'en' ? v.title : v.titleZh}</h4><div className="flex items-center gap-1 mt-1.5 text-purple-600 text-sm"><Film size={10} />{t.sections.watchVideo}</div></div></motion.a>)}</div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div key="experience" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {experienceData.map((e, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-white/50 shadow">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <span className="text-sm text-white bg-purple-500 px-2 py-0.5 rounded mb-2 inline-block">{e.period}</span>
                          <h4 className="font-bold text-gray-800 text-base">{language === 'en' ? e.title : e.titleZh}</h4>
                          <p className="text-sm text-purple-600 mt-1">{language === 'en' ? e.org : e.orgZh}</p>
                          <p className="text-sm text-gray-600 mt-2">{language === 'en' ? e.desc : e.descZh}</p>
                        </div>
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                          <img src={e.logo} alt="logo" className="w-9 h-9 object-contain" onError={(ev) => { ev.target.style.display = 'none'; ev.target.nextSibling.style.display = 'flex'; }} />
                          <div className="w-9 h-9 bg-gradient-to-br from-purple-100 to-violet-100 rounded items-center justify-center hidden"><Briefcase size={14} className="text-purple-400" /></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <footer className="mt-12 text-center text-sm text-gray-500"><p>{t.sections.lastUpdated}</p></footer>
        </main>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0, 0) scale(1); } 25% { transform: translate(20px, -30px) scale(1.1); } 50% { transform: translate(-20px, 20px) scale(0.9); } 75% { transform: translate(30px, 10px) scale(1.05); } }
        .animate-blob { animation: blob 12s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d8b4fe; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #c084fc; }
      `}</style>
    </div>
  );
};

export default AcademicProfile;
