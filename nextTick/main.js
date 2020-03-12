Vue.component('father', {
    props: {
        a: 1,
        b: 2
    },
    template: '<div>{{num}}</div>'
});


new Vue({
    el: '#demo',
    data: {
        a: 1,
    },
    mounted: function () {
        this.a = 2;
        console.log($('#demo').text());
        this.$nextTick(() => {
            console.log($('#demo').text())
        });
        this.a = 3;
    }
});



