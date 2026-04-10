export const NMTI_TYPES = {
  IJFS: {
    code: 'IJFS',
    name: '996死者卷王',
    description: '天天加班，活全干了，锅全背了，半夜还在复盘自己哪里做得不好。你以为你在建设公司，其实你只是在建设老板的别墅。',
    quadrant: 'J',
    traits: ['内耗', '卷', '付出', '务实']
  },
  IJFN: {
    code: 'IJFN',
    name: '仰望星空的拉磨牛',
    description: '一边拼命干活，一边在脑海里幻想明天就能辞职去大理开民宿。身体被困在工位，灵魂早已浪迹天涯。',
    quadrant: 'J',
    traits: ['内耗', '卷', '付出', '幻想']
  },
  IJTS: {
    code: 'IJTS',
    name: '无情的搬砖机器',
    description: '不带感情地疯狂输出代码/PPT，效率极高，没有废话。不怕卷王多努力，就怕卷王有理智。',
    quadrant: 'J',
    traits: ['内耗', '卷', '理智', '务实']
  },
  IJTN: {
    code: 'IJTN',
    name: '战略性焦虑总监',
    description: '干活很猛但极度理智，天天盯着大盘数据焦虑，随时准备跳槽或创业。焦虑是他前进的动力，也是他的枷锁。',
    quadrant: 'J',
    traits: ['内耗', '卷', '理智', '幻想']
  },
  IEFS: {
    code: 'IEFS',
    name: '带薪社交真卷王',
    description: '白天在公司到处开会、social、揽活，晚上回家疯狂补进度。社交是他的武器，卷是他的本能。',
    quadrant: 'J',
    traits: ['外放', '卷', '付出', '务实']
  },
  IEFN: {
    code: 'IEFN',
    name: '画大饼型气氛组',
    description: '在团队里极其活跃，天天给大家打鸡血描绘美好未来，自己也深信不疑并带头卷。相信相信的力量。',
    quadrant: 'J',
    traits: ['外放', '卷', '付出', '幻想']
  },
  IETS: {
    code: 'IETS',
    name: '向上管理大师',
    description: '卷都在明面上，干了一分活能让老板看到十分，职场晋升火箭。懂人性者懂晋升。',
    quadrant: 'J',
    traits: ['外放', '卷', '理智', '务实']
  },
  IETN: {
    code: 'IETN',
    name: '职场PPT仙人',
    description: '最擅长用极度理智的逻辑，包装最虚无缥缈的互联网黑话。把稻草说成金条是他的核心技能。',
    quadrant: 'J',
    traits: ['外放', '卷', '理智', '幻想']
  },
  PJFS: {
    code: 'PJFS',
    name: '战术性假忙牛',
    description: '其实没干多少活，但为了对得起工资，每天在工位上装作很忙，内心很愧疚。演技派打工人。',
    quadrant: 'P',
    traits: ['内耗', '摸鱼', '付出', '务实']
  },
  PJFN: {
    code: 'PJFN',
    name: '精神内耗型咸鱼',
    description: '想躺平又怕被裁，天天在工位上刷手机看搞笑视频，看完又觉得人生虚无。卷不动又躺不平的典型。',
    quadrant: 'P',
    traits: ['内耗', '摸鱼', '付出', '幻想']
  },
  PJTS: {
    code: 'PJTS',
    name: '踩点下班计算器',
    description: '活干完就撤，绝不多干一秒。绩效永远卡在刚刚合格的线上，性价比之王。精确到秒的时间管理大师。',
    quadrant: 'P',
    traits: ['内耗', '摸鱼', '理智', '务实']
  },
  PJTN: {
    code: 'PJTN',
    name: '赛博修行居士',
    description: '已经看透了职场的本质是草台班子，肉体在工位，灵魂已经得道升仙。看透不说透，继续混社保。',
    quadrant: 'P',
    traits: ['内耗', '摸鱼', '理智', '幻想']
  },
  PEFS: {
    code: 'PEFS',
    name: '团建第一名',
    description: '工作表现平平，但每次公司点下午茶、搞团建、聊八卦，永远冲在最前面。奶茶比代码更懂他的人际需求。',
    quadrant: 'P',
    traits: ['外放', '摸鱼', '付出', '务实']
  },
  PEFN: {
    code: 'PEFN',
    name: '办公室散财童子',
    description: '自己都没钱了还天天请同事喝奶茶，乐天派，摸着鱼畅想全员暴富。花钱买社交，穷但快乐着。',
    quadrant: 'P',
    traits: ['外放', '摸鱼', '付出', '幻想']
  },
  PETS: {
    code: 'PETS',
    name: '精准摸鱼学家',
    description: '不仅自己摸鱼，还能理智地教同事如何避开老板视线摸鱼，且绝不留下把柄。摸鱼界的理论家和实践家。',
    quadrant: 'P',
    traits: ['外放', '摸鱼', '理智', '务实']
  },
  PETN: {
    code: 'PETN',
    name: '终极快乐神仙',
    description: '无敌的存在。老板PUA根本听不进，绩效垫底也不在乎，每天来上班就是为了给人生找个背景音。无欲则刚，无敌是多么寂寞。',
    quadrant: 'P',
    traits: ['外放', '摸鱼', '理智', '幻想']
  }
};

