import vue from 'vue'
import _ from 'lodash'

vue.component('todo', {
    template: '#todo-list',
    props: ["ins"]
});
vue.component('my-button', {
    template: '<button @click="increase">{{clickNum}}</button>',
    data: function () {
        return {
            clickNum: 0
        }
    },
    methods: {
        increase: function () {
            this.clickNum += 1;
            this.$emit('increment1')
        }
    }
});
vue.component('my-slot', {
    template: '<div>\
   <h2>I am the child title</h2>\
    <slot>\
        匿名slot\
    </slot>\
    <slot name="child-slot1">\
        child-slot1\
    </slot>\
    <slot name="child-slot2">\
        child-slot2\
    </slot>\
    </div>'
});
var vm = new vue({
    el: '#app',
    data: {
        messageSwitch: false,
        todoSwitch: false,
        nameSwitch: false,
        questionSwitch: true,

        message: 'hello me',
        seen: true,
        todos: [
            "wodetian",
            "word tian",
            "word ge"
        ],
        question: '',
        answer: '',
        firstName: '',
        lastName: '',
        classObject: {
            active: false
        },
        checkedArr: ['raul'],
        selectArr: ['AA'],
        totalClick: 0,
        currentView: 'v-model-example',
        woyoubugSSS:false
    },
    methods: {
        increaseEach: function () {
            this.totalClick += 1;
        },
        clickbutton: function () {
            alert(this.message);
        },
        getAnswer: _.debounce(function () {
            var ff = this;
            if (ff.question.indexOf('?') < 0) {
                ff.answer = 'the answer usually ends with "?"';
                return false;
            }
            ff.answer = 'thinking...';
            ff.answer = 'OK';
        }, 2000),
        animateTt:function(){
            alert(22);
            this.woyoubugSSS = !this.woyoubugSSS;
        }
    },
    computed: {
        fullName: {
            get: function () {
                if (this.lastName) {
                    return this.firstName + ' ' + this.lastName;
                } else {
                    return this.firstName;
                }
            }
            ,
            set: function (newValue) {
                const fullname = _.compact(newValue.split(' '));
                var l = fullname.length;
                if (l) {
                    this.firstName = fullname[0];
                    if (l > 1) {
                        this.lastName = fullname[1];
                    } else {
                        this.lastName = '';
                    }
                } else {
                    this.firstName = '';
                    this.lastName = '';
                }
            }
        }
    },
    watch: {
        question: function () {
            this.answer = 'typing...';
            this.getAnswer();
        }
    },
    filters: {
        messageFilter: function (val) {
            if (val == 'hello') {
                return val
            } else {
                return '';
            }
        }
    },
    components: {
        'v-model-example': {
            template: '<div>\
                <label :for="randomId">{{label}}</label>\
                <input :id="randomId" :value="value" @input="onInput" type="text">\
            </div>',
            props: ['value', 'label'],
            data: function () {
                return {
                    randomId: Math.random(),
                }
            },
            methods: {
                onInput: function (e) {
                    this.$emit('input', e.target.value);
                    // console.log(e)
                }
            }
        }
    }
});
vm.$watch('message', function (newVal, oldVal) {
    console.log(this.message);
});