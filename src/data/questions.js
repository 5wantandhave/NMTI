export const QUESTIONS = [
  {
    id: 1,
    scene: '任务执行',
    question: '周五下午5:30，老板在群里突然发了一个下周一要用的PPT模板，说“不急但周一早上要用”。你的反应是？',
    options: [
      {
        text: '马上回复"收到"，并开始收集素材，打算周末搞定',
        scores: { JP: 2, SN: 2 },
        explanation: '典型的996死者，通过即时行动缓解焦虑'
      },
      {
        text: '回复"收到"，然后转发给AI或下属，自己继续规划周末露营',
        scores: { JP: 2, SN: -2 },
        explanation: '画大饼型，任务要接，但灵魂得飘在外面'
      },
      {
        text: '假装没看见，准点下班。周日晚上再回"刚看到信息，明天一早处理"',
        scores: { JP: -2, SN: 2 },
        explanation: '精准摸鱼学家，务实地保护自己的私人时间'
      },
      {
        text: '默默关掉群通知，发朋友圈："什么时候才能财富自由啊？"',
        scores: { JP: -2, SN: -2 },
        explanation: '终极快乐神仙，用幻想对抗现实的压迫'
      }
    ]
  },
  {
    id: 2,
    scene: '任务执行',
    question: '周一早会上，老板说这个项目"必须有"。你的内心OS是？',
    options: [
      {
        text: '"必须有"那就必须有，开始默默规划执行方案',
        scores: { JP: 2, SN: 2 },
        explanation: '务实派，相信双手而非奇迹'
      },
      {
        text: '"必须有"？行吧，先答应，反正船到桥头自然直',
        scores: { JP: 2, SN: -2 },
        explanation: '嘴上答应，心里已经开始幻想退休生活'
      },
      {
        text: '为什么必须有？依据是什么？先想清楚再说',
        scores: { JP: -2, SN: 2 },
        explanation: '理性分析派，不做无谓的消耗'
      },
      {
        text: '必须有...行吧...反正我也不是第一次将就了',
        scores: { JP: -2, SN: -2 },
        explanation: '佛系接受，幻想能有一天不用再将就'
      }
    ]
  },
  {
    id: 3,
    scene: '任务执行',
    question: '周五下班前，你发现一个同事悄悄把工作全推给了你，你：',
    options: [
      {
        text: '默默干完，毕竟大家都是同事，不想撕破脸',
        scores: { JP: 2, FT: 2 },
        explanation: '大冤种型，委屈自己成全他人'
      },
      {
        text: '截图留证据，等年终奖的时候算总账',
        scores: { JP: 2, FT: -2 },
        explanation: '理智派，吃亏可以，但要有回报'
      },
      {
        text: '直接找他沟通，明确分工，拒绝背锅',
        scores: { JP: -2, FT: 2 },
        explanation: '外放派，直接但不伤害关系'
      },
      {
        text: '无所谓，反正干的越多经验越多（催眠自己）',
        scores: { JP: -2, FT: -2 },
        explanation: '精神胜利法，躺平从自我PUA开始'
      }
    ]
  },
  {
    id: 4,
    scene: '任务执行',
    question: '年底了，你发现今年的KPI指标比去年高了40%，你：',
    options: [
      {
        text: '研究如何分解指标，制定详细执行计划',
        scores: { JP: 2, SN: 2 },
        explanation: '务实卷王，相信努力可以解决问题'
      },
      {
        text: '开始刷招聘软件，物色跳槽机会',
        scores: { JP: 2, SN: -2 },
        explanation: '务实幻想家，卷不动就换一个赛道继续卷'
      },
      {
        text: '找老板沟通指标制定的依据，协商更合理的KPI',
        scores: { JP: -2, SN: 2 },
        explanation: '理性谈判派，用数据说话'
      },
      {
        text: '算了，命里有时终须有，命里无时莫强求',
        scores: { JP: -2, SN: -2 },
        explanation: '佛系达人，看透职场本质是草台班子'
      }
    ]
  },
  {
    id: 5,
    scene: '社交博弈',
    question: '部门团建，大家都在违心地夸奖老板的歌声，老板突然点名问你的看法。你：',
    options: [
      {
        text: '脸红心跳，憋出一句"真的很有磁性"，然后整晚都在回想自己是不是太假了',
        scores: { IE: 2, FT: 2 },
        explanation: '大冤种型，明明很痛苦却还在乎别人的情绪'
      },
      {
        text: '顺势接过麦克风："老板唱得太专业了，下一首我给您伴舞！"',
        scores: { IE: -2, FT: 2 },
        explanation: '团建第一名，靠释放能量来消解尴尬'
      },
      {
        text: '保持职业微笑，点头说"确实有特色"，然后低头继续分析桌上的菜值多少钱',
        scores: { IE: 2, FT: -2 },
        explanation: '理性工具人，社交对他来说只是成本计算'
      },
      {
        text: '大方称赞，并逻辑缜密地从音准、情感角度分析为什么好，全场最稳',
        scores: { IE: -2, FT: -2 },
        explanation: '向上管理大师，社交是他的表演场'
      }
    ]
  },
  {
    id: 6,
    scene: '社交博弈',
    question: '午饭时间，同事们在热烈讨论公司八卦，你通常会：',
    options: [
      {
        text: '竖起耳朵偷听，同时假装看手机，收集信息以备不时之需',
        scores: { IE: 2, FT: 2 },
        explanation: '信息型内耗，八卦是职场生存的必修课'
      },
      {
        text: '积极参与讨论，分享你听到的小道消息',
        scores: { IE: -2, FT: 2 },
        explanation: '社交牛人，八卦是拉近关系的润滑剂'
      },
      {
        text: '默默吃饭或戴耳机听书，觉得八卦毫无意义',
        scores: { IE: 2, FT: -2 },
        explanation: '独来独往派，精力放在自我提升上'
      },
      {
        text: '听到离谱的就记下来，以后作为谈资或保护自己的筹码',
        scores: { IE: -2, FT: -2 },
        explanation: '策略性社交，人脉经营从八卦开始'
      }
    ]
  },
  {
    id: 7,
    scene: '社交博弈',
    question: '公司年会上，你抽中了500元奖金，但发现另一个同事抽中了1000元还到处炫耀，你：',
    options: [
      {
        text: '表面恭喜，内心酸涩，开始怀疑抽奖有黑幕',
        scores: { IE: 2, FT: 2 },
        explanation: '内耗型敏感人格，快乐总是比较出来的'
      },
      {
        text: '大方过去敬酒蹭喜气，顺便让他请客',
        scores: { IE: -2, FT: 2 },
        explanation: '社交牛人，化尴尬为机会'
      },
      {
        text: '无所谓，500也是钱，比没有强多了',
        scores: { IE: 2, FT: -2 },
        explanation: '知足常乐型，不比较不内耗'
      },
      {
        text: '拉着他分析概率，研究下次怎么提高中奖率',
        scores: { IE: -2, FT: -2 },
        explanation: '理性分析派，把运气变成技术问题'
      }
    ]
  },
  {
    id: 8,
    scene: '社交博弈',
    question: '下班了，老板还在工位，你会：',
    options: [
      {
        text: '也不敢走，继续假装忙碌，等老板走了再撤',
        scores: { IE: 2, FT: 2 },
        explanation: '内耗焦虑型，职场PUA的资深受害者'
      },
      {
        text: '大大方方打招呼："老板我先撤了，明天见！"然后正常下班',
        scores: { IE: -2, FT: 2 },
        explanation: '坦荡社牛，下班就是下班'
      },
      {
        text: '做好了今天的工作，拿着包正常走，不关注老板在不在',
        scores: { IE: 2, FT: -2 },
        explanation: '工作导向型，下班时间属于自己'
      },
      {
        text: '观察老板状态，如果他在认真工作就撤，如果他在表演加班也跟着演',
        scores: { IE: -2, FT: -2 },
        explanation: '职场观察家，精准把控下班时机'
      }
    ]
  },
  {
    id: 9,
    scene: '突发压力',
    question: '周一早上8:50，你踩点到公司，发现同事们已经在小声讨论什么，看到你来了突然安静了。你的第一反应是：',
    options: [
      {
        text: '完了，是不是在说我？是不是我上周犯了什么错？开始回想',
        scores: { JP: 2, IE: 2 },
        explanation: '内耗型焦虑，职场被害妄想症晚期'
      },
      {
        text: '直接问："诶，你们在聊什么？算我一个！"',
        scores: { JP: 2, IE: -2 },
        explanation: '外放型好奇，社交本能大于一切'
      },
      {
        text: '假装没看到，正常走到工位，但耳朵竖着听',
        scores: { JP: -2, IE: 2 },
        explanation: '表面淡定内心戏丰富，职场影帝'
      },
      {
        text: '坐下干活，等着他们主动来告诉你',
        scores: { JP: -2, IE: -2 },
        explanation: '淡定如风，不关我事就不操心'
      }
    ]
  },
  {
    id: 10,
    scene: '突发压力',
    question: '周五下午，老板突然私信你："明天有个急事，辛苦加个班"。你：',
    options: [
      {
        text: '深呼吸，回复"好的"，然后默默取消周末所有计划',
        scores: { JP: 2, IE: 2 },
        explanation: '好说话员工，周末是啥？能吃吗？'
      },
      {
        text: '"没问题！刚好我周末也没事，可以全力以赴！"',
        scores: { JP: 2, IE: -2 },
        explanation: '积极表现派，把加班当晋升垫脚石'
      },
      {
        text: '直接问："方便问一下是什么事吗？我好提前准备一下"',
        scores: { JP: -2, IE: 2 },
        explanation: '内敛型谨慎，做事前先了解情况'
      },
      {
        text: '"好的，不过我周末有个重要安排，能提前告诉我大概要多久吗？"',
        scores: { JP: -2, IE: -2 },
        explanation: '有底线社牛，先谈条件再答应'
      }
    ]
  },
  {
    id: 11,
    scene: '突发压力',
    question: '发现同事背着你偷偷加班，你当下的反应是：',
    options: [
      {
        text: '他是不是在卷我？我是不是落后了？开始焦虑',
        scores: { JP: 2, IE: 2 },
        explanation: '被卷焦虑型，职场比较强迫症'
      },
      {
        text: '凑过去问问情况，顺便学习一下',
        scores: { JP: 2, IE: -2 },
        explanation: '卷王附体，见贤思齐焉'
      },
      {
        text: '关我什么事，我干完我的活就行了',
        scores: { JP: -2, IE: 2 },
        explanation: '独立自主型，不被外界干扰'
      },
      {
        text: '分析一下他为什么加班，是效率问题还是真的活多',
        scores: { JP: -2, IE: -2 },
        explanation: '理性观察家，从现象看本质'
      }
    ]
  },
  {
    id: 12,
    scene: '突发压力',
    question: '季度汇报会上，老板突然点名让你评价另一个同事的方案，你：',
    options: [
      {
        text: '紧张到大脑空白，随便说两句客套话，心里后悔为什么要被点名',
        scores: { JP: 2, IE: 2 },
        explanation: '社交恐惧型，当场石化'
      },
      {
        text: '借机发挥，逻辑清晰地提出自己的见解，顺便展示一下自己',
        scores: { JP: 2, IE: -2 },
        explanation: '表现型选手，危机就是转机'
      },
      {
        text: '谦虚地说"我觉得这个方案挺好的，学到了很多"',
        scores: { JP: -2, IE: 2 },
        explanation: '低调内敛型，不抢风头'
      },
      {
        text: '客观中立地点评，既不贬低也不过度吹捧',
        scores: { JP: -2, IE: -2 },
        explanation: '职场老手，精准把握分寸'
      }
    ]
  },
  {
    id: 13,
    scene: '利益分配',
    question: '年终奖发了之后，发现比预期少了一半，你会怎么办？',
    options: [
      {
        text: '默默接受，怀疑是不是自己今年表现不好，开始自我反省',
        scores: { FT: 2, SN: 2 },
        explanation: '自我反省型，把问题都归结到自己身上'
      },
      {
        text: '找老板沟通，了解原因，表达自己的诉求',
        scores: { FT: 2, SN: -2 },
        explanation: '情感表达型，为自己发声'
      },
      {
        text: '分析市场行情，看看是公司问题还是行业问题',
        scores: { FT: -2, SN: 2 },
        explanation: '理性分析型，用数据说话'
      },
      {
        text: '开始刷简历，物色新机会，此处不留爷自有留爷处',
        scores: { FT: -2, SN: -2 },
        explanation: '行动派，情绪转化为下一步规划'
      }
    ]
  },
  {
    id: 14,
    scene: '利益分配',
    question: '年底普调工资，你发现一个平时表现不如你的同事调得比你多，你：',
    options: [
      {
        text: '心里难受但不说，默默更加努力，期望下次能调上去',
        scores: { FT: 2, SN: 2 },
        explanation: '憋屈奋斗型，把不甘心转化为动力'
      },
      {
        text: '约那个同事吃饭，了解情况，顺便打听他的秘诀',
        scores: { FT: 2, SN: -2 },
        explanation: '社交学习型，把对手当老师'
      },
      {
        text: '找HR或老板沟通，了解调薪标准和自己的差距',
        scores: { FT: -2, SN: 2 },
        explanation: '理性维权型，用规则保护自己'
      },
      {
        text: '无所谓，继续干，反正工资又不是唯一衡量标准',
        scores: { FT: -2, SN: -2 },
        explanation: '佛系看淡，卷的是过程不是结果'
      }
    ]
  },
  {
    id: 15,
    scene: '利益分配',
    question: '项目奖金分配时，你发现老板给你分得最少，但工作量却是最多的，你：',
    options: [
      {
        text: '算了算了，不争了，维持和谐最重要',
        scores: { FT: 2, SN: 2 },
        explanation: '和谐优先型，委屈往肚子里咽'
      },
      {
        text: '找老板谈谈，表达自己的贡献和诉求',
        scores: { FT: 2, SN: -2 },
        explanation: '主动沟通型，会哭的孩子有奶吃'
      },
      {
        text: '收集数据，找老板用数据说话',
        scores: { FT: -2, SN: 2 },
        explanation: '数据派，用事实依据来谈判'
      },
      {
        text: '记录下来，年终总结时或者下次谈薪时用',
        scores: { FT: -2, SN: -2 },
        explanation: '策略型，把这笔账记在长远发展里'
      }
    ]
  },
  {
    id: 16,
    scene: '利益分配',
    question: '如果现在中了一千万，你周一还会去上班吗？',
    options: [
      {
        text: '会，但不是为了工资，是为了实现自我价值（或者因为闲不住）',
        scores: { FT: 2, SN: 2 },
        explanation: '工作狂型，人生的意义是工作给的'
      },
      {
        text: '会，但会换个更轻松的岗位，享受低配版职场生活',
        scores: { FT: 2, SN: -2 },
        explanation: '躺平预备役，有钱也要有个事做'
      },
      {
        text: '不上班，但可能会做点投资或者小生意',
        scores: { FT: -2, SN: 2 },
        explanation: '务实创业型，用钱生钱'
      },
      {
        text: '完全不上，环游世界去，让人生换个活法',
        scores: { FT: -2, SN: -2 },
        explanation: '自由向往型，生命的意义是体验'
      }
    ]
  }
];

export function calculateScores(answers) {
  const rawScores = { JP: 0, IE: 0, FT: 0, SN: 0 };

  Object.entries(answers).forEach(([index, answer]) => {
    const question = QUESTIONS[parseInt(index)];
    if (!question) return;
    const option = question.options[answer];
    if (!option) return;
    rawScores.JP += option.scores.JP || 0;
    rawScores.IE += option.scores.IE || 0;
    rawScores.FT += option.scores.FT || 0;
    rawScores.SN += option.scores.SN || 0;
  });

  return rawScores;
}
