import React, { useState } from 'react';
import { Mail, FileText, Github, BookOpen, GraduationCap, ExternalLink, ChevronDown, ChevronRight, Menu, X, Award, Calendar, Briefcase, Star, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AcademicProfile = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeResearchArea, setActiveResearchArea] = useState(null);
  const [showFullPublications, setShowFullPublications] = useState(false);

  const highlightAuthor = (authors, name) => {
    const parts = authors.split(name);
    if (parts.length === 1) return authors;
    return parts.map((part, i) => (
      <span key={i}>
        {part}
        {i < parts.length - 1 && <strong className="font-bold text-primary-600">{name}</strong>}
      </span>
    ));
  };

  const profile = {
    name: "Rongyi Chen",
    title: "M.A. Student in Computational Communication",
    university: "Central South University",
    email: "rongyi@csu.edu.cn",
    nextStep: "Incoming Ph.D. Student at Peking University (2026 Fall)",
    bio: "My research spans communication technology, human-computer interaction (HCI), computer-supported cooperative work (CSCW), and social computing. I am particularly interested in how sociotechnical systems—including generative artificial intelligence, algorithms, virtual reality, and digital platforms—reshape media industries and everyday communication, as well as how emerging technologies are embedded in professional product workflows and the derivative impacts of technological change. My work seeks to integrate technological and communication research to understand information diffusion, user emotion, interface design, and human-computer interaction patterns in collaborative systems. I employ an interdisciplinary approach that combines ethnographic fieldwork, experimental design, and computational analysis to investigate not only how people make sense of these technologies, but also how these insights can inform the design of future human-AI collaborative system products.",
    researchAreas: ["Communication Technology", "Human-Computer Interaction", "Social Computing", "Computer-Supported Cooperative Work"]
  };

  const socialMedia = [
    { name: "小红书", icon: BookOpen, url: "https://www.xiaohongshu.com/user/profile/6633970e000000000303278d" },
    { name: "Google Scholar", icon: GraduationCap, url: "https://scholar.google.com/citations?user=aFi4Wd0AAAAJ" },
    { name: "GitHub", icon: Github, url: "https://github.com/Likunnan" },
    { name: "Email", icon: Mail, url: `mailto:${profile.email}` }
  ];

  const navigation = [
    { id: 'home', label: 'HOME' },
    { id: 'publications', label: 'PUBLICATIONS' },
    { id: 'news', label: 'NEWS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const featuredResearch = [
    { year: "2025", title: "Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users' Information Trust", venue: "International Journal of Human–Computer Interaction (IJHCI)", authors: "Yalong Xiao, Rongyi Chen, Qing Xiao, Chengzhang Zhu, Jie Feng", link: "https://doi.org/10.1080/10447318.2025.2524493", excerpt: "This study examines how geographic information displays on social media affect users' trust in information, finding that while visualizations can enhance credibility, they may also lead to misjudgments of source reliability." },
    { year: "2025", title: "Artists and their poor: economic and symbolic inequality in distorted China's post-pandemic art subsidy policies", venue: "Cultural Trends", authors: "Jingjia Xiao, Qing Xiao, Rongyi Chen", link: "https://doi.org/10.1080/09548963.2025.2557215", excerpt: "Analysis of post-pandemic art subsidy policies in China reveals systemic inequalities that perpetuate economic and symbolic disparities among artists." }
  ];

  const recentPublications = [
    { title: "Institutionalizing Folk Theories of Algorithms: How MCNs Govern Algorithmic Labor in Chinese Live-Streaming", authors: "Qing Xiao, Rongyi Chen, Jingjia Xiao, et al.", venue: "Proceedings of the 29th ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW 2026)", link: "https://arxiv.org/abs/2505.20623" },
    { title: "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube", authors: "Rongyi Chen, Ziyan Xin, Qing Xiao, et al.", venue: "Proceedings of the 20th International AAAI Conference on Web and Social Media (ICWSM 2026)", link: "https://arxiv.org/abs/2509.10957" },
    { title: "Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users' Information Trust", authors: "Yalong Xiao, Rongyi Chen, Qing Xiao, et al.", venue: "International Journal of Human–Computer Interaction (IJHCI)", link: "https://doi.org/10.1080/10447318.2025.2524493" }
  ];

  const recentNews = [
    { date: "Mar 2026", title: "Paper Accepted by CSCW 2026", content: "Paper 'Institutionalizing Folk Theories of Algorithms' accepted to The 29th ACM Conference on Computer-Supported Cooperative Work and Social Computing." },
    { date: "Mar 2026", title: "Paper Accepted by ICWSM 2026", content: "Paper 'The Digital Landscape of God' accepted to The 20th International AAAI Conference on Web and Social Media." },
    { date: "Dec 2025", title: "Admitted to Peking University Ph.D. Program", content: "Received pre-admission to the Ph.D. program in Communication Studies at Peking University." }
  ];

  // 处理作者显示：只显示前三个作者，后面加et al.
  const formatAuthors = (authors) => {
    const authorList = authors.split(',');
    if (authorList.length <= 3) {
      return authors;
    }
    return authorList.slice(0, 3).join(',') + ', et al.';
  };

  const researchInterests = [
    "Communication Technology",
    "Human-Computer Interaction",
    "Social Computing",
    "Computer-Supported Cooperative Work",
    "AI and Digital Culture"
  ];

  const researchData = {
    preprints: [
      { year: "2025", title: "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube", authors: "Rongyi Chen, Ziyan Xin, Qing Xiao, Ruiwei Xiao, Jingjia Xiao, Bingbing Zhang, Hong Shen, Zhicong Lu", venue: "arXiv", link: "https://arxiv.org/abs/2505.20623" },
      { year: "2025", title: "Institutionalizing Folk Theories of Algorithms: How MCNs Govern Algorithmic Labor in Chinese Live-Streaming", authors: "Qing Xiao, Rongyi Chen, Jingjia Xiao, Tianyang Fu, Alice Qian Zhang, Xianzhe Fan, Bingbing Zhang, Zhicong Lu, Hong Shen", venue: "arXiv", link: "https://arxiv.org/abs/2505.20623" }
    ],
    publications: [
      { year: "2025", title: "Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users' Information Trust", authors: "Yalong Xiao, Rongyi Chen, Qing Xiao, Chengzhang Zhu, Jie Feng", venue: "International Journal of Human–Computer Interaction", doi: "https://doi.org/10.1080/10447318.2025.2524493" },
      { year: "2025", title: "Artists and Their Poor: Economic and Symbolic Inequality in Distorted China's Post-pandemic Art Subsidy Policies", authors: "Jingjia Xiao, Qing Xiao, Rongyi Chen", venue: "Cultural Trends", doi: "https://doi.org/10.1080/09548963.2025.2557215" },
      { year: "2024", title: "Exploring Influencers' and Users' Experiences in Douyin's Virtual Reality Live-Streaming", authors: "Rongyi Chen, Jingjia Xiao, Zilu Wang, Menghan Yin, Xianzhe Fan, Zihe Ran, Qing Xiao", venue: "Proceedings of the 30th ACM Symposium on Virtual Reality Software and Technology (VRST 2024)", doi: "https://doi.org/10.1145/3641825.3689519" },
      { year: "2024", title: "The Power of the Civilian Hero: Effective Strategies for Local Media Coverage in Response to Information Epidemics", authors: "Chuchu Zhao, Rongyi Chen*", venue: "Local journalism, global challenges: News deserts, infodemic and the vastness in between; LabCom Books", doi: "https://ecrea.eu/page-18206/13312675" },
      { year: "2024", title: "Migrant Youth Aged 16 to 19 During Social Crises: Stress, Deviant Behavior, and Identification with Mainstream Society", authors: "Hua Zhong, Qing Xiao, Rongyi Chen, Jingjia Xiao", venue: "Huxiang Law Review", doi: "https://mp.weixin.qq.com/s/fjACER5Um7StLb4HSPKXpA" }
    ],
    conferences: [
      { year: "2025", title: "When Memes Become Mean: Discrimination Recognition and Group Norms in Adolescent Bullying", authors: "Rongyi Chen, Qing Xiao, Shike Lin, Menghan Yin, Jingjia Xiao, Hua Zhong, Bingbing Zhang", venue: "2025 Association for Education in Journalism and Mass Communication (AEJMC) 108th Annual Conference", location: "San Francisco, USA", award: "Second Place Faculty Paper Award, Mass Communication and Society Division" },
      { year: "2025", title: "Responsible LLMs in Persuasive Health Message: Comparing Language Biases in General LLMs and Healthcare LLMs", authors: "Rongyi Chen, Honghua Pan, Ni Yuan, Yalong Xiao, Jie Feng", venue: "2025 the 75th Annual Conference of the International Communication Association (ICA)", location: "Denver, USA" },
      { year: "2025", title: "The Artists and Their Poor: Economic Inequality in China's Post-Pandemic Art Subsidy Policies", authors: "Jingjia Xiao, Qing Xiao, Rongyi Chen", venue: "2025 the 75th Annual Conference of the International Communication Association (ICA)", location: "Denver, USA" },
      { year: "2025", title: "How AI Constructs Disaster Narratives: A Comparative Analysis of LLMs in Multimodal Disaster News Production", authors: "Rui Zhang, Rongyi Chen", venue: "2025 International Association for Media and Communication Research (IAMCR) Annual Conference", location: "Singapore" },
      { year: "2025", title: "An Emerging Platform Entertainment Model in China: Algorithms Regulation and the Composite Interaction of Live Streaming and Short Videos", authors: "Rongyi Chen, Chuyi Guo", venue: "Preconference of the 75th Annual Conference of the International Communication Association (ICA) 2025: Debating Creator Culture", location: "Boulder, USA" },
      { year: "2024", title: "Have You Seen the Lovers in the Game? Are They Like Us? Online Games and Game-Mediated Romantic Relationships", authors: "Jingrong Xu, Rongyi Chen, Haoran Dai", venue: "2024 National Communication Association (NCA) 110th Annual Convention", location: "New Orleans, USA" },
      { year: "2024", title: "Gresham's Law in Language Education: How Short Video Buzzwords Reshape Adolescents' Expression Habits and Semantic Understanding Capabilities", authors: "Rongyi Chen, Shike Lin, Haoran Dai", venue: "2024 International Association for Media and Communication Research (IAMCR) Annual Conference", location: "Christchurch, New Zealand" },
      { year: "2024", title: "The Illusion of Pluralistic and Neutrality: How Twitter Social Bots Show Their Opinion in Chinese Political Issues", authors: "Rongyi Chen, Qing Xiao, Haoran Dai", venue: "2024 the 10th ECREA European Communication Conference (ECC)", location: "Ljubljana, Slovenia" },
      { year: "2023", title: "Focus on Supporting Roles in TikTok's Live-Streaming E-Commerce: How Do Assistant Anchors Affect Audiences' Purchase Intention?", authors: "Rongyi Chen, Shike Lin, Huiying Zhang", venue: "TikTok Creators and Digital Economies Symposium 2023", location: "London, UK" },
      { year: "2023", title: "Distorted Emotional Labor: An Ethnography of a Commercial Live-Streaming Assistant Anchor Group", authors: "Rongyi Chen, Shike Lin", venue: "2023 International Association for Media and Communication Research (IAMCR) Annual Conferencee", location: "Lyon, France" }
    ]
  };

  // 搜索功能：仅搜索论文标题
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    // 收集所有论文
    const allPapers = [
      ...researchData.preprints,
      ...researchData.publications,
      ...researchData.conferences
    ];

    // 按标题搜索
    const results = allPapers.filter(paper =>
      paper.title.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  // 研究领域数据 - 精确匹配论文标题
  const researchAreasData = [
    {
      id: "comm-tech",
      name: "Communication Technology",
      description: "Study of how emerging technologies shape communication practices, media industries, and social structures",
      svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <!-- 整体上移 -->
        <g transform="translate(0, -15)">
          <!-- 手机1 -->
          <rect x="30" y="50" width="25" height="45" rx="3" fill="#f0f2f7" stroke="#4C5776" stroke-width="1"/>
          <line x1="35" y1="55" x2="50" y2="55" stroke="#4C5776" stroke-width="0.8"/>
          <line x1="35" y1="62" x2="45" y2="62" stroke="#4C5776" stroke-width="0.8"/>
          <line x1="35" y1="69" x2="50" y2="69" stroke="#4C5776" stroke-width="0.8"/>

          <!-- 电脑 -->
          <rect x="85" y="45" width="40" height="28" rx="2" fill="#f0f2f7" stroke="#4C5776" stroke-width="1"/>
          <rect x="97" y="73" width="16" height="5" rx="1" fill="#f0f2f7" stroke="#4C5776" stroke-width="1"/>
          <line x1="90" y1="52" x2="120" y2="52" stroke="#4C5776" stroke-width="0.8"/>
          <line x1="90" y1="60" x2="115" y2="60" stroke="#4C5776" stroke-width="0.8"/>

          <!-- 手机2 -->
          <rect x="145" y="50" width="25" height="45" rx="3" fill="#f0f2f7" stroke="#4C5776" stroke-width="1"/>
          <line x1="150" y1="55" x2="165" y2="55" stroke="#4C5776" stroke-width="0.8"/>
          <line x1="150" y1="62" x2="160" y2="62" stroke="#4C5776" stroke-width="0.8"/>
          <line x1="150" y1="69" x2="165" y2="69" stroke="#4C5776" stroke-width="0.8"/>

          <!-- 三角传输结构 -->
          <path d="M55 65 L80 58" stroke="#98a7c8" stroke-width="1.5" marker-end="url(#arrow1)"/>
          <path d="M125 58 L145 65" stroke="#98a7c8" stroke-width="1.5" marker-end="url(#arrow2)"/>
          <path d="M105 78 L55 88" stroke="#98a7c8" stroke-width="1.5" marker-end="url(#arrow3)"/>

          <defs>
            <marker id="arrow1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#98a7c8"/>
            </marker>
            <marker id="arrow2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#98a7c8"/>
            </marker>
            <marker id="arrow3" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#98a7c8"/>
            </marker>
          </defs>
        </g>
      </svg>`,
      papers: [
        ...researchData.preprints,
        ...researchData.publications,
        ...researchData.conferences
      ].filter(p =>
        p.title === "Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users' Information Trust" ||
        p.title === "Responsible LLMs in Persuasive Health Message: Comparing Language Biases in General LLMs and Healthcare LLMs"
      )
    },
    {
      id: "hci",
      name: "Human-Computer Interaction",
      description: "Investigation of user interactions with digital systems, virtual reality environments, and intelligent interfaces",
      svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <!-- VR头盔图标 -->
        <rect x="50" y="40" width="100" height="40" fill="#f0f2f7" stroke="#435b9e" stroke-width="1.5" rx="8"/>
        <circle cx="75" cy="60" r="12" fill="none" stroke="#435b9e" stroke-width="1"/>
        <circle cx="125" cy="60" r="12" fill="none" stroke="#435b9e" stroke-width="1"/>
        <path d="M40 80 L50 65 M160 80 L150 65" stroke="#435b9e" stroke-width="1"/>
      </svg>`,
      papers: [
        ...researchData.preprints,
        ...researchData.publications,
        ...researchData.conferences
      ].filter(p =>
        p.title === "Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users' Information Trust" ||
        p.title === "Exploring Influencers' and Users' Experiences in Douyin's Virtual Reality Live-Streaming" ||
        p.title === "Have You Seen the Lovers in the Game? Are They Like Us? Online Games and Game-Mediated Romantic Relationships"
      )
    },
    {
      id: "social-computing",
      name: "Social Computing",
      description: "Analysis of social behavior, information diffusion, and community dynamics in online social platforms",
      svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <!-- 整体上移 -->
        <g transform="translate(0, -10)">
          <!-- 网络结构示意图 -->
          <circle cx="40" cy="40" r="6" fill="#f0f2f7" stroke="#4C5776" stroke-width="1.5"/>
          <circle cx="100" cy="30" r="6" fill="#f0f2f7" stroke="#4C5776" stroke-width="1.5"/>
          <circle cx="160" cy="45" r="6" fill="#f0f2f7" stroke="#4C5776" stroke-width="1.5"/>
          <circle cx="60" cy="80" r="6" fill="#f0f2f7" stroke="#4C5776" stroke-width="1.5"/>
          <circle cx="120" cy="85" r="6" fill="#f0f2f7" stroke="#4C5776" stroke-width="1.5"/>
          <circle cx="170" cy="95" r="6" fill="#f0f2f7" stroke="#4C5776" stroke-width="1.5"/>
          <circle cx="35" cy="110" r="6" fill="#f0f2f7" stroke="#4C5776" stroke-width="1.5"/>
          <circle cx="90" cy="120" r="6" fill="#f0f2f7" stroke="#4C5776" stroke-width="1.5"/>
          <circle cx="145" cy="125" r="6" fill="#f0f2f7" stroke="#4C5776" stroke-width="1.5"/>

          <!-- 连接线 -->
          <line x1="46" y1="40" x2="94" y2="32" stroke="#98a7c8" stroke-width="1"/>
          <line x1="106" y1="32" x2="154" y2="43" stroke="#98a7c8" stroke-width="1"/>
          <line x1="42" y1="46" x2="58" y2="74" stroke="#98a7c8" stroke-width="1"/>
          <line x1="98" y1="38" x2="122" y2="79" stroke="#98a7c8" stroke-width="1"/>
          <line x1="158" y1="51" x2="126" y2="79" stroke="#98a7c8" stroke-width="1"/>
          <line x1="66" y1="80" x2="114" y2="83" stroke="#98a7c8" stroke-width="1"/>
          <line x1="126" y1="87" x2="164" y2="93" stroke="#98a7c8" stroke-width="1"/>
          <line x1="58" y1="86" x2="39" y2="104" stroke="#98a7c8" stroke-width="1"/>
          <line x1="116" y1="89" x2="96" y2="114" stroke="#98a7c8" stroke-width="1"/>
          <line x1="166" y1="99" x2="149" y2="119" stroke="#98a7c8" stroke-width="1"/>
          <line x1="41" y1="116" x2="84" y2="118" stroke="#98a7c8" stroke-width="1"/>
          <line x1="96" y1="120" x2="139" y2="123" stroke="#98a7c8" stroke-width="1"/>
          <line x1="60" y1="86" x2="87" y2="114" stroke="#98a7c8" stroke-width="1"/>
          <line x1="120" y1="91" x2="143" y2="119" stroke="#98a7c8" stroke-width="1"/>
        </g>
      </svg>`,
      papers: [
        ...researchData.preprints,
        ...researchData.publications,
        ...researchData.conferences
      ].filter(p =>
        p.title === "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube"
      )
    },
    {
      id: "cscw",
      name: "Computer-Supported Cooperative Work",
      description: "Research on collaborative technologies, distributed work systems, and group interaction dynamics",
      svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <!-- 协作工作图（上移15px） -->
        <g transform="translate(0, -15)">
          <rect x="30" y="30" width="40" height="25" fill="#f0f2f7" stroke="#4C5776" stroke-width="1" rx="2"/>
          <rect x="130" y="30" width="40" height="25" fill="#f0f2f7" stroke="#4C5776" stroke-width="1" rx="2"/>
          <rect x="80" y="80" width="40" height="25" fill="#f0f2f7" stroke="#4C5776" stroke-width="1" rx="2"/>

          <path d="M70 42.5 L80 80" stroke="#98a7c8" stroke-width="1" marker-end="url(#arrow2)"/>
          <path d="M130 42.5 L120 80" stroke="#98a7c8" stroke-width="1" marker-end="url(#arrow2)"/>

          <!-- 多人群组图标 -->
          <circle cx="60" cy="120" r="8" fill="#f0f2f7" stroke="#4C5776" stroke-width="1"/>
          <circle cx="100" cy="120" r="8" fill="#f0f2f7" stroke="#4C5776" stroke-width="1"/>
          <circle cx="140" cy="120" r="8" fill="#f0f2f7" stroke="#4C5776" stroke-width="1"/>
          <path d="M68 120 L92 120 M108 120 L132 120" stroke="#98a7c8" stroke-width="1"/>

          <defs>
            <marker id="arrow2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#98a7c8"/>
            </marker>
          </defs>
        </g>
      </svg>`,
      papers: [
        ...researchData.preprints,
        ...researchData.publications,
        ...researchData.conferences
      ].filter(p =>
        p.title === "Institutionalizing Folk Theories of Algorithms: How MCNs Govern Algorithmic Labor in Chinese Live-Streaming"
      )
    },
    {
      id: "ai-digital-culture",
      name: "AI and Digital Culture",
      description: "Exploration of generative AI's impact on cultural production, content creation, and digital media ecosystems",
      svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <!-- AI生成内容图标 -->
        <rect x="30" y="30" width="60" height="50" fill="#f8fafc" stroke="#435b9e" stroke-width="1"/>
        <path d="M35 40 L85 40 M35 50 L85 50 M35 60 L65 60" stroke="#e2e8f0" stroke-width="1"/>
        <path d="M40 70 L80 70 M40 75 L70 75" stroke="#e2e8f0" stroke-width="1"/>

        <path d="M95 55 L115 55" stroke="#98a7c8" stroke-width="1.5" marker-end="url(#arrow3)"/>

        <rect x="120" y="30" width="50" height="50" fill="#f8fafc" stroke="#4C5776" stroke-width="1"/>
        <path d="M125 40 L165 40" stroke="#435b9e" stroke-width="1"/>
        <path d="M125 55 L165 55" stroke="#435b9e" stroke-width="1"/>
        <path d="M125 70 L165 70" stroke="#435b9e" stroke-width="1"/>

        <!-- 内容波形 -->
        <path d="M60 110 L70 100 L80 115 L90 105 L100 115 L110 100 L120 110 L130 105 L140 110" stroke="#4C5776" stroke-width="1.5" fill="none"/>

        <defs>
          <marker id="arrow3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#98a7c8"/>
          </marker>
        </defs>
      </svg>`,
      papers: [
        ...researchData.preprints,
        ...researchData.publications,
        ...researchData.conferences
      ].filter(p =>
        p.title === "When Memes Become Mean: Discrimination Recognition and Group Norms in Adolescent Bullying" ||
        p.title === "How AI Constructs Disaster Narratives: A Comparative Analysis of LLMs in Multimodal Disaster News Production" ||
        p.title === "An Emerging Platform Entertainment Model in China: Algorithms Regulation and the Composite Interaction of Live Streaming and Short Videos"
      )
    }
  ];

  const projectsData = {
    grants: [
      { year: "2025", title: "Research on AI-driven Transformation of News Production and Dissemination Models", role: "Co-PI", program: "Hunan Broadcasting System Research Fellowship", amount: "CN¥100,000" },
      { year: "2023-2024", title: "Social Media Crisis Communication amid Disasters and Emergencies", role: "Co-PI", program: "Hunan Daily Research Fellowship", amount: "CN¥30,000" }
    ],
    projects: [
      { title: "Intelligent Early Warning of International Public Opinion Based on Multimodal Data Fusion", meta: "2024-2025, Central South University", role: "RA", funding: "Hunan Education Dept: 24B0023" },
      { title: "Key Multimodal AI Technologies for Precision International Communication", meta: "2024-2025, Central South University", role: "RA", funding: "Hunan Key R&D: 2024JK2023" },
      { title: "International Public Opinion Dynamics in Major Emergencies on Social Media", meta: "2024-2025, Central South University", role: "RA", funding: "MOE Youth Fund: 22YJC860007" },
      { title: "Live Stream Host Professional Ethics and Industry Standards Development", meta: "2021, Communication University of China", role: "RA", funding: "National Standard: HW21144" },
      { title: "Representation of Chinese Ethnicities in Global Social Media", meta: "2022-2023, Communication University of China", role: "RA", funding: "Ethnic Affairs Commission: 2021-GMC-052" },
      { title: "Adolescents' Digital Literacy in Media Convergence Environment", meta: "2020-2021, Communication University of China", role: "RA", funding: "NSF China: 19BXW087" }
    ]
  };

  const newsData = {
    academic: [
      { date: "2026-03-18", title: "🎉 Paper Accepted by CSCW 2026!", content: "Paper 'Institutionalizing Folk Theories of Algorithms: How MCNs Govern Algorithmic Labor in Chinese Live-Streaming' accepted to The 29th ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW 2026)." },
      { date: "2026-03-16", title: "🎉 Paper Accepted by ICWSM 2026!", content: "Paper 'The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube' accepted to The 20th International AAAI Conference on Web and Social Media (ICWSM 2026)." },
      { date: "2025-12-24", title: "🎓 Admitted to Peking University Ph.D. Program!", content: "Received pre-admission to the Ph.D. program in Communication Studies at the School of Journalism and Communication, Peking University, focusing on Big Data & AI Marketing Communication. Starting September 2026." },
      { date: "2025-09-10", title: "📄 Paper Published in Cultural Trends!", content: "Published co-authored paper 'Artists and Their Poor: Economic and Symbolic Inequality in Distorted China's Post-Pandemic Art Subsidy Policies' in Cultural Trends." },
      { date: "2025-06-20", title: "🎉 Paper Accepted by IJHCI!", content: "Accepted co-authored paper 'Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users' Information Trust' to the International Journal of Human–Computer Interaction." },
      { date: "2025-05-20", title: "🏆 Received AEJMC Second Place Paper Award!", content: "Received Second Place Faculty Paper Award at the Mass Communication and Society Division, AEJMC 2025 108th Annual Conference. Presented at the MCS Top Refereed Research Paper Session as first author." },
      { date: "2025-03-13", title: "📧 Accepted 4 Conference Papers!", content: "Accepted four co-authored papers to international communication conferences: two papers to ICA Annual Conference and Pre-Conference as first author, one to IAMCR Annual Conference as second author, and one to ICA Annual Conference as third author." }
    ],
    industry: [
      { date: "2025-06-19", title: "🤖 Deployed AI Robot System in Chinese Restaurant!", content: "Developed and deployed multi-modal AI robot system for Mango TV's 'Chinese Restaurant: African Entrepreneurship Season', integrating large language models with mechanical control for multilingual voice interaction and real-time visual processing." },
      { date: "2025-05-30", title: "🏆 Won Hunan Outstanding Radio & TV Program Award!", content: "Honored with First Prize for Outstanding Radio and Television Programs by Hunan Province Radio and Television Association for the second time as sole author." },
      { date: "2025-05-16", title: "🎤 Launched AI Virtual Audience in Singer 2025!", content: "Co-designed and deployed AI-powered 'Virtual Audience' features for 'Singer 2025' live broadcast, enabling real-time facial expression analysis and emoji visualization for 500+ audience members." },
      { date: "2025-05-15", title: "🎧 Deployed Interactive AI System for Ride the Wind!", content: "Led design and deployment of advanced AI interaction system for 'Sisters Who Make Life Better', featuring celebrity personality simulation with reduced latency for production environments." },
      { date: "2025-05-14", title: "😊 Launched AI Comedy Evaluation System!", content: "Co-developed and launched AI-powered comedy scoring system utilizing real-time facial expression analysis, debuted on Mango TV's 'Ha Ha No Worries'." }
    ]
  };

  const portfolioData = [
    { title: "Food Safety Beijing Campaign", desc: "Cinematography & Editing", org: "Beijing Market Regulation", year: "2024", emoji: "🥛", url: "https://mp.weixin.qq.com/s/AEDOdbB2HCHjRcE0gEUDaQ" },
    { title: "20th Shanghai Film Festival Documentary", desc: "Cinematography & Editing", org: "Bazaar Men", year: "2023", emoji: "🎬", url: "https://mp.weixin.qq.com/s/AEDOdbB2HCHjRcE0gEUDaQ" },
    { title: "Our Days: Spring Retro Fashion Movie", desc: "Cinematography & Editing", org: "Bazaar Men", year: "2023", emoji: "👜", url: "https://mp.weixin.qq.com/s/AEDOdbB2HCHjRcE0gEUDaQ" },
    { title: "Mogao Grottoes Monitoring & Early Warning System", desc: "Planning, VFX & Editing", org: "Xinhua Net", year: "2022", emoji: "🏛️", url: "http://www.anhuinews.com/ahkj/kjsj/202210/t20221018_6458799.html" },
    { title: "Super Mirror: Green Solar Energy", desc: "Planning, VFX & Editing", org: "Xinhua Net", year: "2022", emoji: "☀️", url: "https://www.news.cn/science/2022-08/19/c_1310654117.htm" },
    { title: "Ancient Poems Blessing 2022 Graduates", desc: "Planning, VFX & Editing", org: "People's Daily", year: "2022", emoji: "🎓", url: "https://weibo.com/2803301701/LxWIfBX6y" },
    { title: "10 BGMs for Graduation Season", desc: "Planning, VFX & Editing", org: "People's Daily", year: "2022", emoji: "🎵", url: "https://weibo.com/2803301701/LvOvmiK1s" }
  ];

  const experienceData = [
    { period: "2025", title: "AI Product Manager Intern", org: "Mango TV, Intelligent Research Center", desc: "Led AI entertainment systems for 'Singer 2025' and 'Ride the Wind 2025', including facial expression analysis and celebrity personality simulation." },
    { period: "2023 - 2025", title: "Multimedia Content Editor Intern", org: "University of Chicago, Harris School", desc: "China region enrollment, video production, and Chinese social media operations for academic programs." },
    { period: "2023", title: "Cinematography Intern", org: "BAZAAR Men", desc: "Video production for celebrity interviews and CCTV-6 film promotion projects." },
    { period: "2022 - 2023", title: "Assistant Director Intern", org: "CCTV-6, 1905 Movie Network", desc: "Executive director for the 35th Golden Rooster Awards and '5G+360°' immersive live broadcast." },
    { period: "2022", title: "Multimedia Content Editor Intern", org: "People's Daily, Weibo Department", desc: "Produced viral content reaching #2 and #3 on Weibo hot search with millions of views." },
    { period: "2021", title: "Live-streaming Tech Specialist Intern", org: "Alibaba Entertainment, Youku/Laifeng", desc: "Testing digital humans and interactive gaming features for live streaming products." },
    { period: "2021", title: "Marketing Intern", org: "Ximalaya Technology", desc: "Established Campus Partner Program with partnerships across 200+ universities." },
    { period: "2020 - 2021", title: "Journalist Intern", org: "Zhanjiang Radio and Television", desc: "Produced news segments and documentary content for local television broadcasts." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-5xl font-light text-primary-600 mb-2">{profile.name}</h1>
          <p className="text-xl text-gray-600">{profile.title} | {profile.university}</p>
          <p className="text-lg text-primary-500 mt-1">{profile.nextStep}</p>
        </div>
      </header>

      {/* Top Navigation Bar */}
      <nav className="bg-primary-700 text-white sticky top-0 z-50 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary-800 text-white'
                      : 'text-gray-200 hover:text-white hover:bg-primary-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-primary-600 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-primary-700 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium ${
                      activeSection === item.id
                        ? 'bg-primary-800 text-white'
                        : 'text-gray-200 hover:text-white hover:bg-primary-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Column (8/12) */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              {activeSection === 'home' && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {/* Hero Section */}
                  <div className="bg-white p-6 border border-gray-200 shadow-sm">
                    <h2 className="text-3xl font-light text-gray-800 mb-6">Research Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="aspect-square bg-gray-100 border border-gray-300 flex items-center justify-center">
                          {imgError ? (
                            <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                              <span className="text-6xl font-bold text-white">{profile.name[0]}</span>
                            </div>
                          ) : (
                            <img
                              src="/images/IMG_1783.jpg"
                              alt={profile.name}
                              className="w-full h-full object-cover"
                              onError={() => setImgError(true)}
                            />
                          )}
                        </div>
                        <div className="mt-4 flex justify-center gap-3">
                          {socialMedia.map((s, i) => {
                            const Icon = s.icon;
                            return (
                              <a
                                key={i}
                                href={s.url}
                                target={s.isDownload ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                download={s.isDownload ? true : undefined}
                                className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors"
                                title={s.name}
                              >
                                <Icon size={18} className="text-primary-600" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-gray-700 leading-relaxed mb-4">{profile.bio}</p>
                      </div>
                    </div>
                  </div>

                  {/* Research Interests with Visual Cards */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-light text-gray-800 mb-6 pb-2 border-b border-gray-200">Research Interests</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {researchAreasData.map((area, i) => (
                        <motion.div
                          key={area.id}
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                          onClick={() => setActiveResearchArea(area)}
                        >
                          <div className="h-40 bg-gray-50 border-b border-gray-200 flex items-center justify-center p-2">
                            <div dangerouslySetInnerHTML={{ __html: area.svg }} className="w-full h-full" />
                          </div>
                          <div className="p-4">
                            <h4 className="text-lg font-semibold text-primary-600 hover:underline mb-2">{area.name}</h4>
                            <p className="text-sm text-gray-600 mb-3">{area.description}</p>
                            <div className="text-xs text-gray-500">
                              <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded">
                                {area.papers.length} publications
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Research Area Detail View */}
                  <AnimatePresence>
                    {activeResearchArea && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                        onClick={() => setActiveResearchArea(null)}
                      >
                        <motion.div
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0.9 }}
                          className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar rounded-lg shadow-xl"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                            <h3 className="text-2xl font-semibold text-gray-800">{activeResearchArea.name}</h3>
                            <button
                              onClick={() => setActiveResearchArea(null)}
                              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                              <X size={24} className="text-gray-500" />
                            </button>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="h-24 w-24 bg-gray-50 border border-gray-200 rounded flex items-center justify-center p-2">
                                <div dangerouslySetInnerHTML={{ __html: activeResearchArea.svg }} className="w-full h-full" />
                              </div>
                              <div>
                                <p className="text-gray-700 leading-relaxed">{activeResearchArea.description}</p>
                                <p className="text-primary-600 font-medium mt-2">
                                  {activeResearchArea.papers.length} related publications
                                </p>
                              </div>
                            </div>

                            <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                              Related Publications
                            </h4>
                            <div className="space-y-4">
                              {activeResearchArea.papers.map((paper, i) => (
                                <div key={i} className="border-l-4 border-primary-300 pl-4 py-2">
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm font-medium text-white bg-primary-500 px-2 py-0.5 rounded">
                                          {paper.year}
                                        </span>
                                        <span className="text-sm text-primary-600">{paper.venue}</span>
                                      </div>
                                      <h5 className="font-semibold text-gray-800">
                                        <a href={paper.doi || paper.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                          {paper.title}
                                        </a>
                                      </h5>
                                      <p className="text-sm text-gray-600 mt-1">
                                        {highlightAuthor(formatAuthors(paper.authors), 'Rongyi Chen')}
                                      </p>
                                    </div>
                                    {paper.doi && (
                                      <a
                                        href={paper.doi}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-primary-500 flex-shrink-0 mt-1"
                                      >
                                        <ExternalLink size={16} />
                                      </a>
                                    )}
                                  </div>
                                </div>
                              ))}
                              {activeResearchArea.papers.length === 0 && (
                                <p className="text-gray-500 italic">No publications in this area yet.</p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {activeSection === 'about' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h2 className="text-3xl font-light text-gray-800 mb-6">About Me</h2>
                  <div className="bg-white p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary-300 pl-4 py-1">
                        <p className="font-semibold text-gray-800">Central South University</p>
                        <p className="text-primary-600">2023-2026</p>
                        <p className="text-gray-600">M.A. in Computational Communication</p>
                      </div>
                      <div className="border-l-4 border-primary-300 pl-4 py-1">
                        <p className="font-semibold text-gray-800">Communication University of China</p>
                        <p className="text-primary-600">2019-2023</p>
                        <p className="text-gray-600">B.A. in Communication</p>
                        <p className="text-gray-600">B.A. in Broadcasting & Hosting Arts (Double Degree)</p>
                        <p className="text-gray-500">Minor in Human-Centered Design</p>
                      </div>
                      <div className="border-l-4 border-primary-300 pl-4 py-1">
                        <p className="font-semibold text-gray-800">University of Missouri-Columbia</p>
                        <p className="text-primary-600">2019-2023</p>
                        <p className="text-gray-600">International Communication Certificate</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Academic Training</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 border border-gray-200">
                        <p className="font-semibold text-gray-800">University of Chicago</p>
                        <p className="text-primary-600 text-sm">Data & Policy Summer Scholar</p>
                        <p className="text-gray-500 text-sm">2023</p>
                      </div>
                      <div className="bg-gray-50 p-4 border border-gray-200">
                        <p className="font-semibold text-gray-800">University of California, Davis</p>
                        <p className="text-primary-600 text-sm">Computational Social Science</p>
                        <p className="text-gray-500 text-sm">2024</p>
                      </div>
                      <div className="bg-gray-50 p-4 border border-gray-200">
                        <p className="font-semibold text-gray-800">University of Oxford</p>
                        <p className="text-primary-600 text-sm">Digital Humanities</p>
                        <p className="text-gray-500 text-sm">2024</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Awards & Honors</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-primary-600">🏆</span>
                        <div>
                          <p className="font-medium text-gray-800">National Scholarship</p>
                          <p className="text-sm text-gray-600">Ministry of Education of China, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary-600">🎖️</span>
                        <div>
                          <p className="font-medium text-gray-800">First Class Academic Scholarship & Mittal Scholarship</p>
                          <p className="text-sm text-gray-600">Central South University, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary-600">🏆</span>
                        <div>
                          <p className="font-medium text-gray-800">First Prize for Outstanding Radio and Television Programs</p>
                          <p className="text-sm text-gray-600">Hunan Province Radio and Television Association, 2025 & 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary-600">🎖️</span>
                        <div>
                          <p className="font-medium text-gray-800">Best Paper Award & Outstanding Graduate Student</p>
                          <p className="text-sm text-gray-600">School of Humanities, Central South University, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary-600">🏆</span>
                        <div>
                          <p className="font-medium text-gray-800">Outstanding Graduation Thesis Award</p>
                          <p className="text-sm text-gray-600">Communication University of China, 2023</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary-600">🎖️</span>
                        <div>
                          <p className="font-medium text-gray-800">Best Cinematography Award</p>
                          <p className="text-sm text-gray-600">Hebei Radio and Television Station, 2022</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Professional Experience</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/mangotv.png" alt="Mango TV" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">Mango TV</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/uchicago.png" alt="University of Chicago" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">University of Chicago</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/bazaar.png" alt="BAZAAR Men" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">BAZAAR Men</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/cctv6.png" alt="CCTV-6" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">CCTV-6</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/peopledaily.png" alt="People's Daily" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">People's Daily</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/alibaba.jpeg" alt="Alibaba Entertainment" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">Alibaba</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/ximalaya.png" alt="Ximalaya" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">Ximalaya</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/zhanjiang.jpeg" alt="Zhanjiang Radio and Television" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">Zhanjiang TV</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === 'publications' && (
                <motion.div
                  key="publications"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-light text-gray-800">
                      {showFullPublications ? 'Full Publications List' : 'Selected Publications'}
                    </h2>
                    <button
                      onClick={() => setShowFullPublications(!showFullPublications)}
                      className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors text-sm font-medium"
                    >
                      {showFullPublications ? 'Show Selected' : 'View Full List'}
                    </button>
                  </div>

                  {!showFullPublications ? (
                    /* Selected Publications - 使用Featured Research格式 */
                    <div className="space-y-6">
                      {/* 最新ICWSM论文 */}
                      <div className="bg-white p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 text-center">
                            <span className="inline-block px-2 py-1 bg-primary-600 text-white text-sm font-medium">
                              2026
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">
                              <a href="https://arxiv.org/abs/2509.10957" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube
                              </a>
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">{highlightAuthor(formatAuthors('Rongyi Chen, Ziyan Xin, Qing Xiao, Ruiwei Xiao, Jingjia Xiao, Bingbing Zhang, Hong Shen, Zhicong Lu'), 'Rongyi Chen')}</p>
                            <p className="text-sm text-gray-500 italic">Proceedings of the 20th International AAAI Conference on Web and Social Media (ICWSM 2026)</p>
                          </div>
                        </div>
                      </div>

                      {/* 最新CSCW论文 */}
                      <div className="bg-white p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 text-center">
                            <span className="inline-block px-2 py-1 bg-primary-600 text-white text-sm font-medium">
                              2026
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">
                              <a href="https://arxiv.org/abs/2505.20623" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                Institutionalizing Folk Theories of Algorithms: How MCNs Govern Algorithmic Labor in Chinese Live-Streaming
                              </a>
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">{highlightAuthor(formatAuthors('Qing Xiao, Rongyi Chen, Jingjia Xiao, Tianyang Fu, Alice Qian Zhang, Xianzhe Fan, Bingbing Zhang, Zhicong Lu, Hong Shen'), 'Rongyi Chen')}</p>
                            <p className="text-sm text-gray-500 italic">Proceedings of the 29th ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW 2026)</p>
                          </div>
                        </div>
                      </div>

                      {/* 原有精选论文 */}
                      {featuredResearch.map((item, i) => (
                        <div key={i} className="bg-white p-6 border border-gray-200 shadow-sm">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-16 text-center">
                              <span className="inline-block px-2 py-1 bg-primary-600 text-white text-sm font-medium">
                                {item.year}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                  {item.title}
                                </a>
                              </h4>
                              <p className="text-sm text-gray-600 mb-2">{highlightAuthor(formatAuthors(item.authors), 'Rongyi Chen')}</p>
                              <p className="text-sm text-gray-500 italic">{item.venue}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="bg-white p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 text-center">
                            <span className="inline-block px-2 py-1 bg-primary-600 text-white text-sm font-medium">
                              2024
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">
                              <a href="https://doi.org/10.1145/3641825.3689519" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                Exploring Influencers' and Users' Experiences in Douyin's Virtual Reality Live-Streaming
                              </a>
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">{highlightAuthor(formatAuthors('Rongyi Chen, Jingjia Xiao, Zilu Wang, Menghan Yin, Xianzhe Fan, Zihe Ran, Qing Xiao'), 'Rongyi Chen')}</p>
                            <p className="text-sm text-gray-500 italic">Proceedings of the 30th ACM Symposium on Virtual Reality Software and Technology (VRST 2024)</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 text-center">
                            <span className="inline-block px-2 py-1 bg-primary-600 text-white text-sm font-medium">
                              2025
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-lg font-semibold text-gray-800">
                                <span className="text-primary-600">
                                  When Memes Become Mean: Discrimination Recognition and Group Norms in Adolescent Bullying
                                </span>
                              </h4>
                              <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                                🏆 Second Place Faculty Paper Award, Mass Communication and Society Division
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{highlightAuthor(formatAuthors('Rongyi Chen, Qing Xiao, Shike Lin, Menghan Yin, Jingjia Xiao, Hua Zhong, Bingbing Zhang'), 'Rongyi Chen')}</p>
                            <p className="text-sm text-gray-500 italic">2025 Association for Education in Journalism and Mass Communication (AEJMC) 108th Annual Conference</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* 完整出版物列表 */
                    <div className="space-y-8">
                      <div className="bg-white p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Preprints</h3>
                        <div className="space-y-4">
                          {researchData.preprints.map((p, i) => (
                            <div key={i} className="border-l-4 border-primary-300 pl-4 py-2">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium text-white bg-primary-500 px-2 py-0.5 rounded">
                                      {p.year}
                                    </span>
                                    <span className="text-sm text-primary-600">{p.venue}</span>
                                  </div>
                                  <h4 className="font-semibold text-gray-800">
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                      {p.title}
                                    </a>
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {highlightAuthor(formatAuthors(p.authors), 'Rongyi Chen')}
                                  </p>
                                </div>
                                <a
                                  href={p.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-primary-500 flex-shrink-0 mt-1"
                                >
                                  <ExternalLink size={16} />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Peer-Reviewed Publications</h3>
                        <div className="space-y-4">
                          {researchData.publications.map((p, i) => (
                            <div key={i} className="border-l-4 border-primary-300 pl-4 py-2">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium text-white bg-primary-500 px-2 py-0.5 rounded">
                                      {p.year}
                                    </span>
                                    <span className="text-sm text-primary-600">{p.venue}</span>
                                  </div>
                                  <h4 className="font-semibold text-gray-800">
                                    <a href={p.doi} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                      {p.title}
                                    </a>
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {highlightAuthor(formatAuthors(p.authors), 'Rongyi Chen')}
                                  </p>
                                </div>
                                <a
                                  href={p.doi}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-primary-500 flex-shrink-0 mt-1"
                                >
                                  <ExternalLink size={16} />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Conference Presentations</h3>
                        <div className="space-y-4">
                          {researchData.conferences.map((c, i) => (
                            <div key={i} className="border-l-4 border-primary-300 pl-4 py-2">
                              <div className="flex items-start gap-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                                    <span className="text-sm font-medium text-white bg-primary-500 px-2 py-0.5 rounded">
                                      {c.year}
                                    </span>
                                    {c.award && (
                                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                                        🏆 {c.award}
                                      </span>
                                    )}
                                    {c.location && (
                                      <span className="text-sm bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                        📍 {c.location}
                                      </span>
                                    )}
                                  </div>
                                  <h4 className="font-semibold text-gray-800">{c.title}</h4>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {highlightAuthor(formatAuthors(c.authors), 'Rongyi Chen')}
                                  </p>
                                  <p className="text-sm text-primary-600 mt-1">{c.venue}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {activeSection === 'news' && (
                <motion.div
                  key="news"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl font-light text-gray-800 mb-6">News</h2>

                  {/* 最新消息横幅 */}
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className="text-4xl">🎉</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Latest Updates March 2026</h3>
                        <p className="text-primary-100">Two papers accepted by CSCW 2026 and ICWSM 2026, and received Ph.D. admission offer from Peking University!</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
                        <Calendar size={20} className="text-primary-600" />
                        Academic News
                      </h3>
                      <div className="space-y-4">
                        {newsData.academic.map((item, i) => (
                          <div key={i} className="bg-white p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded">
                            <div className="mb-2">
                              <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded text-sm font-medium inline-block mb-2">
                                {item.date}
                              </div>
                              <h4 className="font-semibold text-gray-800">{item.title}</h4>
                            </div>
                            <p className="text-sm text-gray-600">{item.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
                        <Briefcase size={20} className="text-primary-600" />
                        Professional Practice News
                      </h3>
                      <div className="space-y-4">
                        {newsData.industry.map((item, i) => (
                          <div key={i} className="bg-white p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded">
                            <div className="mb-2">
                              <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded text-sm font-medium inline-block mb-2">
                                {item.date}
                              </div>
                              <h4 className="font-semibold text-gray-800">{item.title}</h4>
                            </div>
                            <p className="text-sm text-gray-600">{item.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h2 className="text-4xl font-light text-gray-800 mb-8">Contact Rongyi</h2>
                  <div className="border-t border-gray-200 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {/* 左侧联系信息 */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Rongyi Chen</h3>
                        <div className="space-y-2 text-gray-600 text-lg">
                          <p>Center for Intelligent Media & Communication Research</p>
                          <p>Central South University, Office 409, Second Teaching Building</p>
                          <p>932 Lushan South Road, Yuelu District</p>
                          <p>Changsha, Hunan 410083, P.R. China</p>
                        </div>
                        <div className="mt-8 space-y-3 text-gray-700">
                          <p className="text-lg">
                            <span className="font-medium">Email:</span>{" "}
                            <a href={`mailto:${profile.email}`} className="text-primary-600 hover:underline">
                              {profile.email}
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* 右侧地图 */}
                      <div className="border border-gray-200 h-[400px] overflow-hidden rounded">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.807389764504!2d112.93636631526064!3d28.17903898258087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x343bb994a8a701c3%3A0x5a1207482d020f6!2sCentral%20South%20University!5e0!3m2!1sen!2sus!4v1649000000000!5m2!1sen!2sus"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Central South University Location"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Column (4/12) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Search Box */}
            <div className="bg-white p-4 border border-gray-200 shadow-sm">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search paper titles..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              {/* 搜索结果 */}
              {searchQuery.trim() && (
                <div className="mt-3 max-h-60 overflow-y-auto custom-scrollbar">
                  {searchResults.length > 0 ? (
                    <div className="space-y-2">
                      {searchResults.map((paper, i) => (
                        <a
                          key={i}
                          href={paper.doi || paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-2 bg-gray-50 hover:bg-primary-50 rounded text-sm"
                        >
                          <p className="text-primary-600 font-medium">{paper.title}</p>
                          <p className="text-xs text-gray-500 mt-1">{highlightAuthor(formatAuthors(paper.authors), 'Rongyi Chen')}</p>
                          <p className="text-xs text-gray-500 mt-1">{paper.venue} · {paper.year}</p>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 py-2">No papers found</p>
                  )}
                </div>
              )}
            </div>

            {/* Recent Articles */}
            <div className="bg-white border border-gray-200 shadow-sm">
              <div className="bg-primary-700 text-white px-4 py-3 flex items-center justify-between">
                <h3 className="font-semibold">Recent Articles</h3>
                <ChevronDown size={18} />
              </div>
              <div className="p-4 space-y-4">
                {recentPublications.map((pub, i) => (
                  <div key={i} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline font-medium text-sm"
                    >
                      {pub.title}
                    </a>
                    <p className="text-xs text-gray-500 mt-1">
                      {highlightAuthor(formatAuthors(pub.authors), 'Rongyi Chen')}
                    </p>
                    <p className="text-xs text-gray-600 mt-1 italic">{pub.venue}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent News */}
            <div className="bg-white border border-gray-200 shadow-sm">
              <div className="bg-primary-700 text-white px-4 py-3 flex items-center justify-between">
                <h3 className="font-semibold">Recent News</h3>
                <ChevronDown size={18} />
              </div>
              <div className="p-4 space-y-4">
                {recentNews.map((news, i) => (
                  <div key={i} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <p className="text-xs text-primary-600 font-medium">{news.date}</p>
                    <p className="text-sm font-medium text-gray-800 mt-1">{news.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{news.content}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Rongyi Chen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AcademicProfile;