export const DEFAULT_NORM = {
  JP: 2,
  IE: 1,
  FT: 0,
  SN: 2
};

export function calculateNMTI(rawScores) {
  const { JP, IE, FT, SN } = rawScores;

  const deviations = {
    JP: JP - DEFAULT_NORM.JP,
    IE: IE - DEFAULT_NORM.IE,
    FT: FT - DEFAULT_NORM.FT,
    SN: SN - DEFAULT_NORM.SN
  };

  const typeScores = Object.entries(NMTI_TYPES).map(([code, typeInfo]) => {
    const expectedDeviations = {
      JP: code[1] === 'J' ? 1 : -1,
      IE: code[0] === 'I' ? -1 : 1,
      FT: code[2] === 'F' ? 1 : -1,
      SN: code[3] === 'S' ? 1 : -1
    };

    const matchScore = Math.abs(deviations.JP - expectedDeviations.JP) +
                      Math.abs(deviations.IE - expectedDeviations.IE) +
                      Math.abs(deviations.FT - expectedDeviations.FT) +
                      Math.abs(deviations.SN - expectedDeviations.SN);

    return { code, typeInfo, matchScore };
  });

  const bestMatch = typeScores.reduce((best, current) => 
    current.matchScore < best.matchScore ? current : best
  );

  return {
    code: bestMatch.code,
    type: bestMatch.typeInfo,
    rawScores,
    deviations
  };
}

export function getEvolutionPath(result) {
  const { code, deviations } = result;
  const path = [];

  const evolutionActions = {
    JP: {
      J: { action: '少回一个"收到"', target: 'P' },
      P: { action: '多回一个"收到"', target: 'J' }
    },
    IE: {
      I: { action: '少一点精神内耗', target: 'E' },
      E: { action: '多一点社交互动', target: 'I' }
    },
    FT: {
      F: { action: '少当一次大冤种', target: 'T' },
      T: { action: '多一点人情味', target: 'F' }
    },
    SN: {
      S: { action: '少一点务实精神', target: 'N' },
      N: { action: '多一点脚踏实地', target: 'S' }
    }
  };

  Object.entries(deviations).forEach(([dimension, deviation]) => {
    const currentType = dimension === 'JP' ? code[1] : 
                       dimension === 'IE' ? code[0] :
                       dimension === 'FT' ? code[2] : code[3];
    
    const actionConfig = evolutionActions[dimension][currentType];
    
    if (actionConfig && Math.abs(deviation) >= 1) {
      path.push({
        dimension,
        action: actionConfig.action,
        from: currentType,
        to: actionConfig.target,
        currentScore: deviation + DEFAULT_NORM[dimension],
        targetScore: DEFAULT_NORM[dimension]
      });
    }
  });

  return path;
}
