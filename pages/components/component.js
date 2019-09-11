Component({
    behaviors: [],
    properties: {
        myProperty2: String
    },
    data: {
        myDataTest: 'waldon'
    },
    lifetimes: {
        attached () {
            console.info(`我是lifetime中的attached`)
        }
    },
    attached () {
        console.info(`我是函数中的attached`)
    },
    pageLifetimes: { // 组件所在的生命周期函数
        show () {
            console.info(`我是pageLifetimes中的show`)
        }
    },
    methods: {
        changeBtnData () {
            this.setData({
                myDataTest: Math.random()
            })
        }
    }
})