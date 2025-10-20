import React, { useState } from 'react';
import { User, Mail, MapPin, FileText, Calendar, Briefcase, Award, Github, Twitter, Download, BookOpen, Info, Film, Share2, Globe, BookOpen as Book, PieChart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AcademicProfile = () => {
  const [activeTab, setActiveTab] = useState('about');
  // 添加一个状态来处理图片加载错误
  const [imgError, setImgError] = useState(false);

  // 个人信息数据
  const profileData = {
    name: "Rongyi Chen",
    title: "M.A. Student in Computational Communication (Expected 2026)",
    institution: "Center for Intelligent Media & Communication Research, Central South University",
    email: "rongyi@csu.edu.cn",
    bio: "I'm a researcher focusing on computational communication and communication technology studies, with particular interests in how sociotechnical systems—including generative AI, algorithms, virtual reality, and digital platforms—reshape media industries and everyday communication. My work bridges technology and communication studies to understand information diffusion, public sentiment, and human-computer interaction in collaborative systems. I adopt a multi-method interdisciplinary approach that combines ethnographic fieldwork, experimental design, and computational analysis to examine not only how people make sense of these technologies, but also how such insights can inform the design of future systems. This research perspective extends to my professional practice, where I maintain ongoing collaborative partnerships with numerous renowned media institutions in multimedia content production and AI system design for news and variety show production, including the China Association for Science and Technology, Xinhua News Agency's Science Popularization China, Hunan TV and Mango TV.",
    researchAreas: ["Computational Communication", "Communication Technology", "Human-computer interaction(HCI)", "Computer-Supported Cooperative Work(CSCW)"],
    socialMedia: [
      { name: "Google Scholar", icon: Award, url: "https://scholar.google.com/citations?user=aFi4Wd0AAAAJ&hl=en" },
      { name: "RedNote", icon: BookOpen, url: "https://www.xiaohongshu.com/user/profile/6633970e000000000303278d" },
      { name: "GitHub", icon: Github, url: "https://github.com/Likunnan" }
      // { name: "Download CV", icon: Download, url: "/files/rongyi_chen_cv.pdf" }
    ]
  };

  // 最新消息数据
  const newsData = {
    academic: [
      {
        date: "2025-06-20",
        title: "🎉 Research Paper Accepted by SSCI Q1 Journal!",
        content: "My co-authored paper “Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users' Information Trust” has been accepted by the International Journal of Human–Computer Interaction (IJHCI), a prestigious SSCI Q1 journal."
      },
      {
        date: "2025-05-20",
        title: "🏆 AEJMC MCS Second Place Faculty Paper Award! ",
        content: "My co-authored paper has been accepted to the Mass Communication and Society Division session at the 2025 AEJMC 108th Annual Conference (as first author). I will be presenting at the MCS Top Refereed Research Paper Session."
      },
      {
        date: "2025-03-13",
        title: "📧 4 * Conference Acceptance Notifications! ",
        content: "I am pleased to announce that four of my co-authored papers have been accepted to prestigious international communication conferences. As first author, two papers will be presented at the ICA Annual Conference and ICA Pre-Conference respectively. Additionally, I served as second author on a paper accepted to the IAMCR Annual Conference, and as third author on another paper also accepted to the ICA Annual Conference."
      }
    ],
    nonAcademic: [
      {
        date: "2025-06-19",
        title: "🤖 Advanced Robot Interaction System Deployed in Top-Tier Reality Show",
        content: "Developed and implemented a multi-modal AI robot system for Mango TV's flagship program 'Chinese Restaurant: African Entrepreneurship Season'. The system integrates large language models with mechanical control to provide multilingual voice interaction, coordinated gesture responses, real-time visual processing, and dynamic facial expression display. The solution achieves significantly reduced latency compared to existing commercial interactive AI systems."
      },
      {
        date: "2025-05-30",
        title: "🏆 Second-Time Winner of Outstanding Radio and Television Program Award!",
        content: "I have been honored with the First Prize for Outstanding Radio and Television Programs by the Hunan Province Radio and Television Association for the second time as the sole author, recognizing excellence in broadcast media production and content creation."
      },
      {
        date: "2025-05-16",
        title: "🎤 AI Virtual Audience System Deployed in Top-Tier Variety Show",
        content: "Co-designed AI-powered 'Virtual Audience' features successfully implemented in the live broadcast of 'Singer 2025', one of China's premier variety shows on Mango TV. The system includes real-time facial expression analysis and emoji visualization for 500+ audience members simultaneously."
      },
      {
        date: "2025-05-15",
        title: "🎧 Interactive AI System Launch in Entertainment Production",
        content: "Led the design and deployment of an advanced AI interaction system for 'Sisters Who Make Life Better', a derivative show of the top-tier variety program 'Ride the Wind 2025'. The system features celebrity personality simulation based on comprehensive databases, enabling customizable character interactions with significantly reduced latency for production environments."
      },
      {
        date: "2025-05-14",
        title: "😊 Real-time AI Comedy Evaluation System Goes Live",
        content: "Co-developed an innovative AI-powered comedy scoring system utilizing large-scale real-time facial expression analysis as evaluation criteria. The system, featuring precise facial feature matching and comprehensive visualization components, made its debut on Mango TV's variety show 'Ha Ha No Worries'."
      }
    ]
  };

  // 研究成果数据
  const researchData = {
    preprints: [
      {
        year: "2025",
        title: "The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube",
        authors: "Rongyi Chen, Ziyan Xin, Qing Xiao, Ruiwei Xiao, Jingjia Xiao, Bingbing Zhang, Hong Shen, Zhicong Lu",
        repository: "arXiv",
        id: "https://arxiv.org/abs/2505.20623"
      },
      {
        year: "2025",
        title: "Institutionalizing Folk Theories of Algorithms: How Multi-Channel Networks (MCNs) Govern Algorithmic Labor in Chinese Live-Streaming Industry",
        authors: "Qing Xiao, Rongyi Chen, Jingjia Xiao, Tianyang Fu, Alice Qian Zhang, Xianzhe Fan, Bingbing Zhang, Zhicong Lu, Hong Shen",
        repository: "arXiv",
        id: "https://arxiv.org/abs/2505.20623"
      },
    ],
    publications: [
      {
        year: "2025",
        title: "Enhancing Trust or Fostering Misjudgment? Assessing the Impact of Emerging Geographic Information Displays on Social Media Users’ Information Trust",
        authors: "Yalong Xiao, Rongyi Chen, Qing Xiao, Chengzhang Zhu, Jie Feng",
        journal: "International Journal of Human–Computer Interaction (HIHC)",
        doi: "10.1080/10447318.2025.2524493"
      },
      {
        year: "2025",
        title: "Artists and their poor: economic and symbolic inequality in distorted China's post-pandemic art subsidy policies",
        authors: "Jingjia Xiao, Qing Xiao, Rongyi Chen",
        journal: "Cultural Trends",
        doi: "10.1080/09548963.2025.2557215"
      },
      {
        year: "2024",
        title: "Exploring Influencers' and Users' Experiences in Douyin's Virtual Reality Live-Streaming",
        authors: "Rongyi Chen, Jingjia Xiao, Zilu Wang, Menghan Yin, Xianzhe Fan, Zihe Ran, Qing Xiao",
        journal: "Proceedings of the 30th ACM Symposium on Virtual Reality Software and Technology",
        doi: "10.1145/3641825.3689519"
      },
      {
        year: "2024",
        title: "“The power of the civilian hero”: Effective strategies for local media coverage in response to information epidemics",
        authors: "Chuchu Zhao, Rongyi Chen*",
        journal: "Local journalism, global challenges: News deserts, infodemic and the vastness in between (pp. 171-200); LabCom Books. ISBN 978-989-654-970-1",
        doi: "https://ecrea.eu/page-18206/13312675"
      },
      {
        year: "2024",
        title: "Migrant youth aged 16 to 19 during social crises: Stress, deviant behavior, and identification with mainstream society",
        authors: "Hua Zhong, Qing Xiao, Rongyi Chen, Jingjia Xiao",
        journal: "Huxiang Law Review (湖湘法学评论)",
        doi: "https://mp.weixin.qq.com/s/fjACER5Um7StLb4HSPKXpA"
      }
    ],
    conferences: [
      {
        year: "2025",
        title: "When Memes Become Mean: Discrimination Recognition and Group Norms in Adolescent Bullying",
        authors: "Rongyi Chen, Qing Xiao, Shike Lin, Menghan Yin, Jingjia Xiao, Hua Zhong, Bingbing Zhang",
        conference: "2025 Association for Education in Journalism and Mass Communication (AEJMC) 108th Annual Conference",
        location: "San Francisco, USA",
        award: "Second Place Faculty Paper Award, Mass Communication and Society Division"
      },
      {
        year: "2025",
        title: "Responsible LLMs in Persuasive Health Message: Comparing Language Biases in General LLMs and Healthcare LLMs",
        authors: "Rongyi Chen, Honghua Pan, Ni Yuan, Yalong Xiao, Jie Feng",
        conference: " 2025 the 75th Annual Conference of the International Communication Association (ICA)",
        location: "Denver, USA"
      },
      {
        year: "2025",
        title: "The Artists and Their Poor: Economic Inequality in China's Post-Pandemic Art Subsidy Policies",
        authors: "Jingjia Xiao, Qing Xiao, Rongyi Chen",
        conference: "2025 the 75th Annual Conference of the International Communication Association (ICA)",
        location: "Denver, USA"
      },
      {
        year: "2025",
        title: "How AI Constructs Disaster Narratives: A Comparative Analysis of LLMs in Multimodal Disaster News Production",
        authors: "Rui Zhang, Rongyi Chen",
        conference: "2025 International Association for Media and Communication Research (IAMCR) Annual Conference",
        location: "Singapore"
      },
      {
        year: "2025",
        title: "An Emerging Platform Entertainment Model in China:Algorithms Regulation and the Composite Interaction ofLive Streaming and Short Videos",
        authors: "Rongyi Chen, Chuyi Guo",
        conference: "Preconference of the 75th Annual Conference of the International Communication Association (ICA) 2025: Debating Creator Culture",
        location: "Singapore"
      },
      {
        year: "2024",
        title: "“Have you seen the lovers in the game? Are they like us?” Online Games and Game-Mediated Romantic Relationships",
        authors: "Jingrong Xu, Rongyi Chen, Haoran Dai",
        conference: "2024 National Communication Association (NCA) 110th Annual Convention",
        location: "New Orleans, USA"
      },
      {
        year: "2024",
        title: "Gresham's Law in Language Education: How Short Video buzzwords Reshapes Adolescents' Expression Habits and Semantic Understanding Capabilities",
        authors: "Rongyi Chen, Shike Lin, Haoran Dai",
        conference: "2024 International Association for Media and Communication Research (IAMCR) Annual Conference",
        location: "Christchurch, New Zealand"
      },
      {
        year: "2024",
        title: "The illusion of pluralistic andneutrality: How Twitter social bots show their opinionin Chinese political issue",
        authors: "Rongyi Chen, Qing Xiao, Haoran Dai",
        conference: "2024 the 10th ECREA European Communication Conference (ECC)",
        location: "Ljubljana, Slovenia"
      },
      {
        year: "2024",
        title: "Urban voice: LLM-based public opinion visualization for human-centered urban planning",
        authors: "Rongyi Chen, Jingjia Xiao, Zilu Wang, Qing Xiao",
        conference: "2024 International Conference of Social Computing (ICSC 2024)",
        location: "Guangzhou, China"
      },
      {
        year: "2024",
        title: " Queering Sexual Desires through Recommendation Algorithms: Douyin, Soft-core Pornography Male Influencers, and Female/Male Homosexual Fans",
        authors: "Rongyi Chen, Qing Xiao, Jingjia Xiao",
        conference: "Cambridge Queer Studies Conference 2024",
        location: "Cambridge, UK"
      },
      {
        year: "2023",
        title: "Focus on Supporting Roles in TikTok's Live-streaming E-commerce: How Do Assistant Anchors Affect Audiences' Purchase Intention?",
        authors: "Rongyi Chen, Shike Lin, Huiying Zhang",
        conference: "2023 TikTok Creators and Digital Economies Symposium",
        location: "London, UK"
      },
      {
        year: "2023",
        title: "Distorted emotional labor: an ethnography of a commercial live-streaming assistant anchor group",
        authors: "Rongyi Chen, Shike Lin",
        conference: "2023 International Association for Media and Communication Research (IAMCR) Annual Conference",
        location: "Lyon, France"
      }
    ]
  };
  // 作品集数据
  const portfolioData = {
    videos: [
      {
        title: "Behind-the-scenes documentary of the 20th Shanghai Film Festival Film Channel Media Focus Unit",
        description: "Cinematography and editing",
        organization: "📓 Bazaar Men",
        year: "2023",
        rating: 5,
        emoji: "🎬",
        url: "https://mp.weixin.qq.com/s/AEDOdbB2HCHjRcE0gEUDaQ"
      },
      {
        title: "#Our Days Spring Retro Movie# Li Xiaoran, Li Naiwen, Zhou Yiran, Zhou Qi's fashionable movie with a sense of the times",
        description: "Cinematography and editing",
        organization: "📓 Bazaar Men",
        year: "2023",
        rating: 5,
        emoji: "👜",
        url: "https://wxapp.tc.qq.com/251/20302/stodownload?encfilekey=Cvvj5Ix3eez3Y79SxtvVL0L7CkPM6dFibusn4vVFEyiapvMKEbut8OYbbCwGX0J96XSYwEYCwefg3wmqE8vnAVmdUyRrQYR6eObwEZ1Yibt83QdHHUgmV7ibKWnuFNEgLopUBFGam20bPb3OBdnnon3fQQ&dotrans=0&hy=SZ&idx=1&m=c6061cbbcc8a554fc4a99eadc4f43fa8&uzid=2&token=6xykWLEnztJZXHP94vj8eEfRibbtJQkU35tiasUSPO1epWsicKZf2hoYAbkycgtwTFzR81eprZ8ia52vSZIdMjKNMaYWkYo8Vxg3JlwM4VXzvyvqDPGE3S5Ys8ZVJs5h47hxYA5ibicl2Nrnvfw2LmP9G7r4bBuOqfN3UNnarAaicLTZgo&ctsc=9488890"
      },
      {
        title: "Real-time physical examination of cultural relics Mogao Grottoes monitoring and early warning system",
        description: "Planning, VFX, and editing",
        organization: "📰 Xinhua Net",
        year: "2022",
        rating: 5,
        emoji: "🏛️",
        url: "http://www.anhuinews.com/ahkj/kjsj/202210/t20221018_6458799.html"
      },
      {
        title: "“Super mirror” chases the sun and illuminates green energy",
        description: "Planning, VFX, and editing",
        organization: "📰 Xinhua Net",
        year: "2022",
        rating: 5,
        emoji: "☀️",
        url: "https://www.news.cn/science/2022-08/19/c_1310654117.htm"
      },
      {
        title: "Take care of each other! Bless the 2022 graduates with ancient poems",
        description: "Planning, VFX, and editing",
        organization: "📰 People's Daily",
        year: "2022",
        rating: 5,
        emoji: "🎓",
        url: "https://weibo.com/2803301701/LxWIfBX6y"
      },
      {
        title: "It's youth! 10 BGMs to play on loop during the graduation season",
        description: "Planning, VFX, and editing",
        organization: "📰 People's Daily",
        year: "2022",
        rating: 5,
        emoji: "🎵",
        url: "https://weibo.com/2803301701/LvOvmiK1s"
      },
      {
        title: "Selling special foods is a little special. #Implementing two responsibilities to build a food safety Beijing#",
        description: "Cinematography and editing",
        organization: "🏢 Beijing Market Regulation",
        year: "2024",
        rating: 5,
        emoji: "🥛",
        url: "https://wxapp.tc.qq.com/251/20302/stodownload?encfilekey=Cvvj5Ix3eez3Y79SxtvVL0L7CkPM6dFibusn4vVFEyiapvMKEbut8OYbbCwGX0J96XSYwEYCwefg3wmqE8vnAVmdUyRrQYR6eObwEZ1Yibt83QdHHUgmV7ibKWnuFNEgLopUBFGam20bPb3OBdnnon3fQQ&dotrans=0&hy=SZ&idx=1&m=c6061cbbcc8a554fc4a99eadc4f43fa8&uzid=2&token=6xykWLEnztJZXHP94vj8eEfRibbtJQkU35tiasUSPO1epWsicKZf2hoYAbkycgtwTFzR81eprZ8ia52vSZIdMjKNMaYWkYo8Vxg3JlwM4VXzvyvqDPGE3S5Ys8ZVJs5h47hxYA5ibicl2Nrnvfw2LmP9G7r4bBuOqfN3UNnarAaicLTZgo&ctsc=9488890"
      }
    ]
  };

  // 重新组织的项目数据
  const projectsData = {
    grants: [
      {
        year: "2025",
        title: "Research Report on the Transformation of News Production and Dissemination Models in News Organizations through Artificial Intelligence",
        role: "Co-PI",
        program: "Hunan Broadcasting System Research Fellowship Program",
        amount: "CN¥100,000"
      },
      {
        year: "2023-2024",
        title: "Misinformation and Public Opinion: Social Media Crisis Communication amid Disasters and Emergencies",
        role: "Co-PI", 
        program: "Hunan Daily Research Fellowship Program",
        amount: "CN¥30,000"
      }
    ],
    computationalCommunication: [
      {
        title: "Intelligent Early Warning of International Public Opinion Based on Multimodal Data Fusion",
        meta: "2024-2025, School of Computer Science and Engineering, Central South University",
        description: "Research Assistant",
        tech: ["Outstanding Young Scholar Program of the Hunan Provincial Department of Education: 24B0023"]
      },
      {
        title: "Research and Demonstration of Key Multimodal AI Technologies for Precision International Communication",
        meta: "2024-2025, School of Computer Science and Engineering, Central South University",
        description: "Research Assistant",
        tech: ["Key R&D Program of Hunan Province: 2024JK2023"]
      },
      {
        title: "Study on International Public Opinion Dynamics in Major Emergencies on Social Media",
        meta: "2024-2025, School of Humanities, Central South University",
        description: "Research Assistant",
        tech: ["Youth Project of the Ministry of Education's Humanities and Social Sciences Fund: 22YJC860007"]
      },
      {
        title: "Live Stream Host Professional Ethics Enhancement and Live Streaming Industry Standards Development",
        meta: "2021, Institute of Communication Studies, Communication University of China",
        description: "Research Assistant",
        tech: ["National Industry Standard Development Funding: HW21144"]
      },
            {
        title: "Research on the Representation and Related Discourses of Various Chinese Ethnicities in Global Social Media",
        meta: "2022-2023,  Institute of Communication Studies, Communication University of China",
        description: "Research Assistant",
        tech: ["National Ethnic Affairs Commission Youth Ethnic Funding: 2021-GMC-052"]
      }
    ],
    digitalSociology: [
      {
        title: "Cultivating Adolescents' Digital Literacy and Value Orientation in a Media Convergence Environment",
        meta: "2020-2021, Institute of Communication Studies, Communication University of China",
        description: "Research Assistant",
        tech: ["National Social Science Funding: 19BXW087"]
      }
    ],
    empiricalStudies: [
      {
        title: "Enterprise Survey for Innovation and Entrepreneurship in China, ESIEC",
        meta: "2023, Enterprise Big Data Research Center, Peking University",
        description: "Research Assistant",
        tech: [""]
      },
      {
        title: "Mianzhu Children's Cognitive and Non-cognitive Abilities Development Tracking Project",
        meta: "2020, Survey Data Center, Jinan University",
        description: "Research Assistant",
        tech: [""]
      }
    ]
  };

  // 行业经验数据
const industryData = [
    {
      period: "2025 - Present",
      title: "AI Product Manager Intern",
      organization: "Mango TV, Intelligent Research Center",
      description: "Led design and implementation of AI-powered entertainment systems including real-time facial expression analysis for comedy evaluation, celebrity personality simulation with reduced latency, and virtual audience features for top-tier variety shows like 'Singer 2025' and 'Ride the Wind 2025'."
    },
    {
      period: "2023-2025",
      title: "Multimedia Content Editor Intern",
      organization: "University of Chicago, Harris School of Public Policy",
      description: "Assisted multiple degree and certificate programs with China region enrollment community management, video production, and promotional material design. Managed Chinese social media operations and lecture material distribution for academic programs."
    },
    {
      period: "2023",
      title: "Cinematography Intern",
      organization: "BAZAAR Men",
      description: "Assisted in video production for the daily program 'We Are in the Day', featuring celebrity interviews and entertainment content. Collaborated on CCTV-6 movie channel's film promotion projects involving red carpet events and premiere coverage."
    },
    {
      period: "2022 - 2023",
      title: "Assistant Director Intern",
      organization: "China Movie Official Channel (CCTV-6), 1905 Movie Network",
      description: "Served as on-site director for major film industry events including the 2022 'Star Ocean' Young Actor Selection Program and '5G+360° Golden Rooster Awards' immersive live broadcast. Executive director for the 35th Golden Rooster Awards ceremony and coordinator for the 5th anniversary launch of the Star Ocean program."
    },
    {
      period: "2022",
      title: "Multimedia Content Editor Intern",
      organization: "People's Daily, Weibo Department",
      description: "Planned and produced viral video content including trending topics that reached #2 and #3 on Weibo hot search, generating millions of views and tens of millions of reads. Assisted in social media sentiment monitoring and early warning systems for trending events."
    },
    {
      period: "2021",
      title: "Live-streaming Technology Specialist",
      organization: "Alibaba Entertainment Group, Youku/Laifeng",
      description: "Assisted in testing and data evaluation of innovative live streaming products including digital humans and interactive gaming features. Supported multiple live streaming teams with audience management, operations optimization, and technical training initiatives."
    },
    {
      period: "2021",
      title: "Marketing Intern",
      organization: "Ximalaya Technology Co., Ltd., Marketing Department",
      description: "Assisted in establishing 'Ximalaya Campus Partner Program' and 'Campus Broadcaster' initiatives, including rule development and pitch presentation implementation. Facilitated partnerships with over 200 university student organizations across China."
    },
    {
      period: "2020 - 2021",
      title: "Journalist Intern",
      organization: "Zhanjiang Radio and Television Station, Local News Department",
      description: "Produced news segments and documentary content for local television broadcasts, conducting field reporting and managing multimedia production workflows for regional audience engagement."
    }
  ];

  // 星级显示组件
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ⭐
          </span>
        ))}
      </div>
    );
  };

  // 处理图片加载错误
  const handleImageError = () => {
    console.log("Image failed to load");
    setImgError(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#212529]">
      {/* 头部信息区 */}
      <header className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white rounded-xl shadow-md p-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
              {imgError ? (
                <User size={48} className="text-blue-500" />
              ) : (
                <img 
                  src="/rongyichen/images/IMG_1783.jpg" 
                  alt={profileData.name} 
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              )}
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{profileData.name}</h1>
            <p className="text-lg text-blue-700 mb-3">{profileData.title}</p>
            
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                <MapPin size={14} className="text-blue-600" />
              </div>
              <p className="text-gray-600">{profileData.institution}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {profileData.researchAreas?.map((area, index) => (
                <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  {area}
                </span>
              ))}
            </div>
            
            {/* 社交媒体链接 */}
            <div className="flex flex-wrap gap-4 mt-4">
              {/* 邮箱图标 - 带自定义悬浮提示 */}
              <div className="relative group">
                <a 
                  href={`mailto:${profileData.email}`}
                  className="w-8 h-8 bg-blue-50 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors"
                >
                  <Mail size={16} className="text-blue-600 group-hover:text-blue-800" />
                </a>
                {/* 悬浮提示 */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  {profileData.email}
                </div>
              </div>
              
              {/* 其他社交媒体链接 */}
              {profileData.socialMedia?.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-50 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
                    title={social.name}
                  >
                    <IconComponent size={16} className="text-blue-600 group-hover:text-blue-800" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* 导航栏 */}
      <nav className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Info className="mr-2" size={18} />
              About Me
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'news' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Calendar className="mr-2" size={18} />
              News
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'research' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <FileText className="mr-2" size={18} />
              Research
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Award className="mr-2" size={18} />
              Projects
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'portfolio' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Film className="mr-2" size={18} />
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('industry')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'industry' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Briefcase className="mr-2" size={18} />
              Professional Experience
            </button>
          </div>
        </div>
      </nav>

      {/* 内容区 */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <AnimatePresence mode="wait">
          {/* 个人简介区 */}
          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {profileData.bio}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Research Interests</h3>
                    <ul className="space-y-2">
                      {profileData.researchAreas.map((area, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                          <span className="text-gray-700">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Education</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-800 font-medium">Central South University, 2023-2026</p>
                        <p className="text-gray-600">M.A. in Computational Communication</p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Communication University of China, 2019-2023</p>
                        <p className="text-gray-600">B.A. in Communication</p>
                        <p className="text-gray-600 mt-1">B.A. in Broadcasting & Hosting Arts</p>
                        <p className="text-gray-600 mt-1">Minors in Human-Centered Design</p>
                        <p className="text-gray-600 mt-1">Minors in Computational Communication</p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">University of Missouri-Columbia, 2019-2023</p>
                        <p className="text-gray-600 mt-1">International Communication Certificate</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Extra Training</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-800 font-medium">Data and Policy Summer Scholar Program</p>
                        <p className="text-gray-600">Data Analytics & Programming in R, University of Chicago, 2023</p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Computational Social Science Specialization</p>
                        <p className="text-gray-600">Social Network Analysis & Computer Simulations, University of California, Davis, 2024</p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Digital Humanities at Oxford Summer School</p>
                        <p className="text-gray-600">St Anne's College, University of Oxford, 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Awards</h3>
                    <div className="space-y-4">
                                          <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🏆</span>
                        <div>
                          <p className="text-gray-800 font-medium">National Scholarship</p>
                          <p className="text-gray-600">Ministry of Education of the People's Republic of China, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🎖️</span>
                        <div>
                          <p className="text-gray-800 font-medium">First Class Academic Scholarship</p>
                          <p className="text-gray-600">Central South University, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🏆</span>
                        <div>
                          <p className="text-gray-800 font-medium">GEM Innovation and Practice Award</p>
                          <p className="text-gray-600">Central South University, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🎖️</span>
                        <div>
                          <p className="text-gray-800 font-medium">First Prize for Outstanding Radio and Television Programs</p>
                          <p className="text-gray-600">Hunan Province Radio and Television Association, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🏆</span>
                        <div>
                          <p className="text-gray-800 font-medium">Best Paper Award & Outstanding Student Award</p>
                          <p className="text-gray-600">School of Humanities, Central South University, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🎖️</span>
                        <div>
                          <p className="text-gray-800 font-medium">First Prize for Outstanding Radio and Television Programs</p>
                          <p className="text-gray-600">Hunan Province Radio and Television Association, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🏆</span>
                        <div>
                          <p className="text-gray-800 font-medium">Outstanding Undergraduate's Thesis Award</p>
                          <p className="text-gray-600">Communication University of China, 2023</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🎖️</span>
                        <div>
                          <p className="text-gray-800 font-medium">Best Filming and Production Award</p>
                          <p className="text-gray-600">Hebei Radio and Television Station, 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 最新消息区 */}
          {activeTab === 'news' && (
            <motion.div
              key="news"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 学术消息 */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Academic News</h3>
                  <div className="relative">
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100"></div>
                    
                    {newsData.academic.map((news, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="relative pl-16 mb-8"
                      >
                        <div className="absolute left-0 top-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        
                        <div className="text-sm text-gray-500 mb-1">{news.date}</div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">{news.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">{news.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* 非学术消息 */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">General News</h3>
                  <div className="relative">
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100"></div>
                    
                    {newsData.nonAcademic.map((news, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="relative pl-16 mb-8"
                      >
                        <div className="absolute left-0 top-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        
                        <div className="text-sm text-gray-500 mb-1">{news.date}</div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">{news.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">{news.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 研究成果区 */}
          {activeTab === 'research' && (
            <motion.div
              key="research"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-12">
                {/* Preprints - 放在最上面 */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Preprints</h3>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                    <ul className="space-y-6">
                      {researchData.preprints.map((preprint, index) => (
                        <li key={index} className="border-b border-gray-100 pb-5 last:border-b-0 last:pb-0 flex">
                          <div className="flex-shrink-0 w-8 text-center mr-4">
                            <span className="text-sm text-gray-500 font-mono">P{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap justify-between items-start mb-2">
                              <h4 className="text-lg font-semibold text-gray-800 mb-1">{preprint.title}</h4>
                              <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{preprint.year}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{preprint.authors}</p>
                            <div className="flex items-center text-sm text-blue-600">
                              <Book size={14} className="mr-1" />
                              <a 
                                href={preprint.id.startsWith('http') ? preprint.id : `https://${preprint.repository.toLowerCase()}.org/abs/${preprint.id}`}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                {preprint.repository}: {preprint.id.startsWith('http') ? preprint.id.split('/').pop() : preprint.id}
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Publications */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Publications</h3>
                  
                  {/* 按年份分组 */}
                  {Array.from(new Set(researchData.publications.map(paper => paper.year))).map((year, yearIndex) => (
                    <div key={yearIndex} className="mb-8">
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-8 bg-blue-500 rounded mr-3"></div>
                        <h4 className="text-lg font-semibold text-gray-800">{year}</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6">
                        {researchData.publications
                          .filter(paper => paper.year === year)
                          .map((paper, paperIndex) => {
                            const globalIndex = researchData.publications.findIndex(p => p === paper) + 1;
                            return (
                              <motion.div
                                key={paperIndex}
                                whileHover={{ y: -4, boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
                                className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 flex"
                              >
                                <div className="flex-shrink-0 w-8 text-center mr-4">
                                  <span className="text-sm text-gray-500 font-mono">J{globalIndex}</span>
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-semibold mb-2 text-gray-800">{paper.title}</h5>
                                  <p className="text-sm text-gray-600 mb-3">
                                    {paper.authors.split(',').map((author, i) => {
                                      // Trim whitespace from the author name
                                      const trimmedAuthor = author.trim();
                                      // Check if the author name starts with the profile name (to catch cases with asterisks)
                                      const isYou = trimmedAuthor.startsWith(profileData.name);
                                      
                                      return (
                                        <span key={i} className={isYou ? 'font-bold bg-yellow-100 px-1' : ''}>
                                          {author}{i < paper.authors.split(',').length - 1 ? ', ' : ''}
                                        </span>
                                      );
                                    })}
                                  </p>
                                  <p className="text-sm italic text-gray-500 mb-3">{paper.journal}</p>
                                  <a 
                                    href={paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline flex items-center"
                                  >
                                    <FileText size={14} className="mr-1" />
                                    {paper.doi.startsWith('http') ? 'Link' : 'DOI'}: {paper.doi.startsWith('http') ? paper.doi.split('/').pop() || 'View Paper' : paper.doi}
                                  </a>
                                </div>
                              </motion.div>
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Conference */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Conference Presentations</h3>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                    <ul className="space-y-6">
                      {researchData.conferences.map((conf, index) => (
                        <li key={index} className="border-b border-gray-100 pb-5 last:border-b-0 last:pb-0 flex">
                          <div className="flex-shrink-0 w-8 text-center mr-4">
                            <span className="text-sm text-gray-500 font-mono">C{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            {conf.award && (
                              <div className="mb-2 flex items-center">
                                <span className="text-yellow-600 mr-1">🏆</span>
                                <span className="text-sm font-bold text-yellow-600">{conf.award}</span>
                              </div>
                            )}
                            <div className="flex flex-wrap justify-between items-start mb-2">
                              <h4 className="text-lg font-semibold text-gray-800 mb-1 flex-1 mr-2">{conf.title}</h4>
                              <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{conf.year}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              {conf.authors.split(',').map((author, i) => {
                                // Trim whitespace from the author name
                                const trimmedAuthor = author.trim();
                                // Check if the author name starts with the profile name (to catch cases with asterisks)
                                const isYou = trimmedAuthor.startsWith(profileData.name);
                                
                                return (
                                  <span key={i} className={isYou ? 'font-bold bg-yellow-100 px-1' : ''}>
                                    {author}{i < conf.authors.split(',').length - 1 ? ', ' : ''}
                                  </span>
                                );
                              })}
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                              <Globe size={14} className="mr-1 text-blue-500" />
                              <span>{conf.conference}, {conf.location}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 项目区 */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* Grants Section */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-800">Research Grants</h3>
                  <div className="ml-3 px-3 py-1 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-full">
                    <span className="text-xs font-medium text-yellow-700">Co-Principal Investigator</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {projectsData.grants.map((grant, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, boxShadow: '0 8px 16px rgba(251, 191, 36, 0.15)' }}
                      className="bg-gradient-to-br from-white to-yellow-50 rounded-lg shadow-sm border-2 border-yellow-100 p-6 relative overflow-hidden"
                    >
                      {/* 装饰性背景元素 */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-30 -translate-y-10 translate-x-10"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 rounded-full text-sm font-medium">
                            {grant.year}
                          </span>
                          <div className="flex items-center">
                            <span className="text-lg mr-1">💰</span>
                            <span className="font-bold text-gray-700">{grant.amount}</span>
                          </div>
                        </div>
                        
                        <h4 className="font-semibold mb-2 text-gray-800 leading-tight">{grant.title}</h4>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center">
                            <span className="text-xs font-medium text-yellow-700 bg-yellow-100 px-2 py-1 rounded mr-2">
                              {grant.role}
                            </span>
                          </div>
                          <p className="text-sm italic text-gray-600">{grant.program}</p>
                        </div>
                        
                        {/* 进度指示器 */}
                        <div className="flex items-center mt-4">
                          <div className="flex-1 bg-yellow-100 rounded-full h-2 mr-3">
                            <div className={`h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 ${grant.year === '2025' ? 'w-1/4' : 'w-full'}`}></div>
                          </div>
                          <span className="text-xs text-gray-500">
                            {grant.year === '2025' ? 'In Progress' : 'Completed'}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Computational Communication & Social Media Research */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-blue-500 rounded mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-800">Computational Communication & Social Media Research</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectsData.computationalCommunication.map((project, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 p-5"
                    >
                      <h4 className="font-semibold mb-1 text-gray-800">{project.title}</h4>
                      <p className="text-sm text-gray-500 italic mb-3">{project.meta}</p>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Digital Sociology & Media Education */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-blue-500 rounded mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-800">Digital Sociology & Media Education</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectsData.digitalSociology.map((project, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 p-5"
                    >
                      <h4 className="font-semibold mb-1 text-gray-800">{project.title}</h4>
                      <p className="text-sm text-gray-500 italic mb-3">{project.meta}</p>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Empirical Studies & Surveys */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-blue-500 rounded mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-800">Empirical Studies & Surveys</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectsData.empiricalStudies.map((project, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 p-5"
                    >
                      <h4 className="font-semibold mb-1 text-gray-800">{project.title}</h4>
                      <p className="text-sm text-gray-500 italic mb-3">{project.meta}</p>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* 作品集区 */}
          {activeTab === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Video Portfolio</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A collection of multimedia content productions spanning entertainment, science communication, and cultural preservation projects.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.videos.map((video, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative"
                  >
                    {/* 卡片主体 */}
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-200">
                      
                      {/* 表情符号头部 */}
                      <div className="h-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10"></div>
                        <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                          {video.emoji}
                        </span>
                        {/* 装饰性元素 */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
                        <div className="absolute bottom-1 left-3 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
                      </div>

                      {/* 内容区域 */}
                      <div className="p-6">
                        {/* 年份和评分 */}
                        <div className="flex justify-between items-center mb-3">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium rounded-full">
                            {video.year}
                          </span>
                          <StarRating rating={video.rating} />
                        </div>
                        
                        {/* 标题 */}
                        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 leading-tight group-hover:text-blue-700 transition-colors">
                          {video.title}
                        </h3>
                        
                        {/* 描述 */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {video.description}
                        </p>
                        
                        {/* 机构标签和查看链接 - 改为上下布局 */}
                        <div className="space-y-3">
                          <div className="flex justify-start">
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded border">
                              {video.organization}
                            </span>
                          </div>
                          <div className="flex justify-end">
                            <a 
                              href={video.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 group-hover:shadow-lg"
                            >
                              <Film size={16} className="mr-2" />
                              Watch Video
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      {/* 悬浮时的光效 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    {/* 序号标识 */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* 底部统计信息 */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100">
                  <PieChart size={20} className="text-blue-600 mr-2" />
                  <span className="text-gray-700 font-medium">
                    Total: {portfolioData.videos.length} Video Productions
                  </span>
                  <span className="mx-3 text-gray-400">•</span>
                  <span className="text-gray-700">
                    Avg Rating: {(portfolioData.videos.reduce((acc, video) => acc + video.rating, 0) / portfolioData.videos.length).toFixed(1)} ⭐
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* 行业经验区 */}
          {activeTab === 'industry' && (
            <motion.div
              key="industry"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                {/* 时间线 */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100"></div>
                
                {industryData.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="relative pl-14 mb-10"
                  >
                    <div className="absolute left-0 top-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Briefcase size={14} className="text-blue-600" />
                    </div>
                    
                    <div className="inline-block bg-blue-50 px-3 py-1 rounded-full text-blue-700 text-xs mb-1">
                      {item.period}
                    </div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.title}</h3>
                    <h4 className="text-sm font-medium mb-2 text-blue-600">{item.organization}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 页脚 */}
      <footer className="bg-[#eceff1] border-t border-[#cfd8dc] py-6">
        <div className="container mx-auto px-4 text-center text-sm text-[#607d8b]">
          <p>Created by <a href="https://space.coze.cn" className="text-[#1976d2] hover:underline">Rongyi</a> | Last updated: May 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default AcademicProfile;