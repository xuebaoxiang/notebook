/* global np,
          $dlgFont */
np.menuData = [
    {
        title: '文件(F)',
        menuItems: [
            {
                title: '新建(N)',
                shortcut: 'Ctrl+N',
                enabled: true,
                handler: function () { window.console.log('新建(N) menu is clicked!'); }
            },
            {
                title: '打开(O)...',
                shortcut: 'Ctrl+O',
                enabled: true,
                handler: function () { window.console.log('打开(O) menu is clicked!'); }
            },
            {
                title: '保存(S)',
                shortcut: 'Ctrl+S',
                enabled: true,
                handler: function () { window.console.log('保存(S) menu is clicked!'); }
            },
            {
                title: '另存为(A)...',
                shortcut: '',
                enabled: true,
                handler: function () { window.console.log('另存为(A) menu is clicked!'); }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '页面设置(U)...',
                shortcut: '',
                enabled: true,
                handler: function () { window.console.log('页面设置(U) menu is clicked!'); }
            },
            {
                title: '打印(P)...',
                shortcut: 'Ctrl+P',
                enabled: true,
                handler: function () { window.console.log('打印(P) menu is clicked!'); }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '退出(X)',
                shortcut: '',
                enabled: true,
                handler: function () { window.console.log('退出(X) menu is clicked!'); }
            }
        ],
        width: '202px',
        left: '0px'
    },
    {
        title: '编辑(E)',
        menuItems: [
            {
                title: '撤销(U)',
                shortcut: 'Ctrl+Z',
                enabled: false,
                handler: function () { window.console.log('撤销(U) menu is clicked!'); }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '剪切(T)',
                shortcut: 'Ctrl+X',
                enabled: true,
                handler: function () { window.console.log('剪切(X) menu is clicked!'); }
            },
            {
                title: '复制(C)',
                shortcut: 'Ctrl+C',
                enabled: false,
                handler: function () { window.console.log('复制(C) menu is clicked!'); }
            },
            {
                title: '粘贴(P)',
                shortcut: 'Ctrl+V',
                enabled: false,
                handler: function () { window.console.log('粘贴(P) menu is clicked!'); }
            },
            {
                title: '删除(L)',
                shortcut: 'Del',
                enabled: false,
                handler: function () { window.console.log('删除(L) menu is clicked!'); }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '使用 Bing 搜索...',
                shortcut: 'Ctrl+E',
                enabled: true,
                handler: function () { window.console.log('Bing搜索被 is clicked!'); }
            },
            {
                title: '查找(F)...',
                shortcut: 'Ctrl+F',
                enabled: false,
                handler: function () { window.console.log('查找(F) menu is clicked!'); }
            },
            {
                title: '查找下一个(N)',
                shortcut: 'F3',
                enabled: false,
                handler: function () { window.console.log('查找下一个(N) menu is clicked!'); }
            },
            {
                title: '替换(R)...',
                shortcut: 'Ctrl+H',
                enabled: true,
                handler: function () { window.console.log('替换(R) menu is clicked!'); }
            },
            {
                title: '转到(G)...',
                shortcut: 'Ctrl+G',
                enabled: true,
                handler: function () {
                    window.console.log('转到(G) menu is clicked!');
                }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '全选(A)',
                shortcut: 'Ctrl+A',
                enabled: true,
                handler: function () { window.console.log('替换(R) menu is clicked!'); }
            },
            {
                title: '时间/日期(D)',
                shortcut: 'F5',
                enabled: true,
                handler: function () { window.console.log('时间/日期(D) menu is clicked!'); }
            },
        ],
        width: '218px',
        left: '52px'
    },
    {
        title: '格式(O)',
        menuItems: [
            {
                title: '自动换行(W)',
                shortcut: '',
                enabled: true,
                handler: function () {
                    window.console.log('自动换行(W) menu is clicked!');
                }
            },
            {
                title: '字体(F)...',
                shortcut: '',
                enabled: true,
                handler: function () {
                    $dlgFont.show({
                        family: np.fontFamily,
                        style: np.fontStyle,
                        size: np.fontSize,
                        okHandler: np.fontHandler
                    });
                }
            }
        ],
        width: '156px',
        left: '106px'
    },
    {
        title: '查看(V)',
        menuItems: [
            {
                title: '状态栏(S)',
                shortcut: '',
                enabled: true,
                handler: function () {
                    window.console.log('显示状态栏');
                }
            }
        ],
        width: '138px',
        left: '162px'
    },
    {
        title: '帮助(H)',
        menuItems: [
            {
                title: '查看帮助(H)',
                shortcut: '',
                enabled: true,
                handler: function () {
                    window.open('https://cn.bing.com/search?q=获取有关+windows+10+中的记事本的帮助', '_blank');
                }
            },
            {
                title: '关于记事本(A)',
                shortcut: '',
                enabled: true,
                handler: function () { }
            },
        ],
        width: '166px',
        left: '216px'
    }
];