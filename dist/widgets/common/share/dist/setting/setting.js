System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui","jimu-theme","jimu-ui/basic/list-tree","jimu-ui/advanced/resource-selector","jimu-ui/basic/color-picker"],(function(e,i){var a={},t={},s={},l={},n={},o={},c={};return{setters:[function(e){a.Immutable=e.Immutable,a.React=e.React,a.classNames=e.classNames,a.css=e.css,a.defaultMessages=e.defaultMessages,a.hooks=e.hooks,a.jsx=e.jsx,a.useIntl=e.useIntl,a.useTheme=e.useTheme},function(e){t.DirectionSelector=e.DirectionSelector,t.SettingRow=e.SettingRow,t.SettingSection=e.SettingSection},function(e){s.Button=e.Button,s.Icon=e.Icon,s.Label=e.Label,s.Select=e.Select,s.Switch=e.Switch,s.TextInput=e.TextInput,s.Tooltip=e.Tooltip,s.defaultMessages=e.defaultMessages},function(e){l.useTheme=e.useTheme},function(e){n.List=e.List,n.TreeItemActionType=e.TreeItemActionType},function(e){o.IconPicker=e.IconPicker},function(e){c.ThemeColorPicker=e.ThemeColorPicker}],execute:function(){e((()=>{var e={53943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#000" d="M4 2v2H2v10h10v-4h2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7-2 5 5-5 5V7c-5 0-6 2.5-7 5.5C3 9 3 3 11 3z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>'},10820:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16"><g clip-path="url(#a)"><path fill="#000" d="M3.5 2a.5.5 0 0 1 0 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3.5a.5.5 0 0 1 1 0V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12.65.146l3.008 3.009.346.345-3.354 3.354a.5.5 0 0 1-.707-.708L14.17 3.92c-5.933-.282-8.47 2.178-7.875 7.525a.5.5 0 0 1-.994.11c-.66-5.938 2.328-8.865 8.703-8.641l-2.06-2.06a.5.5 0 0 1-.058-.638l.058-.07a.5.5 0 0 1 .707 0"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16.004v16H0z"></path></clipPath></defs></svg>'},61989:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#000" fill-rule="evenodd" d="M13.5 0a2.5 2.5 0 1 1-1.741 4.294L5.938 7.39c.09.436.082.887-.023 1.32l5.62 3.245a2.5 2.5 0 1 1-.45.895L5.517 9.634a3 3 0 1 1 .054-3.182l5.62-2.989A2.5 2.5 0 0 1 13.5 0" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>'},890:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#000" fill-rule="evenodd" d="M13.5 0a2.5 2.5 0 1 1-1.741 4.294L5.938 7.39c.09.436.082.887-.023 1.32l5.62 3.245a2.5 2.5 0 1 1-.45.896L5.517 9.634a3 3 0 1 1 .054-3.182l5.62-2.989A2.5 2.5 0 0 1 13.5 0m0 12.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10.5-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>'},15499:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#000" d="M14 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1.988v2H2v7h12V7h-2.012V5zm-5.011 7h-2l.047-9H4.86l3.129-3 3 3h-2z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>'},64760:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#000" d="m16 6-6-6v4C1 4 0 11.5 0 16c1.5-3 5-8 10-8v4z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>'},69001:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#000" fill-rule="evenodd" d="m7.999 0 2.5 2.5h-2V7h-1V2.5h-2zm0 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m7.998-8.464V4H12.46l1.414 1.414L11.4 7.89l.707.707 2.475-2.475zM0 4h3.536L2.12 5.414 4.596 7.89l-.707.707-2.475-2.475L0 7.536z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>'},39214:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14.4 4.8A1.6 1.6 0 0 1 16 6.4v3.2a1.6 1.6 0 0 1-1.6 1.6H1.6A1.6 1.6 0 0 1 0 9.6V6.4a1.6 1.6 0 0 1 1.6-1.6zM3.152 6.115q-.21 0-.42.055-.21.056-.374.176a.873.873 0 0 0-.372.74q0 .234.076.392a.8.8 0 0 0 .202.267q.125.108.283.177.159.07.322.118l.107.035.202.068q.147.051.257.123a.474.474 0 0 1 .24.432.52.52 0 0 1-.223.441.7.7 0 0 1-.218.106.9.9 0 0 1-.677-.077.9.9 0 0 1-.322-.288l-.37.312q.197.244.497.37c.337.14.71.162 1.061.062q.214-.063.377-.19a.94.94 0 0 0 .36-.78q0-.255-.091-.42a.9.9 0 0 0-.235-.276 1.3 1.3 0 0 0-.322-.177 6 6 0 0 0-.35-.12l-.272-.094a1 1 0 0 1-.22-.11.5.5 0 0 1-.15-.159.45.45 0 0 1-.054-.232q0-.144.06-.248a.6.6 0 0 1 .156-.172.6.6 0 0 1 .213-.101.9.9 0 0 1 .622.057q.173.09.273.228l.336-.326a1.1 1.1 0 0 0-.417-.283 1.5 1.5 0 0 0-.557-.106m9.826 1.147q-.25 0-.466.09-.216.087-.374.246a1.1 1.1 0 0 0-.248.382c-.06.155-.09.32-.088.487q0 .27.09.49.093.22.25.377.158.155.38.242.22.086.48.086.301 0 .55-.112.246-.114.429-.353l-.317-.255a.8.8 0 0 1-.264.245.76.76 0 0 1-.398.101.75.75 0 0 1-.514-.2.71.71 0 0 1-.226-.491h1.805a1 1 0 0 0 .005-.077v-.077q0-.273-.077-.492a1.1 1.1 0 0 0-.218-.372.9.9 0 0 0-.346-.235 1.2 1.2 0 0 0-.453-.082m-4.47 0q-.277 0-.52.092c-.152.055-.292.14-.41.25l.24.287a.9.9 0 0 1 .285-.19.9.9 0 0 1 .363-.074q.254 0 .408.123.153.122.153.376v.063q-.288 0-.571.024a2 2 0 0 0-.509.103.9.9 0 0 0-.365.23.58.58 0 0 0-.139.41q0 .197.08.332.078.135.199.216.12.081.266.118t.28.036a.94.94 0 0 0 .45-.101.9.9 0 0 0 .314-.283h.014q0 .162.039.326h.408a1.3 1.3 0 0 1-.027-.209l-.004-.083-.003-.16v-.993q0-.187-.057-.35a.8.8 0 0 0-.173-.283.8.8 0 0 0-.295-.19 1.2 1.2 0 0 0-.425-.07m-3.24-1.29h-.45V9.6h.45V8.395q0-.34.174-.545a.55.55 0 0 1 .441-.204q.159 0 .257.058.099.058.156.154a.6.6 0 0 1 .08.22q.02.126.02.264V9.6h.452V8.19q0-.192-.05-.36a.77.77 0 0 0-.42-.492.9.9 0 0 0-.38-.075q-.245 0-.441.12a.7.7 0 0 0-.279.288h-.01zm6.082 1.29a.74.74 0 0 0-.415.123.8.8 0 0 0-.28.324h-.015l-.001-.082-.007-.175-.011-.127h-.427q.008.11.014.254l.002.069.003.166V9.6h.451V8.405q0-.144.038-.276a.7.7 0 0 1 .118-.233.58.58 0 0 1 .482-.22 1 1 0 0 1 .207.023l.019-.417a.7.7 0 0 0-.178-.02M9.027 8.515v.12a.7.7 0 0 1-.17.478q-.17.19-.487.19a1 1 0 0 1-.168-.017.4.4 0 0 1-.15-.06.34.34 0 0 1-.107-.11.3.3 0 0 1-.041-.169q0-.144.096-.23a.6.6 0 0 1 .242-.13q.147-.043.327-.057t.348-.015zm3.95-.897q.159 0 .277.05a.56.56 0 0 1 .316.34.9.9 0 0 1 .046.253h-1.354a.704.704 0 0 1 .444-.593.7.7 0 0 1 .272-.05" clip-rule="evenodd"></path></svg>'},67647:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M14.4 4.8A1.6 1.6 0 0 1 16 6.4v3.2a1.6 1.6 0 0 1-1.6 1.6H1.6A1.6 1.6 0 0 1 0 9.6V6.4a1.6 1.6 0 0 1 1.6-1.6zm0 .4H1.6A1.2 1.2 0 0 0 .4 6.4v3.2a1.2 1.2 0 0 0 1.2 1.2h12.8a1.2 1.2 0 0 0 1.2-1.2V6.4a1.2 1.2 0 0 0-1.2-1.2m-11.248.915q.297 0 .557.106t.417.283l-.336.326a.76.76 0 0 0-.273-.228.905.905 0 0 0-.622-.058.6.6 0 0 0-.213.102.6.6 0 0 0-.156.172.5.5 0 0 0-.06.248q0 .138.055.232a.5.5 0 0 0 .149.159q.093.065.22.11l.272.094q.173.053.35.12.178.067.322.177a.9.9 0 0 1 .235.276q.09.165.091.42 0 .265-.098.459a.94.94 0 0 1-.262.321 1.1 1.1 0 0 1-.377.19c-.35.1-.724.078-1.06-.062a1.23 1.23 0 0 1-.497-.37l.37-.312q.12.177.32.288c.207.114.45.141.678.077a.7.7 0 0 0 .218-.106.515.515 0 0 0 .223-.442.47.47 0 0 0-.24-.431 1.2 1.2 0 0 0-.257-.123l-.202-.068-.107-.035a3 3 0 0 1-.322-.118 1.1 1.1 0 0 1-.283-.177.8.8 0 0 1-.202-.267.9.9 0 0 1-.076-.393.87.87 0 0 1 .372-.74q.165-.12.374-.175.206-.054.42-.055m9.826 1.147q.249 0 .453.082a.9.9 0 0 1 .346.235q.141.155.218.372.077.219.077.492v.077a1 1 0 0 1-.005.077h-1.805a.714.714 0 0 0 .226.492c.14.13.323.2.514.199a.76.76 0 0 0 .398-.1.8.8 0 0 0 .264-.246l.317.255q-.183.24-.43.353a1.3 1.3 0 0 1-.55.112q-.258 0-.48-.086a1.1 1.1 0 0 1-.379-.242 1.1 1.1 0 0 1-.25-.377 1.3 1.3 0 0 1-.09-.49q0-.264.088-.487a1.12 1.12 0 0 1 .622-.629q.217-.089.466-.089m-4.47 0q.246 0 .426.07t.295.19q.115.12.173.283t.057.35v.994l.003.159.004.083q.008.128.027.209h-.408a1.4 1.4 0 0 1-.039-.326h-.014a.9.9 0 0 1-.314.283.94.94 0 0 1-.45.1q-.133 0-.28-.035a.8.8 0 0 1-.266-.118.7.7 0 0 1-.2-.216.64.64 0 0 1-.079-.331q0-.26.14-.41a.9.9 0 0 1 .364-.23 2 2 0 0 1 .509-.104q.284-.024.571-.024v-.063q0-.255-.153-.376a.64.64 0 0 0-.408-.123.9.9 0 0 0-.363.075.9.9 0 0 0-.285.19l-.24-.289c.118-.11.258-.194.41-.25q.253-.092.52-.09m-3.24-1.29V7.67h.01a.7.7 0 0 1 .279-.288.83.83 0 0 1 .441-.12q.221 0 .38.075a.77.77 0 0 1 .42.492q.05.168.05.36V9.6h-.451V8.342q0-.138-.022-.264a.6.6 0 0 0-.079-.22.44.44 0 0 0-.156-.154.5.5 0 0 0-.257-.058.55.55 0 0 0-.441.204q-.173.204-.173.545V9.6h-.451V5.971zm6.082 1.29a.7.7 0 0 1 .178.02l-.02.417a1 1 0 0 0-.206-.024.578.578 0 0 0-.482.22.7.7 0 0 0-.118.234 1 1 0 0 0-.038.276V9.6h-.451V7.814l-.003-.166-.002-.069a5 5 0 0 0-.014-.254h.427q.006.057.01.127l.008.175.001.082h.014a.8.8 0 0 1 .281-.324.74.74 0 0 1 .415-.123M9.027 8.515h-.11q-.168 0-.348.015t-.327.057a.6.6 0 0 0-.242.13.3.3 0 0 0-.096.23q0 .1.04.168a.34.34 0 0 0 .109.11.4.4 0 0 0 .149.06q.081.018.168.017.316 0 .487-.19a.7.7 0 0 0 .17-.477zm3.95-.897a.73.73 0 0 0-.491.187.7.7 0 0 0-.154.204.7.7 0 0 0-.07.252h1.354a.9.9 0 0 0-.046-.252.564.564 0 0 0-.317-.34.7.7 0 0 0-.275-.051"></path></svg>'},92055:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjkwIiB2aWV3Qm94PSIwIDAgMTA4IDkwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iOSIgeT0iOSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iMyIgZmlsbD0iIzUyNTI1MiIgc3Ryb2tlPSIjQThBOEE4IiBzdHJva2Utd2lkdGg9IjIiLz4NCjxyZWN0IHg9IjIzIiB5PSIyOCIgd2lkdGg9Ijc3IiBoZWlnaHQ9IjUxIiBmaWxsPSIjNTI1MjUyIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTk0IDQ1SDI5VjQ5SDk0VjQ1Wk03Ny41MDc1IDUzSDI5VjU3SDc3LjUwNzVWNTNaIiBmaWxsPSIjQThBOEE4Ii8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM3IDY5QzM3IDcxLjIwOTEgMzUuMjA5MSA3MyAzMyA3M0MzMC43OTA5IDczIDI5IDcxLjIwOTEgMjkgNjlDMjkgNjYuNzkwOSAzMC43OTA5IDY1IDMzIDY1QzM1LjIwOTEgNjUgMzcgNjYuNzkwOSAzNyA2OVpNNDkgNjlDNDkgNzEuMjA5MSA0Ny4yMDkxIDczIDQ1IDczQzQyLjc5MDkgNzMgNDEgNzEuMjA5MSA0MSA2OUM0MSA2Ni43OTA5IDQyLjc5MDkgNjUgNDUgNjVDNDcuMjA5MSA2NSA0OSA2Ni43OTA5IDQ5IDY5Wk01NyA3M0M1OS4yMDkxIDczIDYxIDcxLjIwOTEgNjEgNjlDNjEgNjYuNzkwOSA1OS4yMDkxIDY1IDU3IDY1QzU0Ljc5MDkgNjUgNTMgNjYuNzkwOSA1MyA2OUM1MyA3MS4yMDkxIDU0Ljc5MDkgNzMgNTcgNzNaTTczIDY5QzczIDcxLjIwOTEgNzEuMjA5MSA3MyA2OSA3M0M2Ni43OTA5IDczIDY1IDcxLjIwOTEgNjUgNjlDNjUgNjYuNzkwOSA2Ni43OTA5IDY1IDY5IDY1QzcxLjIwOTEgNjUgNzMgNjYuNzkwOSA3MyA2OVpNODEgNzNDODMuMjA5MSA3MyA4NSA3MS4yMDkxIDg1IDY5Qzg1IDY2Ljc5MDkgODMuMjA5MSA2NSA4MSA2NUM3OC43OTA5IDY1IDc3IDY2Ljc5MDkgNzcgNjlDNzcgNzEuMjA5MSA3OC43OTA5IDczIDgxIDczWiIgZmlsbD0iI0E4QThBOCIvPg0KPHBhdGggZD0iTTkzLjM3MjcgMzVMOTUuNDIyOCAzNy4wNTAxQzk1LjUyNTcgMzcuMTUzIDk1LjUyNTcgMzcuMzE5OSA5NS40MjI4IDM3LjQyMjhDOTUuMzE5OSAzNy41MjU3IDk1LjE1MyAzNy41MjU3IDk1LjA1MDEgMzcuNDIyOEw5MyAzNS4zNzI3TDkwLjk0OTkgMzcuNDIyOEM5MC44NDcgMzcuNTI1NyA5MC42ODAxIDM3LjUyNTcgOTAuNTc3MiAzNy40MjI4QzkwLjQ3NDMgMzcuMzE5OSA5MC40NzQzIDM3LjE1MyA5MC41NzcyIDM3LjA1MDFMOTIuNjI3MyAzNUw5MC41NzcyIDMyLjk0OTlDOTAuNDc0MyAzMi44NDcgOTAuNDc0MyAzMi42ODAxIDkwLjU3NzIgMzIuNTc3MkM5MC42ODAxIDMyLjQ3NDMgOTAuODQ3IDMyLjQ3NDMgOTAuOTQ5OSAzMi41NzcyTDkzIDM0LjYyNzNMOTUuMDUwMSAzMi41NzcyQzk1LjE1MyAzMi40NzQzIDk1LjMxOTkgMzIuNDc0MyA5NS40MjI4IDMyLjU3NzJDOTUuNTI1NyAzMi42ODAxIDk1LjUyNTcgMzIuODQ3IDk1LjQyMjggMzIuOTQ5OUw5My4zNzI3IDM1WiIgZmlsbD0iI0M1QzVDNSIgc3Ryb2tlPSIjQzVDNUM1Ii8+DQo8L3N2Zz4NCg=="},86726:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA3IiBoZWlnaHQ9IjkwIiB2aWV3Qm94PSIwIDAgMTA3IDkwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iODEiIHk9IjM2IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSI0IiBmaWxsPSIjNTI1MjUyIi8+DQo8cmVjdCB4PSI1NyIgeT0iMzYiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgcng9IjQiIGZpbGw9IiM1MjUyNTIiLz4NCjxyZWN0IHg9IjM0IiB5PSIzNyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iMyIgZmlsbD0iIzUyNTI1MiIgc3Ryb2tlPSIjQThBOEE4IiBzdHJva2Utd2lkdGg9IjIiLz4NCjxyZWN0IHg9IjkiIHk9IjM2IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSI0IiBmaWxsPSIjNTI1MjUyIi8+DQo8L3N2Zz4="},79244:e=>{"use strict";e.exports=a},1888:e=>{"use strict";e.exports=l},14321:e=>{"use strict";e.exports=s},35809:e=>{"use strict";e.exports=o},79298:e=>{"use strict";e.exports=t},54337:e=>{"use strict";e.exports=c},98640:e=>{"use strict";e.exports=n}},i={};function g(a){var t=i[a];if(void 0!==t)return t.exports;var s=i[a]={exports:{}};return e[a](s,s.exports,g),s.exports}g.d=(e,i)=>{for(var a in i)g.o(i,a)&&!g.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})},g.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.p="";var r={};return g.p=window.jimuConfig.baseUrl,(()=>{"use strict";g.r(r),g.d(r,{__set_webpack_public_path__:()=>S,default:()=>w});var e,i,a,t,s,l,n,o=g(79244),c=g(79298),d=g(14321);!function(e){e.Popup="POPUP",e.Inline="INLINE"}(e||(e={})),function(e){e.Horizontal="HORIZONTAL",e.Vertical="VERTICAL"}(i||(i={})),function(e){e.Small="sm",e.Medium="default",e.Large="lg"}(a||(a={})),function(e){e.Default="default",e.White="white",e.Black="black"}(t||(t={})),function(e){e[e.Small=16]="Small",e[e.Medium=24]="Medium",e[e.Large=32]="Large"}(s||(s={})),function(e){e[e.Rad00=0]="Rad00",e.Rad20="5px",e.Rad50="50%"}(l||(l={})),function(e){e.Embed="embed",e.QRcode="qrcode",e.Sharelink="sharelink",e.Email="email",e.Facebook="facebook",e.Twitter="twitter",e.Pinterest="pinterest",e.Linkedin="linkedin"}(n||(n={}));n.Embed,n.QRcode,n.Sharelink;var u;!function(e){e.UrlIsTooLong="urlIsTooLong",e.NetworkFailed="networkFailed"}(u||(u={}));var M=g(1888);function m(e){const i=e.ref.palette.neutral[300];return o.css`
    .ui-mode-card-chooser {

      .ui-mode-card-wapper {
        margin-right: 10px;
        flex: 1;
      }
      .ui-mode-card-wapper:last-child {
        margin-right: 0px;
      }

      .ui-mode-card {
        background: ${i};
        border: ${2}px solid transparent;
        margin: 0 0 0.5rem 0;

        .jimu-icon {
          margin: 0
        }
      }
      .ui-mode-card.active {
        border: ${2}px solid #00D8ED;
        background-color: ${i} !important;
      }
      .ui-mode-label {
        overflow: hidden;
        text-align: center;
      }
    }
  `}const p={shareType:"Share type",popup:"Popup",inline:"Inline",popupDes:"Popup sharing URL and options.",inlineDes:"Tile sharing options inline.",shareOption:"Share options",design:"Design",iconColor:"Icon color",hideMedia:"Hide media label",showMedia:"Show media label",size:"Size",white:"White",black:"Black",includeOrgName:"Include your organization's short name in the share link"},I=g(92055),h=g(86726),f=o.React.memo((i=>{const a=o.hooks.useTranslation(p,d.defaultMessages),t=(0,M.useTheme)(),s=a("shareType"),l=a("popup"),n=a("inline"),g=a("popupDes"),r=a("inlineDes");return(0,o.jsx)(c.SettingSection,{title:s,role:"group","aria-label":s,css:m(t)},(0,o.jsx)(c.SettingRow,null,(0,o.jsx)("div",{className:"d-flex w-100 justify-content-between align-items-start ui-mode-card-chooser"},(0,o.jsx)(d.Label,{className:"d-flex flex-column ui-mode-card-wapper"},(0,o.jsx)(d.Tooltip,{key:e.Popup,title:g,placement:"bottom"},(0,o.jsx)(d.Button,{icon:!0,className:(0,o.classNames)("w-100 ui-mode-card",{active:i.uiMode===e.Popup}),onClick:()=>{i.onChanged(e.Popup)}},(0,o.jsx)(d.Icon,{width:92,height:76,icon:I,autoFlip:!0}))),(0,o.jsx)("div",{className:"mx-1 text-break ui-mode-label"},l)),(0,o.jsx)(d.Label,{className:"d-flex flex-column ui-mode-card-wapper"},(0,o.jsx)(d.Tooltip,{key:e.Inline,title:r,placement:"bottom"},(0,o.jsx)(d.Button,{icon:!0,className:(0,o.classNames)("w-100 ui-mode-card",{active:i.uiMode===e.Inline}),onClick:()=>{i.onChanged(e.Inline)}},(0,o.jsx)(d.Icon,{width:92,height:76,icon:h,autoFlip:!0}))),(0,o.jsx)("div",{className:"mx-1 text-break ui-mode-label"},n)))))}));var j=g(98640);const D=o.React.memo((e=>{const i=o.hooks.useTranslation(d.defaultMessages),[a,t]=o.React.useState();return o.React.useEffect((()=>{var a;const s=null===(a=e.items)||void 0===a?void 0:a.map((e=>({itemKey:e.id,itemStateTitle:i(e.id),itemStateChecked:e.enable})));t(s)}),[e.items,i]),(0,o.jsx)("div",{css:o.css`
      font-size: 13px;
      font-weight: lighter;

      /* List */
      .jimu-tree {
        .jimu-tree-item {
          .jimu-tree-item__content {
            .jimu-tree-item__body {
              background-color: transparent;

              .jimu-tree-item__main-line {
                padding: 0.25rem 0;
              }
              .jimu-tree-item__title-text {
                -webkit-line-clamp: 1;
                word-break: keep-all;
              }
            }
          }
        }
      }
    `,"aria-label":e.title},(0,o.jsx)(j.List,{className:"w-100 py-1 pl-0 pr-1",itemsJson:a,isMultiSelection:!0,dndEnabled:!0,disableDoubleClickTitle:!0,onUpdateItem:(i,a)=>{const[,t]=i.itemJsons,s=[...t],l=[];i.updateType===j.TreeItemActionType.HandleCheckboxChanged?e.items.forEach((e=>{s.forEach((i=>{const a=i.itemKey;e.id===a&&(e=e.setIn(["enable"],i.itemStateChecked),l.push(e))}))})):i.updateType===j.TreeItemActionType.HandleDidDrop&&s.forEach((i=>{const a=i.itemKey,t=e.items.findIndex((e=>e.id===a));t>-1&&l.push(e.items[t])})),e.onItemsChange((0,o.Immutable)(l))}}))}));var x=g(35809);const N=g(53943),z=o.React.memo((e=>{const i=(0,o.useIntl)(),a=(0,o.useTheme)(),t=(e=>(0,o.Immutable)({svg:N,properties:{color:e.ref.palette.neutral[700],size:s.Small,inlineSvg:!0}}))(a),l=[{icon:g(53943),name:i.formatMessage({id:"share",defaultMessage:d.defaultMessages.share})},{icon:g(10820),name:i.formatMessage({id:"share2",defaultMessage:d.defaultMessages.share2})},{icon:g(61989),name:i.formatMessage({id:"share3",defaultMessage:d.defaultMessages.share3})},{icon:g(890),name:i.formatMessage({id:"share4",defaultMessage:d.defaultMessages.share4})},{icon:g(15499),name:i.formatMessage({id:"share5",defaultMessage:d.defaultMessages.share5})},{icon:g(64760),name:i.formatMessage({id:"share6",defaultMessage:d.defaultMessages.share6})},{icon:g(69001),name:i.formatMessage({id:"share7",defaultMessage:d.defaultMessages.share7})},{icon:g(39214),name:i.formatMessage({id:"share8",defaultMessage:d.defaultMessages.share8})},{icon:g(67647),name:i.formatMessage({id:"share9",defaultMessage:d.defaultMessages.share9})}],n=(()=>{const e=[];for(let i=0,s=l.length;i<s;i++)e.push({svg:l[i].icon,properties:{filename:l[i].name,originalName:l[i].name,color:a.ref.palette.neutral[700],size:t.properties.size,inlineSvg:t.properties.inlineSvg}});return e})(),r=e.popupIcon?e.popupIcon:n[0],u=i.formatMessage({id:"icon",defaultMessage:o.defaultMessages.icon});return(0,o.jsx)(c.SettingRow,null,(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center w-100 align-items-start"},(0,o.jsx)("h6",{className:"icon-tip",title:u},u),(0,o.jsx)(x.IconPicker,{configurableOption:"all",groups:"none",hideRemove:!0,"aria-label":u,icon:r,customIcons:n,previewOptions:{size:!1,color:!0},onChange:e.onIconChange,setButtonUseColor:!1})))}));var v=g(54337);const w=s=>{const l=e=>{s.onSettingChange({id:s.id,config:s.config.setIn(["popup","icon"],e)})},n=e=>{let i=(0,o.Immutable)(s.config.popup);i=i.set("items",e),s.onSettingChange({id:s.id,config:s.config.set("popup",i)})},g=e=>{const i=e.target.value;let a=(0,o.Immutable)(s.config.popup);a=a.set("tooltip",i),s.onSettingChange({id:s.id,config:s.config.set("popup",a)})},r=e=>{let i=(0,o.Immutable)(s.config.inline);i=i.set("items",e),s.onSettingChange({id:s.id,config:s.config.set("inline",i)})},u=e=>{const a=e?i.Vertical:i.Horizontal;s.onSettingChange({id:s.id,config:s.config.setIn(["inline","design","direction"],a)})},M=e=>{const i=e.target.checked;s.onSettingChange({id:s.id,config:s.config.setIn(["inline","design","hideLabel"],!i)})},m=e=>{s.onSettingChange({id:s.id,config:s.config.setIn(["inline","design","labelColor"],e)})},I=e=>{const i=e.target.value;s.onSettingChange({id:s.id,config:s.config.setIn(["inline","design","iconColor"],i)})},h=e=>{const i=e.target.value;s.onSettingChange({id:s.id,config:s.config.setIn(["inline","design","size"],i)})};let j=null;const x=s.config.uiMode;return x===e.Popup?j=(()=>{let e=null;const{theme:i,intl:a}=s,t=s.config.popup.items,r=s.intl.formatMessage({id:"shareOption",defaultMessage:p.shareOption}),u=s.intl.formatMessage({id:"tooltip",defaultMessage:d.defaultMessages.tooltip});return e=(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)(c.SettingSection,null,(0,o.jsx)(z,{popupIcon:s.config.popup.icon,onIconChange:l})),(0,o.jsx)(c.SettingSection,{title:r,"aria-label":r,role:"group"},(0,o.jsx)(D,{items:t,theme:i,intl:a,title:r,uiMode:s.config.uiMode,onItemsChange:n})),(0,o.jsx)(c.SettingSection,null,(0,o.jsx)(c.SettingRow,{label:u}),(0,o.jsx)(c.SettingRow,null,(0,o.jsx)(d.TextInput,{className:"w-100","aria-label":u,size:"sm",value:s.config.popup.tooltip,onChange:g})))),e})():x===e.Inline&&(j=(()=>{let e=null;const l=s.config.inline.design.direction===i.Vertical,{theme:n,intl:g}=s,f=s.config.inline.items,j=s.intl.formatMessage({id:"shareOption",defaultMessage:p.shareOption}),x=s.intl.formatMessage({id:"design",defaultMessage:p.design}),N=s.intl.formatMessage({id:"direction",defaultMessage:d.defaultMessages.direction}),z=s.intl.formatMessage({id:"showMedia",defaultMessage:p.showMedia}),w=s.intl.formatMessage({id:"size",defaultMessage:p.size}),S=s.intl.formatMessage({id:"small",defaultMessage:o.defaultMessages.small}),T=s.intl.formatMessage({id:"medium",defaultMessage:o.defaultMessages.medium}),y=s.intl.formatMessage({id:"large",defaultMessage:o.defaultMessages.large}),k=s.intl.formatMessage({id:"iconColor",defaultMessage:p.iconColor}),b=s.intl.formatMessage({id:"default",defaultMessage:d.defaultMessages.default}),A=s.intl.formatMessage({id:"white",defaultMessage:p.white}),O=s.intl.formatMessage({id:"black",defaultMessage:p.black}),L=s.intl.formatMessage({id:"font",defaultMessage:d.defaultMessages.font});return e=(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)(c.SettingSection,{title:j,"aria-label":j,role:"group"},(0,o.jsx)(D,{items:f,theme:n,intl:g,title:j,uiMode:s.config.uiMode,onItemsChange:r})),(0,o.jsx)(c.SettingSection,{title:x,"aria-label":x,role:"group"},(0,o.jsx)(c.SettingRow,{label:N},(0,o.jsx)(c.DirectionSelector,{vertical:l,onChange:u,"aria-label":N})),(0,o.jsx)(c.SettingRow,{label:k},(0,o.jsx)(d.Select,{value:s.config.inline.design.iconColor||t.Default,onChange:I,size:"sm",className:"w-50","aria-label":k},(0,o.jsx)("option",{value:t.Default},b),(0,o.jsx)("option",{value:t.White},A),(0,o.jsx)("option",{value:t.Black},O))),(0,o.jsx)(c.SettingRow,{label:w},(0,o.jsx)(d.Select,{value:s.config.inline.design.size,onChange:h,size:"sm",className:"w-50","aria-label":w},(0,o.jsx)("option",{value:a.Small},S),(0,o.jsx)("option",{value:a.Medium},T),(0,o.jsx)("option",{value:a.Large},y))),(0,o.jsx)(c.SettingRow,{label:z},(0,o.jsx)(d.Switch,{checked:!s.config.inline.design.hideLabel,onChange:M,"aria-label":z})),!s.config.inline.design.hideLabel&&(0,o.jsx)(c.SettingRow,{label:L},(0,o.jsx)(v.ThemeColorPicker,{className:"box-color ml-auto",specificTheme:s.theme2,"aria-label":L,value:s.config.inline.design.labelColor,onChange:m})))),e})()),(0,o.jsx)("div",{css:(s.theme,o.css`
      font-size: 13px;
      font-weight: lighter;

      .jimu-widget-setting--section {
        padding: 18px 16px;
      }

      .ui-mode-setting {
        display: flex;
      }

      .icon-tip {
        margin: 0;
        color: #c5c5c5;
        font-weight: 400;
      }
  `),className:"widget-setting-menu jimu-widget-setting"},(0,o.jsx)(f,{uiMode:x,onChanged:e=>{s.onSettingChange({id:s.id,config:s.config.set("uiMode",e)})},id:s.id}),j)};function S(e){g.p=e}})(),r})())}}}));