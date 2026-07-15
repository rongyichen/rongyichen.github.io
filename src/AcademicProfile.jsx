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
  const [showAllAcademicNews, setShowAllAcademicNews] = useState(false);
  const [showAllIndustryNews, setShowAllIndustryNews] = useState(false);
  const [expandedAbstracts, setExpandedAbstracts] = useState({});

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
    title: "Ph.D. Student in Communication (Big Data and AI Marketing Communication)",
    university: "Peking University",
    email: "rongyi_chen@163.com",
    nextStep: "School of Journalism & Communication",
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

  const recentPublications = [
    { title: "When Social Media Memes Become Mean to Peers: Discrimination Recognition and Group Norms in Adolescent Bullying", authors: "Rongyi Chen, Qing Xiao, Shike Lin, et al.", venue: "Computers in Human Behavior", link: "https://doi.org/10.1016/j.chb.2026.109126" },
    { title: "Constructing Algorithmic Authority: How Multi-Channel Networks (MCNs) Govern Live-Streaming Labor in China", authors: "Qing Xiao, Rongyi Chen, Jingjia Xiao, et al.", venue: "Proceedings of the ACM on Human-Computer Interaction, CSCW (CSCW’26)", link: "https://arxiv.org/abs/2505.20623" },
    { title: "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube", authors: "Rongyi Chen, Ziyan Xin, Qing Xiao, et al.", venue: "Proceedings of the 20th International AAAI Conference on Web and Social Media (ICWSM 2026)", link: "https://ojs.aaai.org/index.php/ICWSM/article/view/42649" },
    { title: "Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users' Information Trust", authors: "Yalong Xiao, Rongyi Chen, Qing Xiao, et al.", venue: "International Journal of Human–Computer Interaction (IJHCI)", link: "https://doi.org/10.1080/10447318.2025.2524493" }
  ];

  const recentNews = [
    { date: "Jul 2026", title: "Paper Published in Computers in Human Behavior", content: "Published first-authored paper 'When Social Media Memes Become Mean to Peers' in Computers in Human Behavior." },
    { date: "May 2026", title: "Named Hunan Outstanding Graduate Student", content: "Received the Hunan Province Outstanding Graduate Student honor on May 29, 2026." },
    { date: "Mar 2026", title: "Paper Accepted by CSCW 2026", content: "Paper 'Constructing Algorithmic Authority' accepted to The 29th ACM Conference on Computer-Supported Cooperative Work and Social Computing." },
    { date: "Mar 2026", title: "Paper Accepted by ICWSM 2026", content: "Paper 'The Digital Landscape of God' accepted to The 20th International AAAI Conference on Web and Social Media." }
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
      {
        id: "cscw-2026",
        year: "2025",
        title: "Constructing Algorithmic Authority: How Multi-Channel Networks (MCNs) Govern Live-Streaming Labor in China",
        authors: "Qing Xiao, Rongyi Chen, Jingjia Xiao, Tianyang Fu, Alice Qian Zhang, Xianzhe Fan, Bingbing Zhang, Zhicong Lu, Hong Shen",
        venue: "arXiv",
        link: "https://arxiv.org/abs/2505.20623",
        selected: true,
        selectedDate: "2026-03-18",
        selectedYear: "2026",
        selectedVenue: "Proceedings of the ACM on Human-Computer Interaction, CSCW (CSCW’26)",
        abstract: "This study examines the discursive construction of algorithms and its role in labor management in Chinese live-streaming industry by focusing on how intermediary organizations (Multi-Channel Networks, MCNs) actively construct, stabilize, and deploy particular interpretations of platform algorithms as instruments of labor management. Drawing on a nine-month ethnographic fieldwork and 44 interviews with live-streamers, former live-streamers, and MCN staff, we examine how MCNs produce and circulate structured interpretations of platform algorithms across organizational settings. We show that MCNs articulate two asymmetric yet interconnected forms of algorithmic interpretations. Internally, MCNs managers approach algorithms as volatile and uncertain systems and adopt probabilistic strategies to manage performance and risk. Externally, in interactions with streamers, MCNs circulate simplified and prescriptive algorithmic narratives that frame platform systems as transparent, fair, and responsive to individual effort. These organizationally produced algorithmic interpretations are embedded into training materials, live-streaming performance metrics, and everyday management practices. Through these mechanisms, streamers internalize responsibility for outcomes, intensify self-discipline, and increase investments in equipment, performing skills, and routines to maintain streamer-audience relationship, while accountability for unpredictable outcomes is increasingly shifted away from managers and platforms. This study contributes to CSCW and platform labor research by demonstrating how discursively constructed algorithmic knowledge can function as an intermediary infrastructure of soft control, shaping how platform labor is regulated, moralized, and governed in practice.",
        keywords: ["Algorithm", "Platform", "Discursive Construction of Algorithms", "Live-streaming", "Multi-Channel Networks (MCNs)", "China", "Ethnography"]
      }
    ],
    publications: [
      {
        id: "chb-2026",
        year: "2026",
        title: "When Social Media Memes Become Mean to Peers: Discrimination Recognition and Group Norms in Adolescent Bullying",
        authors: "Rongyi Chen, Qing Xiao, Shike Lin, Menghan Yin, Jingjia Xiao, Hua Zhong, Bingbing Zhang",
        venue: "Computers in Human Behavior",
        doi: "https://doi.org/10.1016/j.chb.2026.109126",
        award: "Second Place Faculty Paper Award, Mass Communication and Society Division, AEJMC 2025",
        selected: true,
        selectedDate: "2026-07-16",
        abstract: "The widespread circulation of harmful memes on social media is increasingly recognized as a contributor to adolescent aggression, yet the mechanisms linking meme engagement to bullying behavior remain underexplored. Drawing on a neo-ecological framework that distinguishes physical and virtual microsystems, this study surveyed 1,319 Chinese middle school students to examine how harmful meme culture is transmitted within adolescent communities and translated into bullying. Using structural equation modeling, we identified adolescents’ difficulty in recognizing discrimination as a key cognitive mediator linking harmful meme usage to bullying behavior. Peer-group subjective norms emerged as the strongest factor in cultural transmission, while parental opposition and restricted media access appeared insufficient and showed no protective association. This challenges the traditional focus on parental supervision and media use, highlighting the prominent role of harmful meme culture within adolescent peer groups. These findings reframe adolescent bullying as a culturally mediated phenomenon shaped by peer normalization processes and sustained by the gradual erosion of critical perceptual capacity, with important implications for the design of educational, parental, and platform-level interventions.",
        keywords: ["Harmful memes", "Adolescent bullying", "Discrimination recognition ability", "Group subjective norm", "Desensitization"]
      },
      {
        id: "icwsm-2026",
        year: "2026",
        title: "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube",
        authors: "Rongyi Chen, Ziyan Xin, Qing Xiao, Ruiwei Xiao, Jingjia Xiao, Bingbing Zhang, Hong Shen, Zhicong Lu",
        venue: "Proceedings of the 20th International AAAI Conference on Web and Social Media",
        doi: "https://ojs.aaai.org/index.php/ICWSM/article/view/42649",
        selected: true,
        selectedDate: "2026-03-16",
        selectedVenue: "Proceedings of the 20th International AAAI Conference on Web and Social Media (ICWSM 2026)",
        abstract: "The digital transformation of religious practice has reshaped how billions of people engage with spiritual content, with video-sharing platforms becoming central to contemporary religious communication. Yet current research lacks systematic understanding of how narrative and visual elements create meaningful spiritual experiences and foster viewer engagement. We present a mixed-methods study of popular religious videos on YouTube across major religions, developing taxonomies of narrative frameworks, visual elements, and viewer interaction. Using LLM-assisted analysis, we studied relationships between content characteristics and viewer responses. Findings shows religious videos predominantly adopt speaking-style formats with authority-based persuasion strategies, using salvation narratives for guidance. All prefer bright lighting, with Buddhism favoring warm tones and prominent symbols, Judaism preferring indoor settings, and Hinduism emphasizing sacred objects. We identified differentiated patterns of emotional sharing among religious viewers while revealing significant correlations between content characteristics and engagement, particularly regarding AI-generated content."
      },
      {
        id: "ijhci-2025",
        year: "2025",
        title: "Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users' Information Trust",
        authors: "Yalong Xiao, Rongyi Chen, Qing Xiao, Chengzhang Zhu, Jie Feng",
        venue: "International Journal of Human–Computer Interaction",
        doi: "https://doi.org/10.1080/10447318.2025.2524493",
        selected: true,
        selectedDate: "2025-06-20",
        selectedOrder: 1,
        abstract: "Recently, social media platforms like Weibo have introduced mandatory IP address displays to enhance information evaluation, but their effectiveness remains unclear. In this study, we conducted an online experiment with 722 participants to examine the effectiveness of mandatory IP address displays under different conditions (none, matched, unmatched, unknown) on social media. This study investigated how these conditions influence users’ trust in social media information and whether this process is moderated by users’ patterns of social media usage. Results showed that matched IPs increased trust, unmatched IPs reduced it, and unknown IP labels were perceived as neutral. Frequent social media use and active participation correlated with higher trust in the presented information, indicating susceptibility to misinformation. Trust in technology also amplified trust in social media information under unknown or mismatched IPs. These findings highlight risks in over-relying on social media features, emphasizing the need for careful design to counter misinformation.",
        keywords: ["Social media", "geographic information display", "information trust", "human-computer interaction", "misinformation"]
      },
      {
        id: "cultural-trends-2025",
        year: "2025",
        title: "Artists and Their Poor: Economic and Symbolic Inequality in Distorted China's Post-pandemic Art Subsidy Policies",
        authors: "Jingjia Xiao, Qing Xiao, Rongyi Chen",
        venue: "Cultural Trends",
        doi: "https://doi.org/10.1080/09548963.2025.2557215",
        selected: true,
        selectedDate: "2025-09-10",
        selectedOrder: 2,
        abstract: "This study conducted a three-year longitudinal follow-up interview with 37 extras in the Hengdian World Studio in China from 2022 to 2024, examining the impact of post-pandemic cultural subsidy policies on their living conditions. We aim to highlight that these extras struggle between the identities of creative actors and underclass workers, enduring symbolic violence due to the identity distinction. Furthermore, we point out that the systemic inequalities stemming from this identity distinction prevent these groups from receiving adequate subsidies and accessing protests. Finally, we call for the democratization and inclusivity of the artist identity to deepen the discussion of Basic Income for Artists (BIA) policies.",
        keywords: ["Cultural and creative industry", "actor", "extras", "Basic Income for Artists (BIA)", "Covid-19", "China"]
      },
      { id: "vrst-2024", year: "2024", title: "Exploring Influencers' and Users' Experiences in Douyin's Virtual Reality Live-Streaming", authors: "Rongyi Chen, Jingjia Xiao, Zilu Wang, Menghan Yin, Xianzhe Fan, Zihe Ran, Qing Xiao", venue: "Proceedings of the 30th ACM Symposium on Virtual Reality Software and Technology (VRST 2024)", doi: "https://doi.org/10.1145/3641825.3689519", selected: true, selectedDate: "2024-10-01" },
      { year: "2024", title: "The Power of the Civilian Hero: Effective Strategies for Local Media Coverage in Response to Information Epidemics", authors: "Chuchu Zhao, Rongyi Chen*", venue: "Local journalism, global challenges: News deserts, infodemic and the vastness in between; LabCom Books", doi: "https://ecrea.eu/page-18206/13312675" },
      { year: "2024", title: "Migrant Youth Aged 16 to 19 During Social Crises: Stress, Deviant Behavior, and Identification with Mainstream Society", authors: "Hua Zhong, Qing Xiao, Rongyi Chen, Jingjia Xiao", venue: "Huxiang Law Review", doi: "https://mp.weixin.qq.com/s/fjACER5Um7StLb4HSPKXpA" }
    ],
    conferences: [
      { year: "2025", title: "When Social Media Memes Become Mean to Peers: Discrimination Recognition and Group Norms in Adolescent Bullying", authors: "Rongyi Chen, Qing Xiao, Shike Lin, Menghan Yin, Jingjia Xiao, Hua Zhong, Bingbing Zhang", venue: "2025 Association for Education in Journalism and Mass Communication (AEJMC) 108th Annual Conference", location: "San Francisco, USA", award: "Second Place Faculty Paper Award, Mass Communication and Society Division" },
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

  const selectedPublications = [
    ...researchData.preprints,
    ...researchData.publications
  ]
    .filter((publication) => publication.selected)
    .map((publication) => ({
      ...publication,
      displayYear: publication.selectedYear || publication.year,
      displayVenue: publication.selectedVenue || publication.venue,
      url: publication.doi || publication.link
    }))
    .sort((a, b) =>
      Number(b.displayYear) - Number(a.displayYear) ||
      (a.selectedOrder ?? Number.MAX_SAFE_INTEGER) - (b.selectedOrder ?? Number.MAX_SAFE_INTEGER) ||
      (b.selectedDate || '').localeCompare(a.selectedDate || '')
    );

  const toggleAbstract = (publicationId) => {
    setExpandedAbstracts((current) => ({
      ...current,
      [publicationId]: !current[publicationId]
    }));
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
      description: "Examines how platforms, algorithms, AI systems, and interface infrastructures reshape information trust, media production, and public communication",
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
        p.title === "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube" ||
        p.title === "Constructing Algorithmic Authority: How Multi-Channel Networks (MCNs) Govern Live-Streaming Labor in China" ||
        p.title === "Responsible LLMs in Persuasive Health Message: Comparing Language Biases in General LLMs and Healthcare LLMs" ||
        p.title === "How AI Constructs Disaster Narratives: A Comparative Analysis of LLMs in Multimodal Disaster News Production"
      )
    },
    {
      id: "hci",
      name: "Human-Computer Interaction",
      description: "Investigates how people perceive, trust, and interact with emerging interfaces, including geographic displays, virtual reality, games, and intelligent media systems",
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
        p.title === "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube" ||
        p.title === "Exploring Influencers' and Users' Experiences in Douyin's Virtual Reality Live-Streaming" ||
        p.title === "Have You Seen the Lovers in the Game? Are They Like Us? Online Games and Game-Mediated Romantic Relationships" ||
        p.title === "Responsible LLMs in Persuasive Health Message: Comparing Language Biases in General LLMs and Healthcare LLMs"
      )
    },
    {
      id: "social-computing",
      name: "Social Computing",
      description: "Analyzes social behavior, audience engagement, platform governance, online communities, and information diffusion in networked media environments",
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
        p.title === "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube" ||
        p.title === "The Illusion of Pluralistic and Neutrality: How Twitter Social Bots Show Their Opinion in Chinese Political Issues"
      )
    },
    {
      id: "cscw",
      name: "Computer-Supported Cooperative Work",
      description: "Studies platform-mediated labor, creator ecosystems, collaborative workflows, and how algorithmic systems structure cooperation and coordination",
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
        p.title === "Constructing Algorithmic Authority: How Multi-Channel Networks (MCNs) Govern Live-Streaming Labor in China" ||
        p.title === "Exploring Influencers' and Users' Experiences in Douyin's Virtual Reality Live-Streaming" ||
        p.title === "An Emerging Platform Entertainment Model in China: Algorithms Regulation and the Composite Interaction of Live Streaming and Short Videos"
      )
    },
    {
      id: "ai-digital-culture",
      name: "AI and Digital Culture",
      description: "Explores how generative AI, LLMs, algorithms, and platform cultures shape cultural production, media narratives, and technology-mediated values",
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
        p.title === "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube" ||
        p.title === "Constructing Algorithmic Authority: How Multi-Channel Networks (MCNs) Govern Live-Streaming Labor in China" ||
        (p.title === "When Social Media Memes Become Mean to Peers: Discrimination Recognition and Group Norms in Adolescent Bullying" && p.venue === "Computers in Human Behavior") ||
        p.title === "Responsible LLMs in Persuasive Health Message: Comparing Language Biases in General LLMs and Healthcare LLMs" ||
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
      { date: "2026-07-16", title: "📄 Paper Published in Computers in Human Behavior!", content: "Published first-authored paper 'When Social Media Memes Become Mean to Peers: Discrimination Recognition and Group Norms in Adolescent Bullying' in Computers in Human Behavior." },
      { date: "2026-05-29", title: "🏆 Named Hunan Outstanding Graduate Student!", content: "Received the Hunan Province Outstanding Graduate Student honor." },
      { date: "2026-03-18", title: "🎉 Paper Accepted by CSCW 2026!", content: "Paper 'Constructing Algorithmic Authority: How Multi-Channel Networks (MCNs) Govern Live-Streaming Labor in China' accepted to The 29th ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW 2026)." },
      { date: "2026-03-16", title: "🎉 Paper Accepted by ICWSM 2026!", content: "Paper 'The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube' accepted to The 20th International AAAI Conference on Web and Social Media (ICWSM 2026)." },
      { date: "2025-12-24", title: "🎓 Admitted to Peking University Ph.D. Program!", content: "Received pre-admission to the Ph.D. program in Communication Studies at the School of Journalism & Communication, Peking University, focusing on Big Data & AI Marketing Communication. Starting September 2026." },
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
          <div className="flex items-center justify-between gap-4 sm:gap-8">
            <div className="min-w-0">
              <h1 className="text-4xl sm:text-5xl font-light text-primary-600 mb-2">{profile.name}</h1>
              <p className="text-base sm:text-xl text-gray-600 leading-snug">{profile.title}</p>
              <p className="text-base sm:text-lg text-primary-500 mt-1 leading-snug">{profile.university} | {profile.nextStep}</p>
            </div>
            <img
              src="/images/logos/peking.png"
              alt="Peking University emblem"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0"
            />
          </div>
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
                              {activeResearchArea.papers.map((paper, i) => {
                                const paperUrl = paper.doi || paper.link;
                                return (
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
                                          {paperUrl ? (
                                            <a href={paperUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                              {paper.title}
                                            </a>
                                          ) : (
                                            <span>{paper.title}</span>
                                          )}
                                        </h5>
                                        <p className="text-sm text-gray-600 mt-1">
                                          {highlightAuthor(formatAuthors(paper.authors), 'Rongyi Chen')}
                                        </p>
                                      </div>
                                      {paperUrl && (
                                        <a
                                          href={paperUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-gray-400 hover:text-primary-500 flex-shrink-0 mt-1"
                                        >
                                          <ExternalLink size={16} />
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
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
                        <p className="font-semibold text-gray-800">Peking University</p>
                        <p className="text-primary-600">2026-Present</p>
                        <p className="text-gray-600">Ph.D. in Communication</p>
                        <p className="text-gray-500">Research Area: Big Data and AI Marketing Communication</p>
                        <p className="text-gray-500">School of Journalism & Communication</p>
                      </div>
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
                          <p className="font-medium text-gray-800">Hunan Province Outstanding Graduate Student</p>
                          <p className="text-sm text-gray-600">Hunan Province, 2026</p>
                        </div>
                      </div>
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
                    <div className="bg-white border border-gray-200 border-l-4 border-l-primary-500 p-4 mb-5 shadow-sm">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <p className="font-semibold text-gray-800">Commercial Photographer & Videographer</p>
                          <p className="text-sm text-primary-600">Current freelance collaborations</p>
                        </div>
                        <span className="text-sm font-medium text-white bg-primary-600 px-2 py-0.5 rounded">Current</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Collaborating with photography studios and production companies on commercial shoots for well-known celebrities and million-follower influencers, as well as event photography and videography for large-scale events, variety shows, and gala productions.
                      </p>
                    </div>
                    <h4 className="text-sm font-semibold uppercase text-gray-500 mb-3">Selected Organizations</h4>
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
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/xinhua.png" alt="Xinhua Net" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">Xinhua Net</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/cetv.png" alt="China Education Network TV" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">China Education Network TV</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/qqmusic.png" alt="QQ Music" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">QQ Music</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-2">
                          <img src="/images/logos/bilibili.png" alt="Bilibili" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="font-medium text-gray-800 text-sm">Bilibili</p>
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
                    /* Selected Publications - generated from researchData */
                    <div className="space-y-6">
                      {selectedPublications.map((publication) => {
                        const abstractPanelId = `abstract-${publication.id}`;
                        const isAbstractExpanded = Boolean(expandedAbstracts[publication.id]);

                        return (
                          <div key={publication.id} className="bg-white p-6 border border-gray-200 shadow-sm">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-16 text-center">
                                <span className="inline-block px-2 py-1 bg-primary-600 text-white text-sm font-medium">
                                  {publication.displayYear}
                                </span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                  <a href={publication.url} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                    {publication.title}
                                  </a>
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">
                                  {highlightAuthor(formatAuthors(publication.authors), 'Rongyi Chen')}
                                </p>
                                <p className="text-sm text-gray-500 italic">{publication.displayVenue}</p>

                                {publication.award && (
                                  <span className="inline-block text-sm bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full mt-3">
                                    🏆 {publication.award}
                                  </span>
                                )}

                                {publication.abstract && (
                                  <div className="mt-4 border-t border-gray-100 pt-4">
                                    <button
                                      type="button"
                                      onClick={() => toggleAbstract(publication.id)}
                                      className={`group w-full flex items-center justify-between gap-3 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${
                                        isAbstractExpanded
                                          ? 'border-primary-200 bg-primary-50 text-primary-700'
                                          : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700'
                                      }`}
                                      aria-expanded={isAbstractExpanded}
                                      aria-controls={abstractPanelId}
                                    >
                                      <span className="inline-flex items-center gap-2">
                                        <BookOpen size={16} />
                                        {publication.keywords?.length ? 'Abstract & Keywords' : 'Abstract'}
                                      </span>
                                      <ChevronDown size={18} className={`flex-shrink-0 transition-transform duration-200 ${isAbstractExpanded ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence initial={false}>
                                      {isAbstractExpanded && (
                                        <motion.div
                                          id={abstractPanelId}
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.25 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="mt-3 rounded-lg bg-gray-50 border border-gray-200 p-5">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">Abstract</h5>
                                            <p className="text-sm text-gray-700 leading-relaxed">{publication.abstract}</p>
                                            {publication.keywords?.length > 0 && (
                                              <div className="mt-4">
                                                <h5 className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">Keywords</h5>
                                                <div className="flex flex-wrap gap-2">
                                                  {publication.keywords.map((keyword) => (
                                                    <span key={keyword} className="text-xs text-primary-700 bg-white border border-primary-200 px-2.5 py-1 rounded-full">
                                                      {keyword}
                                                    </span>
                                                  ))}
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}

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
                                  {p.award && (
                                    <span className="inline-block text-sm bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full mt-2">
                                      🏆 {p.award}
                                    </span>
                                  )}
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
                        <h3 className="text-xl font-bold mb-2">Latest Updates July 2026</h3>
                        <p className="text-primary-100">New paper published in Computers in Human Behavior, and now a Ph.D. student at Peking University!</p>
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
                        {newsData.academic.slice(0, showAllAcademicNews ? newsData.academic.length : 4).map((item, i) => (
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
                        {newsData.academic.length > 4 && (
                          <button
                            type="button"
                            onClick={() => setShowAllAcademicNews(!showAllAcademicNews)}
                            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-primary-600 bg-white border border-gray-200 rounded hover:bg-primary-50 hover:border-primary-200 transition-colors"
                            aria-expanded={showAllAcademicNews}
                          >
                            {showAllAcademicNews ? 'Show less' : `View all ${newsData.academic.length} updates`}
                            <ChevronDown size={17} className={`transition-transform ${showAllAcademicNews ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
                        <Briefcase size={20} className="text-primary-600" />
                        Professional Practice News
                      </h3>
                      <div className="space-y-4">
                        {newsData.industry.slice(0, showAllIndustryNews ? newsData.industry.length : 3).map((item, i) => (
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
                        {newsData.industry.length > 3 && (
                          <button
                            type="button"
                            onClick={() => setShowAllIndustryNews(!showAllIndustryNews)}
                            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-primary-600 bg-white border border-gray-200 rounded hover:bg-primary-50 hover:border-primary-200 transition-colors"
                            aria-expanded={showAllIndustryNews}
                          >
                            {showAllIndustryNews ? 'Show less' : `View all ${newsData.industry.length} updates`}
                            <ChevronDown size={17} className={`transition-transform ${showAllIndustryNews ? 'rotate-180' : ''}`} />
                          </button>
                        )}
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
                          <p>School of Journalism & Communication</p>
                          <p>Peking University</p>
                          <p>No. 5 Yiheyuan Road, Haidian District</p>
                          <p>Beijing, China</p>
                          <p>Postal Code: 100871</p>
                        </div>
                        <div className="mt-8 space-y-3 text-gray-700">
                          <p className="text-lg">
                            <span className="font-medium">Tel:</span>{" "}
                            <a href="tel:+861062754683" className="text-primary-600 hover:underline">
                              +86-10-62754683
                            </a>
                          </p>
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
                          src="https://www.google.com/maps?q=School+of+Journalism+%26+Communication,+Peking+University,+Beijing&output=embed"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="School of Journalism & Communication, Peking University Location"
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
                      {searchResults.map((paper, i) => {
                        const paperUrl = paper.doi || paper.link;
                        const resultContent = (
                          <>
                            <p className="text-primary-600 font-medium">{paper.title}</p>
                            <p className="text-xs text-gray-500 mt-1">{highlightAuthor(formatAuthors(paper.authors), 'Rongyi Chen')}</p>
                            <p className="text-xs text-gray-500 mt-1">{paper.venue} · {paper.year}</p>
                          </>
                        );

                        return paperUrl ? (
                          <a
                            key={i}
                            href={paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 bg-gray-50 hover:bg-primary-50 rounded text-sm"
                          >
                            {resultContent}
                          </a>
                        ) : (
                          <div key={i} className="block p-2 bg-gray-50 rounded text-sm">
                            {resultContent}
                          </div>
                        );
                      })}
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
