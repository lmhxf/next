export const goods = [
  {
    type: 'recommend',
    data: [
      {
        id: '01', prod: '68', imgFile: 'recommend/01', name: '新款1315超高压航空合金电击棍', price: '340',
        detail: {
          banner: ['recommend/01/banner1', 'recommend/01/banner2'],
          goodId: '1315', // 型号
          goodImg: 'recommend/01/1315',
          buyPrice:'510',   //市场价
          cash: 9999,   // 库存
          detailImg: ['recommend/01/1315-1', 'recommend/01/1315-2', 'recommend/01/1315-3', 'recommend/01/1315-4', 'recommend/01/1315-5']
        }
      },
      {
        id: '02', prod: '91', imgFile: 'recommend/02', name: '新款金刚狼牙007高压电棍', price: '300',
        detail: {
          banner: ['recommend/02/banner1', 'recommend/02/banner2', 'recommend/02/banner3', 'recommend/02/banner4', 'recommend/02/banner5'],
          goodId: '07',
          goodImg: 'recommend/02/007',
          buyPrice: '360',
          cash: 9999,
          detailImg: ['recommend/02/007-01', 'recommend/02/007-02', 'recommend/02/007-03']
        }
      },
      {
        id: '03', prod: '90', imgFile: 'recommend/03', name: '8810可调强光高压电击棍', price: '240',
        detail: {
          banner: ['recommend/03/banner1', 'recommend/03/banner2'],
          goodId: '8810',
          goodImg: 'recommend/03/8810',
          buyPrice: '360',
          cash: 9999,
          detailImg: ['recommend/03/8810-1', 'recommend/03/8810-2', 'recommend/03/8810-3', 'recommend/03/8810-4', 'recommend/03/8810-5']
        }
      },
      {
        id: '04', prod: '89', imgFile: 'recommend/04', name: '泰瑟远程电击器（5米）', price: '450',
        detail: {
          banner: ['recommend/04/banner1', 'recommend/04/banner2'],
          goodId: 'yc',
          goodImg: 'recommend/04/yc',
          buyPrice: '675',
          cash: 9999,
          detailImg: ['recommend/04/yc-01', 'recommend/04/yc-02', 'recommend/04/yc-03', 'recommend/04/yc-04', 'recommend/04/yc-05.gif']
        }
      },
    ]
  },{
    type: 'carries',
    data: [
      {
        id: '01', prod: '82', imgFile: 'carries/01', name: 'X5强光钛合金高压电击棍', price: '280',
        detail: {
          banner: ['recommend/04/banner1', 'recommend/04/banner2'],
          goodId: 'yc',
          goodImg: 'recommend/04/yc',
          buyPrice: '675',
          cash: 9999,
          detailImg: ['recommend/04/yc-01', 'recommend/04/yc-02', 'recommend/04/yc-03', 'recommend/04/yc-04', 'recommend/04/yc-05.gif']
        }
      },
      {id: '02', prod: '93', imgFile: 'carries/02', name: '特战反恐高压迷你电击棍', price: '280'},
      {id: '03', prod: '87', imgFile: 'carries/03', name: '1128掌中宝高压电击器', price: '220'},
      {id: '04', prod: '80', imgFile: 'carries/04', name: '大飞鹰尖刺头高压电击器', price: '320'},
      {id: '05', prod: '79', imgFile: 'carries/05', name: '1101款小型电击棍', price: '160'},
      {id: '06', prod: '76', imgFile: 'carries/06', name: 'X战警军工防滑高压电棍', price: '380'},
      {id: '07', prod: '82', imgFile: 'carries/07', name: 'X5强光钛合金高压电击棍', price: '280'},
    ]
  },
  {
    type: 'long',
    data: [
      {id: '01', prod: '70', imgFile: 'long/01', name: '新款X10自由伸缩高压电击棍', price: '340'},
      {id: '02', prod: '72', imgFile: 'long/02', name: '经典X8击打高压电击棍', price: '280'},
      {id: '03', prod: '74', imgFile: 'long/03', name: '1139无声电击高压电击棒', price: '280'},
      {id: '04', prod: '70', imgFile: 'long/04', name: '新款X10自由伸缩高压电击棍', price: '340'},
      {id: '05', prod: '75', imgFile: 'long/05', name: '939消音高压电击棒', price: '260'},
      {id: '06', prod: '71', imgFile: 'long/06', name: '1118B狼牙击打高压电棍', price: '300'},
      {id: '07', prod: '73', imgFile: 'long/07', name: '303风火轮超长高压电击棒', price: '460'},
    ]
  },
  {
    type: 'female',
    data: [
      {id: '01', prod: '67', imgFile: 'female/01', name: 'X6款高压电击器', price: '260'},
      {id: '02', prod: '52', imgFile: 'female/02', name: '910迷你小钢炮高压电棍', price: '220'},
      {id: '03', prod: '66', imgFile: 'female/03', name: '女士口红防狼电击棍', price: '160'},
      {id: '04', prod: '54', imgFile: 'female/04', name: 'A1移动电源高压电击器', price: '260'},
      {id: '05', prod: '60', imgFile: 'female/05', name: '磨砂口红款女士防狼喷雾', price: '80'},
      {id: '06', prod: '67', imgFile: 'female/06', name: 'X6款高压电击器', price: '260'},
      {id: '07', prod: '63', imgFile: 'female/07', name: 'RY防狼喷雾电影心花怒放女主同款', price: '108'},
    ]
  },
  {
    type: 'atomization',
    data: [
      {id: '01', prod: '56', imgFile: 'atomization/01', name: '007红色闪电水柱喷射大容量防狼喷雾', price: '168'},
      {id: '02', prod: '94', imgFile: 'atomization/02', name: '警用超大容量防狼防暴喷雾', price: '108'},
      {id: '03', prod: '64', imgFile: 'atomization/03', name: '大容量保安型防暴喷雾', price: '80'},
      {id: '04', prod: '61', imgFile: 'atomization/04', name: '原装警用水柱型大容量防狼喷雾', price: '138'},
      {id: '05', prod: '59', imgFile: 'atomization/05', name: 'NATO进口款大容量防狼喷雾', price: '120'},
      {id: '06', prod: '58', imgFile: 'atomization/06', name: '美国进口CSA大容量防狼喷雾', price: '150'},
      {id: '07', prod: '69', imgFile: 'atomization/07', name: '进口迷你body防狼喷雾', price: '118'},
    ]
  }
]
