new Vue({
  el: '#exercise',
  data: {
    shouldHighlight: true,
    color: 'turquoise',
    aquamarine: 'aquamarine',
    salmon: 'salmon',
    size: 'size',
    shouldClass: true,
    style: '',
    progressSize: 0,
    done: ''
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.shouldHighlight = !vm.shouldHighlight;
      }, 1000);
    },
    startProgress: function() {
      this.done = '';
      this.progressSize = 0;
      var vm = this;
      setInterval(function() {
        if(vm.progressSize < 100) {
          vm.progressSize += 10;
        }
        else if(vm.progressSize === 100) {
          vm.done = 'Done!';
        }
      }, 1000);
    },
  },
  computed: {
    effectClasses: function() {
      return {
        highlight: this.shouldHighlight,
        shrink: !this.shouldHighlight
      }
    },
    changeSize: function() {
      if(this.shouldClass === "false") {
        return false;
      }
      else if(this.shouldClass === "true") {
        return true;
      }
    }
  }
});
